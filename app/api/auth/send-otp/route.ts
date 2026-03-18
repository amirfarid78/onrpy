import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { validatePhoneNumber } from "@/lib/auth";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { phoneNumber } = body;

        if (!phoneNumber) {
            return NextResponse.json(
                { error: "Phone number is required" },
                { status: 400 }
            );
        }

        // Validate and format phone number
        const formattedPhone = validatePhoneNumber(phoneNumber);
        if (!formattedPhone) {
            return NextResponse.json(
                { error: "Invalid phone number format" },
                { status: 400 }
            );
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { phone: formattedPhone },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "Phone number already registered. Please login instead." },
                { status: 409 }
            );
        }

        // Return success - OTP will be sent via Firebase client SDK
        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Send OTP error:", error);
        return NextResponse.json(
            { error: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
