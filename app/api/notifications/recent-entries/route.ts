import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        // Fetch entries created in the last 15 seconds
        const fifteenSecondsAgo = new Date(Date.now() - 15 * 1000);

        const recentEntries = await prisma.poolEntry.findMany({
            where: {
                purchasedAt: {
                    gte: fifteenSecondsAgo,
                },
            },
            include: {
                user: {
                    select: { name: true, phone: true },
                },
                pool: {
                    select: { productName: true },
                },
            },
            orderBy: {
                purchasedAt: "desc",
            },
            take: 5,
        });

        const notifications = recentEntries.map((entry) => {
            const name = entry.user.name || `User ${entry.user.phone.slice(-4)}`;
            return {
                id: entry.id,
                message: `${name} just joined ${entry.pool.productName}!`,
                timestamp: entry.purchasedAt,
            };
        });

        return NextResponse.json({ notifications });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch notifications" }, { status: 500 });
    }
}
