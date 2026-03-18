import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
    try {
        const cookieStore = await cookies();
        const session = cookieStore.get("session")?.value;
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
        const { payload } = await jwtVerify(session, secret);
        const userId = payload.sub as string;

        const transactions = await prisma.transaction.findMany({
            where: {
                wallet: { userId },
            },
            orderBy: { createdAt: "desc" },
            take: 20,
        });

        return NextResponse.json({ success: true, transactions });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
