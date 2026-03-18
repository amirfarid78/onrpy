"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Loader2 } from "lucide-react";

export default function DeleteAdButton({ id }: { id: string }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this ad?")) return;
        setLoading(true);

        try {
            const res = await fetch(`/api/admin/ads/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Failed to delete ad");

            router.refresh();
        } catch (error) {
            alert("Error deleting ad");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={loading}
            className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
            title="Delete Ad"
        >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
        </button>
    );
}
