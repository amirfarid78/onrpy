import prisma from "@/lib/prisma";
import PrizeCard from "@/components/PrizeCard";
import MobileNav from "@/components/MobileNav";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function UpcomingPage() {
    const pools = await prisma.lotteryPool.findMany({
        where: {
            status: "OPEN",
            startDate: {
                gt: new Date(),
            },
        },
        orderBy: { startDate: "asc" },
    });

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
                    <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </Link>
                    <h1 className="text-xl font-bold text-gray-900">Upcoming Lotteries</h1>
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
                            originalPrice="Rs. 0"
                            image={pool.productImage}
                            totalSlots={pool.maxSlots}
                            filledSlots={pool.filledSlots}
                            tag="Coming Soon"
                        />
                    ))}
                    {pools.length === 0 && (
                        <div className="col-span-full text-center py-20">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Calendar className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">No upcoming lotteries</h3>
                            <p className="text-gray-500">All our lotteries are currently live! Check back soon.</p>
                            <Link href="/pools" className="mt-4 inline-block btn-primary px-6 py-2">
                                View Live Lotteries
                            </Link>
                        </div>
                    )}
                </div>
            </main>

            <MobileNav />
        </div>
    );
}
