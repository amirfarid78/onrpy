"use client";

import { LogOut } from "lucide-react";

export default function LogoutButton() {
    return (
        <button
            onClick={async () => {
                await fetch('/api/auth/logout', { method: 'POST' });
                document.cookie = "session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                window.location.href = "/login";
            }}
            className="flex items-center justify-center gap-2 w-full py-3 mt-6 text-red-600 bg-red-50 hover:bg-red-100 rounded-xl font-bold transition-colors"
        >
            <LogOut className="w-5 h-5" />
            Logout
        </button>
    );
}
