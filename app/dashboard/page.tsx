import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { verifyJWT } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import Logo from "@/components/Logo";
import { Sparkles, TrendingUp, Gift, Zap, Clock, Users, Trophy, ArrowRight } from "lucide-react";

async function getUser() {
    const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;
    if (!session) return null;

    const payload = await verifyJWT(session);
    if (!payload) return null;

    const user = await prisma.user.findUnique({
        where: { id: payload.sub as string },
        include: {
            wallet: true,
            entries: {
                include: { pool: true },
                orderBy: { purchasedAt: "desc" },
                take: 5
            },
            wins: {
                include: { pool: true },
                take: 3
            }
        },
    });
    return user;
}

export default async function DashboardPage() {
    const user = await getUser();

    if (!user) {
        redirect("/login");
    }

    // Force profile completion
    if (!user.address || !user.city) {
        redirect("/dashboard/profile");
    }

    const activePools = await prisma.lotteryPool.findMany({
        where: { status: "OPEN" },
        orderBy: { createdAt: "desc" },
        take: 10
    });

    const totalUsers = await prisma.user.count();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Particles Background */}
            <div className="particles-bg" />

            <div className="relative z-10 pb-24">
                {/* Header */}
                <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 safe-area-top">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <Logo iconSize={24} />
                            <div className="flex items-center gap-3">
                                <Link href="/winners" className="text-xs font-bold text-orange-600 bg-orange-100 px-3 py-1.5 rounded-full hover:bg-orange-200 transition-colors flex items-center gap-1">
                                    <Trophy className="w-3 h-3" />
                                    Winners
                                </Link>
                                <Link href="/dashboard/profile" className="relative">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold shadow-lg ring-2 ring-white">
                                        {user.name ? user.name[0].toUpperCase() : user.phone.slice(-2)}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
                    {/* Premium Wallet Card */}
                    <div className="card-gradient p-6 sm:p-8 shadow-glow-lg relative overflow-hidden rounded-3xl">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 text-white/90 text-sm mb-4">
                                <Sparkles className="w-4 h-4" />
                                <span className="font-medium tracking-wide">Wallet Balance</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                                <div>
                                    <h2 className="text-5xl sm:text-6xl font-black text-white mb-2 tracking-tight">
                                        Rs. {user.wallet?.balance.toFixed(2) || "0.00"}
                                    </h2>
                                    <p className="text-white/80 text-sm font-medium">Available to play</p>
                                </div>
                                <Link
                                    href="/wallet/deposit"
                                    className="bg-white text-orange-600 hover:bg-gray-50 px-6 py-3 rounded-xl font-bold shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                                >
                                    <Zap className="w-5 h-5" />
                                    Add Money
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Link href="/pools" className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group text-center">
                            <div className="w-12 h-12 mx-auto bg-blue-50 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <Gift className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900">All Pools</h3>
                            <p className="text-xs text-gray-500 mt-1">View active lotteries</p>
                        </Link>

                        <Link href="/upcoming" className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group text-center">
                            <div className="w-12 h-12 mx-auto bg-purple-50 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <Clock className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900">Upcoming</h3>
                            <p className="text-xs text-gray-500 mt-1">Future opportunities</p>
                        </Link>

                        <Link href="/winners" className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group text-center">
                            <div className="w-12 h-12 mx-auto bg-green-50 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <Trophy className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900">Winners</h3>
                            <p className="text-xs text-gray-500 mt-1">Hall of fame</p>
                        </Link>

                        <Link href="/dashboard/referrals" className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group text-center">
                            <div className="w-12 h-12 mx-auto bg-pink-50 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <Users className="w-6 h-6 text-pink-600" />
                            </div>
                            <h3 className="font-bold text-gray-900">Refer & Earn</h3>
                            <p className="text-xs text-gray-500 mt-1">Invite friends</p>
                        </Link>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                                {user.entries.length}
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">My Tickets</p>
                                <p className="text-lg font-bold text-gray-900">Active Entries</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                                {user.wins.length}
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">My Wins</p>
                                <p className="text-lg font-bold text-gray-900">Total Prizes</p>
                            </div>
                        </div>
                    </div>

                    {/* Live Lotteries */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl sm:text-2xl font-black text-gray-900 flex items-center gap-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50" />
                                Live Lotteries
                            </h3>
                            <Link href="/pools" className="text-sm font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1">
                                View All <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="space-y-4">
                            {activePools.map((pool) => {
                                const progress = (pool.filledSlots / pool.maxSlots) * 100;
                                const timeLeft = new Date(pool.endDate).getTime() - Date.now();
                                const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));

                                return (
                                    <Link href={`/pools/${pool.id}`} key={pool.id}>
                                        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-100 transform hover:-translate-y-1 transition-all duration-300 group">
                                            <div className="flex gap-5">
                                                {/* Image */}
                                                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 shadow-md">
                                                    <img
                                                        src={pool.productImage}
                                                        alt={pool.productName}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-orange-600 text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm">
                                                        Rs. {pool.pricePerEntry}
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                    <h4 className="font-bold text-gray-900 text-lg line-clamp-1 mb-1 group-hover:text-orange-600 transition-colors">
                                                        {pool.productName}
                                                    </h4>
                                                    <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                                                        {pool.description || "Win this amazing prize!"}
                                                    </p>

                                                    {/* Progress */}
                                                    <div className="space-y-2">
                                                        <div className="flex justify-between text-xs sm:text-sm">
                                                            <span className="text-gray-600 font-semibold">
                                                                {pool.filledSlots}/{pool.maxSlots} sold
                                                            </span>
                                                            <span className="text-orange-600 font-bold">
                                                                {progress.toFixed(0)}%
                                                            </span>
                                                        </div>
                                                        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                                            <div
                                                                className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-1000 ease-out"
                                                                style={{ width: `${progress}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}

                            {activePools.length === 0 && (
                                <div className="bg-white rounded-2xl p-12 sm:p-16 text-center border border-dashed border-gray-200">
                                    <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-4">
                                        <Gift className="w-10 h-10 text-gray-400" />
                                    </div>
                                    <p className="text-gray-600 font-semibold text-lg">No active lotteries</p>
                                    <p className="text-sm text-gray-400 mt-2">Check back soon for new prizes!</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <AdBanner />
                </main>
            </div>
        </div>
    );
}
