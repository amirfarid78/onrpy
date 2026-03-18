import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

// User: Buy Entry
export async function POST(request: NextRequest) {
    try {
        const cookieStore = await cookies();
        const session = cookieStore.get("session")?.value;
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
        const { payload } = await jwtVerify(session, secret);
        const userId = payload.sub as string;

        const { poolId } = await request.json();

        // Start a transaction to ensure atomicity
        const result = await prisma.$transaction(async (tx) => {
            // 1. Get Pool
            const pool = await tx.lotteryPool.findUnique({
                where: { id: poolId },
            });

            if (!pool || pool.status !== "OPEN") {
                throw new Error("Pool not available");
            }

            if (pool.filledSlots >= pool.maxSlots) {
                throw new Error("Pool full");
            }

            // 1.5 Check if user already entered
            const userEntry = await tx.poolEntry.findFirst({
                where: {
                    poolId,
                    userId,
                },
            });

            if (userEntry) {
                throw new Error("You have already entered this pool");
            }

            // 2. Get User Wallet
            const wallet = await tx.wallet.findUnique({
                where: { userId },
            });

            if (!wallet || wallet.balance < pool.pricePerEntry) {
                throw new Error("Insufficient balance");
            }

            // 3. Deduct Balance
            await tx.wallet.update({
                where: { userId },
                data: { balance: { decrement: pool.pricePerEntry } },
            });

            // 4. Create Transaction Record
            await tx.transaction.create({
                data: {
                    walletId: wallet.id,
                    amount: pool.pricePerEntry,
                    type: "ENTRY_FEE",
                    status: "COMPLETED",
                    reference: `ENTRY-${poolId}`,
                },
            });

            // 5. Create Entry
            const entry = await tx.poolEntry.create({
                data: {
                    poolId,
                    userId,
                    ticketNumber: pool.filledSlots + 1, // Simple sequential ticket
                },
            });

            // 6. Update Pool Slots
            const updatedPool = await tx.lotteryPool.update({
                where: { id: poolId },
                data: { filledSlots: { increment: 1 } },
            });

            // 7. Check if pool is full -> Close it or Trigger Draw
            if (updatedPool.filledSlots >= updatedPool.maxSlots) {
                await tx.lotteryPool.update({
                    where: { id: poolId },
                    data: { status: "CLOSED" }
                });
                // In a real app, you might trigger a background job here
            }

            return entry;
        });

        return NextResponse.json({ success: true, entry: result });

    } catch (error: any) {
        console.error("Buy entry error:", error);
        return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 400 });
    }
}
