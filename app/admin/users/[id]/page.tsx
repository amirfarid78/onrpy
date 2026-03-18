import prisma from "@/lib/prisma";
import { ArrowLeft, User, Wallet, History, Trophy, Users, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getUserDetails(id: string) {
    const user = await prisma.user.findUnique({
        where: { id },
        include: {
            wallet: {
                include: {
                    transactions: {
                        take: 10,
                        orderBy: { createdAt: "desc" },
                    },
                },
            },
            entries: {
                include: {
                    pool: true,
                },
                orderBy: { purchasedAt: "desc" },
                take: 10,
            },
            wins: {
                include: {
                    pool: true,
                },
                orderBy: { announcedAt: "desc" },
            },
            referrals: {
                orderBy: { createdAt: "desc" },
            },
        },
    });

    if (!user) return null;
    return user;
}

export default async function UserDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const user = await getUserDetails(id);

    if (!user) notFound();

    const totalDeposits = user.wallet?.transactions
        .filter((t) => t.type === "DEPOSIT" && t.status === "COMPLETED")
        .reduce((acc, curr) => acc + curr.amount, 0) || 0;

    const totalSpent = user.wallet?.transactions
        .filter((t) => t.type === "ENTRY_FEE" && t.status === "COMPLETED")
        .reduce((acc, curr) => acc + curr.amount, 0) || 0;

    return (
        <div className="space-y-8 pb-12">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link href="/admin/users" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ArrowLeft className="w-6 h-6 text-gray-600" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{user.name || "Unknown User"}</h1>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>ID: {user.id}</span>
                        <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs font-medium">{user.role}</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Profile & Wallet */}
                <div className="space-y-8">
                    {/* Profile Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <User className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="font-bold text-gray-900">Profile Details</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-gray-400 mt-1" />
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p className="font-medium text-gray-900">{user.phone}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-gray-400 mt-1" />
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-medium text-gray-900">{user.email || "-"}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                                <div>
                                    <p className="text-sm text-gray-500">Address</p>
                                    <p className="font-medium text-gray-900">
                                        {[user.address, user.city, user.state, user.zip].filter(Boolean).join(", ") || "-"}
                                    </p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-gray-50">
                                <p className="text-xs text-gray-400">Joined {new Date(user.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>

                    {/* Wallet Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-green-50 rounded-lg">
                                <Wallet className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="font-bold text-gray-900">Wallet Summary</h2>
                        </div>
                        <div className="text-center mb-6">
                            <p className="text-sm text-gray-500">Current Balance</p>
                            <p className="text-3xl font-black text-gray-900">Rs. {user.wallet?.balance.toFixed(2) || "0.00"}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-3 rounded-lg text-center">
                                <p className="text-xs text-gray-500">Total Deposited</p>
                                <p className="font-bold text-green-600">Rs. {totalDeposits.toFixed(2)}</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg text-center">
                                <p className="text-xs text-gray-500">Total Spent</p>
                                <p className="font-bold text-red-600">Rs. {totalSpent.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Activity */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Recent Transactions */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                            <History className="w-5 h-5 text-gray-400" />
                            <h3 className="font-bold text-gray-900">Recent Transactions</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3 font-medium text-gray-500">Date</th>
                                        <th className="px-4 py-3 font-medium text-gray-500">Type</th>
                                        <th className="px-4 py-3 font-medium text-gray-500">Amount</th>
                                        <th className="px-4 py-3 font-medium text-gray-500">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {user.wallet?.transactions.map((tx) => (
                                        <tr key={tx.id}>
                                            <td className="px-4 py-3 text-gray-500">{new Date(tx.createdAt).toLocaleDateString()}</td>
                                            <td className="px-4 py-3 font-medium">{tx.type}</td>
                                            <td className={`px-4 py-3 font-bold ${tx.type === "DEPOSIT" || tx.type === "PRIZE_CREDIT" ? "text-green-600" : "text-red-600"}`}>
                                                {tx.type === "DEPOSIT" || tx.type === "PRIZE_CREDIT" ? "+" : "-"} {tx.amount}
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${tx.status === "COMPLETED" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                                                    {tx.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {(!user.wallet?.transactions || user.wallet.transactions.length === 0) && (
                                        <tr><td colSpan={4} className="px-4 py-8 text-center text-gray-500">No transactions found</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Pool Entries */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                            <Trophy className="w-5 h-5 text-gray-400" />
                            <h3 className="font-bold text-gray-900">Recent Pool Entries</h3>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {user.entries.map((entry) => (
                                <div key={entry.id} className="p-4 flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-900">{entry.pool.productName}</p>
                                        <p className="text-xs text-gray-500">Ticket #{entry.ticketNumber}</p>
                                    </div>
                                    <span className="text-xs text-gray-400">{new Date(entry.purchasedAt).toLocaleDateString()}</span>
                                </div>
                            ))}
                            {user.entries.length === 0 && (
                                <div className="p-8 text-center text-gray-500">No entries yet</div>
                            )}
                        </div>
                    </div>

                    {/* Wins */}
                    {user.wins.length > 0 && (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                                <Trophy className="w-5 h-5 text-yellow-500" />
                                <h3 className="font-bold text-gray-900">Winnings</h3>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {user.wins.map((win) => (
                                    <div key={win.id} className="p-4 flex items-center justify-between bg-yellow-50/50">
                                        <div>
                                            <p className="font-bold text-gray-900">{win.pool.productName}</p>
                                            <p className="text-xs text-gray-500">Prize: Rs. {win.prizeAmount}</p>
                                        </div>
                                        <span className="text-xs text-gray-400">{new Date(win.announcedAt).toLocaleDateString()}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
