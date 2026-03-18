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
        const { productName, productImage, pricePerEntry, maxSlots, startDate, endDate, description } = body;

        const pool = await prisma.lotteryPool.create({
            data: {
                productName,
                productImage,
                pricePerEntry: parseFloat(pricePerEntry),
                maxSlots: parseInt(maxSlots),
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                description,
                status: "OPEN",
            },
        });

        return NextResponse.json(pool);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create pool" }, { status: 500 });
    }
}
