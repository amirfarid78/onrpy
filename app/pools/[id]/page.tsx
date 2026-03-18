import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import BuyButton from "@/components/BuyButton";
import LivePoolDetail from "@/components/LivePoolDetail";
import { Calendar, Clock, Ticket, Trophy, Users, Share2, ShieldCheck, AlertCircle } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { jwtVerify } from "jose";

async function getPool(id: string) {
    return await prisma.lotteryPool.findUnique({
        where: { id },
        include: {
            _count: {
                select: { entries: true },
            },
        },
    });
}

async function checkEnrollment(poolId: string) {
    const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;
    if (!session) return false;

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
        const { payload } = await jwtVerify(session, secret);
        const userId = payload.sub as string;

        const entry = await prisma.poolEntry.findFirst({
            where: {
                poolId,
                userId,
            },
        });

        return !!entry;
    } catch (error) {
        return false;
    }
}

export default async function PoolDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const pool = await getPool(id);
    const isEnrolled = await checkEnrollment(id);

    if (!pool) {
        notFound();
    }

    const isClosed = pool.status !== "OPEN";

    return (
        <div className="min-h-screen bg-gray-50 pb-20 relative overflow-x-hidden">
            {/* Hero Section with Parallax-like effect */}
            <div className="relative h-[50vh] md:h-[60vh] bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 z-10" />
                <img
                    src={pool.productImage}
                    alt={pool.productName}
                    className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
                />

                {/* Floating Badges */}
                <div className="absolute top-24 right-4 md:right-10 z-20 flex flex-col gap-3">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                        <ShieldCheck className="w-4 h-4 text-green-400" />
                        Verified Pool
                    </div>
                    {pool.status === "OPEN" && (
                        <div className="bg-orange-500/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg animate-pulse">
                            <Clock className="w-4 h-4" />
                            Closing Soon
                        </div>
                    )}
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20">
                    <div className="max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-lg">
                            <Trophy className="w-3 h-3" /> Premium Lottery
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg leading-tight">
                            {pool.productName}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-gray-200 text-sm md:text-base font-medium">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-orange-400" />
                                Draw: {new Date(pool.endDate).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-blue-400" />
                                {pool._count.entries} Participants
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 -mt-20 relative z-30">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Live Stats Card */}
                        <LivePoolDetail
                            poolId={pool.id}
                            initialFilledSlots={pool.filledSlots}
                            maxSlots={pool.maxSlots}
                        />

                        {/* Description */}
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Trophy className="w-6 h-6 text-yellow-500" />
                                Product Details
                            </h2>
                            <div className="prose prose-orange max-w-none text-gray-600">
                                <p className="leading-relaxed whitespace-pre-wrap">{pool.description || "No description available."}</p>
                            </div>
                        </div>

                        {/* How it works */}
                        <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold mb-6">How to Win?</h2>
                                <div className="space-y-6">
                                    {[
                                        { title: "Buy a Ticket", desc: `Purchase an entry for just Rs. ${pool.pricePerEntry}` },
                                        { title: "Wait for Draw", desc: "Wait for the pool to fill or the draw date" },
                                        { title: "Get Lucky", desc: "Winner is selected randomly by our system" },
                                        { title: "Claim Prize", desc: "Prize is delivered or credited instantly" }
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm shrink-0 border border-white/30">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">{step.title}</h3>
                                                <p className="text-blue-200 text-sm">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Action Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 sticky top-24">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg">Join this Pool</h3>

                            {isClosed ? (
                                <div className="bg-gray-100 text-gray-500 p-4 rounded-xl text-center font-bold">
                                    Pool Closed
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <BuyButton poolId={pool.id} price={pool.pricePerEntry} isEnrolled={isEnrolled} />
                                    <p className="text-xs text-center text-gray-400">
                                        By purchasing, you agree to our Terms & Conditions.
                                    </p>
                                </div>
                            )}

                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-3 text-sm">Share with friends</h4>
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors flex items-center justify-center gap-2">
                                        <Share2 className="w-4 h-4" /> Share
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 space-y-4">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 text-green-500" />
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">100% Secure</p>
                                    <p className="text-xs text-gray-500">Encrypted transactions</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Trophy className="w-5 h-5 text-orange-500" />
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">Fair Play</p>
                                    <p className="text-xs text-gray-500">Random winner selection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
