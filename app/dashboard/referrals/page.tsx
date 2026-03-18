import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";
import { ArrowLeft, Copy, Share2, Users, Gift } from "lucide-react";
import CopyButton from "../../../components/CopyButton";

async function getUserReferralData() {
    const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;
    if (!session) return null;

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
        const { payload } = await jwtVerify(session, secret);

        let user = await prisma.user.findUnique({
            where: { id: payload.sub as string },
            include: {
                referrals: {
                    select: { createdAt: true, phone: true, name: true },
                    orderBy: { createdAt: "desc" },
                },
            },
        });

        if (user && !user.referralCode) {
            // Generate a random 6-character code
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            let code = "";
            for (let i = 0; i < 6; i++) {
                code += chars.charAt(Math.floor(Math.random() * chars.length));
            }

            // Update user with new code
            user = await prisma.user.update({
                where: { id: user.id },
                data: { referralCode: code },
                include: {
                    referrals: {
                        select: { createdAt: true, phone: true, name: true },
                        orderBy: { createdAt: "desc" },
                    },
                },
            });
        }

        const settings = await prisma.referralSetting.findFirst();

        return { user, settings };
    } catch (error) {
        return null;
    }
}

export default async function ReferralsPage() {
    const data = await getUserReferralData();
    if (!data || !data.user) redirect("/login");
    const { user, settings } = data;

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            <header className="bg-white shadow-sm sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
                    <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </Link>
                    <h1 className="text-xl font-bold text-gray-900">Refer & Earn</h1>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
                {/* Hero Card */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                            <Gift className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-black mb-2">Invite Friends, Get Rs. {settings?.rewardAmount || 50}</h2>
                        <p className="text-purple-100 mb-6 max-w-md mx-auto">
                            Share your unique referral code with friends. When they join, you both get a bonus!
                        </p>

                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center justify-between max-w-sm mx-auto">
                            <div className="text-left">
                                <p className="text-xs text-purple-200 uppercase tracking-wider font-bold">Your Code</p>
                                <p className="text-xl font-mono font-bold tracking-widest">{user.referralCode || "Generating..."}</p>
                            </div>
                            <CopyButton text={user.referralCode || ""} />
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center">
                        <p className="text-gray-500 text-sm font-medium">Total Referrals</p>
                        <p className="text-3xl font-black text-gray-900 mt-1">{user.referrals.length}</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center">
                        <p className="text-gray-500 text-sm font-medium">Earned</p>
                        <p className="text-3xl font-black text-green-600 mt-1">Rs. 0</p>
                        {/* Placeholder for now, need to sum transactions */}
                    </div>
                </div>

                {/* Referral List */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 flex items-center gap-2">
                        <Users className="w-5 h-5 text-gray-400" />
                        <h3 className="font-bold text-gray-900">Your Referrals</h3>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {user.referrals.map((referral) => (
                            <div key={referral.phone} className="p-4 flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-gray-900">{referral.name || "User"}</p>
                                    <p className="text-sm text-gray-500">{referral.phone}</p>
                                </div>
                                <span className="text-xs text-gray-400">
                                    {new Date(referral.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                        ))}
                        {user.referrals.length === 0 && (
                            <div className="p-8 text-center text-gray-500">
                                No referrals yet. Start sharing!
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <MobileNav />
        </div>
    );
}
