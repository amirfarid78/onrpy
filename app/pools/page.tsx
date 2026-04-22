"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Clock, Trophy, ShieldCheck, Scale, Lock, Gift } from "lucide-react";

const STATIC_POOLS = [
  {
    id: null, title: "iPhone 15 Pro Max", entry: "1",
    badge: "TECH GADGET", badgeClass: "bg-orange-500 text-white",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1M6gFEnE-a60nuRosJwxNHapVMGVG_A_I_i6nl95vZp74T96cHWXA9LA1MJ3S8R1q0yhPzBuT5OBugcyXpJBaEQyyqVFmCIG4QoFZR9RpkTe-UP8yZ6bjWX9455UDq2-rOZ2bt7WAx4vtJHX9l0exj3tKjpIe2ROF2NqfJNeoBtA_ii93Kivj1a_OqBIwa2cjyxaR-d1fzFXyKIdj5RC4jV5GPu5iRkWB39totg3Jezv7IAIXCdV-Ms8QoIa1reo0Y7bE14k9Vc0",
    pct: 78, cat: "Tech"
  },
  {
    id: null, title: "Honda CB150R", entry: "1",
    badge: "LIFESTYLE", badgeClass: "bg-blue-500 text-white",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANNlbxhYD84ymHfd6UowQ6pJJrVkMtrmU1EMTOEZVrXmt1PoUGDFcGSxx5-d9vP9b0qDSh7PoeMtHR7uZeRFjsLNDWRNANT8VO2QkheRgSLFhp5iWIi3MWrq9JjqKvtbcXBdJ6begSaPmq8Egpg6-gaQESHqkvLHP6G4DLNFaM_iO8JHsk3OajIgEMDtFFJcJO9dIEKXeX7XdjbWKTOL49b-UFTFOTBeYboWGxxMO8tTM-ddFu3JFFLfBMxRm0JjVtp5H_KLP-ZZo",
    pct: 45, cat: "Bike"
  },
  {
    id: null, title: "10g 24K Gold Bar", entry: "1",
    badge: "PREMIUM GOLD", badgeClass: "bg-yellow-500 text-white",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVuxxnhxlO3bRidl3Gv0MAP0WK79JAPbQo62-vZv-izEaZ4HcKdeCp0HXsCmi77D7-tQXOVLJuO4WBBFLfvdc6OqlRJlMJO2GrLcOob16KrgGHeP_xnogEa-INGnAC7zYMffAOjpnfkZsBfyAb7_Y2WLzIDBDjEzZuxNdkvnCmuVlkBwEcqqiFe_ni2yNYsOUJvcEe5oBsaZvYCrTx0afui10iIXiIXDJ3yHgWrs_oneGnCxA5MYemrjozb_Ud0Q03Auh7FO9dDpo",
    pct: 92, cat: "Gold"
  },
  {
    id: null, title: "Samsung Galaxy S24", entry: "1",
    badge: "FLASH DRAW", badgeClass: "bg-emerald-500 text-white",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1M6gFEnE-a60nuRosJwxNHapVMGVG_A_I_i6nl95vZp74T96cHWXA9LA1MJ3S8R1q0yhPzBuT5OBugcyXpJBaEQyyqVFmCIG4QoFZR9RpkTe-UP8yZ6bjWX9455UDq2-rOZ2bt7WAx4vtJHX9l0exj3tKjpIe2ROF2NqfJNeoBtA_ii93Kivj1a_OqBIwa2cjyxaR-d1fzFXyKIdj5RC4jV5GPu5iRkWB39totg3Jezv7IAIXCdV-Ms8QoIa1reo0Y7bE14k9Vc0",
    pct: 55, cat: "Tech"
  },
  {
    id: null, title: "Cash Prize Rs. 50,000", entry: "1",
    badge: "CASH DRAW", badgeClass: "bg-purple-500 text-white",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm_E0GH6hfoPnqAQw590haNn_z66RhULX3d7oNxfOF_huUmRXnP_yk7EbuRow7Rd1NeJLmlbZXiPC11tALyRH17PBwo033SdxHUJcUdXmhm7MQdKlx8SoOV-smdDMpGPL5G0SvPuaUBrpWnC4IkpaeCDLEr5tyJYMhUT2qeZpk5SzOnfsF_Ugo5x-J3VIUg2kZmgul3QFvWZc-zzzBK6e-ntqNzZ6-2N5x-s5eXDoyv6Pc3oqALNcjr9FroxSLNFKRUWr18h3vXpY",
    pct: 60, cat: "Cash"
  },
  {
    id: null, title: "MacBook Air M2", entry: "5",
    badge: "MEGA DRAW", badgeClass: "bg-orange-500 text-white",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBa5QpYA-usO4P4EIuSrXIyNNAwh_ZCslkr30J2VrwwHp_h9WpVWEH449aUH2JtFdHKs7c_5ckj9HBWl6Pup9qUbwKSwWnKgdf1mQrphvNDoCYAUHS1dw3tXpqOWiuk11UG7PE2lzWxAszfuRUNTsI2XmT_JvfkQh-lBeSvuvpa9q7UkouJX1FXPOI98yaJWVgPWEQww-rhFbPs2_DUEfz1bdVTmhoy0YTMbTwwRAhaYLZcAL39O9HJP_cpJdtV5m3Ihda62laUfO8",
    pct: 35, cat: "Tech"
  },
];

