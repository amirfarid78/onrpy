"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, Wallet, Bell } from "lucide-react";

import { useEffect, useState } from "react";

const NAV = [
  { label: "Prizes",      href: "/pools"         },
  { label: "Winners",     href: "/winners"        },
  { label: "How It Works",href: "/how-it-works"  },
  { label: "Support",     href: "/support"        },
];

export default function SiteNav() {
  const path = usePathname();
  const [siteName, setSiteName] = useState("Zeva - One Rupee Game");
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
      fetch("/api/settings").then(r => r.json()).then(data => {
          if (data.settings) {
              setSiteName(data.settings.siteName || "Zeva - One Rupee Game");
              setLogoUrl(data.settings.logoUrl || "");
          }
      }).catch(() => {});
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-xl"
      style={{ background: "rgba(9,9,11,0.88)", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
    >
      <div className="flex justify-between items-center h-16 px-5 md:px-10 max-w-screen-xl mx-auto">
        {/* Brand */}
        <Link href="/" className="text-xl sm:text-2xl font-black tracking-tighter bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent select-none flex items-center">
          {logoUrl ? <img src={logoUrl} alt={siteName} className="h-8 md:h-10 object-contain max-w-[140px]" /> : siteName}
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {NAV.map(n => {
            const active = path === n.href || path.startsWith(n.href + "/");
            return (
              <Link
                key={n.href}
                href={n.href}
                className={active
                  ? "text-orange-500 font-bold border-b-2 border-orange-500 pb-0.5"
                  : "text-zinc-400 hover:text-white transition-colors"}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Auth block */}
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-zinc-600 hidden sm:block" />
          <Link href="/login"  className="text-zinc-400 hover:text-white transition-colors px-3 py-1.5 text-sm font-medium">Login</Link>
          <Link
            href="/signup"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-bold text-sm active:scale-95 transition-all"
            style={{ boxShadow: "0 4px 14px rgba(249,115,22,0.4)" }}
          >
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
}
