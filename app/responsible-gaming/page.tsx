import SiteNav from "@/components/shared/SiteNav";
import SiteFooter from "@/components/shared/SiteFooter";
import MobileNav from "@/components/shared/MobileNav";
import { Heart, Phone, AlertCircle, ShieldCheck, Clock, Users } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Responsible Gaming - OneRupee" };

const PRINCIPLES = [
  {
    Icon: Clock,       title: "Set Time Limits",       desc: "Use our built-in daily time reminders to keep your gaming sessions healthy and controlled."
  },
  {
    Icon: ShieldCheck, title: "Deposit Limits",         desc: "Set daily, weekly, or monthly deposit limits on your account to stay within your budget."
  },
  {
    Icon: AlertCircle, title: "Self-Exclusion",         desc: "If you need a break, our self-exclusion tool locks your account for a period of your choice."
  },
  {
    Icon: Users,       title: "Underage Protection",   desc: "OneRupee is strictly 18+. We use CNIC verification to prevent underage participation."
  },
];

const SIGNS = [
  "Spending more than you can afford to lose",
  "Neglecting work, family or responsibilities",
  "Borrowing money to fund entries",
  "Chasing losses with more entries",
  "Hiding your activity from loved ones",
  "Feeling anxious or irritable when not playing",
];

export default function ResponsibleGamingPage() {
  return (
    <div className="min-h-screen bg-[#fff8f5] text-zinc-900 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <SiteNav />

      <main className="max-w-5xl mx-auto px-6 pt-28 pb-20 md:pt-32">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-red-500" />
          </div>
          <span className="inline-block text-xs font-black uppercase tracking-widest text-orange-500 mb-4 bg-orange-50 px-4 py-2 rounded-full">We Care</span>
          <h1 className="text-5xl font-black tracking-tight mb-4">Responsible Gaming</h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            OneRupee is committed to promoting responsible gaming practices. We believe that gaming should be fun, safe, and within your means.
          </p>
        </div>

        {/* Principles */}
        <section className="mb-20">
          <h2 className="text-3xl font-black mb-8">Our Responsible Gaming Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PRINCIPLES.map(({ Icon, title, desc }) => (
              <div key={title} className="glass-card p-7 rounded-3xl border border-zinc-100 shadow-sm">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-black mb-2">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Warning signs */}
        <section className="mb-20 bg-red-50 border border-red-100 rounded-3xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-7 h-7 text-red-500 shrink-0" />
            <h2 className="text-2xl font-black text-red-800">Warning Signs to Watch For</h2>
          </div>
          <p className="text-red-700 text-sm mb-6">If you recognize any of these signs in yourself, please reach out for help immediately:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SIGNS.map((s, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-red-200 text-red-700 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">!</span>
                <span className="text-red-700 text-sm">{s}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Help section */}
        <section className="bg-zinc-900 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-black mb-4">Need Help? We&apos;re Here</h2>
              <p className="text-zinc-400 leading-relaxed text-sm mb-6">
                If you or someone you know needs support with problem gambling, please reach out to our dedicated responsible gaming team or contact a professional helpline.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                  <Phone className="w-5 h-5 text-orange-400 shrink-0" />
                  <div>
                    <p className="text-xs text-zinc-400">National Helpline</p>
                    <p className="font-black text-orange-400">0800-ONERUPEE</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                  <Heart className="w-5 h-5 text-red-400 shrink-0" />
                  <div>
                    <p className="text-xs text-zinc-400">Email Support</p>
                    <p className="font-black">safe@onerupeegame.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-black active:scale-95 transition-all"
                      style={{ boxShadow: "0 8px 20px -4px rgba(249,115,22,0.4)" }}>
                Set Account Limits
              </button>
              <button className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-white py-4 rounded-xl font-bold active:scale-95 transition-all">
                Request Self-Exclusion
              </button>
              <Link href="/support" className="block w-full text-center bg-transparent border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white py-4 rounded-xl font-bold active:scale-95 transition-all">
                Talk to Support Team
              </Link>
            </div>
          </div>
        </section>

        {/* SECP Note */}
        <div className="text-center text-zinc-400 text-sm">
          <ShieldCheck className="w-5 h-5 text-orange-500 mx-auto mb-2" />
          OneRupee complies fully with SECP responsible gaming guidelines. SECP Registration #904122-0/A
        </div>
      </main>

      <SiteFooter />
      <MobileNav />
    </div>
  );
}
