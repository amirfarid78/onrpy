import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export async function PUT(request: NextRequest) {
    try {
        const cookieStore = await cookies();
        const session = cookieStore.get("session")?.value;
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
        const { payload } = await jwtVerify(session, secret);

        if (payload.role !== "ADMIN") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const data = await request.json();

        // Admin upsert fields
        const settings = await prisma.siteSetting.upsert({
            where: { id: "global" },
            update: {
                siteName: data.siteName,
                siteDescription: data.siteDescription,
                contactEmail: data.contactEmail,
                contactPhone: data.contactPhone,
                logoUrl: data.logoUrl,
                faviconUrl: data.faviconUrl,
            },
            create: {
                id: "global",
                siteName: data.siteName || "Zeva - One Rupee Game",
                siteDescription: data.siteDescription || "Pakistan's premier prize pool platform.",
                contactEmail: data.contactEmail,
                contactPhone: data.contactPhone,
                logoUrl: data.logoUrl,
                faviconUrl: data.faviconUrl,
            }
        });

        return NextResponse.json({ success: true, settings });
    } catch (error) {
        console.error("Settings update error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
