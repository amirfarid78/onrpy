"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Loader2, User, Phone, Lock, MapPin, MessageSquare } from "lucide-react";
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from "firebase/auth";
import { auth } from "@/lib/firebase";

type SignupFormData = {
    fullName: string;
    phoneNumber: string;
    whatsappNumber?: string;
    address?: string;
    password: string;
    confirmPassword: string;
    referralCode?: string;
};

export default function SignupPage() {
    const [step, setStep] = useState<"FORM" | "OTP">("FORM");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
    const [formData, setFormData] = useState<SignupFormData | null>(null);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignupFormData>();

    const password = watch("password");

    const initializeRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            try {
                window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
                    size: "invisible",
                    callback: () => console.log("reCAPTCHA solved"),
                    "expired-callback": () => console.log("reCAPTCHA expired"),
                });
                window.recaptchaVerifier.render();
            } catch (err) {
                console.error("Error initializing reCAPTCHA:", err);
            }
        }
    };

    const onSubmit = async (data: SignupFormData) => {
        setLoading(true);
        setError("");

        try {
            // Validate passwords match
            if (data.password !== data.confirmPassword) {
                throw new Error("Passwords do not match");
            }

            // Check if phone already exists
            const checkRes = await fetch("/api/auth/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phoneNumber: data.phoneNumber }),
            });

            if (!checkRes.ok) {
                const errorData = await checkRes.json();
                throw new Error(errorData.error || "Failed to send OTP");
            }

            // Initialize reCAPTCHA
            initializeRecaptcha();

            if (!window.recaptchaVerifier) {
                throw new Error("reCAPTCHA not initialized");
            }

            // Format phone number
            const formattedPhone = data.phoneNumber.startsWith("+")
                ? data.phoneNumber
                : `+92${data.phoneNumber.replace(/^0+/, "")}`;

            // Send OTP via Firebase
            const confirmation = await signInWithPhoneNumber(
                auth,
                formattedPhone,
                window.recaptchaVerifier
            );

            setConfirmationResult(confirmation);
            setFormData(data);
            setStep("OTP");
        } catch (err: any) {
            console.error(err);
            setError(err.message || "Failed to send OTP");
            if (window.recaptchaVerifier) {
                window.recaptchaVerifier.clear();
                window.recaptchaVerifier = undefined;
            }
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            if (!confirmationResult || !formData) {
                throw new Error("Session expired. Please restart.");
            }

            // Verify OTP with Firebase
            const result = await confirmationResult.confirm(otp);
            const firebaseToken = await result.user.getIdToken();

            // Format phone number
            const formattedPhone = formData.phoneNumber.startsWith("+")
                ? formData.phoneNumber
                : `+92${formData.phoneNumber.replace(/^0+/, "")}`;

            // Send to backend to create account
            const res = await fetch("/api/auth/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firebaseToken,
                    fullName: formData.fullName,
                    phoneNumber: formattedPhone,
                    whatsappNumber: formData.whatsappNumber,
                    address: formData.address,
                    password: formData.password,
                    referralCode: formData.referralCode,
                }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to create account");
            }

            // Redirect to dashboard
            router.push("/dashboard");
        } catch (err: any) {
            console.error(err);
            setError(err.message || "Invalid OTP");
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
                    <h1 className="text-3xl font-black text-white mb-2 tracking-tight">Create Account</h1>
                    <p className="text-orange-100 font-medium">Join One Rupee Game Today!</p>
                </div>

                <div className="p-8">
                    {step === "FORM" ? (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Full Name *</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        {...register("fullName", {
                                            required: "Full name is required",
                                            minLength: { value: 3, message: "Name must be at least 3 characters" },
                                        })}
                                        className="block w-full pl-10 py-3 px-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all shadow-sm focus:shadow-md"
                                        placeholder="John Doe"
                                    />
                                </div>
                                {errors.fullName && (
                                    <p className="text-red-500 text-xs ml-1">{errors.fullName.message}</p>
                                )}
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Phone Number *</label>
                                <div className="flex shadow-sm rounded-xl overflow-hidden border border-gray-200">
                                    <span className="inline-flex items-center px-4 bg-gray-50 text-gray-500 font-medium border-r border-gray-200">
                                        +92
                                    </span>
                                    <input
                                        type="tel"
                                        {...register("phoneNumber", {
                                            required: "Phone number is required",
                                            pattern: {
                                                value: /^[0-9]{10}$/,
                                                message: "Enter valid 10-digit number",
                                            },
                                        })}
                                        className="flex-1 block w-full py-3 px-4 text-gray-900 placeholder-gray-400 focus:outline-none bg-white"
                                        placeholder="3001234567"
                                    />
                                </div>
                                {errors.phoneNumber && (
                                    <p className="text-red-500 text-xs ml-1">{errors.phoneNumber.message}</p>
                                )}
                            </div>

                            {/* WhatsApp Number */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">WhatsApp Number (Optional)</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="tel"
                                        {...register("whatsappNumber")}
                                        className="block w-full pl-10 py-3 px-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all shadow-sm focus:shadow-md"
                                        placeholder="+92 300 1234567"
                                    />
                                </div>
                            </div>

                            {/* Address */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Address (Optional)</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        {...register("address")}
                                        className="block w-full pl-10 py-3 px-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all shadow-sm focus:shadow-md"
                                        placeholder="Your address"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Password *</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 6, message: "Password must be at least 6 characters" },
                                        })}
                                        className="block w-full pl-10 py-3 px-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all shadow-sm focus:shadow-md"
                                        placeholder="••••••••"
                                    />
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-xs ml-1">{errors.password.message}</p>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Confirm Password *</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="password"
                                        {...register("confirmPassword", {
                                            required: "Please confirm your password",
                                            validate: (value) => value === password || "Passwords do not match",
                                        })}
                                        className="block w-full pl-10 py-3 px-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all shadow-sm focus:shadow-md"
                                        placeholder="••••••••"
                                    />
                                </div>
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-xs ml-1">{errors.confirmPassword.message}</p>
                                )}
                            </div>

                            {/* Referral Code */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Referral Code (Optional)</label>
                                <input
                                    type="text"
                                    {...register("referralCode")}
                                    className="block w-full py-3 px-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all shadow-sm focus:shadow-md"
                                    placeholder="REF-123456"
                                />
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
                                {loading ? <Loader2 className="animate-spin w-6 h-6" /> : "Send OTP"}
                            </button>

                            <p className="text-center text-sm text-gray-600">
                                Already have an account?{" "}
                                <a href="/login" className="text-primary font-bold hover:underline">
                                    Login
                                </a>
                            </p>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyOtp} className="space-y-6">
                            <div className="text-center">
                                <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100 shadow-inner">
                                    <Phone className="w-8 h-8 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Verify OTP</h2>
                                <p className="text-gray-500 text-sm mt-2">
                                    Enter the code sent to <span className="font-bold text-gray-800">+92 {formData?.phoneNumber}</span>
                                </p>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">One-Time Password</label>
                                <input
                                    type="text"
                                    required
                                    maxLength={6}
                                    className="block w-full text-center tracking-[0.5em] text-3xl font-bold rounded-xl border border-gray-200 py-4 px-4 text-gray-900 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all shadow-sm focus:shadow-md"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                                />
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
                                {loading ? <Loader2 className="animate-spin w-6 h-6" /> : "Verify & Create Account"}
                            </button>

                            <button
                                type="button"
                                onClick={() => setStep("FORM")}
                                className="w-full text-center text-sm font-medium text-gray-500 hover:text-primary transition-colors"
                            >
                                Change Information
                            </button>
                        </form>
                    )}
                    <div id="recaptcha-container"></div>
                </div>
            </div>
        </div>
    );
}

// Add types for window object
declare global {
    interface Window {
        recaptchaVerifier: RecaptchaVerifier | undefined;
    }
}
