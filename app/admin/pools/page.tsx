import prisma from "@/lib/prisma";
import Link from "next/link";
import { Plus } from "lucide-react";
import PoolActions from "@/components/admin/PoolActions";

async function getPools() {
    return await prisma.lotteryPool.findMany({
        orderBy: { createdAt: "desc" },
    });
}

export default async function AdminPoolsPage() {
    const pools = await getPools();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">Lottery Pools</h1>
                <Link
                    href="/admin/pools/create"
                    className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary-dark transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    Create New Pool
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="px-6 py-4 font-medium text-gray-500">Product</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Price</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Slots</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Status</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Dates</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {pools.map((pool) => (
                            <tr key={pool.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        {/* Placeholder for image if needed */}
                                        <div className="w-10 h-10 bg-gray-200 rounded-md flex-shrink-0 overflow-hidden">
                                            <img src={pool.productImage} alt={pool.productName} className="w-full h-full object-cover" />
                                        </div>
                                        <span className="font-medium text-gray-900">
                                            {pool.productName}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    Rs. {pool.pricePerEntry}
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    {pool.filledSlots} / {pool.maxSlots}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${pool.status === "OPEN"
                                            ? "bg-green-100 text-green-800"
                                            : pool.status === "CLOSED"
                                                ? "bg-red-100 text-red-800"
                                                : "bg-gray-100 text-gray-800"
                                            }`}
                                    >
                                        {pool.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    <div>Start: {new Date(pool.startDate).toLocaleDateString()}</div>
                                    <div>End: {new Date(pool.endDate).toLocaleDateString()}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <PoolActions id={pool.id} />
                                </td>
                            </tr>
                        ))}
                        {pools.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                                    No pools found. Create one to get started!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
