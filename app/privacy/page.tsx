import Link from "next/link";
import Logo from "@/components/Logo";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white border-b border-gray-200 py-4">
                <div className="max-w-4xl mx-auto px-4">
                    <Link href="/">
                        <Logo iconSize={24} />
                    </Link>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                    <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
                    <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                            <p>We only collect the absolute minimum data required to facilitate your account functionality and ensure the integrity of our draws. This includes your phone number, standard device analytics, and transaction history.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. OTP and Authentication</h2>
                            <p>Phone numbers are authenticated securely using Firebase Auth. We do not store your passwords in plain text, and we will never ask for your password or OTP via phone or email.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Sharing</h2>
                            <p>We respect your privacy. We do not sell, trade, or rent your personal identification information to others. Limited data may be shared with payment processors exclusively to facilitate deposits and withdrawals.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Security</h2>
                            <p>We adopt industry-standard security measures including SSL encryption to protect against unauthorized access, alteration, disclosure, or destruction of your personal info.</p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