const CATS = ["All", "Tech", "Gold", "Bike", "Cash"];

export default function PoolsPageInner() {
  const [cat, setCat] = useState("All");
  const [dbPools, setDbPools] = useState<typeof STATIC_POOLS>([]);
  const [loading, setLoading] = useState(true);

  // Fetch real pools from DB via public API
  useEffect(() => {
    fetch("/api/pools")
      .then(r => r.json())
      .then(data => {
        // API returns { success: true, pools: [...] }
        const list = data.pools ?? data;
        if (Array.isArray(list) && list.length > 0) {
          const mapped = list.map((p: any, i: number) => ({
            id: p.id,
            title: p.productName,
            entry: p.pricePerEntry.toString(),
            badge: i === 0 ? "MEGA DRAW" : i % 2 === 0 ? "FLASH DRAW" : "POPULAR",
            badgeClass: i === 0 ? "bg-orange-500 text-white" : i % 2 === 0 ? "bg-blue-500 text-white" : "bg-emerald-500 text-white",
            image: p.productImage,
            pct: Math.min(Math.round((p.filledSlots / p.maxSlots) * 100), 95),
            cat: "Tech",
          }));
          setDbPools(mapped);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const allPools = dbPools.length > 0 ? dbPools : STATIC_POOLS;
  const filtered = cat === "All" ? allPools : allPools.filter(p => p.cat === cat);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-900 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
            </span>
            Live Prize Pools
          </h1>
          <p className="text-gray-500 mt-1.5 text-sm">Win big for just Rs. 1. New draws added daily.</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATS.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all active:scale-95 ${
                cat === c
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white border border-gray-200 text-gray-500 hover:text-gray-800 hover:border-gray-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
                <div className="bg-gray-100 h-48" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-100 rounded w-3/4" />
                  <div className="h-2 bg-gray-100 rounded w-full" />
                  <div className="h-10 bg-gray-100 rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-600 font-semibold">No pools in this category</p>
            <button onClick={() => setCat("All")} className="mt-3 text-orange-500 font-bold text-sm hover:underline">Show All</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((pool, i) => {
              const isHot = pool.pct >= 75;
              const isAlmostFull = pool.pct >= 90;
              return (
                <Link href={pool.id ? `/pools/${pool.id}` : "/dashboard"} key={pool.id ?? i} className="block group">
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                      <img
                        src={pool.image}
                        alt={pool.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Price */}
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-orange-600 text-xs font-black px-2.5 py-1 rounded-lg shadow-sm">
                        Rs. {pool.entry}
                      </div>
                      {/* Badge */}
                      <span className={`absolute top-3 right-3 ${pool.badgeClass} text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider`}>
                        {pool.badge}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-4">
                      <h3 className="font-black text-gray-900 text-sm leading-snug mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                        {pool.title}
                      </h3>

                      {/* Progress — percentage only, no slot numbers */}
                      <div className="space-y-1.5 mb-4">
                        <div className="flex justify-between items-center text-xs font-bold">
                          <span className="text-gray-400">Filling Fast</span>
                          <span className={isAlmostFull ? "text-red-500" : "text-orange-500"}>
                            {pool.pct}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${isAlmostFull ? "bg-gradient-to-r from-red-500 to-orange-500" : "bg-gradient-to-r from-orange-500 to-amber-400"}`}
                            style={{ width: `${pool.pct}%` }}
                          />
                        </div>
                        {isAlmostFull && (
                          <p className="text-[10px] text-red-500 font-bold">🔥 Almost full — join now!</p>
                        )}
                      </div>

                      <div className={`w-full text-center py-3 rounded-xl text-xs font-black text-white transition-all ${isAlmostFull ? "bg-red-500" : "bg-orange-500"}`}>
                        Buy Entry — Rs. {pool.entry}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Trust row */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-40 hover:opacity-60 transition-opacity">
          {[
            { Icon: ShieldCheck, label: "SECP Verified"   },
            { Icon: Scale,       label: "NTN Registered"  },
            { Icon: Lock,        label: "256-bit SSL"      },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-gray-400">
              <Icon className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
