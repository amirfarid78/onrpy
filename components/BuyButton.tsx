"use client";

import { useState } from "react";
import { Loader2, Ticket } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BuyButton({ poolId, price, isEnrolled }: { poolId: string, price: number, isEnrolled?: boolean }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleBuy = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (isEnrolled) return;
        if (!confirm(`Buy ticket for Rs. ${price}?`)) return;

        setLoading(true);
        try {
            const res = await fetch("/api/pools/enter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ poolId }),
            });

            const data = await res.json();

            if (res.ok) {
                alert(`Ticket Purchased! Number: ${data.entry.ticketNumber}`);
                router.refresh();
            } else {
                alert(data.error || "Purchase Failed");
            }
        } catch (error) {
            console.error(error);
            alert("Error processing purchase");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleBuy}
            disabled={loading || isEnrolled}
            className={`w-full mt-4 py-2 rounded-lg font-medium text-sm flex justify-center items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${isEnrolled
                    ? "bg-green-100 text-green-700 hover:bg-green-100"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
        >
            {loading ? <Loader2 className="animate-spin w-4 h-4" /> : isEnrolled ? <Ticket className="w-4 h-4" /> : <Ticket className="w-4 h-4" />}
            {isEnrolled ? "Already Enrolled" : `Buy Ticket - Rs. ${price}`}
        </button>
    );
}
