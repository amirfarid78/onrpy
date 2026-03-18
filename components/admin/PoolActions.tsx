"use client";

import Link from "next/link";
import { Edit, Trash2, Trophy } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PoolActions({ id }: { id: string }) {
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this pool?")) return;

        try {
            const res = await fetch(`/api/admin/pools/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Failed to delete");

            router.refresh();
        } catch (error) {
            alert("Error deleting pool");
        }
    };

    return (
        <div className="flex items-center gap-2">
            <Link
                href={`/admin/pools/${id}/manage`}
                className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                title="Manage Winners"
            >
                <Trophy className="w-4 h-4" />
            </Link>
            <Link
                href={`/admin/pools/${id}/edit`}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Edit Pool"
            >
                <Edit className="w-4 h-4" />
            </Link>
            <button
                onClick={handleDelete}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete Pool"
            >
                <Trash2 className="w-4 h-4" />
            </button>
        </div>
    );
}
