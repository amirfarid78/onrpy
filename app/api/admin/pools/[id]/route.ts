import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { jwtVerify } from "jose";

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const session = request.cookies.get("session")?.value;
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
        const { payload } = await jwtVerify(session, secret);
        if (payload.role !== "ADMIN") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

        const { id } = await params;
        const body = await request.json();
        const { productName, productImage, pricePerEntry, maxSlots, startDate, endDate, description, status } = body;

        const pool = await prisma.lotteryPool.update({
            where: { id },
            data: {
                productName,
                productImage,
                pricePerEntry: parseFloat(pricePerEntry),
                maxSlots: parseInt(maxSlots),
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                description,
                status,
            },
        });

        return NextResponse.json(pool);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update pool" }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const session = request.cookies.get("session")?.value;
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
        const { payload } = await jwtVerify(session, secret);
        if (payload.role !== "ADMIN") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

        const { id } = await params;
        await prisma.lotteryPool.delete({ where: { id } });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete pool" }, { status: 500 });
    }
}
