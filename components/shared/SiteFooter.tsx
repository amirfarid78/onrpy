import Link from "next/link";
import { BadgeCheck, Scale, ShieldCheck, Lock } from "lucide-react";
import prisma from "@/lib/prisma";

const LEGAL = [
  { label: "Privacy Policy",     href: "/privacy"            },
  { label: "Terms of Service",   href: "/terms"              },
  { label: "Responsible Gaming", href: "/responsible-gaming" },
  { label: "Contact Us",         href: "/support"             },
];

const TRUST = [
  { Icon: ShieldCheck, label: "SECP Verified"     },
  { Icon: Scale,       label: "NTN Registered"    },
  { Icon: Lock,        label: "256-bit SSL"        },
];

export default async function SiteFooter() {
  const settings = await prisma.siteSetting.findUnique({ where: { id: "global" } });
  const siteName = settings?.siteName || "Zeva - One Rupee Game";
  const siteDesc = settings?.siteDescription || "Pakistan's premier prize pool platform. Fully SECP licensed and NTN registered. Transparent, fair, and instant.";
  const logoUrl = settings?.logoUrl || "";

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 w-full">
      {/* Trust bar */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap justify-center items-center gap-10 border-b border-zinc-900">
        {TRUST.map(({ Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors">
            <Icon className="w-5 h-5 text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
          </div>
        ))}
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Brand */}
        <div>
          <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent block mb-3">
            {logoUrl ? <img src={logoUrl} alt={siteName} className="h-10 object-contain max-w-[160px]" /> : siteName}
          </span>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs whitespace-pre-wrap">
            {siteDesc}
          </p>
          {/* Payment badges */}
          <div className="flex items-center gap-2 mt-5">
            <div className="px-3 py-1.5 rounded border border-white/10 text-[10px] font-black text-white bg-[#1434CB]">VISA</div>
            <div className="px-3 py-1.5 rounded border border-white/10 text-[10px] font-black text-white bg-[#3CB878]">Easypaisa</div>
            <div className="px-3 py-1.5 rounded border border-white/10 text-[10px] font-black text-white bg-[#CC0000]">JazzCash</div>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-5">Navigation</p>
          <nav className="flex flex-col gap-3">
            {[
              { label: "Live Prize Pools",  href: "/pools"      },
              { label: "Winners Hall",      href: "/winners"    },
              { label: "How It Works",      href: "/how-it-works" },
              { label: "Support Center",    href: "/support"    },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="text-zinc-500 hover:text-orange-400 transition-colors text-sm">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Legal links */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-5">Legal</p>
          <nav className="flex flex-col gap-3">
            {LEGAL.map(({ label, href }) => (
              <Link key={href} href={href} className="text-zinc-500 hover:text-orange-400 transition-colors text-sm">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-zinc-600">
            <BadgeCheck className="w-4 h-4 text-orange-500 shrink-0" />
            SECP Verified Registration No. 129481 · NTN 43210-9876-0
          </div>
          <p className="text-xs text-zinc-600">© {new Date().getFullYear()} {siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
