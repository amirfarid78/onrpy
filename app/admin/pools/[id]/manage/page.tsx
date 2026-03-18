import prisma from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft, Trophy, Users, Calendar } from "lucide-react";
import DrawButton from "@/components/admin/DrawButton";
import SelectWinnerButton from "@/components/admin/SelectWinnerButton";

export default async function ManagePoolPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const pool = await prisma.lotteryPool.findUnique({
        where: { id },
        include: {
            entries: {
                include: { user: true },
                orderBy: { purchasedAt: "desc" },
            },
            winners: {
                include: { user: true },
            },
        },
    });

    if (!pool) return <div>Pool not found</div>;

    const winner = pool.winners[0];

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <Link href="/admin/pools" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Manage Pool: {pool.productName}</h1>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Pool Stats */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                    <h2 className="font-bold text-gray-900 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Pool Details
                    </h2>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Status</span>
                            <span className={`font-bold ${pool.status === "OPEN" ? "text-green-600" : "text-gray-900"}`}>{pool.status}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Slots</span>
                            <span>{pool.filledSlots} / {pool.maxSlots}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Price</span>
                            <span>Rs. {pool.pricePerEntry}</span>
                        </div>
                    </div>
                </div>

                {/* Winner Section */}
                <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
                        <Trophy className="w-4 h-4 text-orange-500" />
                        Winner
                    </h2>

                    {winner ? (
                        <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-lg border border-orange-100">
                            <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-xl">
                                {winner.user.name ? winner.user.name[0] : "U"}
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">{winner.user.name || "Unknown User"}</p>
                                <p className="text-sm text-gray-600">{winner.user.phone}</p>
                                <p className="text-xs text-orange-600 mt-1">Won on {new Date(winner.announcedAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <p className="text-gray-500 mb-4">No winner selected yet.</p>
                            {pool.status !== "DRAWN" && pool.entries.length > 0 ? (
                                <DrawButton id={pool.id} />
                            ) : (
                                <p className="text-sm text-red-500">Cannot draw winner (No entries or already drawn)</p>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Entries List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="font-bold text-gray-900 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Entries ({pool.entries.length})
                    </h2>
                </div>
                <div className="max-h-96 overflow-y-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 sticky top-0">
                            <tr>
                                <th className="px-4 py-2 font-medium text-gray-500">Ticket #</th>
                                <th className="px-4 py-2 font-medium text-gray-500">User</th>
                                <th className="px-4 py-2 font-medium text-gray-500">Phone</th>
                                <th className="px-4 py-2 font-medium text-gray-500">Date</th>
                                {!winner && pool.status !== "DRAWN" && (
                                    <th className="px-4 py-2 font-medium text-gray-500 text-right">Action</th>
                                )}
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {pool.entries.map((entry) => (
                                <tr key={entry.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 font-mono">{entry.ticketNumber}</td>
                                    <td className="px-4 py-2">{entry.user.name || "N/A"}</td>
                                    <td className="px-4 py-2">{entry.user.phone}</td>
                                    <td className="px-4 py-2 text-gray-500">{new Date(entry.purchasedAt).toLocaleDateString()}</td>
                                    {!winner && pool.status !== "DRAWN" && (
                                        <td className="px-4 py-2 text-right">
                                            <SelectWinnerButton
                                                poolId={pool.id}
                                                entryId={entry.id}
                                                userName={entry.user.name || entry.user.phone}
                                            />
                                        </td>
                                    )}
                                </tr>
                            ))}
                            {pool.entries.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-4 py-8 text-center text-gray-500">No entries yet.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
