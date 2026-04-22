"use client";

import { useEffect, useState, useRef } from "react";

interface TickItem {
  id: string;
  message: string;
}

// Fallback messages while loading / on error
const FALLBACKS: TickItem[] = [
  { id: "f1", message: "🏆 Ahmed K. from Lahore just won a Honda CG 125!" },
  { id: "f2", message: "🎉 Sara M. from Karachi just joined iPhone 15 Pro draw!" },
  { id: "f3", message: "💰 Bilal R. from Islamabad just won Rs. 50,000 Cash Prize!" },
  { id: "f4", message: "🎁 Usman T. from Peshawar just entered the Gold Bar draw!" },
  { id: "f5", message: "💻 Nida A. from Multan just won a MacBook Air M2!" },
  { id: "f6", message: "🏍️ Zeeshan B. from Quetta just won Honda 70cc Bike!" },
  { id: "f7", message: "📱 Hira F. from Faisalabad just joined Samsung S24 draw!" },
];

export default function DashboardLiveMarquee() {
  const [items, setItems] = useState<TickItem[]>(FALLBACKS);
  const [isPaused, setIsPaused] = useState(false);

  // Poll the real recent-entries API every 15 seconds
  useEffect(() => {
    async function fetchLive() {
      try {
        const res = await fetch("/api/notifications/recent-entries", { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (data.notifications && data.notifications.length > 0) {
          const liveItems: TickItem[] = data.notifications.map((n: { id: string; message: string }) => ({
            id: n.id,
            message: `🔔 ${n.message}`,
          }));
          // Merge: live items first, then fallbacks to pad
          setItems([...liveItems, ...FALLBACKS].slice(0, 10));
        }
      } catch {
        // Keep showing fallbacks
      }
    }

    fetchLive();
    const interval = setInterval(fetchLive, 15000);
    return () => clearInterval(interval);
  }, []);

  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-b border-zinc-800 select-none"
      style={{ background: "#09090b", height: "36px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* LEFT: Live badge */}
      <div className="absolute left-0 top-0 h-full z-10 flex items-center gap-2 px-4 bg-red-600 shrink-0"
           style={{ boxShadow: "4px 0 12px rgba(0,0,0,0.5)" }}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
        <span className="text-white text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Live Wins</span>
      </div>

      {/* RIGHT: gradient fade */}
      <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
           style={{ background: "linear-gradient(to left, #09090b, transparent)" }} />

      {/* Scrolling track */}
      <div
        className="flex items-center h-full pl-36"
        style={{
          animation: isPaused ? "none" : "marquee-scroll 35s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item.id}-${i}`}
            className="inline-flex items-center text-zinc-300 text-xs font-medium pr-12"
          >
            <span className="text-orange-400 mr-1.5">★</span>
            {item.message}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
