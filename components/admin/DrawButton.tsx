"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trophy, Loader2 } from "lucide-react";

export default function DrawButton({ id }: { id: string }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleDraw = async () => {
        if (!confirm("Are you sure you want to pick a random winner? This action cannot be undone.")) return;
        setLoading(true);

        try {
            const res = await fetch(`/api/admin/pools/${id}/draw`, {
                method: "POST",
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to draw winner");
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
            onClick={handleDraw}
            disabled={loading}
            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Trophy className="w-5 h-5" />}
            Pick Random Winner
        </button>
    );
}
