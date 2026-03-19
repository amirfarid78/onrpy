"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Phone, Lock } from "lucide-react";

export default function LoginPage() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // Normalize phone: strip leading +92, 92, or 0 then send raw digits
        // The API's validatePhoneNumber will format it correctly
        let rawPhone = phoneNumber.trim();
        // Remove spaces and dashes
        rawPhone = rawPhone.replace(/[\s\-]/g, "");
        // If user typed something starting with +92 or 92, strip it so we just have 10 digits
        // Then pass the 10-digit string; the API adds +92
        if (rawPhone.startsWith("+92")) rawPhone = rawPhone.slice(3);
        else if (rawPhone.startsWith("92") && rawPhone.length === 12) rawPhone = rawPhone.slice(2);
        else if (rawPhone.startsWith("0")) rawPhone = rawPhone.slice(1);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phoneNumber: rawPhone, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Login failed. Please check your credentials.");
            }

            // Redirect to dashboard on success
            router.push("/dashboard");
        } catch (err: any) {
            console.error(err);
            setError(err.message || "Invalid credentials. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Particles Background */}
            <div className="particles-bg" />

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-400/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-400/20 rounded-full blur-[100px]" />
            </div>

            <div className="card-glass-premium w-full max-w-md overflow-hidden relative z-10 shadow-glow-lg">
                <div className="bg-gradient-to-r from-primary to-orange-600 p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <h1 className="text-3xl font-black text-white mb-2 tracking-tight">One Rupee Game</h1>
                    <p className="text-orange-100 font-medium">Win Big with Small Change!</p>
                </div>

                <div className="p-8">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="text-center">
                            <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-100 shadow-inner">
                                <Phone className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
                            <p className="text-gray-500 text-sm mt-2">Login to your account</p>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Mobile Number</label>
                            <div className="flex shadow-sm rounded-xl overflow-hidden transition-shadow focus-within:shadow-md border border-gray-200">
                                <span className="inline-flex items-center px-4 bg-gray-50 text-gray-500 font-medium border-r border-gray-200">
                                    +92
                                </span>
                                <input
                                    type="tel"
                                    required
                                    className="flex-1 block w-full py-3.5 px-4 text-gray-900 placeholder-gray-400 focus:outline-none bg-white"
                                    placeholder="300 1234567"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="password"
                                    required
                                    className="block w-full pl-10 py-3.5 px-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all shadow-sm focus:shadow-md"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg text-center border border-red-100">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary w-full py-3.5 text-lg shadow-lg hover:shadow-xl"
                        >
                            {loading ? <Loader2 className="animate-spin w-6 h-6" /> : "Login"}
                        </button>

                        <div className="text-center space-y-3">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{" "}
                                <a href="/signup" className="text-primary font-bold hover:underline">
                                    Sign Up
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
