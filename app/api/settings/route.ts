import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        let settings = await prisma.siteSetting.findUnique({
            where: { id: "global" },
        });

        // Setup default if empty
        if (!settings) {
            settings = await prisma.siteSetting.create({
                data: {
                    id: "global",
                    siteName: "Zeva - One Rupee Game",
                    siteDescription: "Pakistan's premier prize pool platform.",
                    currencySymbol: "Rs.",
                }
            });
        }

        return NextResponse.json({ success: true, settings });
    } catch (error) {
        console.error("Error fetching site settings:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
