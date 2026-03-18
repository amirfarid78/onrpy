import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        // Fetch settings (create default if not exists)
        let settings = await prisma.referralSetting.findFirst();
        if (!settings) {
            settings = await prisma.referralSetting.create({
                data: { rewardAmount: 50, isActive: true },
            });
        }

        // Fetch stats
        const totalReferrals = await prisma.user.count({
            where: { referredBy: { not: null } },
        });

        // Calculate total payouts
        const payoutAggregation = await prisma.transaction.aggregate({
            _sum: {
                amount: true,
            },
            where: {
                type: "REFERRAL_BONUS",
                status: "COMPLETED",
            },
        });

        const totalPayouts = payoutAggregation._sum.amount || 0;

        const topReferrersRaw = await prisma.user.groupBy({
            by: ['referredBy'],
            _count: {
                referredBy: true,
            },
            orderBy: {
                _count: {
                    referredBy: 'desc',
                },
            },
            take: 5,
            where: {
                referredBy: { not: null },
            },
        });

        // Map referrer IDs to user details
        const topReferrers = await Promise.all(
            topReferrersRaw.map(async (item) => {
                if (!item.referredBy) return null;
                const user = await prisma.user.findUnique({
                    where: { id: item.referredBy },
                    select: { name: true, phone: true },
                });
                return {
                    name: user?.name,
                    phone: user?.phone,
                    count: item._count.referredBy,
                };
            })
        );

        return NextResponse.json({
            settings,
            stats: {
                totalReferrals,
                totalPayouts,
                topReferrers: topReferrers.filter(Boolean),
            },
        });
    } catch (error) {
        console.error("Error fetching referral data:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const { rewardAmount, isActive } = body;

        // Update first record (assuming singleton settings)
        const settings = await prisma.referralSetting.findFirst();
        if (settings) {
            await prisma.referralSetting.update({
                where: { id: settings.id },
                data: { rewardAmount, isActive },
            });
        } else {
            await prisma.referralSetting.create({
                data: { rewardAmount, isActive },
            });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
    }
}
