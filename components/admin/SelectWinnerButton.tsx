"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Loader2 } from "lucide-react";

interface SelectWinnerButtonProps {
    poolId: string;
    entryId: string;
    userName: string;
}

export default function SelectWinnerButton({ poolId, entryId, userName }: SelectWinnerButtonProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSelect = async () => {
        if (!confirm(`Are you sure you want to select ${userName} as the winner? This action cannot be undone.`)) return;
        setLoading(true);

        try {
            const res = await fetch(`/api/admin/pools/${poolId}/draw`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ winnerEntryId: entryId }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to select winner");
            }

            router.refresh();
            alert("Winner selected successfully!");
        } catch (error) {
            alert((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleSelect}
            disabled={loading}
            className="text-xs bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-700 px-3 py-1 rounded-full transition-colors flex items-center gap-1 border border-gray-200 hover:border-green-200"
            title="Select as Winner"
        >
            {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Check className="w-3 h-3" />}
            Select
        </button>
    );
}
