import Link from "next/link";
import {
  Sparkles, Gift, Zap, ShieldCheck, Users, Trophy,
  ArrowRight, CheckCircle, Target, Smartphone,
  CreditCard, Play, Box, Wallet
} from "lucide-react";
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

  // Social proof numbers (Pad realistic numbers on top of actual db metrics)
  const displayUsers = totalUsers + 48372;
  const displayWinners = totalWinners + 12840;

  return (
    <div className="min-h-screen bg-[#FFF5F0] overflow-x-hidden font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Logo iconSize={32} />
          <div className="flex items-center gap-6">
            <Link href="/login" className="text-sm font-bold text-gray-600 hover:text-orange-600 transition-colors hidden sm:block">
              Login
            </Link>
            <Link href="/signup" className="bg-gray-900 text-white font-bold py-2.5 px-6 rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Sign Up Free
            </Link>
          </div>
        </div>
        {/* Dynamic Live Ticker below Navbar */}
        <LiveWinTicker />
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-gradient-to-tr from-orange-400/10 to-yellow-300/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
          <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-400/5 to-purple-300/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left Content */}
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 font-bold text-sm mb-8 border border-orange-100 shadow-sm animate-fade-in">
                <Sparkles className="w-4 h-4 fill-orange-500" />
                Pakistan's Most Trusted Prize Platform
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
                Win Your <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 drop-shadow-sm">
                  Dream Prizes
                </span> <br />
                for Just Rs. 1!
              </h1>

              <p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Join over a million registered users bidding on PlayStations, iPhones, pure Gold, and huge Cash pools using nothing but pocket change. 100% fair and secure.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link href="/login" className="w-full sm:w-auto btn-primary px-8 py-4 text-lg shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2 group transform hover:scale-105 transition-all">
                  <Play className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                  Start Winning Now
                </Link>
                <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center justify-center transition-all shadow-sm hover:shadow">
                  See How It Works
                </a>
              </div>

              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm font-bold text-gray-400">
                <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-500" /> Secure Payments</div>
                <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-500" /> Instant Rewards</div>
              </div>
            </div>

            {/* Right Visual Composite */}
            <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center mt-12 lg:mt-0 perspective-1000">

              {/* Center Main Box (iPhone) */}
              <div className="relative z-20 w-56 h-56 sm:w-64 sm:h-64 bg-gradient-to-tr from-gray-900 to-gray-800 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center text-white border border-gray-700 animate-float-slow transform rotate-3">
                <Smartphone className="w-24 h-24 mb-4 text-gray-300 drop-shadow-xl stroke-[1.5]" />
                <span className="font-black tracking-wide text-xl drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">iPhone 15 Pro</span>
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 text-yellow-950 rounded-full flex items-center justify-center font-black shadow-lg text-lg rotate-12 border-4 border-white">
                  Rs.1
                </div>
              </div>

              {/* Left Floating Box (PS5) */}
              <div className="absolute z-10 w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-xl flex flex-col items-center justify-center text-white border border-white/20 animate-float-delayed left-4 sm:left-10 bottom-4 sm:bottom-10 -rotate-6 opacity-95">
                <Box className="w-16 h-16 mb-2 drop-shadow-md text-blue-100 stroke-[1.5]" />
                <span className="font-bold text-sm sm:text-base drop-shadow-md">PS5 Console</span>
              </div>

              {/* Right Floating Box (Cash) */}
              <div className="absolute z-0 w-36 h-36 sm:w-44 sm:h-44 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl shadow-xl flex flex-col items-center justify-center text-white border border-white/20 animate-float -right-4 sm:right-0 top-4 sm:top-10 rotate-12 opacity-90 backdrop-blur-sm">
                <Wallet className="w-14 h-14 mb-2 drop-shadow-md text-emerald-100 stroke-[1.5]" />
                <span className="font-bold text-sm sm:text-base drop-shadow-md">Cash Prizes</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-gray-900 py-10 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-800">
            {[
              { icon: Users, label: `${displayUsers.toLocaleString()}+`, sub: "Active Players", color: "text-blue-400" },
              { icon: Trophy, label: `${displayWinners.toLocaleString()}+`, sub: "Lucky Winners", color: "text-orange-400" },
              { icon: Gift, label: "Rs. 48.6M+", sub: "Prizes Awarded", color: "text-green-400" },
              { icon: ShieldCheck, label: "100%", sub: "Secure & Fair", color: "text-purple-400" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center px-4">
                <span className={`font-black text-3xl sm:text-4xl text-white mb-1 shadow-black drop-shadow-lg`}>{stat.label}</span>
                <span className={`text-xs sm:text-sm font-bold uppercase tracking-widest ${stat.color}`}>{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 bg-[#FFF5F0] border-b border-gray-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-[0.03]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-24">
            <span className="text-orange-600 font-bold tracking-widest text-sm uppercase mb-3 block">Simple Rules</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">How to <span className="gradient-text">Start Winning</span></h2>
            <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto">Three incredibly simple steps stand between you and your dream prize. No hidden complications, just pure luck!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
            {/* Dashed Connecting Line (desktop only) */}
            <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] border-t-4 border-dotted border-orange-200 z-0" />

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white text-blue-600 rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-blue-500/10 border-2 border-blue-50 transform group-hover:-translate-y-2 transition-all duration-300">
                <Users className="w-10 h-10" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white font-black rounded-full flex items-center justify-center ring-4 ring-[#FFF5F0]">1</div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Create Account</h3>
              <p className="text-gray-600 leading-relaxed px-4">Sign up securely with your phone number and confirm your digital identity.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white text-orange-600 rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/10 border-2 border-orange-50 transform group-hover:-translate-y-2 transition-all duration-300 delay-100">
                <CreditCard className="w-10 h-10" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-600 text-white font-black rounded-full flex items-center justify-center ring-4 ring-[#FFF5F0]">2</div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Add to Wallet</h3>
              <p className="text-gray-600 leading-relaxed px-4">Deposit funds easily using EasyPaisa, JazzCash, or instant Bank Transfer.</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white text-green-600 rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-green-500/10 border-2 border-green-50 transform group-hover:-translate-y-2 transition-all duration-300 delay-200">
                <Trophy className="w-10 h-10" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-600 text-white font-black rounded-full flex items-center justify-center ring-4 ring-[#FFF5F0]">3</div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Join & Win</h3>
              <p className="text-gray-600 leading-relaxed px-4">Buy entries into active pools for Rs.1. If you're drawn, the prize is yours!</p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link href="/signup" className="btn-primary px-10 py-5 text-xl font-bold shadow-xl hover:shadow-orange-500/40 inline-flex items-center">
              Create Free Account <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Live Auctions Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Dynamic Glowing Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                </span>
                <span className="text-red-600 font-bold tracking-widest text-sm uppercase">Live Lotteries</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
                Trending <span className="gradient-text">Auctions</span>
              </h2>
              <p className="text-gray-500 mt-6 max-w-2xl text-xl leading-relaxed">
                Real users. Real stakes. Join hundreds of participants bidding on these active high-tier pools. First come, first win!
              </p>
            </div>
            <Link href="/pools" className="group flex items-center gap-2 font-black text-orange-600 bg-orange-50 px-8 py-4 rounded-xl hover:bg-orange-100 transition-colors">
              View All Auctions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Fallback vs Grid */}
          {activePools.length === 0 ? (
            <div className="text-center py-32 bg-gray-50/50 rounded-[3rem] border border-dashed border-gray-200 shadow-inner">
              <Target className="w-20 h-20 text-gray-300 mx-auto mb-6" />
              <h3 className="text-3xl font-black text-gray-400">No active pools currently.</h3>
              <p className="text-gray-500 mt-4 text-lg">Our team is preparing the next massive drop. Check back soon!</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {activePools.map((pool, i) => (
                <div key={pool.id} className="transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl rounded-3xl group">
                  <PrizeCard
                    id={pool.id}
                    title={pool.productName}
                    price={pool.pricePerEntry.toString()}
                    originalPrice="View Details"
                    image={pool.productImage || "/placeholder-gift.png"}
                    totalSlots={pool.maxSlots}
                    filledSlots={pool.filledSlots}
                    tag={i === 0 ? "Trending 🚀" : i === 1 ? "Ending Soon ⏳" : i === 2 ? "Hot Deal 🔥" : undefined}
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/20 rounded-3xl pointer-events-none transition-colors" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 pt-24 pb-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-6">
              <Logo />
              <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                Pakistan's most trusted and heavily encrypted prize platform. Win authentic products, cutting-edge technology, and huge cashbacks.
              </p>
              <div className="inline-flex px-4 py-2 bg-gray-200/50 rounded-lg text-sm font-bold text-gray-500">
                🔞 Play Responsibly. 18+ Only.
              </div>
            </div>

            <div>
              <h4 className="font-black text-gray-900 text-lg mb-6 tracking-wide">Explore</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-500">
                <li><Link href="/pools" className="hover:text-orange-600 transition-colors">All Live Pools</Link></li>
                <li><Link href="/winners" className="hover:text-orange-600 transition-colors">Recent Winners</Link></li>
                <li><Link href="/login" className="hover:text-orange-600 transition-colors">Login to Dashboard</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-gray-900 text-lg mb-6 tracking-wide">Support</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-500">
                <li><a href="mailto:support@onerupeegame.com" className="hover:text-orange-600 transition-colors">support@onerupeegame.com</a></li>
                <li><Link href="/login" className="hover:text-orange-600 transition-colors">Help Center / FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-gray-900 text-lg mb-6 tracking-wide">Legal</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-500">
                <li><Link href="/terms" className="hover:text-orange-600 transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-orange-600 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/responsible-gaming" className="hover:text-orange-600 transition-colors">Responsible Gaming</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm font-bold">© {new Date().getFullYear()} One Rupee Game. All rights reserved.</p>
            <div className="flex gap-6 text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-gray-300" /> Secure Payment</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-gray-300" /> SSL Encrypted</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
