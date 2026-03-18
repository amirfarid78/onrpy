import prisma from "@/lib/prisma";
import { Trophy, Search } from "lucide-react";

async function getWinners() {
    return await prisma.winner.findMany({
        include: {
            user: { select: { name: true, phone: true } },
            pool: { select: { productName: true, pricePerEntry: true } },
            entry: { select: { ticketNumber: true } },
        },
        orderBy: { announcedAt: "desc" },
    });
}

export default async function AdminWinnersPage() {
    const winners = await getWinners();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                    <Trophy className="w-8 h-8 text-yellow-500" />
                    Winners Management
                </h1>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search winners..."
                        className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
                    />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="px-6 py-4 font-medium text-gray-500">Date</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Winner</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Prize</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Pool</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Ticket #</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {winners.map((winner) => (
                            <tr key={winner.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {new Date(winner.announcedAt).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium text-gray-900">{winner.user.name || "User"}</div>
                                    <div className="text-xs text-gray-500">{winner.user.phone}</div>
                                </td>
                                <td className="px-6 py-4 font-bold text-gray-900">
                                    {winner.pool.productName}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    Rs. {winner.pool.pricePerEntry} Pool
                                </td>
                                <td className="px-6 py-4 font-mono text-sm text-gray-600">
                                    #{winner.entry.ticketNumber}
                                </td>
                                <td className="px-6 py-4 font-bold text-green-600">
                                    Rs. {winner.prizeAmount}
                                </td>
                            </tr>
                        ))}
                        {winners.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                                    No winners announced yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
