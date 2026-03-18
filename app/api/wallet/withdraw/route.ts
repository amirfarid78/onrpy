import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { jwtVerify } from "jose";

export async function POST(request: NextRequest) {
    const session = request.cookies.get("session")?.value;
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
        const { payload } = await jwtVerify(session, secret);
        const userId = payload.sub as string;

        const body = await request.json();
        const { amount, bankName, accountNumber, accountTitle } = body;
        const withdrawAmount = parseFloat(amount);

        if (isNaN(withdrawAmount) || withdrawAmount < 100) {
            return NextResponse.json({ error: "Minimum withdrawal is Rs. 100" }, { status: 400 });
        }

        // Transaction to ensure atomicity
        const result = await prisma.$transaction(async (tx) => {
            const wallet = await tx.wallet.findUnique({ where: { userId } });
            if (!wallet || wallet.balance < withdrawAmount) {
                throw new Error("Insufficient balance");
            }

            // Deduct balance
            await tx.wallet.update({
                where: { userId },
                data: { balance: { decrement: withdrawAmount } },
            });

            // Create Withdrawal Request
            const withdrawal = await tx.withdrawalRequest.create({
                data: {
                    userId,
                    amount: withdrawAmount,
                    bankName,
                    accountNumber,
                    accountTitle,
                    status: "PENDING",
                },
            });

            // Create Transaction Record
            await tx.transaction.create({
                data: {
                    walletId: wallet.id,
                    amount: -withdrawAmount,
                    type: "WITHDRAWAL",
                    status: "PENDING",
                    reference: withdrawal.id,
                },
            });

            return withdrawal;
        });

        return NextResponse.json(result);
    } catch (error: any) {
        console.error("Withdrawal error:", error);
        return NextResponse.json({ error: error.message || "Withdrawal failed" }, { status: 400 });
    }
}
