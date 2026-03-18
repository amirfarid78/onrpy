import prisma from "@/lib/prisma";
import { Search } from "lucide-react";

async function getUsers() {
    return await prisma.user.findMany({
        include: {
            wallet: true,
            _count: {
                select: { entries: true, wins: true },
            },
        },
        orderBy: { createdAt: "desc" },
    });
}

export default async function AdminUsersPage() {
    const users = await getUsers();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
                    />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="px-6 py-4 font-medium text-gray-500">Phone</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Role</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Wallet</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Entries</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Wins</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Joined</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {user.phone}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.role === "ADMIN"
                                            ? "bg-purple-100 text-purple-800"
                                            : "bg-gray-100 text-gray-800"
                                            }`}
                                    >
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    Rs. {user.wallet?.balance.toFixed(2) || "0.00"}
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    {user._count.entries}
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    {user._count.wins}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {new Date(user.createdAt).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">
                                    <a href={`/admin/users/${user.id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                        View Details
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
