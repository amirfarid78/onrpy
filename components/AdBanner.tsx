"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

interface Ad {
    id: string;
    title: string;
    imageUrl: string;
    linkUrl?: string;
}

export default function AdBanner() {
    const [ad, setAd] = useState<Ad | null>(null);

    useEffect(() => {
        const fetchAd = async () => {
            try {
                // Fetch all ads and filter active ones on client for now, or create a specific endpoint
                // Using the admin endpoint but filtering (assuming user has access or we made it public)
                // We made GET /api/admin/ads public-ish in the implementation
                const res = await fetch("/api/admin/ads");
                if (res.ok) {
                    const ads = await res.json();
                    // Filter for active and date range
                    const now = new Date();
                    const activeAds = ads.filter((a: any) =>
                        a.isActive &&
                        new Date(a.startDate) <= now &&
                        new Date(a.endDate) >= now
                    );

                    if (activeAds.length > 0) {
                        // Pick random or first
                        setAd(activeAds[0]);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch ads", error);
            }
        };

        fetchAd();
    }, []);

    if (!ad) return null;

    const Content = () => (
        <div className="relative w-full h-32 sm:h-40 rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
            <img
                src={ad.imageUrl}
                alt={ad.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                <div className="text-white">
                    <p className="font-bold text-sm sm:text-base flex items-center gap-1">
                        {ad.title}
                        {ad.linkUrl && <ExternalLink className="w-3 h-3 opacity-70" />}
                    </p>
                    <p className="text-[10px] sm:text-xs opacity-80 uppercase tracking-wider">Sponsored</p>
                </div>
            </div>
        </div>
    );

    if (ad.linkUrl) {
        return (
            <a href={ad.linkUrl} target="_blank" rel="noopener noreferrer" className="block mt-8 mb-4">
                <Content />
            </a>
        );
    }

    return (
        <div className="mt-8 mb-4">
            <Content />
        </div>
    );
}
