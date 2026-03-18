import prisma from "@/lib/prisma";

async function getTransactions() {
    return await prisma.transaction.findMany({
        include: {
            wallet: {
                include: { user: true },
            },
        },
        orderBy: { createdAt: "desc" },
        take: 50, // Limit to last 50 for now
    });
}

export default async function AdminTransactionsPage() {
    const transactions = await getTransactions();

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Transactions</h1>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="px-6 py-4 font-medium text-gray-500">Date</th>
                            <th className="px-6 py-4 font-medium text-gray-500">User</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Type</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Amount</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Status</th>
                            <th className="px-6 py-4 font-medium text-gray-500">Reference</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {transactions.map((tx) => (
                            <tr key={tx.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {new Date(tx.createdAt).toLocaleString()}
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {tx.wallet.user.phone}
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                        {tx.type}
                                    </span>
                                </td>
                                <td className={`px-6 py-4 font-medium ${tx.type === "DEPOSIT" || tx.type === "PRIZE_CREDIT" ? "text-green-600" : "text-red-600"
                                    }`}>
                                    {tx.type === "DEPOSIT" || tx.type === "PRIZE_CREDIT" ? "+" : "-"} Rs. {tx.amount.toFixed(2)}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tx.status === "COMPLETED"
                                                ? "bg-green-100 text-green-800"
                                                : tx.status === "FAILED"
                                                    ? "bg-red-100 text-red-800"
                                                    : "bg-yellow-100 text-yellow-800"
                                            }`}
                                    >
                                        {tx.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500 font-mono">
                                    {tx.reference || "-"}
                                </td>
                            </tr>
                        ))}
                        {transactions.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                                    No transactions found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
