import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { verifyPassword, generateJWT, validatePhoneNumber } from "@/lib/auth";

// Simple rate limiting (in-memory, resets on server restart)
const loginAttempts = new Map<string, { count: number; resetTime: number }>();
const MAX_ATTEMPTS = 5;
const LOCKOUT_TIME = 15 * 60 * 1000; // 15 minutes

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { phoneNumber, password } = body;

        // Validate inputs
        if (!phoneNumber || !password) {
            return NextResponse.json(
                { error: "Phone number and password are required" },
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

        // Check rate limiting
        const now = Date.now();
        const attempts = loginAttempts.get(formattedPhone);

        if (attempts) {
            if (now < attempts.resetTime) {
                if (attempts.count >= MAX_ATTEMPTS) {
                    return NextResponse.json(
                        { error: "Too many login attempts. Please try again in 15 minutes." },
                        { status: 429 }
                    );
                }
            } else {
                // Reset attempts after lockout time
                loginAttempts.delete(formattedPhone);
            }
        }

        // Find user by phone
        const user = await prisma.user.findUnique({
            where: { phone: formattedPhone },
        });

        if (!user) {
            // Increment failed attempts
            const currentAttempts = loginAttempts.get(formattedPhone);
            loginAttempts.set(formattedPhone, {
                count: (currentAttempts?.count || 0) + 1,
                resetTime: now + LOCKOUT_TIME,
            });

            return NextResponse.json(
                { error: "Invalid phone number or password" },
                { status: 401 }
            );
        }

        // Check if user has a password set
        if (!user.password) {
            return NextResponse.json(
                { error: "No password set for this account. Please complete signup." },
                { status: 401 }
            );
        }

        // Verify password
        const isValidPassword = await verifyPassword(password, user.password);

        if (!isValidPassword) {
            // Increment failed attempts
            const currentAttempts = loginAttempts.get(formattedPhone);
            loginAttempts.set(formattedPhone, {
                count: (currentAttempts?.count || 0) + 1,
                resetTime: now + LOCKOUT_TIME,
            });

            return NextResponse.json(
                { error: "Invalid phone number or password" },
                { status: 401 }
            );
        }

        // Check if phone is verified
        if (!user.phoneVerified) {
            return NextResponse.json(
                { error: "Phone number not verified. Please complete signup." },
                { status: 401 }
            );
        }

        // Clear failed attempts on successful login
        loginAttempts.delete(formattedPhone);

        // Generate JWT token
        const token = await generateJWT(user.id, user.role);

        // Set HTTP-only cookie
        const cookieStore = await cookies();
        cookieStore.set("session", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: "/",
        });

        return NextResponse.json({
            success: true,
            user: {
                id: user.id,
                name: user.name,
                phone: user.phone,
                role: user.role,
            },
        });
    } catch (error: any) {
        console.error("Login error:", error);
        return NextResponse.json(
            { error: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
