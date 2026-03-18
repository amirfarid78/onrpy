import prisma from "@/lib/prisma";
import MobileNav from "@/components/MobileNav";
import { Trophy, User, Calendar } from "lucide-react";

export default async function WinnersPage() {
    const winners = await prisma.winner.findMany({
        include: {
            pool: true,
            user: {
                select: {
                    name: true,
                    phone: true,
                    profileImage: true,
                }
            },
        },
        orderBy: { announcedAt: "desc" },
        take: 50,
    });

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            <header className="bg-white shadow-sm sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <h1 className="text-xl font-bold text-gray-900">Recent Winners</h1>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid gap-4">
                    {winners.map((winner) => (
                        <div key={winner.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center shrink-0 border-2 border-white shadow-sm">
                                {winner.user.profileImage ? (
                                    <img src={winner.user.profileImage} alt="User" className="w-full h-full rounded-full object-cover" />
                                ) : (
                                    <User className="w-6 h-6 text-orange-500" />
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-gray-900 truncate">
                                            {winner.user.name || `User ${winner.user.phone.slice(-4)}`}
                                        </h3>
                                        <p className="text-sm text-orange-600 font-medium truncate">
                                            Won {winner.pool.productName}
                                        </p>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(winner.announcedAt).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {winners.length === 0 && (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Trophy className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">No winners yet</h3>
                            <p className="text-gray-500">Be the first one to win!</p>
                        </div>
                    )}
                </div>
            </main>

            <MobileNav />
        </div>
    );
}
