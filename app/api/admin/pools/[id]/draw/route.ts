import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Force rebuild
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // 1. Get Pool and Entries
    const pool = await prisma.lotteryPool.findUnique({
      where: { id },
      include: {
        entries: true,
      },
    });

    if (!pool) {
      return NextResponse.json({ error: "Pool not found" }, { status: 404 });
    }

    if (pool.status === "DRAWN" || pool.status === "CANCELLED") {
      return NextResponse.json({ error: "Pool already drawn or cancelled" }, { status: 400 });
    }

    if (pool.entries.length === 0) {
      return NextResponse.json({ error: "No entries in this pool" }, { status: 400 });
    }

    // 2. Select Random Winner
    const randomIndex = Math.floor(Math.random() * pool.entries.length);
    const winningEntry = pool.entries[randomIndex];

    // 3. Transaction: Create Winner & Update Pool
    const result = await prisma.$transaction(async (tx) => {
      const winner = await tx.winner.create({
        data: {
          poolId: pool.id,
          entryId: winningEntry.id,
          userId: winningEntry.userId,
          prizeAmount: pool.pricePerEntry * pool.maxSlots, // Estimated value
          announcedAt: new Date(),
        },
      });

      await tx.lotteryPool.update({
        where: { id: pool.id },
        data: { status: "DRAWN" },
      });

      return winner;
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Draw error:", error);
    return NextResponse.json({ error: "Failed to draw winner" }, { status: 500 });
  }
}
