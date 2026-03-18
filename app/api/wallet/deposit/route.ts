import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

// Mock Payment Gateway Handler
export async function POST(request: NextRequest) {
    try {
        const cookieStore = await cookies();
        const session = cookieStore.get("session")?.value;
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
        const { payload } = await jwtVerify(session, secret);
        const userId = payload.sub as string;

        const { amount, provider } = await request.json();

        if (!amount || amount < 1) {
            return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
        }

        // In a real app, you would initiate a request to Easypaisa/JazzCash API here
        // For this "Mock" integration, we will simulate a successful payment immediately

        // 1. Create a pending transaction
        const transaction = await prisma.transaction.create({
            data: {
                wallet: { connect: { userId } },
                amount: parseFloat(amount),
                type: "DEPOSIT",
                status: "COMPLETED", // Auto-complete for mock
                reference: `MOCK-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            },
        });

        // 2. Update Wallet Balance
        await prisma.wallet.update({
            where: { userId },
            data: {
                balance: { increment: parseFloat(amount) },
            },
        });

        return NextResponse.json({ success: true, transaction, message: "Deposit successful" });

    } catch (error) {
        console.error("Deposit error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
