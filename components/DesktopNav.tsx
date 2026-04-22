"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Ticket, Wallet, User, Users, LogOut, Trophy, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function DesktopNav() {
    const pathname = usePathname();
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

    const navItems = [
        { href: "/dashboard", icon: Home, label: "Dashboard" },
        { href: "/pools", icon: Ticket, label: "Lotteries" },
        { href: "/upcoming", icon: Clock, label: "Upcoming" },
        { href: "/winners", icon: Trophy, label: "Winners" },
        { href: "/dashboard/referrals", icon: Users, label: "Refer & Earn" },
        { href: "/wallet/deposit", icon: Wallet, label: "Wallet" },
        { href: "/dashboard/profile", icon: User, label: "Profile" },
    ];

    return (
        <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col fixed inset-y-0 z-50">
            <div className="p-6 border-b border-gray-100 flex items-center justify-center">
                {logoUrl ? (
                    <img src={logoUrl} alt={siteName} className="h-10 object-contain w-auto max-w-[150px]" />
                ) : (
                    <div>
                        <h1 className="text-xl font-black gradient-text truncate" title={siteName}>
                            {siteName}
                        </h1>
                        <p className="text-[10px] text-gray-500 mt-0.5">Win Big, Pay Small</p>
                    </div>
                )}
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                    ? "bg-orange-50 text-orange-600 font-bold shadow-sm"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                        >
                            <div className={`p-2 rounded-lg transition-colors ${isActive ? "bg-white text-orange-600 shadow-sm" : "bg-gray-50 text-gray-500 group-hover:bg-white group-hover:shadow-sm"
                                }`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-sm">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-gray-100">
                <button
                    onClick={async () => {
                        // Handle logout via API then clear client fallback cookie
                        await fetch('/api/auth/logout', { method: 'POST' });
                        document.cookie = "session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                        window.location.href = "/login";
                    }}
                    className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl w-full transition-colors text-sm font-medium"
                >
                    <div className="p-2 rounded-lg bg-red-50 text-red-600">
                        <LogOut className="w-5 h-5" />
                    </div>
                    Logout
                </button>
            </div>
        </aside>
    );
}
