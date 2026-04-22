import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

// User: Buy Entry
// NOTE: Pools use a SOFT cap — maxSlots is a "target" not a hard limit.
// Pools stay OPEN and keep accepting entries even after maxSlots is reached.
// The draw is triggered by admin manually, not by slot count.
export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
    const { payload } = await jwtVerify(session, secret);
    const userId = payload.sub as string;

    const { poolId } = await request.json();

    const result = await prisma.$transaction(async (tx) => {
      // 1. Get Pool — only check it's OPEN, not slot count
      const pool = await tx.lotteryPool.findUnique({ where: { id: poolId } });

      if (!pool || pool.status !== "OPEN") {
        throw new Error("This prize pool is not currently accepting entries.");
      }

      // 2. Check if user already entered (one entry per user per pool)
      const existingEntry = await tx.poolEntry.findFirst({ where: { poolId, userId } });
      if (existingEntry) {
        throw new Error("You have already entered this prize pool.");
      }

      // 3. Get User Wallet
      const wallet = await tx.wallet.findUnique({ where: { userId } });
      if (!wallet || wallet.balance < pool.pricePerEntry) {
        throw new Error("Insufficient wallet balance. Please add funds to continue.");
      }

      // 4. Deduct Balance
      await tx.wallet.update({
        where: { userId },
        data: { balance: { decrement: pool.pricePerEntry } },
      });

      // 5. Create Transaction Record
      await tx.transaction.create({
        data: {
          walletId: wallet.id,
          amount: pool.pricePerEntry,
          type: "ENTRY_FEE",
          status: "COMPLETED",
          reference: `ENTRY-${poolId}`,
        },
      });

      // 6. Create Entry with sequential ticket number
      const entry = await tx.poolEntry.create({
        data: {
          poolId,
          userId,
          ticketNumber: pool.filledSlots + 1,
        },
      });

      // 7. Increment filledSlots — NO CLOSING even past maxSlots (soft cap)
      await tx.lotteryPool.update({
        where: { id: poolId },
        data: { filledSlots: { increment: 1 } },
      });

      return entry;
    });

    return NextResponse.json({ success: true, entry: result });

  } catch (error: any) {
    console.error("Buy entry error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 400 });
  }
}
