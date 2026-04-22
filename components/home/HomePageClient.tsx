"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ShieldCheck, BadgeCheck, RefreshCw, Wallet,
  UserPlus, CreditCard, ShoppingCart, Trophy,
  ArrowRight, Play, Star, CheckCircle2, Clock,
  ChevronRight, Sparkles, Zap, Lock, Scale
} from "lucide-react";
import SiteNav from "@/components/shared/SiteNav";
import SiteFooter from "@/components/shared/SiteFooter";
import MobileNav from "@/components/shared/MobileNav";

// ── Static images ──────────────────────────────────────────────
const HERO_MOTO   = "/hero_motorcycle.png";
const HERO_IPHONE = "/hero_iphone.png";
const HERO_GOLD   = "/hero_gold.png";

const TICKERS = [
  "🏆 Ahmed K. won Honda CG 125",
  "🎉 Fatima R. won iPhone 15 Pro Max",
  "💰 Bilal M. won 24K Gold Ring",
  "🎁 Usman T. won Rs. 50,000 Cash",
  "💻 Sara A. won MacBook Air M2",
];

interface Pool {
  id: string | null;
  title: string;
  price: string;
  badge: string;
  badgeClass: string;
  image: string;
  pct: number;
  left: string;
  ends: string;
}

export default function HomePageClient({
  displayPools,
  displayUsers,
  displayWinners = 13124,
  displayEntries = 968372,
  prizesPaid = 48600000,
}: {
  displayPools: Pool[];
  displayUsers: number;
  displayWinners?: number;
  displayEntries?: number;
  prizesPaid?: number;
}) {
  const [tickerIdx, setTickerIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTickerIdx(i => (i + 1) % TICKERS.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-950 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <SiteNav />

      {/* ═══════════════════════════════════════════════════════════
           LIVE TICKER (below fixed nav)
      ═══════════════════════════════════════════════════════════ */}
      <div
        className="fixed top-16 w-full z-40 h-9 flex items-center px-5 md:px-10 gap-3"
        style={{ background: "rgba(9,9,11,0.85)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="flex items-center gap-1.5 shrink-0 pr-4 border-r border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span className="text-red-400 text-[10px] font-black uppercase tracking-widest">Live</span>
        </div>
        <p className="text-zinc-300 text-xs font-medium truncate">
          {TICKERS[tickerIdx]}
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
           HERO  — dark mesh, floating prizes
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-mesh min-h-screen flex items-center pt-28 overflow-hidden relative">
        <div className="vibrant-mesh absolute inset-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 w-full pt-4 pb-20 lg:py-0">

          {/* Copy */}
          <div className="text-center lg:text-left">
            {/* SECP Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur px-4 py-2 rounded-full mb-8">
              <BadgeCheck className="w-4 h-4 text-orange-500 shrink-0" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">SECP Verified · NTN Registered · SSL Secured</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-[72px] font-black text-white mb-6 leading-[1.02] tracking-tight">
              Win Your<br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Dream Prizes
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Pakistan's #1 prize pool platform. Join{" "}
              <span className="text-white font-semibold">{displayUsers.toLocaleString()}+ active users</span>{" "}
              winning daily. Just Rs. 1 to enter.
            </p>

            {/* Stats row — real DB data */}
            <div className="flex justify-center lg:justify-start gap-8 mb-10">
              {[
                { val: `${(displayUsers / 1000).toFixed(0)}k+`, label: "Users"    },
                { val: `${displayWinners.toLocaleString()}+`,    label: "Winners"  },
                { val: `Rs.${(prizesPaid / 1000000).toFixed(1)}M+`, label: "Prizes Paid" },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <div className="text-xl font-black text-orange-400">{val}</div>
                  <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-10 py-4 rounded-xl font-black text-base sm:text-lg active:scale-95 transition-all"
                style={{ boxShadow: "0 10px 40px -10px rgba(249,115,22,0.65)" }}
              >
                <Sparkles className="w-5 h-5" />
                Start Winning Now
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2.5 bg-white/5 border border-white/15 backdrop-blur text-white px-7 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 active:scale-95 transition-all"
              >
                <Play className="w-4 h-4" />
                How It Works
              </Link>
            </div>
          </div>

          {/* Floating prize images */}
          <div className="relative h-[320px] sm:h-[440px] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full blur-[120px] pointer-events-none opacity-80"
                 style={{ background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)" }} />

            {/* Gold */}
            <img src={HERO_GOLD} alt="Gold Bar"
                 className="absolute z-30 w-24 sm:w-32 animate-hero-bounce-slow"
                 style={{ left: "2%", top: "6%", transform: "rotate(-20deg)", filter: "drop-shadow(0 24px 32px rgba(0,0,0,0.8))" }} />

            {/* Motorcycle */}
            <img src={HERO_MOTO} alt="Honda CG 125"
                 className="absolute z-20 w-[240px] sm:w-[340px] md:w-[400px] animate-hero-bounce"
                 style={{ filter: "drop-shadow(0 36px 36px rgba(0,0,0,0.75))" }} />

            {/* iPhone */}
            <img src={HERO_IPHONE} alt="iPhone"
                 className="absolute z-30 w-24 sm:w-32 animate-hero-bounce-fast"
                 style={{ right: "2%", top: "6%", transform: "rotate(15deg)", filter: "drop-shadow(0 24px 32px rgba(0,0,0,0.8))" }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           WHY TRUST US  — 4-card grid
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-orange-500 block mb-3">Built on Trust</span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4">Why 500,000+ Users Choose Us</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              Fintech-grade transparency and security, backed by real regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: ShieldCheck, title: "Bank-Level Security",  desc: "256-bit SSL encryption on every transaction. Your data and money are always protected." },
              { Icon: BadgeCheck,  title: "SECP Regulated",       desc: "Fully licensed under SECP. Operating legally within all Pakistani financial regulations." },
              { Icon: RefreshCw,   title: "Provably Fair Draws",  desc: "SHA-256 cryptographic algorithm ensures 100% unbiased random winner selection each draw." },
              { Icon: Zap,         title: "Instant Payouts",      desc: "Cash prizes transfer directly to your Easypaisa or JazzCash in under 60 seconds." },
            ].map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="glass-card p-8 rounded-3xl hover:border-orange-300 border border-transparent transition-all duration-300 group cursor-default hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-orange-100 group-hover:to-orange-200 transition-all">
                  <Icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-base font-black text-zinc-900 mb-3">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           HOW IT WORKS  — 4-step timeline
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-zinc-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
             style={{ background: "radial-gradient(circle at 80% 20%, #f97316, transparent 60%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-xs font-black uppercase tracking-widest text-orange-500 block mb-3">Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900">Win in 4 Simple Steps</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-orange-200 to-transparent z-0" />

            {[
              { n: 1, Icon: UserPlus,     title: "Create Account", desc: "Register with your phone number in under 60 seconds" },
              { n: 2, Icon: CreditCard,   title: "Add Balance",    desc: "Deposit via Easypaisa or JazzCash instantly"          },
              { n: 3, Icon: ShoppingCart, title: "Buy Entry",      desc: "Select your dream prize — entries from just Rs. 1"   },
              { n: 4, Icon: Trophy,       title: "Win & Claim",    desc: "Winners selected live, prizes delivered to your door" },
            ].map(({ n, Icon, title, desc }) => (
              <div key={n} className="relative z-10 flex flex-col items-center text-center">
                {/* Numbered step circle */}
                <div className="w-20 h-20 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center text-2xl font-black mb-6 shadow-xl text-zinc-900"
                     style={{ boxShadow: "0 8px 24px -4px rgba(249,115,22,0.25)" }}>
                  {n}
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm w-full border border-zinc-100 hover:border-orange-100 hover:shadow-md transition-all">
                  <Icon className="w-6 h-6 text-orange-400 mx-auto mb-3" />
                  <h3 className="font-black text-zinc-900 mb-2 text-sm">{title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/how-it-works"
                  className="inline-flex items-center gap-2 text-orange-500 font-black hover:underline text-sm">
              Learn More in Detail <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           LIVE PRIZE POOLS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-orange-500 block mb-2">Available Now</span>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900">Live Prize Pools</h2>
            </div>
            <Link href="/pools" className="inline-flex items-center gap-2 text-orange-500 font-black hover:underline text-sm shrink-0">
              View All Draws <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayPools.map((pool, i) => (
              <div key={pool.id ?? i}
                   className="glass-card rounded-[2rem] overflow-hidden border border-zinc-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
                {/* Prize image */}
                <div className="relative bg-zinc-50 flex items-center justify-center p-10" style={{ aspectRatio: "1 / 1" }}>
                  <img src={pool.image} alt={pool.title}
                       className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                       style={{ filter: "drop-shadow(0 10px 24px rgba(0,0,0,0.14))" }} />
                  <span className={`absolute top-5 left-5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${pool.badgeClass}`}>
                    {pool.badge}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-black text-zinc-900 mb-4">{pool.title}</h3>

                  <div className="flex justify-between text-xs font-black mb-2">
                    <span className="text-zinc-400">Rs. {pool.price} Entry</span>
                    <span className={pool.pct > 85 ? "text-red-500" : "text-orange-500"}>{pool.pct}% Sold</span>
                  </div>

                  <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                         style={{ width: `${pool.pct}%` }} />
                  </div>

                  <div className="flex items-center justify-between mb-7">
                    <p className="text-zinc-400 text-xs">{pool.left}</p>
                    <div className="flex items-center gap-1 text-xs text-zinc-400">
                      <Clock className="w-3 h-3" />
                      {pool.ends}
                    </div>
                  </div>

                  <Link
                    href={pool.id ? `/pools/${pool.id}` : "/login"}
                    className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-black text-base active:scale-95 transition-all"
                    style={{ boxShadow: "0 10px 40px -10px rgba(249,115,22,0.5)" }}
                  >
                    Buy Entry Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           HALL OF FAME  — dark
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none"
             style={{ background: "radial-gradient(circle at 30% 60%, rgba(249,115,22,0.12), transparent 60%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-14">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-orange-500 block mb-3">Real Pakistanis Winning</span>
              <h2 className="text-4xl sm:text-5xl font-black">Hall of Fame</h2>
              <p className="text-zinc-400 mt-2">SECP-verified winners. No actors, no scripts.</p>
            </div>
            <Link href="/winners" className="inline-flex items-center gap-2 text-orange-400 font-black hover:underline text-sm shrink-0">
              Full Hall of Fame <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "/winner1.jpg", name: "Ahmed K., Karachi",   prize: "Won iPhone 15 Pro Max", tier: "Tech"  },
              { img: "/winner2.jpg", name: "Fatima R., Lahore",   prize: "Won Honda CG 125",      tier: "Bike"  },
              { img: "/winner3.jpg", name: "Bilal M., Islamabad", prize: "Won 24K Gold Bar",      tier: "Gold"  },
            ].map((w, i) => (
              <div key={i} className="dark-glass rounded-3xl overflow-hidden group">
                <div className="relative" style={{ aspectRatio: "4/5" }}>
                  <img src={w.img} alt={w.name}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end"
                       style={{ background: "linear-gradient(to top, rgba(9,9,11,0.96) 0%, transparent 55%)" }}>
                    <h4 className="text-xl font-black text-white">{w.name}</h4>
                    <p className="text-orange-400 text-sm mt-0.5 font-semibold">{w.prize}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      SECP Verified Winner
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           STATS SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#fff8f5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: `${(displayUsers / 1000).toFixed(0)}k+`,          label: "Active Users"      },
              { val: `${displayWinners.toLocaleString()}+`,             label: "Winners So Far"   },
              { val: `Rs. ${(prizesPaid / 1000000).toFixed(1)}M+`,     label: "Prizes Paid Out"  },
              { val: `${(displayEntries / 1000).toFixed(0)}k+`,         label: "Entries Sold"     },
            ].map(({ val, label }) => (
              <div key={label}>
                <div className="text-4xl sm:text-5xl font-black text-orange-500 mb-2">{val}</div>
                <p className="text-zinc-500 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           TESTIMONIALS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-orange-500 block mb-3">Social Proof</span>
            <h2 className="text-4xl font-black text-zinc-900">Real People. Real Wins.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Incredible! Won my dream iPhone. The platform is trustworthy, fast, and legitimate.", name: "Sara A.",  city: "Multan",   rating: 5 },
              { quote: "Legit and transparent. Got my JazzCash payout in under 2 minutes. Highly recommended!", name: "Ali R.",   city: "Quetta",   rating: 5 },
              { quote: "Won a motorcycle through Zeva. The delivery was on time. Amazing experience!",       name: "Zara K.",  city: "Peshawar", rating: 5 },
            ].map((t, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl border border-zinc-100 hover:shadow-lg transition-all">
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} className="w-5 h-5 text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-zinc-600 leading-relaxed mb-8 text-sm italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center font-black text-orange-600 shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-black text-zinc-900 text-sm">{t.name}</p>
                    <p className="text-xs text-zinc-400">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           FINAL CTA  — dark gradient
      ═══════════════════════════════════════════════════════════ */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #09090b 0%, #18181b 100%)" }}
      >
        <div className="absolute inset-0 opacity-15 pointer-events-none"
             style={{ background: "radial-gradient(circle at 50% 50%, rgba(249,115,22,0.4), transparent 70%)" }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Ready to Win Your<br />
            <span className="text-orange-400">Dream Prize?</span>
          </h2>
          <p className="text-zinc-400 mb-10 text-lg">Join 500,000+ Pakistanis who are winning daily. Start with just Rs. 1.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-black text-lg active:scale-95 transition-all"
              style={{ boxShadow: "0 12px 40px -8px rgba(249,115,22,0.6)" }}
            >
              Create Free Account
            </Link>
            <Link href="/pools"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-white/10 active:scale-95 transition-all">
              Browse Prize Pools <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { Icon: ShieldCheck, label: "SECP Verified"  },
              { Icon: Scale,       label: "NTN Registered" },
              { Icon: Lock,        label: "256-bit SSL"    },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-zinc-500">
                <Icon className="w-4 h-4" />
                <span className="text-xs font-bold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <MobileNav />
    </div>
  );
}
