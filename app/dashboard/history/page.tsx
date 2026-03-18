import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";
import { ArrowLeft, Trophy, Calendar } from "lucide-react";

async function getUserWins() {
    const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;
    if (!session) return null;

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
        const { payload } = await jwtVerify(session, secret);

        return await prisma.winner.findMany({
            where: { userId: payload.sub as string },
            include: {
                pool: true,
                entry: true,
            },
            orderBy: { announcedAt: "desc" },
        });
    } catch (error) {
        return null;
    }
}

export default async function HistoryPage() {
    const wins = await getUserWins();
    if (wins === null) redirect("/login");

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            <header className="bg-white shadow-sm sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
                    <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </Link>
                    <h1 className="text-xl font-bold text-gray-900">Winning History</h1>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="space-y-4">
                    {wins.map((win) => (
                        <div key={win.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex gap-4 items-center">
                            <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0">
                                <Trophy className="w-8 h-8 text-yellow-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-gray-900 truncate">{win.pool.productName}</h3>
                                <p className="text-sm text-gray-500">Ticket #{win.entry.ticketNumber}</p>
                                <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                                    <Calendar className="w-3 h-3" />
                                    {new Date(win.announcedAt).toLocaleDateString()}
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="block font-black text-lg text-green-600">Won</span>
                                <span className="text-xs text-gray-500">Rs. {win.prizeAmount}</span>
                            </div>
                        </div>
                    ))}

                    {wins.length === 0 && (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Trophy className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">No wins yet</h3>
                            <p className="text-gray-500">Keep playing to win amazing prizes!</p>
                        </div>
                    )}
                </div>
            </main>

            <MobileNav />
        </div>
    );
}
