import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";
import ProfileForm from "./profile-form";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";
import { ArrowLeft, CreditCard } from "lucide-react";

async function getUser() {
    const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;
    if (!session) return null;

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
        const { payload } = await jwtVerify(session, secret);
        return await prisma.user.findUnique({ where: { id: payload.sub as string } });
    } catch (error) {
        return null;
    }
}

export default async function ProfilePage() {
    const user = await getUser();
    if (!user) redirect("/login");

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            <header className="bg-white shadow-sm sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
                    <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </Link>
                    <h1 className="text-xl font-bold text-gray-900">My Profile</h1>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-2xl">
                                {user.name ? user.name[0].toUpperCase() : user.phone.slice(-1)}
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">{user.phone}</h2>
                                <p className="text-sm text-gray-500">Member since {new Date(user.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <Link href="/dashboard/withdraw" className="btn-secondary text-sm px-4 py-2 flex items-center gap-2">
                            <CreditCard className="w-4 h-4" />
                            Withdraw Funds
                        </Link>
                    </div>

                    <div className="border-t border-gray-100 pt-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Personal Information</h3>
                        <ProfileForm user={user} />
                    </div>
                </div>
            </main>

            <MobileNav />
        </div>
    );
}
