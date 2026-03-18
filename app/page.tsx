import Link from "next/link";
import { Sparkles, Gift, Zap, Shield, TrendingUp, Users, Trophy, ArrowRight, Star, CheckCircle, ShieldCheck } from "lucide-react";
import PrizeCard from "@/components/PrizeCard";
import Logo from "@/components/Logo";

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFF5F0] overflow-x-hidden">
      {/* Particles Background */}
      <div className="particles-bg" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Logo iconSize={32} />

          <div className="flex items-center gap-6">
            <Link href="/login" className="text-sm font-bold text-gray-600 hover:text-orange-600 transition-colors hidden sm:block">
              Login
            </Link>
            <Link href="/login" className="bg-gray-900 text-white font-bold py-2.5 px-6 rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Sign Up Free
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-24 sm:pt-24 sm:pb-32 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-50">
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-300/30 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-yellow-300/20 rounded-full blur-3xl animate-float-medium" />
            <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-white/10 rounded-full blur-2xl animate-float-fast" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-5xl mx-auto relative">

              {/* Floating 3D Elements */}
              <div className="absolute top-0 left-4 sm:left-10 animate-float-slow hidden lg:block">
                <div className="glass-card-pro p-4 rotate-[-12deg] rounded-2xl shadow-xl">
                  <Gift className="w-10 h-10 text-orange-600 drop-shadow-md" />
                </div>
              </div>
              <div className="absolute bottom-20 right-4 sm:right-10 animate-float-medium hidden lg:block" style={{ animationDelay: "1s" }}>
                <div className="glass-card-pro p-4 rotate-[12deg] rounded-2xl shadow-xl">
                  <Trophy className="w-10 h-10 text-yellow-500 drop-shadow-md" />
                </div>
              </div>
              <div className="absolute top-20 right-[15%] animate-float-fast hidden lg:block opacity-60" style={{ animationDelay: "2s" }}>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                  <Star className="w-6 h-6 text-yellow-200 fill-yellow-200" />
                </div>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur border border-white/50 rounded-full px-5 py-2 mb-8 shadow-lg animate-slide-up">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
                <span className="text-sm font-bold text-orange-900 tracking-wide uppercase">Pakistan's #1 Trusted Lottery</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white drop-shadow-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Win Your <br className="hidden sm:block" />
                <span className="text-gradient-gold drop-shadow-xl filter">Dream Prizes</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
                Join <span className="font-bold text-white bg-white/20 px-2 rounded">1 Million+ users</span> winning iPhones, bikes, gold & more!
                Entries start from just <span className="bg-white text-orange-600 px-2 py-0.5 rounded-md font-bold shadow-sm">Rs. 1</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <Link
                  href="/login"
                  className="group relative bg-white text-orange-600 font-black text-lg px-10 py-4 rounded-2xl shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/50 to-transparent translate-x-[-100%] group-hover:animate-shine" />
                  <span className="relative flex items-center gap-2">
                    <Zap className="w-5 h-5 fill-orange-600" />
                    Start Winning Now
                  </span>
                </Link>
                <Link
                  href="#how-it-works"
                  className="group flex items-center justify-center gap-2 bg-white/20 backdrop-blur-md border border-white/40 text-white font-bold text-lg px-10 py-4 rounded-2xl hover:bg-white/30 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[10px] border-l-white border-b-[5px] border-b-transparent ml-1"></div>
                  </div>
                  Watch How It Works
                </Link>
              </div>

              {/* Stats Bar - Floating Card */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto relative z-20 -mb-32">
                {[
                  { icon: Users, label: "50,000+", sub: "Happy Winners", color: "text-blue-500", bg: "bg-blue-50" },
                  { icon: Gift, label: "Rs. 100M+", sub: "Prizes Awarded", color: "text-green-500", bg: "bg-green-50" },
                  { icon: Star, label: "4.9/5", sub: "User Rating", color: "text-yellow-500", bg: "bg-yellow-50" },
                  { icon: Shield, label: "100%", sub: "Secure & Fair", color: "text-purple-500", bg: "bg-purple-50" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                    <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center mb-3 group-hover:rotate-6 transition-transform`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <span className="font-black text-2xl text-gray-900">{stat.label}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">{stat.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20 animate-slide-up">
              <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-3 block">Simple & Easy Process</span>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                Start Winning in <span className="gradient-text">Minutes</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                Join the world's simplest lottery. Our process is transparent, secure, and designed for you to win.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-16 left-0 w-full h-0.5 bg-gradient-to-r from-orange-100 via-orange-300 to-orange-100 -z-10" />

              {[
                { step: 1, title: "Create Account", desc: "Sign up in seconds using your phone number with quick OTP verification." },
                { step: 2, title: "Add Balance", desc: "Top up securely via Easypaisa or JazzCash. Instant transfer." },
                { step: 3, title: "Buy Entries", desc: "Choose from exciting daily and weekly prizes starting from just Rs. 1." },
                { step: 4, title: "Win & Claim", desc: "Winners are selected fairly. Claim your prize or its cash value!" },
              ].map((item, i) => (
                <div key={i} className="group relative bg-white p-8 rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-2">
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
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link href="/login" className="btn-primary px-10 py-4 text-lg shadow-xl hover:shadow-orange-500/40">
                Get Started Now <ArrowRight className="w-5 h-5 ml-2" />
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
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
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
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-3 mb-10 overflow-x-auto pb-4 hide-scrollbar">
              {["All Prizes", "Trending", "Ending Soon", "New"].map((tab, i) => (
                <button
                  key={i}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${i === 0 ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20' : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'}`}
                >
                  {i === 0 && <Zap className="w-4 h-4 inline mr-2 text-yellow-400" />}
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <PrizeCard
                title="iPhone 15 Pro Max 256GB - Titanium Blue"
                price="1"
                originalPrice="Rs. 450,000"
                image="/placeholder-iphone.png"
                totalSlots={5000}
                filledSlots={3420}
                tag="Trending"
              />
              <PrizeCard
                title="Honda CG 125 Motorcycle - Brand New 2024"
                price="5"
                originalPrice="Rs. 234,900"
                image="/placeholder-bike.png"
                totalSlots={2000}
                filledSlots={1850}
                tag="Ending Soon"
              />
              <PrizeCard
                title="Samsung 55' Smart LED TV 4K Ultra HD"
                price="2"
                originalPrice="Rs. 125,000"
                image="/placeholder-tv.png"
                totalSlots={1000}
                filledSlots={120}
                tag="New"
              />
              <PrizeCard
                title="Sony PlayStation 5 Console with Extra Controller"
                price="2"
                originalPrice="Rs. 165,000"
                image="/placeholder-ps5.png"
                totalSlots={1500}
                filledSlots={890}
              />
              <PrizeCard
                title="MacBook Air M2 13' - Space Grey"
                price="5"
                originalPrice="Rs. 350,000"
                image="/placeholder-macbook.png"
                totalSlots={3000}
                filledSlots={2100}
                tag="Featured"
              />
              <PrizeCard
                title="Gold Ring 22K - 1 Tola Pure Gold"
                price="10"
                originalPrice="Rs. 240,000"
                image="/placeholder-gold.png"
                totalSlots={500}
                filledSlots={450}
              />
            </div>

            <div className="text-center mt-16">
              <button className="btn-secondary px-8 py-3 border border-gray-200 hover:border-orange-200">
                Load More Contests <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 bg-[#111] text-white relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
              <ShieldCheck className="w-4 h-4 text-green-400" /> Trusted & Secure
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-16 tracking-tight">
              Your Trust, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Our Priority</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "Bank-Level Security", desc: "Your payments and data are protected with 256-bit SSL encryption.", icon: Shield, color: "text-blue-400", bg: "bg-blue-500/10" },
                { title: "Fully Transparent", desc: "Verified fair random number generation for every draw.", icon: CheckCircle, color: "text-green-400", bg: "bg-green-500/10" },
                { title: "Certified Fair", desc: "Winners are selected using internationally certified random algorithms.", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-500/10" },
                { title: "Guaranteed Payouts", desc: "Winners receive their prizes safely within 24 hours.", icon: Gift, color: "text-purple-400", bg: "bg-purple-500/10" },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 group text-left backdrop-blur-sm">
                  <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#FF5500] text-white p-12 sm:p-24 text-center">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-400/50 to-red-600/50"></div>

              {/* Floating Shapes */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float-slow" />
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-float-medium" />

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
                  <Link
                    href="/login"
                    className="bg-white text-orange-600 font-black text-lg px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all transform hover:-translate-y-1"
                  >
                    Create Free Account
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="bg-black/20 backdrop-blur-md text-white font-bold text-lg px-10 py-4 rounded-2xl border border-white/20 hover:bg-black/30 transition-all"
                  >
                    Watch How It Works
                  </Link>
                </div>
                <div className="mt-10 text-sm text-orange-100/80 flex items-center justify-center gap-2 font-medium">
                  <ShieldCheck className="w-4 h-4" /> 100% Secure & Verified Platform
                </div>
              </div>
            </div>
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
                    <div key={i} className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all cursor-pointer shadow-sm hover:shadow-orange-500/30">
                      <span className="text-xs font-bold">Soc</span>
                    </div>
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

