"use client";

import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";

interface LivePoolDetailProps {
    poolId: string;
    initialFilledSlots: number;
    maxSlots: number;
}

export default function LivePoolDetail({ poolId, initialFilledSlots, maxSlots }: LivePoolDetailProps) {
    const [filledSlots, setFilledSlots] = useState(initialFilledSlots);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch("/api/pools/stats");
                if (res.ok) {
                    const data = await res.json();
                    if (data.stats[poolId]) {
                        setFilledSlots(data.stats[poolId].filled);
                    }
                }
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        };

        const interval = setInterval(fetchStats, 5000); // Poll every 5s
        return () => clearInterval(interval);
    }, [poolId]);

    const progress = (filledSlots / maxSlots) * 100;

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Filled</p>
                    <p className="text-3xl font-black text-green-600">{filledSlots}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Left</p>
                    <p className="text-3xl font-black text-orange-600">{maxSlots - filledSlots}</p>
                </div>
            </div>

            {/* Progress */}
            <div className="space-y-3">
                <div className="flex justify-between text-sm font-bold">
                    <span className="text-gray-700">Pool Progress</span>
                    <span className="text-primary">{progress.toFixed(1)}%</span>
                </div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                    <div
                        className="h-full bg-gradient-to-r from-orange-500 to-red-500 relative transition-all duration-1000 ease-out"
                        style={{ width: `${progress}%` }}
                    >
                        <div className="absolute inset-0 animate-shimmer" />
                    </div>
                </div>
                <p className="text-xs text-center text-gray-500 font-medium flex items-center justify-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Hurry! Slots are filling up fast.
                </p>
            </div>
        </div>
    );
}
