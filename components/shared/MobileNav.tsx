"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Medal, HelpCircle, Trophy, HeadphonesIcon } from "lucide-react";

const TABS = [
  { Icon: Home,           label: "Home",    href: "/"            },
  { Icon: Medal,          label: "Prizes",  href: "/pools"       },
  { Icon: Trophy,         label: "Winners", href: "/winners"     },
  { Icon: HelpCircle,     label: "How To",  href: "/how-it-works"},
  { Icon: HeadphonesIcon, label: "Support", href: "/support"     },
];

export default function MobileNav() {
  const path = usePathname();
  return (
    <>
      <nav
        className="fixed bottom-0 left-0 w-full h-16 md:hidden border-t border-white/10 flex justify-around items-center px-1 z-50 rounded-t-2xl"
        style={{ background: "rgba(9,9,11,0.95)", backdropFilter: "blur(20px)" }}
      >
        {TABS.map(({ Icon, label, href }) => {
          const active = path === href || (href !== "/" && path.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 transition-colors ${active ? "text-orange-500" : "text-zinc-500 hover:text-orange-400"}`}
            >
              <Icon className={`w-5 h-5 ${active ? "scale-110" : ""} transition-transform`} />
              <span className="text-[9px] font-bold uppercase tracking-widest">{label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="h-16 md:hidden" />
    </>
  );
}
