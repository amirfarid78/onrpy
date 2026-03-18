import prisma from "@/lib/prisma";
import { Users, Ticket, Receipt, DollarSign, Trophy } from "lucide-react";

async function getStats() {
    const totalUsers = await prisma.user.count();
    const activePools = await prisma.lotteryPool.count({ where: { status: "OPEN" } });

    // Calculate total revenue from deposits (completed)
    const deposits = await prisma.transaction.aggregate({
        where: { type: "DEPOSIT", status: "COMPLETED" },
        _sum: { amount: true },
    });

    // Calculate total sales from entries
    // Since we don't store price in Entry, we need to sum (Pool.price * Entry.count)
    // This is complex in Prisma without raw query or iterating.
    // Simplified: Sum of all transactions of type ENTRY_FEE (if we track them)
    // Let's check TransactionType enum: DEPOSIT, WITHDRAWAL, ENTRY_FEE, PRIZE_CREDIT
    // So we can sum ENTRY_FEE transactions.
    const sales = await prisma.transaction.aggregate({
        where: { type: "ENTRY_FEE", status: "COMPLETED" },
        _sum: { amount: true },
    });

    const recentUsers = await prisma.user.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        select: { id: true, name: true, phone: true, createdAt: true },
    });

    const recentWinners = await prisma.winner.findMany({
        take: 5,
        orderBy: { announcedAt: "desc" },
        include: {
            user: { select: { name: true, phone: true } },
            pool: { select: { productName: true } },
        },
    });

    return {
        totalUsers,
        activePools,
        totalRevenue: deposits._sum.amount || 0,
        totalSales: sales._sum.amount || 0,
        recentUsers,
        recentWinners,
    };
}

export default async function AdminDashboard() {
    const stats = await getStats();

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                            <Users className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">Total Users</p>
                    <h3 className="text-2xl font-bold text-gray-900">{stats.totalUsers}</h3>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
                            <Ticket className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Active</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">Active Pools</p>
                    <h3 className="text-2xl font-bold text-gray-900">{stats.activePools}</h3>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                            <DollarSign className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">Sales</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">Total Ticket Sales</p>
                    <h3 className="text-2xl font-bold text-gray-900">Rs. {stats.totalSales.toFixed(2)}</h3>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                            <Receipt className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">Deposits</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">Total Deposits</p>
                    <h3 className="text-2xl font-bold text-gray-900">Rs. {stats.totalRevenue.toFixed(2)}</h3>
                </div>
            </div>

            {/* Recent Activity Placeholder */}
            {/* Recent Activity Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Users */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-bold text-gray-900">Recent Users</h3>
                        <a href="/admin/users" className="text-sm text-primary hover:underline">View All</a>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {stats.recentUsers.map((user) => (
                            <div key={user.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold">
                                        {user.name?.[0] || "U"}
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{user.name || "User"}</p>
                                        <p className="text-xs text-gray-500">{user.phone}</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400">{new Date(user.createdAt).toLocaleDateString()}</span>
                            </div>
                        ))}
                        {stats.recentUsers.length === 0 && (
                            <div className="p-6 text-center text-gray-500 text-sm">No users yet</div>
                        )}
                    </div>
                </div>

                {/* Recent Winners */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-bold text-gray-900">Recent Winners</h3>
                        <a href="/admin/winners" className="text-sm text-primary hover:underline">View All</a>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {stats.recentWinners.map((winner) => (
                            <div key={winner.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                                        <Trophy className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{winner.user.name || winner.user.phone}</p>
                                        <p className="text-xs text-gray-500">Won {winner.pool.productName}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-green-600">Rs. {winner.prizeAmount}</p>
                                    <p className="text-xs text-gray-400">{new Date(winner.announcedAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        ))}
                        {stats.recentWinners.length === 0 && (
                            <div className="p-6 text-center text-gray-500 text-sm">No winners yet</div>
                        )}
                    </div>
                </div>
            </div>

            {/* System Status */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">System Status</h3>
                <div className="flex items-center gap-2 text-sm text-green-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    All systems operational
                </div>
            </div>
        </div>
    );
}
