import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyJWT } from "@/lib/auth";
import Link from "next/link";
import { LayoutDashboard, Users, Ticket, Receipt, LogOut, Trophy, Settings, Megaphone } from "lucide-react";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;

    if (!session) {
        redirect("/login");
    }

    const payload = await verifyJWT(session);
    if (!payload) redirect("/login");

    if (payload.role !== "ADMIN") {
        redirect("/dashboard"); // Redirect non-admins to user dashboard
    }

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md hidden md:flex flex-col">
                <div className="p-6 border-b">
                    <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <Link
                        href="/admin"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                    </Link>
                    <Link
                        href="/admin/pools"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                    >
                        <Ticket className="w-5 h-5" />
                        Lottery Pools
                    </Link>
                    <Link
                        href="/admin/users"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                    >
                        <Users className="w-5 h-5" />
                        Users
                    </Link>
                    <Link
                        href="/admin/transactions"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                    >
                        <Receipt className="w-5 h-5" />
                        Transactions
                    </Link>
                    <Link
                        href="/admin/referrals"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                    >
                        <Users className="w-5 h-5" />
                        Referrals
                    </Link>
                    <Link
                        href="/admin/winners"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                    >
                        <Trophy className="w-5 h-5" />
                        Winners
                    </Link>
                    <Link
                        href="/admin/ads"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                    >
                        <Megaphone className="w-5 h-5" />
                        Ads
                    </Link>
                    <Link
                        href="/admin/settings"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                    >
                        <Settings className="w-5 h-5" />
                        Settings
                    </Link>
                </nav>
                <div className="p-4 border-t">
                    <button className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg w-full transition-colors">
                        <LogOut className="w-5 h-5" />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">{children}</main>
        </div>
    );
}
