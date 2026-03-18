import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Ticket, Calendar, Trophy, Clock } from "lucide-react";

async function getUserEntries() {
    const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;
    if (!session) return null;

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
        const { payload } = await jwtVerify(session, secret);

        return await prisma.poolEntry.findMany({
            where: { userId: payload.sub as string },
            include: {
                pool: true,
                winner: true,
            },
            orderBy: { purchasedAt: "desc" },
        });
    } catch (error) {
        return null;
    }
}

export default async function EnrollmentsPage() {
    const entries = await getUserEntries();
    if (entries === null) redirect("/login");

    return (
        <div className="space-y-6 p-6">
            <div className="flex items-center gap-4">
                <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-full transition-colors md:hidden">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">My Enrollments</h1>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {entries.map((entry) => {
                    const isWinner = !!entry.winner;
                    const isDrawn = entry.pool.status === "DRAWN";
                    const isClosed = entry.pool.status === "CLOSED";
                    const isOpen = entry.pool.status === "OPEN";

                    return (
                        <div key={entry.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                            <div className="p-4 border-b border-gray-50 flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-gray-900 line-clamp-1">{entry.pool.productName}</h3>
                                    <p className="text-xs text-gray-500 mt-1">Ticket #{entry.ticketNumber}</p>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase ${isWinner ? "bg-green-100 text-green-700" :
                                        isDrawn ? "bg-gray-100 text-gray-600" :
                                            "bg-blue-50 text-blue-600"
                                    }`}>
                                    {isWinner ? "Won" : isDrawn ? "Lost" : "Active"}
                                </span>
                            </div>

                            <div className="p-4 space-y-3">
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Calendar className="w-4 h-4 text-gray-400" />
                                    <span>Purchased: {new Date(entry.purchasedAt).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Clock className="w-4 h-4 text-gray-400" />
                                    <span>Draw: {new Date(entry.pool.endDate).toLocaleDateString()}</span>
                                </div>

                                {isWinner && (
                                    <div className="mt-2 bg-green-50 border border-green-100 rounded-lg p-3 flex items-center gap-3">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                            <Trophy className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-green-700 uppercase">Congratulations!</p>
                                            <p className="text-sm text-green-800">You won this pool!</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="p-3 bg-gray-50 border-t border-gray-100">
                                <Link
                                    href={`/pools/${entry.poolId}`}
                                    className="block w-full text-center text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                                >
                                    View Pool Details
                                </Link>
                            </div>
                        </div>
                    );
                })}

                {entries.length === 0 && (
                    <div className="col-span-full text-center py-12 bg-white rounded-xl border border-dashed border-gray-200">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Ticket className="w-8 h-8 text-gray-300" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">No enrollments yet</h3>
                        <p className="text-gray-500 mb-6">Browse active pools and start winning!</p>
                        <Link href="/pools" className="btn-primary inline-flex items-center gap-2 px-6 py-2">
                            Browse Pools
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
