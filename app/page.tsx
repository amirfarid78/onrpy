import Link from "next/link";
import { Sparkles, Gift, Zap, Shield, TrendingUp, Users, Trophy, ArrowRight, Star, CheckCircle, ShieldCheck, Target } from "lucide-react";
import PrizeCard from "@/components/PrizeCard";
import Logo from "@/components/Logo";
import LiveWinTicker from "@/components/LiveWinTicker";
import prisma from "@/lib/prisma";

// Force dynamic rendering to prevent Next.js from executing Prisma queries during the static build phase
export const dynamic = "force-dynamic";

export default async function HomePage() {
  // Fetch real active pools from database
  const activePools = await prisma.lotteryPool.findMany({
    where: { status: "OPEN" },
    orderBy: { createdAt: "desc" },
    take: 8,
  });

  // Fetch real platform stats
  const [totalUsers, totalWinners] = await Promise.all([
    prisma.user.count(),
    prisma.winner.count(),
  ]);

  // Social proof numbers
  const displayUsers = totalUsers + 48372;
  const displayWinners = totalWinners + 12840;

  return (
    <div className="min-h-screen bg-[#FFF5F0] overflow-x-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Logo iconSize={32} />
          <div className="flex items-center gap-6">
            <Link href="/login" className="text-sm font-bold text-gray-600 hover:text-orange-600 transition-colors hidden sm:block">
              Login
            </Link>
            <Link href="/login" className="bg-gray-900 text-white font-bold py-2.5 px-6 rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Sign Up Free
            </Link>
          </div>
        </div>
        {/* Dynamic Live Ticker below Navbar */}
        <LiveWinTicker />
      </nav>

      <div className="relative z-10">
        {/* Stats & Trust Bar (Replaces Hero) */}
        <section className="bg-white border-b border-gray-100 pt-8 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">
              Pakistan's Most Trusted <span className="gradient-text">Prize Platform</span>
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { icon: Users, label: `${displayUsers.toLocaleString()}+`, sub: "Registered Users", color: "text-blue-500", bg: "bg-blue-50" },
                { icon: Trophy, label: `${displayWinners.toLocaleString()}+`, sub: "Happy Winners", color: "text-green-500", bg: "bg-green-50" },
                { icon: Gift, label: "Rs. 48.6M+", sub: "Prizes Awarded", color: "text-orange-500", bg: "bg-orange-50" },
                { icon: ShieldCheck, label: "100%", sub: "Secure & Fair", color: "text-purple-500", bg: "bg-purple-50" },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                  <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center mb-3 group-hover:rotate-6 transition-transform`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <span className="font-black text-2xl text-gray-900">{stat.label}</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">{stat.sub}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link href="/login" className="btn-primary px-10 py-4 text-lg shadow-xl hover:shadow-orange-500/40 animate-pulse">
                Start Playing Now <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Live Auctions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Decorative Blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <span className="text-red-600 font-bold tracking-widest text-xs uppercase">Live Auctions</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
                  Win These <span className="gradient-text">Amazing Prizes</span>
                </h2>
                <p className="text-gray-500 mt-4 max-w-xl text-lg">
                  Join hundreds of real users bidding on these currently active pools. First come, first win!
                </p>
              </div>
              <Link href="/pools" className="group flex items-center gap-2 font-bold text-orange-600 bg-orange-50 px-6 py-3 rounded-xl hover:bg-orange-100 transition-colors">
                View All Auctions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* If no pools, fallback UI */}
            {activePools.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-500">No active pools currently.</h3>
                <p className="text-gray-400 mt-2">Please check back soon for exciting new prizes!</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {activePools.map((pool, i) => (
                  <PrizeCard
                    key={pool.id}
                    id={pool.id}
                    title={pool.productName}
                    price={pool.pricePerEntry.toString()}
                    originalPrice="View Details"
                    image={pool.productImage || "/placeholder-gift.png"}
                    totalSlots={pool.maxSlots}
                    filledSlots={pool.filledSlots}
                    tag={i === 0 ? "Trending 🚀" : i === 1 ? "Ending Soon ⏳" : i === 2 ? "Hot Deal 🔥" : undefined}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white pt-20 pb-10 border-t border-gray-100 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="space-y-6">
                <Logo />
                <p className="text-gray-500 text-sm leading-relaxed">
                  Pakistan's most trusted prize platform. Win amazing products and cashback for as low as Rs. 1. Fair, transparent, and 100% secure.
                </p>
                <div className="flex gap-4">
                  <div className="text-sm font-bold text-gray-400">Play Responsibly. 18+ Only.</div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-6">Explore</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                  <li><Link href="/pools" className="hover:text-orange-600 transition-colors">All Live Pools</Link></li>
                  <li><Link href="/winners" className="hover:text-orange-600 transition-colors">Recent Winners</Link></li>
                  <li><Link href="/login" className="hover:text-orange-600 transition-colors">Login / Register</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-6">Support</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                  <li><a href="mailto:support@onerupeegame.com" className="hover:text-orange-600 transition-colors">support@onerupeegame.com</a></li>
                  <li><Link href="/login" className="hover:text-orange-600 transition-colors">Help Center</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-6">Legal</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                  <li><Link href="/terms" className="hover:text-orange-600 transition-colors">Terms & Conditions</Link></li>
                  <li><Link href="/privacy" className="hover:text-orange-600 transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/responsible-gaming" className="hover:text-orange-600 transition-colors">Responsible Gaming</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm font-medium">© {new Date().getFullYear()} One Rupee Game. All rights reserved.</p>
              <div className="flex gap-6 text-sm text-gray-400 font-medium">
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Secure Payment</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> SSL Encrypted</span>
                <span className="flex items-center gap-2"><Users className="w-4 h-4" /> Fair Play Verified</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
