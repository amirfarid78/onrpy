"use client";

import { ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";

import { useRef, useState, useEffect } from "react";

interface PrizeCardProps {
    title: string;
    price: string;
    originalPrice: string;
    image: string;
    totalSlots: number;
    filledSlots: number;
    id?: string;
    tag?: string;
}

export default function PrizeCard({
    title,
    price,
    originalPrice,
    image,
    totalSlots,
    filledSlots,
    tag,
    id,
}: PrizeCardProps) {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [liveFilledSlots, setLiveFilledSlots] = useState(filledSlots);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch("/api/pools/stats");
                if (res.ok) {
                    const data = await res.json();
                    if (id && data.stats[id]) {
                        setLiveFilledSlots(data.stats[id].filled);
                    }
                }
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        };

        const interval = setInterval(fetchStats, 10000); // Poll every 10s
        return () => clearInterval(interval);
    }, [id]);

    const progress = (liveFilledSlots / totalSlots) * 100;
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg rotation
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: "transform 0.1s ease-out",
            }}
            className="glass-card-pro group relative overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 bg-white rounded-3xl border border-white/50"
        >
            {/* Tag */}
            {tag && (
                <div className="absolute top-4 left-4 z-20">
                    <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-widest animate-pulse border border-white/20">
                        {tag}
                    </span>
                </div>
            )}

            {/* Image Container */}
            <div className="relative h-64 w-full bg-gradient-to-br from-gray-50 to-white p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#fb923c_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.1]" />

                {/* 3D Floating Image Effect */}
                <div
                    className="relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-4 filter drop-shadow-xl group-hover:drop-shadow-2xl"
                    style={{ transform: `translateZ(40px)` }}
                >
                    <img src={image} alt={title} className="w-full h-full object-contain" />
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 z-20 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-white/60 transform transition-transform group-hover:scale-105 flex flex-col items-end">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Win for</span>
                    <span className="text-orange-600 font-black text-lg leading-none">Rs. {price}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-20 bg-white/60 backdrop-blur-xl border-t border-white/50">
                <h3 className="font-black text-gray-900 text-lg mb-2 line-clamp-2 leading-tight group-hover:text-orange-600 transition-colors min-h-[3rem]">
                    {title}
                </h3>

                <div className="flex justify-between items-center mb-5">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Worth</span>
                        <span className="text-sm font-bold text-gray-600 line-through decoration-red-400 decoration-2">{originalPrice}</span>
                    </div>
                    <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-lg border border-green-200 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        {totalSlots - liveFilledSlots} slots left
                    </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between text-xs mb-2">
                        <span className="text-gray-500 font-bold uppercase tracking-wide text-[10px]">Sold Out</span>
                        <span className="text-orange-600 font-black">{Math.round(progress)}%</span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden border border-gray-100">
                        <div
                            className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full relative overflow-hidden transition-all duration-1000 ease-out"
                            style={{ width: `${progress}%` }}
                        >
                            <div className="absolute inset-0 animate-shimmer" />
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <Link
                    href={id ? `/pools/${id}` : "/login"}
                    className="btn-primary w-full py-3.5 text-sm font-bold rounded-xl shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 flex items-center justify-center gap-2 transform transition-all active:scale-95 border-none"
                >
                    Buy Entry Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
