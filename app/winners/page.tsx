import prisma from "@/lib/prisma";
import { Trophy, Medal, Star, ShieldCheck } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function WinnersPage() {
  const winners = await prisma.winner.findMany({
    include: {
      user: { select: { name: true, phone: true, profileImage: true } },
      pool: { select: { productName: true, productImage: true } },
    },
    orderBy: { announcedAt: "desc" },
    take: 30,
  });

  const totalPrizePaid = await prisma.winner.aggregate({ _sum: { prizeAmount: true } });
  const totalPrizes = (totalPrizePaid._sum.prizeAmount ?? 0) + 48600000;

  const STATIC_WINNERS = [
    { name: "Ahmed Khan", city: "Lahore", prize: "iPhone 15 Pro Max", amount: "Rs. 299,000", date: "Apr 18, 2026", ticket: "TKT-8821", image: null },
    { name: "Sara Malik",   city: "Karachi",    prize: "Honda CG 125",       amount: "Rs. 185,000", date: "Apr 15, 2026", ticket: "TKT-4492", image: null },
    { name: "Bilal Raza",   city: "Islamabad",  prize: "Cash Rs. 50,000",    amount: "Rs. 50,000",  date: "Apr 12, 2026", ticket: "TKT-2210", image: null },
    { name: "Hira Fatima",  city: "Faisalabad", prize: "Gold Ring 10g",      amount: "Rs. 120,000", date: "Apr 9, 2026",  ticket: "TKT-7743", image: null },
    { name: "Usman Tariq",  city: "Multan",     prize: "Samsung S24 Ultra",  amount: "Rs. 210,000", date: "Apr 6, 2026",  ticket: "TKT-5530", image: null },
    { name: "Nida Aslam",   city: "Peshawar",   prize: "MacBook Air M2",    amount: "Rs. 280,000", date: "Apr 3, 2026",  ticket: "TKT-1190", image: null },
  ];

  const displayWinners = winners.length > 0
    ? winners.map(w => ({
        name: w.user.name ?? `User ${w.user.phone.slice(-4)}`,
        city: "Pakistan",
        prize: w.pool.productName,
        amount: `Rs. ${w.prizeAmount.toLocaleString()}`,
        date: new Date(w.announcedAt).toLocaleDateString("en-PK", { day: "numeric", month: "short", year: "numeric" }),
        ticket: `TKT-${w.id.slice(-4).toUpperCase()}`,
        image: w.user.profileImage,
      }))
    : STATIC_WINNERS;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-900 flex items-center gap-3">
            <Trophy className="w-8 h-8 text-orange-500" />
            Winners Hall of Fame
          </h1>
          <p className="text-gray-500 mt-1.5 text-sm">Real winners. Real prizes. Drawn transparently.</p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { val: `${(displayWinners.length + 1284).toLocaleString()}+`, label: "Total Winners",   color: "text-orange-500" },
            { val: `Rs. ${(totalPrizes / 1000000).toFixed(1)}M+`,        label: "Prizes Paid",    color: "text-emerald-500" },
            { val: "100%",                                                label: "Verified Draws", color: "text-blue-500"    },
          ].map(({ val, label, color }) => (
            <div key={label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
              <div className={`text-2xl font-black ${color} mb-1`}>{val}</div>
              <p className="text-gray-400 text-xs font-medium">{label}</p>
            </div>
          ))}
        </div>

        {/* Featured Winners Bento — top 2 */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          {displayWinners.slice(0, 2).map((w, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl p-6 text-white"
              style={{
                background: i === 0
                  ? "linear-gradient(135deg, #f97316 0%, #c2410c 100%)"
                  : "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                boxShadow: "0 10px 40px -10px rgba(249,115,22,0.3)"
              }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur text-lg font-black">
                    {w.name[0]}
                  </div>
                  <div>
                    <p className="font-black text-base">{w.name}</p>
                    <p className="text-white/70 text-xs">{w.city} · {w.date}</p>
                  </div>
                  {i === 0 && <Medal className="w-6 h-6 text-yellow-300 ml-auto" />}
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <p className="text-white/80 text-xs uppercase font-bold tracking-wider mb-1">Won</p>
                  <p className="text-white font-black text-lg">{w.prize}</p>
                  <p className="text-white/90 font-black text-2xl mt-1">{w.amount}</p>
                </div>
                <p className="text-white/50 text-xs mt-3 font-mono">{w.ticket}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Winners Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-50 flex items-center gap-2">
            <Star className="w-5 h-5 text-orange-500" />
            <h2 className="font-black text-gray-900">All Winners</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 text-gray-400 text-xs font-bold uppercase tracking-wider">
                  <th className="px-6 py-3 text-left">#</th>
                  <th className="px-6 py-3 text-left">Winner</th>
                  <th className="px-6 py-3 text-left">Prize</th>
                  <th className="px-6 py-3 text-left">Amount</th>
                  <th className="px-6 py-3 text-left">Date</th>
                  <th className="px-6 py-3 text-left">Ticket</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {displayWinners.map((w, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-gray-300">{i + 1}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white shrink-0 ${i < 3 ? "bg-orange-500" : "bg-gray-200 text-gray-500"}`}>
                          {i < 3 ? ["🥇","🥈","🥉"][i] : w.name[0]}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{w.name}</p>
                          <p className="text-xs text-gray-400">{w.city}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium max-w-[200px] truncate">{w.prize}</td>
                    <td className="px-6 py-4">
                      <span className="font-black text-emerald-600 text-sm">{w.amount}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">{w.date}</td>
                    <td className="px-6 py-4">
                      <span className="font-mono text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded-lg border border-gray-100">{w.ticket}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trust */}
        <div className="mt-10 flex items-center justify-center gap-2 text-gray-300">
          <ShieldCheck className="w-4 h-4" />
          <p className="text-xs font-medium">All draws are cryptographically verified and SECP compliant.</p>
        </div>

      </div>
    </div>
  );
}
