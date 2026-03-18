"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ArrowLeft, Wallet } from "lucide-react";

export default function DepositPage() {
    const router = useRouter();
    const [amount, setAmount] = useState<number | "">("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleDeposit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!amount || Number(amount) < 1) {
            setError("Please enter a valid amount");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/wallet/deposit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: Number(amount) }),
            });

            if (!res.ok) throw new Error("Deposit failed");

            router.push("/dashboard");
            router.refresh();
        } catch (err) {
            setError("Failed to process deposit. Try again.");
        } finally {
            setLoading(false);
        }
    };

    const quickAmounts = [50, 100, 200, 500];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-md mx-auto space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    <h1 className="text-xl font-bold text-gray-800">Add Money</h1>
                </div>

                {/* Balance Card */}
                <div className="bg-primary text-white p-6 rounded-2xl shadow-lg flex items-center justify-between">
                    <div>
                        <p className="text-white/80 text-sm">Current Balance</p>
                        <h2 className="text-3xl font-bold mt-1">Rs. ---</h2>
                    </div>
                    <div className="bg-white/20 p-3 rounded-full">
                        <Wallet className="w-8 h-8" />
                    </div>
                </div>

                {/* Deposit Form */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="font-semibold text-gray-800 mb-4">Enter Amount</h3>

                    <form onSubmit={handleDeposit} className="space-y-6">
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">Rs.</span>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                className="w-full pl-12 pr-4 py-4 text-2xl font-bold text-gray-900 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-0 transition-colors"
                                placeholder="0"
                                min="1"
                                required
                            />
                        </div>

                        {/* Quick Amounts */}
                        <div className="grid grid-cols-4 gap-2">
                            {quickAmounts.map((amt) => (
                                <button
                                    key={amt}
                                    type="button"
                                    onClick={() => setAmount(amt)}
                                    className={`py-2 rounded-lg text-sm font-medium transition-colors ${amount === amt
                                            ? "bg-primary text-white"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                        }`}
                                >
                                    +{amt}
                                </button>
                            ))}
                        </div>

                        {/* Payment Method (Mock) */}
                        <div className="border border-gray-200 rounded-xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                                EP
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Easypaisa</p>
                                <p className="text-xs text-gray-500">Instant Transfer</p>
                            </div>
                            <div className="ml-auto w-4 h-4 rounded-full border-2 border-primary bg-primary"></div>
                        </div>

                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : "Proceed to Pay"}
                        </button>
                    </form>
                </div>

                <p className="text-center text-xs text-gray-400">
                    Secure 256-bit encrypted payment
                </p>
            </div>
        </div>
    );
}
