import Link from "next/link";
import Logo from "@/components/Logo";

export default function ResponsibleGamingPage() {
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
                    <h1 className="text-4xl font-black mb-8 text-orange-600">Responsible Gaming</h1>
                    <p className="text-gray-500 mb-8">Play smart. Win smart.</p>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Are you playing responsibly?</h2>
                            <p>Lotteries and prize pools should be treated as a fun, recreational activity—not a dependable source of income or a way out of financial difficulty.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Setting Limits</h2>
                            <p>Consider setting strict budget limits before purchasing slots. Only spend what you can reasonably afford to lose. The odds of winning depend on the pool size, but no outcome is guaranteed.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Avoid Chasing Losses</h2>
                            <p>Do not attempt to recoup previous losses by buying more tickets. Treat every prize pool as an independent event.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Need A Break?</h2>
                            <p>If you feel that participation is negatively impacting your well-being, you can request an account lock or self-exclusion by emailing our support team at support@onerupeegame.com.</p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
