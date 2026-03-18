import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { PoolEntry } from "@prisma/client";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const entries = await prisma.poolEntry.findMany({
            where: { poolId: id },
            take: 50,
            orderBy: { purchasedAt: "desc" },
            include: {
                user: {
                    select: {
                        name: true,
                        profileImage: true,
                    },
                },
            },
        });

        // Map to a simpler format
        const participants = entries.map((entry: PoolEntry & { user: { name: string | null, profileImage: string | null } }) => ({
            id: entry.id,
            name: entry.user.name || "User",
            image: entry.user.profileImage,
        }));

        return NextResponse.json(participants);
    } catch (error) {
        console.error("Error fetching entries:", error);
        return NextResponse.json({ error: "Failed to fetch entries" }, { status: 500 });
    }
}
