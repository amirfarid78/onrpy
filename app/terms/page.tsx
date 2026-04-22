import SiteNav from "@/components/shared/SiteNav";
import SiteFooter from "@/components/shared/SiteFooter";
import MobileNav from "@/components/shared/MobileNav";
import { Scale, FileText, AlertTriangle, CreditCard, Trophy, Lock } from "lucide-react";

export const metadata = { title: "Terms of Service - OneRupee" };

const SECTIONS = [
  {
    Icon: FileText, title: "1. Acceptance of Terms",
    content: `By accessing or using the OneRupee platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform. We reserve the right to modify these terms at any time with prior notice.`
  },
  {
    Icon: Scale, title: "2. Eligibility",
    content: `You must be at least 18 years of age and a resident of Pakistan to use OneRupee. By registering, you confirm that the information you provide is accurate and that you meet all eligibility requirements. OneRupee reserves the right to verify your identity and refuse service to anyone.`
  },
  {
    Icon: CreditCard, title: "3. Account & Payments",
    content: `Users are responsible for maintaining the confidentiality of their account credentials. All transactions are processed in Pakistani Rupees (PKR). Deposits are non-refundable once used to purchase entries. Unused wallet balance may be withdrawn subject to verification requirements.`
  },
  {
    Icon: Trophy, title: "4. Draw Rules & Prize Claims",
    content: `Each draw has a specified number of entries, entry price, and prize. Winners are selected using our certified SHA-256 Provably Fair algorithm. Prize claims must be initiated within 30 days of the draw. Winners of physical prizes must provide verified delivery address and valid CNIC.`
  },
  {
    Icon: AlertTriangle, title: "5. Prohibited Activities",
    content: `Users are prohibited from: creating multiple accounts, using automated bots to purchase entries, attempting to hack or manipulate the platform, engaging in money laundering or fraudulent activities, sharing account credentials, or violating any applicable Pakistani laws.`
  },
  {
    Icon: Lock, title: "6. Limitation of Liability",
    content: `OneRupee's liability is limited to the value of your unused wallet balance. We are not liable for losses arising from technical failures, user error, or third-party payment gateway issues. Our platform operates as a digital prize pool intermediary under SECP regulations.`
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fff8f5] text-zinc-900 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <SiteNav />

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-20 md:pt-32">
        <div className="mb-16">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-orange-500 mb-4 bg-orange-50 px-4 py-2 rounded-full">Legal Document</span>
          <h1 className="text-5xl font-black tracking-tight mb-4">Terms of Service</h1>
          <p className="text-zinc-500 text-lg mb-2">Effective date: January 1, 2024 · Last updated: June 1, 2024</p>
          <p className="text-zinc-600 leading-relaxed">
            These Terms of Service govern your use of the OneRupee platform. Please read them carefully before participating in any draw or prize pool.
          </p>
        </div>

        <div className="space-y-8">
          {SECTIONS.map(({ Icon, title, content }, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl border border-zinc-100 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-lg font-black mb-3">{title}</h2>
                  <p className="text-zinc-600 leading-relaxed text-sm">{content}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-zinc-900 rounded-3xl p-8 text-white">
            <h2 className="text-xl font-black mb-3">Questions About Our Terms?</h2>
            <p className="text-zinc-400 text-sm mb-4">Our legal team is available to clarify any aspect of these terms:</p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-zinc-400 text-xs mb-1">Email</p>
                <p className="font-bold text-orange-400">legal@onerupeegame.com</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-zinc-400 text-xs mb-1">Governing Law</p>
                <p className="font-bold">Laws of Pakistan (SECP)</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
      <MobileNav />
    </div>
  );
}
