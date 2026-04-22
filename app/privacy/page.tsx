import SiteNav from "@/components/shared/SiteNav";
import SiteFooter from "@/components/shared/SiteFooter";
import MobileNav from "@/components/shared/MobileNav";
import { Shield, Lock, Eye, Database, UserCheck } from "lucide-react";

export const metadata = { title: "Privacy Policy - OneRupee" };

const SECTIONS = [
  {
    Icon: Database, title: "Information We Collect",
    content: `We collect personal information you provide when registering, including your name, mobile number, CNIC number, and payment wallet details. We also collect transactional data, device identifiers, and usage analytics to improve our services. All data is stored on encrypted servers within Pakistan.`
  },
  {
    Icon: Eye, title: "How We Use Your Information",
    content: `Your information is used to: (1) verify your identity and ensure regulatory compliance, (2) process transactions and prize distributions, (3) send draw notifications and account updates, (4) prevent fraud and ensure platform security, (5) improve our services through anonymized analytics. We do not sell your personal data to third parties.`
  },
  {
    Icon: Lock, title: "Data Security",
    content: `OneRupee employs 256-bit SSL encryption for all data transmissions. Our databases use AES-256 encryption at rest. Access to personal data is restricted to authorized personnel only and is logged and audited. We conduct regular security assessments and penetration testing.`
  },
  {
    Icon: UserCheck, title: "Your Rights",
    content: `Under Pakistani data protection law and our platform policies, you have the right to: access your personal data, correct inaccurate information, delete your account and associated data (subject to legal retention requirements), opt out of marketing communications, and lodge complaints with relevant authorities.`
  },
  {
    Icon: Shield, title: "Data Retention",
    content: `We retain your personal data for the duration of your account activity plus 7 years as required by Pakistani financial regulations and SECP compliance requirements. Transaction records are maintained for audit purposes. You may request deletion of non-mandatory data at any time.`
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fff8f5] text-zinc-900 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <SiteNav />

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-20 md:pt-32">
        {/* Hero */}
        <div className="mb-16">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-orange-500 mb-4 bg-orange-50 px-4 py-2 rounded-full">Legal Document</span>
          <h1 className="text-5xl font-black tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-zinc-500 text-lg mb-2">Effective date: January 1, 2024 · Last updated: June 1, 2024</p>
          <p className="text-zinc-600 leading-relaxed">
            OneRupee ("we," "our," or "us") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our platform.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {SECTIONS.map(({ Icon, title, content }, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl border border-zinc-100 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-xl font-black mb-3">{title}</h2>
                  <p className="text-zinc-600 leading-relaxed text-sm">{content}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Contact */}
          <div className="bg-zinc-900 rounded-3xl p-8 text-white">
            <h2 className="text-xl font-black mb-3">Contact Our Privacy Team</h2>
            <p className="text-zinc-400 text-sm mb-4">For privacy-related queries, data access requests, or complaints:</p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-zinc-400 text-xs mb-1">Email</p>
                <p className="font-bold text-orange-400">privacy@onerupeegame.com</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-zinc-400 text-xs mb-1">Response Time</p>
                <p className="font-bold">Within 72 hours</p>
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
