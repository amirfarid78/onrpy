import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { SignJWT } from "jose";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { idToken, referralCode } = body;

        if (!idToken) {
            return NextResponse.json({ error: "Missing ID token" }, { status: 400 });
        }

        // Verify the ID token
        const decodedToken = await adminAuth.verifyIdToken(idToken);
        const { uid, phone_number } = decodedToken;

        if (!phone_number) {
            return NextResponse.json({ error: "Phone number is required" }, { status: 400 });
        }

        // Check if user exists in DB, if not create them
        let user = await prisma.user.findUnique({
            where: { phone: phone_number },
        });

        if (!user) {
            let referrerId = null;

            if (referralCode) {
                const referrer = await prisma.user.findUnique({
                    where: { referralCode },
                });
                if (referrer) {
                    referrerId = referrer.id;
                }
            }

            // Generate unique referral code
            const newReferralCode = "REF-" + Math.random().toString(36).substring(2, 8).toUpperCase();

            // Use transaction to create user and handle referral bonus
            user = await prisma.$transaction(async (tx) => {
                const newUser = await tx.user.create({
                    data: {
                        phone: phone_number,
                        referralCode: newReferralCode,
                        referredBy: referrerId,
                        wallet: {
                            create: {
                                balance: 0,
                            },
                        },
                    },
                });

                // If referred, check settings and give bonus to referrer
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
                                    reference: newUser.id, // Reference the new user ID
                                },
                            });
                        }
                    }
                }

                return newUser;
            });
        }

        // Create a session JWT
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
        const token = await new SignJWT({ sub: user.id, role: user.role })
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setExpirationTime("7d")
            .sign(secret);

        // Set cookie
        const cookieStore = await cookies();
        cookieStore.set("session", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: "/",
        });

        return NextResponse.json({ success: true, user });
    } catch (error: any) {
        console.error("Session creation error:", error);
        return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
    }
}
