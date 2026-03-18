import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DesktopNav from "@/components/DesktopNav";
import MobileBottomNav from "@/components/MobileBottomNav";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <DesktopNav />

            <div className="md:pl-64 min-h-screen flex flex-col">
                <main className="flex-1">
                    {children}
                </main>
            </div>

            {/* Mobile Nav is handled in individual pages or can be global here if we remove from pages */}
            {/* For now, keeping it in pages or we can render it here and hide on desktop */}
            <MobileBottomNav />
        </div>
    );
}
