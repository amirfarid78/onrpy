// Server component — handles DB queries and passes data to client
import prisma from "@/lib/prisma";
import HomePageClient from "@/components/home/HomePageClient";

export const dynamic = "force-dynamic";

const POOL_IPHONE = "/pool_iphone.png";
const POOL_BIKE   = "/pool_bike.png";
const POOL_GOLD   = "/pool_gold.png";

export default async function HomePage() {
  // Real platform stats from DB
  const [activePools, totalUsers, totalWinners, totalEntries, prizeAgg] = await Promise.all([
    prisma.lotteryPool.findMany({
      where: { status: "OPEN" },
      orderBy: { createdAt: "desc" },
      take: 3,
    }),
    prisma.user.count(),
    prisma.winner.count(),
    prisma.poolEntry.count(),
    prisma.winner.aggregate({ _sum: { prizeAmount: true } }),
  ]);

  // Social-proof padded numbers (baseline + real DB count)
  const displayUsers   = totalUsers + 48372;
  const displayWinners = totalWinners + 1284;
  const displayEntries = totalEntries + 920000;
  const prizesPaid     = (prizeAgg._sum.prizeAmount ?? 0) + 48600000;

  // Map DB pools → display shape (cap progress at 95% — no "full" shown)
  const displayPools = activePools.length > 0
    ? activePools.map((p, i) => ({
        id:         p.id,
        title:      p.productName,
        price:      p.pricePerEntry.toString(),
        badge:      i === 0 ? "Mega Draw" : i === 1 ? "Popular" : "Flash Draw",
        badgeClass: i === 0 ? "bg-orange-100 text-orange-600" : i === 1 ? "bg-blue-100 text-blue-600" : "bg-emerald-100 text-emerald-600",
        image:      p.productImage || [POOL_IPHONE, POOL_BIKE, POOL_GOLD][i] || POOL_IPHONE,
        pct:        Math.min(Math.round((p.filledSlots / p.maxSlots) * 100), 95),
        left:       "Spots available",
        ends:       `${new Date(p.endDate).toLocaleDateString("en-PK", { day: "numeric", month: "short" })}`,
      }))
    : [
        { id: null, title: "iPhone 15 Pro Max", price: "1",  badge: "Mega Draw",  badgeClass: "bg-orange-100 text-orange-600",  image: POOL_IPHONE, pct: 78, left: "Spots available", ends: "Apr 30" },
        { id: null, title: "Honda CG 125",       price: "5",  badge: "Popular",    badgeClass: "bg-blue-100 text-blue-600",       image: POOL_BIKE,   pct: 85, left: "Spots available", ends: "Apr 28" },
        { id: null, title: "Gold Ring 10g",      price: "10", badge: "Flash Draw", badgeClass: "bg-emerald-100 text-emerald-600", image: POOL_GOLD,   pct: 60, left: "Spots available", ends: "Apr 25" },
      ];

  return (
    <HomePageClient
      displayPools={displayPools}
      displayUsers={displayUsers}
      displayWinners={displayWinners}
      displayEntries={displayEntries}
      prizesPaid={prizesPaid}
    />
  );
}
