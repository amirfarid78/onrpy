"use client";

import Link from "next/link";
import { Gift, Zap, Shield, Users, Trophy, ArrowRight, Star, CheckCircle, ShieldCheck } from "lucide-react";
import PrizeCard from "@/components/PrizeCard";
import Logo from "@/components/Logo";
import { motion, useScroll, useTransform } from "framer-motion";


// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "backOut" } }
};

const float = {
    animate: {
        y: [0, -20, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export default function LandingPage() {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="min-h-screen bg-[#FFF5F0] overflow-x-hidden font-sans selection:bg-orange-200 selection:text-orange-900">
            {/* Particles Background */}
            <div className="particles-bg fixed inset-0 pointer-events-none z-0" />

            {/* Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 w-full z-50 glass-nav transition-all duration-300"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <Logo iconSize={32} />

                    <div className="flex items-center gap-6">
                        <Link href="/login" className="text-sm font-bold text-gray-600 hover:text-orange-600 transition-colors hidden sm:block">
                            Login
                        </Link>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="/login" className="bg-gray-900 text-white font-bold py-2.5 px-6 rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
                                Sign Up Free
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>

            <div className="relative z-10 pt-16">
                {/* Hero Section */}
                <section className="relative overflow-hidden pt-12 pb-24 sm:pt-32 sm:pb-40 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-50">
                    {/* Abstract Background Shapes */}
                    <motion.div style={{ y: heroY }} className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-orange-300/30 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-yellow-300/20 rounded-full blur-3xl"
                        />
                    </motion.div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center max-w-5xl mx-auto relative">

                            {/* Floating 3D Elements */}
                            <motion.div
                                variants={float}
                                animate="animate"
                                className="absolute top-0 left-4 sm:left-10 hidden lg:block"
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="glass-card-pro p-4 rotate-[-12deg] rounded-2xl shadow-xl"
                                >
                                    <Gift className="w-10 h-10 text-orange-600 drop-shadow-md" />
                                </motion.div>
                            </motion.div>

                            <motion.div
                                variants={float}
                                animate="animate"
                                transition={{ delay: 1 }} // Offset float
                                className="absolute bottom-20 right-4 sm:right-10 hidden lg:block"
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="glass-card-pro p-4 rotate-[12deg] rounded-2xl shadow-xl"
                                >
                                    <Trophy className="w-10 h-10 text-yellow-500 drop-shadow-md" />
                                </motion.div>
                            </motion.div>

                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur border border-white/50 rounded-full px-5 py-2 mb-8 shadow-lg"
                            >
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                                </span>
                                <span className="text-sm font-bold text-orange-900 tracking-wide uppercase">Pakistan's #1 Trusted Lottery</span>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white drop-shadow-lg"
                            >
                                Win Your <br className="hidden sm:block" />
                                <span className="text-gradient-gold drop-shadow-xl filter">Dream Prizes</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
                            >
                                Join <span className="font-bold text-white bg-white/20 px-2 rounded">1 Million+ users</span> winning iPhones, bikes, gold & more!
                                Entries start from just <span className="bg-white text-orange-600 px-2 py-0.5 rounded-md font-bold shadow-sm">Rs. 1</span>
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-col sm:flex-row gap-5 justify-center mb-20"
                            >
                                <Link href="/login" className="group relative">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white text-orange-600 font-black text-lg px-10 py-4 rounded-2xl shadow-2xl hover:shadow-orange-500/50 transition-all overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/50 to-transparent translate-x-[-100%] group-hover:animate-shine" />
                                        <span className="relative flex items-center gap-2">
                                            <Zap className="w-5 h-5 fill-orange-600" />
                                            Start Winning Now
                                        </span>
                                    </motion.div>
                                </Link>
                                <Link href="#how-it-works" className="group">
                                    <motion.div
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-md border border-white/40 text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[10px] border-l-white border-b-[5px] border-b-transparent ml-1"></div>
                                        </div>
                                        Watch How It Works
                                    </motion.div>
                                </Link>
                            </motion.div>

                            {/* Stats Bar - Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto relative z-20 -mb-32"
                            >
                                {[
                                    { icon: Users, label: "50,000+", sub: "Happy Winners", color: "text-blue-500", bg: "bg-blue-50" },
                                    { icon: Gift, label: "Rs. 100M+", sub: "Prizes Awarded", color: "text-green-500", bg: "bg-green-50" },
                                    { icon: Star, label: "4.9/5", sub: "User Rating", color: "text-yellow-500", bg: "bg-yellow-50" },
                                    { icon: Shield, label: "100%", sub: "Secure & Fair", color: "text-purple-500", bg: "bg-purple-50" },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5 }}
                                        className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center group"
                                    >
                                        <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center mb-3 group-hover:rotate-6 transition-transform`}>
                                            <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                        </div>
                                        <span className="font-black text-2xl text-gray-900">{stat.label}</span>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">{stat.sub}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-center mb-20"
                        >
                            <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-3 block">Simple & Easy Process</span>
                            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                                Start Winning in <span className="gradient-text">Minutes</span>
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                                Join the world's simplest lottery. Our process is transparent, secure, and designed for you to win.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-4 gap-8 relative"
                        >
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-16 left-0 w-full h-0.5 bg-gradient-to-r from-orange-100 via-orange-300 to-orange-100 -z-10" />

                            {[
                                { step: 1, title: "Create Account", desc: "Sign up in seconds using your phone number with quick OTP verification." },
                                { step: 2, title: "Add Balance", desc: "Top up securely via Easypaisa or JazzCash. Instant transfer." },
                                { step: 3, title: "Buy Entries", desc: "Choose from exciting daily and weekly prizes starting from just Rs. 1." },
                                { step: 4, title: "Win & Claim", desc: "Winners are selected fairly. Claim your prize or its cash value!" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="group relative bg-white p-8 rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                                        {item.step}
                                    </div>

                                    <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>

                                    {/* Features list per step */}
                                    <ul className="space-y-2.5 border-t border-gray-50 pt-4">
                                        {i === 0 && ["Secure Login", "No documents needed", "Instant activation"].map((f, j) => (
                                            <li key={j} className="flex items-center text-xs text-gray-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" /> {f}</li>
                                        ))}
                                        {i === 1 && ["Secure deposits", "No extra fees", "Instant credit"].map((f, j) => (
                                            <li key={j} className="flex items-center text-xs text-gray-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" /> {f}</li>
                                        ))}
                                        {i === 2 && ["Multiple entries", "Better odds", "Low cost"].map((f, j) => (
                                            <li key={j} className="flex items-center text-xs text-gray-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" /> {f}</li>
                                        ))}
                                        {i === 3 && ["Instant notification", "Easy claim process", "Guaranteed"].map((f, j) => (
                                            <li key={j} className="flex items-center text-xs text-gray-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" /> {f}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="text-center mt-16">
                            <Link href="/login">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary px-10 py-4 text-lg shadow-xl hover:shadow-orange-500/40 flex items-center justify-center mx-auto"
                                >
                                    Get Started Now <ArrowRight className="w-5 h-5 ml-2" />
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Prizes Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                    {/* Decorative Blobs */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                        >
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </span>
                                    <span className="text-red-600 font-bold tracking-widest text-xs uppercase">Live Auctions</span>
                                </div>
                                <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
                                    Win These <span className="gradient-text">Amazing Prizes</span>
                                </h2>
                                <p className="text-gray-500 mt-4 max-w-xl text-lg">
                                    Browse our active lottery pools. Each entry gets you closer to winning these incredible prizes!
                                </p>
                            </div>
                            <Link href="/pools" className="group flex items-center gap-2 font-bold text-orange-600 bg-orange-50 px-6 py-3 rounded-xl hover:bg-orange-100 transition-colors">
                                View All Auctions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Filter Tabs */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex gap-3 mb-10 overflow-x-auto pb-4 hide-scrollbar"
                        >
                            {["All Prizes", "Trending", "Ending Soon", "New"].map((tab, i) => (
                                <motion.button
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${i === 0 ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20' : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'}`}
                                >
                                    {i === 0 && <Zap className="w-4 h-4 inline mr-2 text-yellow-400" />}
                                    {tab}
                                </motion.button>
                            ))}
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                        >
                            {[
                                { title: "iPhone 15 Pro Max 256GB - Titanium Blue", price: "1", originalPrice: "Rs. 450,000", image: "/placeholder-iphone.png", totalSlots: 5000, filledSlots: 3420, tag: "Trending" },
                                { title: "Honda CG 125 Motorcycle - Brand New 2024", price: "5", originalPrice: "Rs. 234,900", image: "/placeholder-bike.png", totalSlots: 2000, filledSlots: 1850, tag: "Ending Soon" },
                                { title: "Samsung 55' Smart LED TV 4K Ultra HD", price: "2", originalPrice: "Rs. 125,000", image: "/placeholder-tv.png", totalSlots: 1000, filledSlots: 120, tag: "New" },
                                { title: "Sony PlayStation 5 Console with Extra Controller", price: "2", originalPrice: "Rs. 165,000", image: "/placeholder-ps5.png", totalSlots: 1500, filledSlots: 890 },
                                { title: "MacBook Air M2 13' - Space Grey", price: "5", originalPrice: "Rs. 350,000", image: "/placeholder-macbook.png", totalSlots: 3000, filledSlots: 2100, tag: "Featured" },
                                { title: "Gold Ring 22K - 1 Tola Pure Gold", price: "10", originalPrice: "Rs. 240,000", image: "/placeholder-gold.png", totalSlots: 500, filledSlots: 450 },
                            ].map((prize, i) => (
                                <motion.div key={i} variants={scaleIn}>
                                    <PrizeCard {...prize} />
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="text-center mt-16">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-secondary px-8 py-3 border border-gray-200 hover:border-orange-200 flex items-center justify-center mx-auto"
                            >
                                Load More Contests <ArrowRight className="w-4 h-4 ml-2" />
                            </motion.button>
                        </div>
                    </div>
                </section>

                {/* Trust Section */}
                <section className="py-24 bg-[#111] text-white relative overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
                                <ShieldCheck className="w-4 h-4 text-green-400" /> Trusted & Secure
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-black mb-16 tracking-tight">
                                Your Trust, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Our Priority</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-4 gap-8"
                        >
                            {[
                                { title: "Bank-Level Security", desc: "Your payments and data are protected with 256-bit SSL encryption.", icon: Shield, color: "text-blue-400", bg: "bg-blue-500/10" },
                                { title: "Fully Transparent", desc: "Verified fair random number generation for every draw.", icon: CheckCircle, color: "text-green-400", bg: "bg-green-500/10" },
                                { title: "Certified Fair", desc: "Winners are selected using internationally certified random algorithms.", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-500/10" },
                                { title: "Guaranteed Payouts", desc: "Winners receive their prizes safely within 24 hours.", icon: Gift, color: "text-purple-400", bg: "bg-purple-500/10" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="p-8 rounded-3xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 group text-left backdrop-blur-sm"
                                >
                                    <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-3 text-white">{item.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#FF5500] text-white p-12 sm:p-24 text-center"
                        >
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-400/50 to-red-600/50"></div>

                            {/* Floating Shapes */}
                            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
                            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 px-5 py-2 rounded-full text-sm font-bold mb-8 shadow-lg">
                                    <Gift className="w-4 h-4" /> New winners every day!
                                </div>
                                <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mb-8 tracking-tight drop-shadow-sm">
                                    Ready to Win Your <br /> Dream Prize?
                                </h2>
                                <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                                    Join thousands of happy winners. Create your free account today and start winning amazing prizes!
                                </p>
                                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                    <Link href="/login">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-white text-orange-600 font-black text-lg px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all"
                                        >
                                            Create Free Account
                                        </motion.button>
                                    </Link>
                                    <Link href="#how-it-works">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-black/20 backdrop-blur-md text-white font-bold text-lg px-10 py-4 rounded-2xl border border-white/20 hover:bg-black/30 transition-all"
                                        >
                                            Watch How It Works
                                        </motion.button>
                                    </Link>
                                </div>
                                <div className="mt-10 text-sm text-orange-100/80 flex items-center justify-center gap-2 font-medium">
                                    <ShieldCheck className="w-4 h-4" /> 100% Secure & Verified Platform
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                            <div className="space-y-6">
                                <Logo />
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Pakistan's most trusted lottery platform. Win amazing prizes for as low as Rs. 1. Fair, transparent, and 100% secure.
                                </p>
                                <div className="flex gap-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -3, backgroundColor: "#f97316", color: "#fff" }}
                                            className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 transition-all cursor-pointer shadow-sm hover:shadow-orange-500/30"
                                        >
                                            <span className="text-xs font-bold">Soc</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900 text-lg mb-6">Company</h4>
                                <ul className="space-y-4 text-sm text-gray-500">
                                    <li><Link href="#" className="hover:text-orange-600 transition-colors">About Us</Link></li>
                                    <li><Link href="#" className="hover:text-orange-600 transition-colors">How It Works</Link></li>
                                    <li><Link href="#" className="hover:text-orange-600 transition-colors">Winners Gallery</Link></li>
                                    <li><Link href="#" className="hover:text-orange-600 transition-colors">Careers</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900 text-lg mb-6">Support</h4>
                                <ul className="space-y-4 text-sm text-gray-500">
                                    <li><Link href="#" className="hover:text-orange-600 transition-colors">Help Center</Link></li>
                                    <li><Link href="#" className="hover:text-orange-600 transition-colors">FAQ</Link></li>
                                    <li><Link href="#" className="hover:text-orange-600 transition-colors">Contact Us</Link></li>
                                    <li><Link href="#" className="hover:text-orange-600 transition-colors">Report an Issue</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900 text-lg mb-6">Legal</h4>
                                <ul className="space-y-4 text-sm text-gray-500">
                                    <li><Link href="#" className="hover:text-orange-600 transition-colors">Terms & Conditions</Link></li>
                                    <li><Link href="#" className="hover:text-orange-600 transition-colors">Privacy Policy</Link></li>
                                    <li><Link href="#" className="hover:text-orange-600 transition-colors">Refund Policy</Link></li>
                                    <li><Link href="#" className="hover:text-orange-600 transition-colors">Responsible Gaming</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-400 text-sm font-medium">© 2024 One Rupee Game. All rights reserved.</p>
                            <div className="flex gap-6 text-sm text-gray-400 font-medium">
                                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Secure Payment</span>
                                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> SSL Encrypted</span>
                                <span className="flex items-center gap-2"><Users className="w-4 h-4" /> 24/7 Support</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
