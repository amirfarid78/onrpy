import prisma from "@/lib/prisma";
import PrizeCard from "@/components/PrizeCard";
import MobileNav from "@/components/MobileNav";
import { Sparkles, Clock, Calendar } from "lucide-react";
import Link from "next/link";

export default async function PoolsPage({
    searchParams,
}: {
    searchParams: Promise<{ tab?: string }>;
}) {
    const { tab } = await searchParams;
    const activeTab = tab || "active";

    const pools = await prisma.lotteryPool.findMany({
        where: {
            status: activeTab === "active" ? "OPEN" : "CLOSED", // Simplified logic, ideally separate status for upcoming
        },
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-gray-900">Lottery Pools</h1>
                    <div className="flex gap-2">
                        <Link
                            href="/pools?tab=active"
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === "active"
                                    ? "bg-orange-500 text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            Active
                        </Link>
                        <Link
                            href="/pools?tab=upcoming"
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === "upcoming"
                                    ? "bg-orange-500 text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            Upcoming
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {pools.map((pool) => (
                        <PrizeCard
                            key={pool.id}
                            id={pool.id}
                            title={pool.productName}
                            price={pool.pricePerEntry.toString()}
                            originalPrice="Rs. 0" // Placeholder, schema doesn't have original price
                            image={pool.productImage}
                            totalSlots={pool.maxSlots}
                            filledSlots={pool.filledSlots}
                            tag={activeTab === "active" ? "Live" : "Coming Soon"}
                        />
                    ))}
                    {pools.length === 0 && (
                        <div className="col-span-full text-center py-20">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Calendar className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">No pools found</h3>
                            <p className="text-gray-500">Check back later for new opportunities!</p>
                        </div>
                    )}
                </div>
            </main>

            <MobileNav />
        </div>
    );
}
