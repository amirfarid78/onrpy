"use client";
import Link from "next/link";
import { useState } from "react";
import {
  UserPlus, Wallet, ShoppingCart, Trophy, Play,
  ShieldCheck, Scale, Lock, ChevronDown
} from "lucide-react";
import SiteNav from "@/components/shared/SiteNav";
import SiteFooter from "@/components/shared/SiteFooter";
import MobileNav from "@/components/shared/MobileNav";

const STEPS = [
  {
    n: 1, Icon: UserPlus, title: "Create Account",
    desc: "Sign up in seconds with your phone number. No complex forms required. KYC takes under 2 minutes.",
    color: "from-orange-500 to-orange-600",
    detail: ["Phone number verification", "CNIC verification for KYC", "Profile setup (optional)"]
  },
  {
    n: 2, Icon: Wallet, title: "Add Balance",
    desc: "Deposit funds via secure bank transfer or mobile wallets instantly. Minimum deposit is just Rs. 1.",
    color: "from-blue-500 to-blue-600",
    detail: ["Easypaisa wallet deposit", "JazzCash wallet deposit", "Bank transfer (IBT)"]
  },
  {
    n: 3, Icon: ShoppingCart, title: "Buy Entry",
    desc: "Select your favorite prize pool and buy entries for as low as 1 Rupee. Multiple entries allowed.",
    color: "from-emerald-500 to-emerald-600",
    detail: ["Browse live prize pools", "Select entry quantity", "Instant ticket confirmation"]
  },
  {
    n: 4, Icon: Trophy, title: "Win & Claim",
    desc: "Winners are picked live via SHA-256 algorithm. Winnings are credited to your wallet instantly.",
    color: "from-yellow-500 to-orange-500",
    detail: ["Live draw broadcast", "Instant wallet credit", "Physical prize doorstep delivery"]
  },
];

const FAQS = [
  { q: "Is OneRupee legal and secure?", a: "Yes, OneRupee is SECP & NTN verified. We use banking-grade 256-bit encryption to protect your data and funds, with full regulatory compliance under Pakistani law." },
  { q: "How are winners selected?", a: "Every draw uses a cryptographically secure SHA-256 Provably Fair algorithm. All results are published on-chain and can be independently verified by any participant." },
  { q: "How do I withdraw my winnings?", a: "Cash winnings are transferred directly to your Easypaisa or JazzCash wallet within minutes. Physical prizes are delivered to your verified address within 7 days." },
  { q: "Is there a limit on entries?", a: "You can buy unlimited entries per draw as long as slots are available. Each entry gives you an equal chance of winning. The more entries, the higher your chances." },
];

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#fff8f5] text-zinc-900 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <SiteNav />

      <main className="pb-20">
        {/* ── Hero ─────────────────────────────────────── */}
        <section
          className="relative pt-36 pb-24 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #fff8f5 0%, #ffeadd 100%)" }}
        >
          <div className="absolute inset-0 opacity-30 pointer-events-none"
               style={{ background: "radial-gradient(circle at 80% 20%, rgba(249,115,22,0.15), transparent 60%)" }} />
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-orange-600 mb-4 bg-orange-100 px-4 py-2 rounded-full">
              The Future of Winning
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-zinc-900 mb-6 leading-tight">
              Winning Big is Now<br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Just One Rupee Away</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-10">
              Experience the thrill of high-stakes rewards with fintech-level security. Transparent, fair, and incredibly simple.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black px-10 py-4 rounded-xl text-lg active:scale-95 transition-all"
              style={{ boxShadow: "0 10px 30px -5px rgba(249,115,22,0.5)" }}
            >
              Start Winning Today
            </Link>
          </div>
        </section>

        {/* ── 4-Step Flow ───────────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4">4 Steps to Win Big</h2>
              <p className="text-zinc-500 max-w-xl mx-auto">From account creation to prize in your hands — the entire OneRupee experience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEPS.map(({ n, Icon, title, desc, color, detail }) => (
                <div
                  key={n}
                  className="glass-card p-8 rounded-3xl relative group hover:-translate-y-2 transition-all duration-300 border border-zinc-100 shadow-sm"
                >
                  {/* Step number badge */}
                  <div
                    className={`absolute -top-5 left-7 w-10 h-10 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg`}
                  >
                    {n}
                  </div>

                  {/* Icon */}
                  <div className="mb-5 mt-4">
                    <Icon className="w-10 h-10 text-orange-500" />
                  </div>

                  <h3 className="text-lg font-black text-zinc-900 mb-3">{title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">{desc}</p>

                  {/* Detail list */}
                  <ul className="space-y-2">
                    {detail.map(d => (
                      <li key={d} className="flex items-center gap-2 text-xs text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Video Section ─────────────────────────────── */}
        <section className="py-24 px-6 bg-[#fff8f5]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4">See It In Action</h2>
              <p className="text-zinc-500">Watch our 60-second guide to master the OneRupee experience.</p>
            </div>
            <div
              className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl cursor-pointer group"
              style={{ aspectRatio: "16/9", background: "linear-gradient(135deg, #1a1a2e, #16213e)" }}
            >
              {/* Mockup content */}
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                <div className="absolute inset-0 opacity-20"
                     style={{ background: "radial-gradient(circle at 50% 50%, rgba(249,115,22,0.4), transparent 60%)" }} />
                <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform z-10">
                  <Play className="w-10 h-10 text-white ml-1" style={{ fill: "currentColor" }} />
                </div>
                <p className="text-white/60 text-sm z-10">Platform Overview Video</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ Section ───────────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4">Common Questions</h2>
              <p className="text-zinc-500">Everything you need to know about OneRupee</p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className={`glass-card rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 ${openFaq === i ? "border-orange-200 shadow-md" : "border-white/50"}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex justify-between items-center p-6 gap-4">
                    <h4 className="font-bold text-zinc-900">{faq.q}</h4>
                    <ChevronDown className={`w-5 h-5 text-orange-500 shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </div>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-zinc-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Trust Bar ─────────────────────────────────── */}
        <section className="py-16 border-t border-zinc-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16">
              {[
                { Icon: ShieldCheck, label: "SECP Verified" },
                { Icon: Scale,       label: "NTN Registered" },
                { Icon: Lock,        label: "256-bit SSL" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-zinc-400 hover:text-orange-500 transition-colors">
                  <Icon className="w-7 h-7" />
                  <span className="font-black text-sm uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileNav />
    </div>
  );
}
