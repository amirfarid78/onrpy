import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { jwtVerify } from "jose";

export async function PUT(request: NextRequest) {
    const session = request.cookies.get("session")?.value;
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
        const { payload } = await jwtVerify(session, secret);
        const userId = payload.sub as string;

        const body = await request.json();
        const { name, email, whatsapp, address, city, state, zip } = body;

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                name,
                email,
                whatsapp,
                address,
                city,
                state,
                zip,
            },
        });

        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error("Profile update error:", error);
        return NextResponse.json({ error: "Failed to update profile", details: (error as Error).message }, { status: 500 });
    }
}
