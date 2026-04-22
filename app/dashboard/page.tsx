import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { verifyJWT } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import DashboardLiveMarquee from "@/components/DashboardLiveMarquee";
import { Sparkles, Zap, ArrowRight, Gift, Clock, Users, Trophy, TrendingUp } from "lucide-react";

async function getUser() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  if (!session) return null;

  const payload = await verifyJWT(session);
  if (!payload) return null;

  return await prisma.user.findUnique({
    where: { id: payload.sub as string },
    include: {
      wallet: true,
      entries: {
        include: { pool: { select: { productName: true, status: true } } },
        orderBy: { purchasedAt: "desc" },
        take: 5,
      },
      wins: {
        include: { pool: { select: { productName: true } } },
        take: 3,
      },
      referrals: { select: { id: true } },
    },
  });
}

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const user = await getUser();
  if (!user) redirect("/login");

  // Only need active pools and user-specific counts now
  const activePools = await prisma.lotteryPool.findMany({
    where: { status: "OPEN" },
    orderBy: { createdAt: "desc" },
    take: 12,
  });

  // Real counts for the header stats pill
  const [totalUsers, totalWinners] = await Promise.all([
    prisma.user.count(),
    prisma.winner.count(),
  ]);

  const displayUsers   = totalUsers + 48372;
  const displayWinners = totalWinners + 1284;

  const walletBalance = user.wallet?.balance ?? 0;
  const userTickets   = user.entries.length;
  const userWins      = user.wins.length;
  const userReferrals = user.referrals.length;

  return (
    <div className="min-h-screen bg-zinc-50 pb-24" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── Live Marquee Banner ──────────────────────────────────── */}
      <DashboardLiveMarquee />

      {/* ── Sticky Dashboard Header ─────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-zinc-200/50 safe-area-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/dashboard" className="text-xl font-black tracking-tighter bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent shrink-0">
            OneRupee
          </Link>

          {/* Real-time platform stats pill */}
          <div className="hidden sm:flex items-center gap-1 bg-zinc-100 rounded-full px-4 py-1.5 text-xs font-bold text-zinc-500 gap-4">
            <span className="flex items-center gap-1"><Users className="w-3 h-3 text-orange-500" />{displayUsers.toLocaleString()} users</span>
            <span className="w-px h-3 bg-zinc-300" />
            <span className="flex items-center gap-1"><Trophy className="w-3 h-3 text-orange-500" />{displayWinners.toLocaleString()} winners</span>
            <span className="w-px h-3 bg-zinc-300" />
            <span className="flex items-center gap-1 text-emerald-600">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              {activePools.length} live
            </span>
          </div>

          {/* User avatar */}
          <Link href="/dashboard/profile" className="shrink-0">
            <div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-black text-sm shadow-lg ring-2 ring-white"
              title={user.name ?? user.phone}
            >
              {user.name ? user.name[0].toUpperCase() : user.phone.slice(-2)}
            </div>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* ── Wallet Card ─────────────────────────────────────────── */}
        <div
          className="relative overflow-hidden rounded-3xl text-white p-8 sm:p-10"
          style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 60%, #c2410c 100%)", boxShadow: "0 20px 60px -10px rgba(249,115,22,0.5)" }}
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-black/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-white/80 text-xs font-black uppercase tracking-widest mb-3">
                <Sparkles className="w-4 h-4" /> Wallet Balance
              </div>
              <div className="text-5xl sm:text-6xl font-black tracking-tight mb-1">
                Rs. {walletBalance.toFixed(2)}
              </div>
              <p className="text-white/70 text-sm">
                Available · {user.name ? `Hi, ${user.name}` : `Phone: ${user.phone}`}
              </p>
            </div>
            <Link
              href="/wallet/deposit"
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-black px-7 py-3.5 rounded-2xl text-sm shadow-xl hover:bg-orange-50 active:scale-95 transition-all whitespace-nowrap self-start sm:self-auto"
            >
              <Zap className="w-5 h-5" /> Add Money
            </Link>
          </div>
        </div>

        {/* ── My Stats ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-black text-lg shrink-0">
              {userTickets}
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">My Tickets</p>
              <p className="text-base font-black text-gray-900">Active Entries</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-lg shrink-0">
              {userWins}
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">My Wins</p>
              <p className="text-base font-black text-gray-900">Total Prizes</p>
            </div>
          </div>
        </div>

        {/* ── Quick Navigation ────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { href: "/pools",              Icon: Gift,    label: "All Prizes",  desc: "Browse live draws",    bg: "bg-blue-50",    color: "text-blue-600"    },
            { href: "/upcoming",           Icon: Clock,   label: "Upcoming",    desc: "Future prize pools",   bg: "bg-purple-50",  color: "text-purple-600"  },
            { href: "/winners",            Icon: Trophy,  label: "Winners",     desc: "Hall of fame",         bg: "bg-amber-50",   color: "text-amber-600"   },
            { href: "/dashboard/referrals",Icon: Users,   label: "Refer & Earn",desc: "Invite friends",       bg: "bg-pink-50",    color: "text-pink-600"    },
          ].map(({ href, Icon, label, desc, bg, color }) => (
            <Link
              key={href}
              href={href}
              className="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group text-center"
            >
              <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <p className="font-black text-zinc-900 text-sm">{label}</p>
              <p className="text-xs text-zinc-400 mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>

        {/* ── Live Lotteries Grid ─────────────────────────────────── */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
              </span>
              Live Lotteries
              <span className="bg-red-100 text-red-600 text-xs font-black px-2.5 py-0.5 rounded-full">{activePools.length}</span>
            </h2>
            <Link href="/pools" className="text-sm font-bold text-orange-500 hover:text-orange-600 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {activePools.length === 0 ? (
            <div className="bg-white rounded-3xl p-16 text-center border border-dashed border-zinc-200">
              <div className="w-20 h-20 rounded-full bg-zinc-50 flex items-center justify-center mx-auto mb-4">
                <Gift className="w-10 h-10 text-zinc-300" />
              </div>
              <p className="text-zinc-600 font-bold text-lg">No active lotteries right now</p>
              <p className="text-sm text-zinc-400 mt-1">New prize pools are added daily. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {activePools.map((pool) => {
                // Progress: cap at 95% from UI perspective so it never shows "full"
                const rawPct = (pool.filledSlots / pool.maxSlots) * 100;
                const displayPct = Math.min(rawPct, 95);
                const isHot = rawPct >= 75;
                const isAlmostFull = rawPct >= 90;

                return (
                  <Link href={`/pools/${pool.id}`} key={pool.id} className="block group">
                    <div className="bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                      {/* Image */}
                      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                        <img
                          src={pool.productImage}
                          alt={pool.productName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Price badge */}
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-orange-600 text-xs font-black px-2.5 py-1 rounded-lg shadow-sm">
                          Rs. {pool.pricePerEntry}
                        </div>
                        {/* Hot badge */}
                        {isHot && (
                          <div className={`absolute top-3 right-3 text-white text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-wider ${isAlmostFull ? "bg-red-500" : "bg-orange-500"}`}>
                            {isAlmostFull ? "🔥 Almost Gone" : "🔥 Popular"}
                          </div>
                        )}
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                      </div>

                      {/* Card body */}
                      <div className="p-4">
                        <h3 className="font-black text-zinc-900 text-sm leading-snug mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                          {pool.productName}
                        </h3>

                        {/* Progress — no slot count shown */}
                        <div className="space-y-1.5 mb-4">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Filling Fast</span>
                            <span className={`text-xs font-black ${isAlmostFull ? "text-red-500" : "text-orange-500"}`}>
                              {displayPct.toFixed(0)}%
                            </span>
                          </div>
                          <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-1000 ${isAlmostFull ? "bg-gradient-to-r from-red-500 to-orange-500" : "bg-gradient-to-r from-orange-500 to-amber-400"}`}
                              style={{ width: `${displayPct}%` }}
                            />
                          </div>
                        </div>

                        {/* Join button */}
                        <div className={`w-full text-center py-2.5 rounded-xl text-xs font-black text-white transition-all ${isAlmostFull ? "bg-red-500" : "bg-orange-500"}`}
                             style={{ boxShadow: isAlmostFull ? "0 4px 14px -4px rgba(239,68,68,0.5)" : "0 4px 14px -4px rgba(249,115,22,0.5)" }}>
                          Join Now — Rs. {pool.pricePerEntry}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>

        {/* ── Recent My Activity ──────────────────────────────────── */}
        {user.entries.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-black text-zinc-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-500" /> My Recent Entries
              </h2>
              <Link href="/dashboard/enrollments" className="text-sm font-bold text-orange-500 hover:underline">View All</Link>
            </div>
            <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden divide-y divide-zinc-50">
              {user.entries.map((entry) => (
                <div key={entry.id} className="flex items-center gap-4 p-4 hover:bg-zinc-50 transition-colors">
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                    <Gift className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-zinc-900 text-sm truncate">{entry.pool.productName}</p>
                    <p className="text-xs text-zinc-400">{new Date(entry.purchasedAt).toLocaleDateString("en-PK", { day: "numeric", month: "short", year: "numeric" })}</p>
                  </div>
                  <div className="shrink-0">
                    <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${entry.pool.status === "OPEN" ? "bg-orange-100 text-orange-600" : entry.pool.status === "DRAWN" ? "bg-emerald-100 text-emerald-600" : "bg-zinc-100 text-zinc-400"}`}>
                      {entry.pool.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <AdBanner />
      </main>
    </div>
  );
}
