"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Gift, Trophy, User } from "lucide-react";

export default function MobileBottomNav() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/dashboard" && pathname === "/dashboard") return true;
        if (path !== "/dashboard" && pathname.startsWith(path)) return true;
        return false;
    };

    const navItems = [
        { href: "/dashboard", label: "Home", icon: Home },
        { href: "/pools", label: "Pools", icon: Gift },
        { href: "/winners", label: "Winners", icon: Trophy },
        { href: "/dashboard/profile", label: "Profile", icon: User },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe-bottom">
            {/* Glassmorphism Container */}
            <div className="bg-white/90 backdrop-blur-lg border-t border-gray-200/50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                <div className="flex justify-around items-center h-16 sm:h-20 px-2">
                    {navItems.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300 ${active ? "text-orange-600" : "text-gray-400 hover:text-gray-600"}`}
                            >
                                {/* Active Indicator */}
                                {active && (
                                    <span className="absolute -top-[1px] w-8 h-1 bg-orange-500 rounded-b-full shadow-sm shadow-orange-500/30" />
                                )}

                                <div className={`p-1.5 rounded-xl transition-all duration-300 ${active ? "bg-orange-50 translate-y-[-2px]" : ""}`}>
                                    <item.icon
                                        className={`w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300 ${active ? "fill-orange-500 stroke-orange-600" : "stroke-current"}`}
                                        strokeWidth={active ? 2 : 1.5}
                                    />
                                </div>
                                <span className={`text-[10px] sm:text-xs font-medium transition-all duration-300 ${active ? "font-bold" : ""}`}>
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
