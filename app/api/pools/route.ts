import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

// Admin: Create Pool
export async function POST(request: NextRequest) {
    try {
        const cookieStore = await cookies();
        const session = cookieStore.get("session")?.value;
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
        const { payload } = await jwtVerify(session, secret);

        // Check if user is admin
        if (payload.role !== "ADMIN") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const { productName, productImage, pricePerEntry, maxSlots, endDate, description } = await request.json();

        const pool = await prisma.lotteryPool.create({
            data: {
                productName,
                productImage,
                pricePerEntry: parseFloat(pricePerEntry),
                maxSlots: parseInt(maxSlots),
                endDate: new Date(endDate),
                description,
                filledSlots: 0,
                status: "OPEN",
            },
        });

        return NextResponse.json({ success: true, pool });
    } catch (error) {
        console.error("Create pool error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// User: List Pools
export async function GET(request: NextRequest) {
    try {
        const pools = await prisma.lotteryPool.findMany({
            where: { status: "OPEN" },
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json({ success: true, pools });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
