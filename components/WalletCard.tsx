"use client";

import { useState } from "react";
import { Loader2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WalletCard({ balance }: { balance: number }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleDeposit = async () => {
        const amount = prompt("Enter amount to deposit (PKR):", "100");
        if (!amount) return;

        setLoading(true);
        try {
            const res = await fetch("/api/wallet/deposit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: parseFloat(amount), provider: "EASYPAISA" }),
            });

            if (res.ok) {
                alert("Deposit Successful!");
                router.refresh();
            } else {
                alert("Deposit Failed");
            }
        } catch (error) {
            console.error(error);
            alert("Error processing deposit");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white text-gray-900 p-4 rounded-2xl shadow-md flex justify-between items-center">
            <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Wallet Balance</p>
                <h2 className="text-3xl font-bold text-primary">Rs. {balance.toFixed(2)}</h2>
            </div>
            <button
                onClick={handleDeposit}
                disabled={loading}
                className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:bg-primary-dark transition-colors flex items-center gap-2"
            >
                {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Plus className="w-4 h-4" />}
                Add Funds
            </button>
        </div>
    );
}
