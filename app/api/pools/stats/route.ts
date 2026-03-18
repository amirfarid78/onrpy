import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const pools = await prisma.lotteryPool.findMany({
            where: { status: "OPEN" },
            select: {
                id: true,
                filledSlots: true,
                maxSlots: true,
            },
        });

        const stats = pools.reduce((acc, pool) => {
            acc[pool.id] = {
                filled: pool.filledSlots,
                total: pool.maxSlots,
            };
            return acc;
        }, {} as Record<string, { filled: number; total: number }>);

        return NextResponse.json({ stats });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
    }
}
