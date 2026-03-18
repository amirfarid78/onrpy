import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { jwtVerify } from "jose";

export async function POST(request: NextRequest) {
    const session = request.cookies.get("session")?.value;
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
        const { payload } = await jwtVerify(session, secret);
        if (payload.role !== "ADMIN") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

        const body = await request.json();
        const { title, imageUrl, linkUrl, startDate, endDate, isActive } = body;

        const ad = await prisma.ad.create({
            data: {
                title,
                imageUrl,
                linkUrl,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                isActive
            },
        });

        return NextResponse.json(ad);
    } catch (error) {
        console.error("Create ad error:", error);
        return NextResponse.json({ error: "Failed to create ad" }, { status: 500 });
    }
}

export async function GET() {
    // Public endpoint for fetching active ads? Or admin only?
    // For now, let's make it admin only or general.
    // Actually, the frontend component will need to fetch active ads.
    // Let's allow public access to GET but filter by active if query param present?
    // Or just make a separate public endpoint.
    // For simplicity, let's allow GET for all, but maybe filter in the query.

    try {
        const ads = await prisma.ad.findMany({
            orderBy: { createdAt: "desc" }
        });
        return NextResponse.json(ads);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch ads" }, { status: 500 });
    }
}
