import Link from "next/link";
import Logo from "@/components/Logo";

export default function TermsPage() {
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
                    <h1 className="text-4xl font-black mb-8">Terms & Conditions</h1>
                    <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                            <p>By accessing and using this platform, you accept and agree to be bound by the terms and provision of this agreement. Use of the platform must be solely for lawful purposes.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
                            <p>You must be at least 18 years of age to participate in any live auction, pool, or wallet transaction. By using the service, you represent and warrant that you meet all eligibility requirements.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Platform Mechanics</h2>
                            <p>Tickets purchased for active prize pools are non-refundable. The winning draws are conducted mathematically using verified random number generation once all required slots have been filled.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Prize Claiming</h2>
                            <p>Winners will be notified via SMS and their registered dashboard. Physical prizes may require identity verification before shipping. Cash alternatives may be offered at the sole discretion of the platform.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Disclaimer of Liability</h2>
                            <p>Our platform operates "as-is". We are not liable for any network or technical failures that may prevent the placement of an entry before a pool closes.</p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
