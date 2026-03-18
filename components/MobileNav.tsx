"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Ticket, Wallet, User, Users } from "lucide-react";

export default function MobileNav() {
    const pathname = usePathname();

    const navItems = [
        { href: "/dashboard", icon: Home, label: "Home" },
        { href: "/pools", icon: Ticket, label: "Lotteries" },
        { href: "/dashboard/referrals", icon: Users, label: "Refer" },
        { href: "/wallet/deposit", icon: Wallet, label: "Wallet" },
        { href: "/dashboard/profile", icon: User, label: "Profile" },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 safe-area-bottom z-50 md:hidden shadow-2xl">
            <div className="flex justify-around items-center h-16 px-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 relative group ${isActive ? "text-orange-600" : "text-gray-400"
                                }`}
                        >
                            {isActive && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-b-full" />
                            )}
                            <div className={`transform transition-transform duration-200 ${isActive ? "scale-110" : "group-hover:scale-105"}`}>
                                <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
                            </div>
                            <span className={`text-xs mt-1 font-semibold ${isActive ? "text-orange-600" : "text-gray-500"}`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
