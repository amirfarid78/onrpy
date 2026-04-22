"use client";

import { useEffect, useState } from "react";
import { Users, Zap, Clock } from "lucide-react";

interface Props {
    poolId: string;
    initialFilledSlots: number;
    maxSlots: number;
}

interface JoinEntry {
    id: string;
    name: string;
    image: string | null;
}

// Realistic fallback names for empty pools
const FALLBACK_NAMES = [
    "Ahmed K.", "Sara M.", "Bilal R.", "Hira F.",
    "Usman T.", "Nida A.", "Zeeshan B.", "Fatima S.",
];

function maskName(name: string) {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0] + "****";
    return parts[0] + " " + parts[1][0] + ".";
}

export default function LivePoolDetail({ poolId, initialFilledSlots, maxSlots }: Props) {
    const [filledSlots, setFilledSlots] = useState(initialFilledSlots);
    const [joiners, setJoiners] = useState<JoinEntry[]>([]);

    // Poll pool stats + entries every 6 seconds
    useEffect(() => {
        async function refresh() {
            try {
                const [statsRes, entriesRes] = await Promise.all([
                    fetch("/api/pools/stats", { cache: "no-store" }),
                    fetch(`/api/pools/${poolId}/entries`, { cache: "no-store" }),
                ]);

                if (statsRes.ok) {
                    const data = await statsRes.json();
                    if (data.stats?.[poolId]) {
                        setFilledSlots(data.stats[poolId].filled);
                    }
                }

                if (entriesRes.ok) {
                    const list: JoinEntry[] = await entriesRes.json();
                    setJoiners(list.slice(0, 8));
                }
            } catch { /* keep showing last data */ }
        }

        refresh();
        const id = setInterval(refresh, 6000);
        return () => clearInterval(id);
    }, [poolId]);

    // Cap display at 95% so pool never looks "full"
    const displayPct = Math.min((filledSlots / maxSlots) * 100, 95);
    const isHot      = displayPct >= 70;
    const isAlmost   = displayPct >= 90;

    // Build display joiners list (real + padded fallbacks)
    const displayJoiners: Array<{ name: string; image: string | null; minutes: number }> =
        joiners.length > 0
            ? joiners.map((j, i) => ({ name: maskName(j.name), image: j.image, minutes: i * 3 + 1 }))
            : FALLBACK_NAMES.map((n, i) => ({ name: n, image: null, minutes: i * 7 + 2 }));

    return (
        <div className="space-y-4">
            {/* Progress Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Pool Progress</p>
                        <p className={`text-4xl font-black ${isAlmost ? "text-red-500" : "text-orange-500"}`}>
                            {displayPct.toFixed(0)}%
                        </p>
                    </div>
                    <div className="text-right">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black ${isAlmost ? "bg-red-100 text-red-600" : isHot ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-500"}`}>
                            <span className={`w-2 h-2 rounded-full ${isAlmost ? "bg-red-500 animate-ping" : isHot ? "bg-orange-500 animate-pulse" : "bg-gray-400"}`} />
                            {isAlmost ? "Filling Fast!" : isHot ? "Hot 🔥" : "Open"}
                        </div>
                        <p className="text-gray-400 text-xs mt-1.5 font-medium">
                            <Users className="w-3 h-3 inline mr-1" />
                            {filledSlots.toLocaleString()}+ joined
                        </p>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                    <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out relative ${isAlmost ? "bg-gradient-to-r from-red-500 to-orange-500" : "bg-gradient-to-r from-orange-500 to-amber-400"}`}
                        style={{ width: `${displayPct}%` }}
                    >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                    </div>
                </div>

                <p className="text-xs text-center text-gray-400 font-medium mt-3 flex items-center justify-center gap-1.5">
                    <Zap className="w-3 h-3 text-orange-400" />
                    Spots are filling up fast — secure yours now!
                </p>
            </div>

            {/* Recent Joinings */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <h3 className="font-black text-gray-900 text-sm">Recent Joinings</h3>
                    <span className="ml-auto text-[10px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full font-bold">Live</span>
                </div>

                <div className="space-y-3">
                    {displayJoiners.map((j, i) => (
                        <div key={i} className="flex items-center gap-3">
                            {/* Avatar */}
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xs font-black shrink-0">
                                {j.name[0]}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-gray-800 truncate">{j.name}</p>
                                <p className="text-xs text-gray-400 flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {j.minutes}m ago
                                </p>
                            </div>
                            <div className="text-[10px] bg-emerald-50 text-emerald-600 font-black px-2 py-1 rounded-lg shrink-0">
                                Joined ✓
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
