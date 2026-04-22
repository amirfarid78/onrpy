"use client";
import Link from "next/link";
import { useState } from "react";
import {
  MessageCircle, Phone, Mail, Shield, Scale, FileText, ChevronDown,
  MapPin, Clock, BadgeCheck, Search, ArrowRight
} from "lucide-react";
import SiteNav from "@/components/shared/SiteNav";
import SiteFooter from "@/components/shared/SiteFooter";
import MobileNav from "@/components/shared/MobileNav";

const FAQS = [
  {
    q: "How is the winner selected for the Mega Draw?",
    a: "Every OneRupee draw is powered by a verified cryptographic Provably Fair algorithm (SHA-256). Results are immutable and can be cross-verified by participants using their ticket ID and the draw seed on the blockchain explorer."
  },
  {
    q: "Withdrawal limits and timings?",
    a: "You can withdraw instantly up to Rs. 50,000 per transaction. Larger amounts are processed within 24 hours. Funds are transferred directly to your Easypaisa or JazzCash wallet."
  },
  {
    q: "Age Restrictions?",
    a: "Users must be 18 years or older to register on OneRupee. KYC verification is mandatory for prizes valued over Rs. 10,000. We take responsible gaming very seriously."
  },
  {
    q: "What happens if I win a physical prize?",
    a: "Winners of luxury items (cars, motorcycles, electronics) are contacted via phone within 24 hours. Delivery is arranged to your verified address anywhere in Pakistan, fully covered by OneRupee."
  },
  {
    q: "Is OneRupee legal and secure?",
    a: "Yes, OneRupee is SECP & NTN verified. We use banking-grade encryption to protect your data and funds. Our operations are fully transparent and regulated under Pakistani law."
  },
  {
    q: "How do I add balance to my account?",
    a: "You can add balance via Easypaisa, JazzCash, bank transfer, or debit card. Minimum deposit is Rs. 1. Balance is credited instantly to your OneRupee wallet."
  },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#fff8f5] text-zinc-900 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <SiteNav />

      <main className="max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-32">

        {/* ── Hero Search ───────────────────────────────── */}
        <section className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">How can we help you win?</h1>
          
          {/* Search bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Search for prizes, draw rules, or wallet issues..."
              className="w-full pl-14 pr-6 py-5 rounded-full bg-white border border-zinc-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-base transition-all"
            />
          </div>

          {/* Quick tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {["MEGA DRAW RULES", "WALLET RECHARGE", "CLAIMING PRIZES", "VERIFICATION", "WITHDRAWAL", "KYC PROCESS"].map(t => (
              <span
                key={t}
                className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-xs font-black uppercase tracking-wider cursor-pointer hover:bg-orange-500 hover:text-white transition-all"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* ── Contact Cards ─────────────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Live Chat */}
          <div className="glass-card p-8 rounded-3xl border border-white/60 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg"
                 style={{ boxShadow: "0 8px 20px rgba(249,115,22,0.3)" }}>
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Live Chat</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">Instant support from our concierge team. Typical response time: 2 mins.</p>
            <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl active:scale-95 transition-all"
                    style={{ boxShadow: "0 8px 20px -4px rgba(249,115,22,0.4)" }}>
              Start Chat
            </button>
          </div>

          {/* WhatsApp */}
          <div className="glass-card p-8 rounded-3xl border border-white/60 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg"
                 style={{ boxShadow: "0 8px 20px rgba(37,211,102,0.3)" }}>
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">WhatsApp Direct</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">Official support channel for quick prize queries and updates.</p>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold rounded-xl text-center active:scale-95 transition-all"
            >
              Message WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="glass-card p-8 rounded-3xl border border-white/60 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Email Ticket</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">For complex issues and verification documentation needs.</p>
            <a
              href="mailto:support@onerupeegame.com"
              className="block w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-xl text-center active:scale-95 transition-all"
            >
              Submit Ticket
            </a>
          </div>
        </section>

        {/* ── Legal & Compliance ────────────────────────── */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-black whitespace-nowrap">Legal &amp; Compliance</h2>
            <div className="h-px flex-grow bg-zinc-200" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Text */}
            <div className="space-y-6">
              <p className="text-zinc-600 leading-relaxed text-base">
                OneRupee is a fully licensed and regulated digital micro-transaction platform. We operate under strict compliance with the Securities and Exchange Commission of Pakistan (SECP) and maintain transparent tax contributions (NTN) to ensure every rupee spent is secure and every win is legitimate.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-zinc-100 shadow-sm">
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-400 block mb-1">SECP Registration</span>
                  <span className="text-lg font-black text-zinc-900">#904122-0/A</span>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-zinc-100 shadow-sm">
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-400 block mb-1">NTN Number</span>
                  <span className="text-lg font-black text-zinc-900">43210-9876-0</span>
                </div>
              </div>

              <div className="flex gap-6">
                <Link href="/privacy" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:underline text-sm">
                  <FileText className="w-4 h-4" /> Privacy Policy
                </Link>
                <Link href="/terms" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:underline text-sm">
                  <Scale className="w-4 h-4" /> Terms of Service
                </Link>
                <Link href="/responsible-gaming" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:underline text-sm">
                  <Shield className="w-4 h-4" /> Gaming Policy
                </Link>
              </div>
            </div>

            {/* Doc images */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "VIEW SECP CERTIFICATE", bg: "from-orange-100 to-orange-200" },
                { label: "VIEW NTN FILING",        bg: "from-zinc-100 to-zinc-200" },
              ].map(({ label, bg }) => (
                <div key={label} className="group cursor-pointer">
                  <div className={`aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br ${bg} border border-zinc-100 shadow-sm relative`}>
                    <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-zinc-900/50 to-transparent">
                      <span className="text-white text-[10px] font-black uppercase tracking-widest">{label}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BadgeCheck className="w-16 h-16 text-orange-400 opacity-40" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ Bento ─────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-10">Frequently Asked Questions</h2>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${openFaq === i ? "border-orange-200 shadow-lg" : "border-white/50"}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex justify-between items-center p-6">
                  <h4 className="font-bold text-zinc-900 text-base pr-4">{faq.q}</h4>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </div>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-zinc-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact info strip ────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white rounded-3xl border border-zinc-100 shadow-sm p-8">
          {[
            { Icon: MapPin,  label: "Office",   val: "Karachi, Pakistan"              },
            { Icon: Clock,   label: "Hours",    val: "Mon–Sat, 9am–10pm PKT"         },
            { Icon: Mail,    label: "Email",    val: "support@onerupeegame.com"       },
          ].map(({ Icon, label, val }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-0.5">{label}</p>
                <p className="text-sm font-semibold text-zinc-900">{val}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
      <MobileNav />
    </div>
  );
}
