import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { cookies } from "next/headers";
import { hashPassword, generateJWT, validatePhoneNumber, sanitizeInput } from "@/lib/auth";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            firebaseToken,
            fullName,
            phoneNumber,
            whatsappNumber,
            address,
            password,
            referralCode,
        } = body;

        // Validate required fields
        if (!firebaseToken || !fullName || !phoneNumber || !password) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Verify Firebase token
        const decodedToken = await adminAuth.verifyIdToken(firebaseToken);
        const { phone_number: firebasePhone } = decodedToken;

        if (!firebasePhone) {
            return NextResponse.json(
                { error: "Phone number not found in Firebase token" },
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

        // Verify phone number matches Firebase token
        if (firebasePhone !== formattedPhone) {
            return NextResponse.json(
                { error: "Phone number mismatch with OTP verification" },
                { status: 400 }
            );
        }

        // Validate full name
        if (fullName.trim().length < 3) {
            return NextResponse.json(
                { error: "Full name must be at least 3 characters" },
                { status: 400 }
            );
        }

        // Validate password
        if (password.length < 6) {
            return NextResponse.json(
                { error: "Password must be at least 6 characters" },
                { status: 400 }
            );
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { phone: formattedPhone },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "Phone number already registered" },
                { status: 409 }
            );
        }

        // Hash password
        const hashedPassword = await hashPassword(password);

        // Handle referral code
        let referrerId = null;
        if (referralCode) {
            const referrer = await prisma.user.findUnique({
                where: { referralCode: referralCode.trim() },
            });
            if (referrer) {
                referrerId = referrer.id;
            }
        }

        // Generate unique referral code
        const newReferralCode =
            "REF-" + Math.random().toString(36).substring(2, 8).toUpperCase();

        // Create user in transaction
        const user = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
            const newUser = await tx.user.create({
                data: {
                    phone: formattedPhone,
                    name: sanitizeInput(fullName),
                    whatsapp: whatsappNumber ? sanitizeInput(whatsappNumber) : null,
                    address: address ? sanitizeInput(address) : null,
                    password: hashedPassword,
                    phoneVerified: true,
                    referralCode: newReferralCode,
                    referredBy: referrerId,
                    wallet: {
                        create: {
                            balance: 0,
                        },
                    },
                },
            });

            // Handle referral bonus
            if (referrerId) {
                const settings = await tx.referralSetting.findFirst();
                if (settings && settings.isActive && settings.rewardAmount > 0) {
                    // Credit referrer wallet
                    await tx.wallet.update({
                        where: { userId: referrerId },
                        data: {
                            balance: { increment: settings.rewardAmount },
                        },
                    });

                    // Get referrer wallet id
                    const referrerWallet = await tx.wallet.findUnique({
                        where: { userId: referrerId },
                    });

                    if (referrerWallet) {
                        await tx.transaction.create({
                            data: {
                                walletId: referrerWallet.id,
                                amount: settings.rewardAmount,
                                type: "REFERRAL_BONUS",
                                status: "COMPLETED",
                                reference: newUser.id,
                            },
                        });
                    }
                }
            }

            return newUser;
        });

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
        console.error("Verify OTP error:", error);
        return NextResponse.json(
            { error: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
