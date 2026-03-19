"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Gift, Star, Target } from "lucide-react";

const DUMMY_WINNERS = [
    { name: "Amir Farid", prize: "iPhone 15 Pro Max", time: "Just now", amount: "Rs. 1" },
    { name: "Zain Ali", prize: "Honda CG 125", time: "2 mins ago", amount: "Rs. 5" },
    { name: "Fatima Khan", prize: "Rs. 50,000 Cash", time: "5 mins ago", amount: "Rs. 2" },
    { name: "Bilal Ahmed", prize: "Sony PlayStation 5", time: "12 mins ago", amount: "Rs. 5" },
    { name: "Ayesha Bibi", prize: "Gold Ring 22K", time: "25 mins ago", amount: "Rs. 10" },
    { name: "Usman Raza", prize: "Samsung 55' Smart TV", time: "42 mins ago", amount: "Rs. 2" },
    { name: "Hamza Tariq", prize: "MacBook Air M2", time: "1 hr ago", amount: "Rs. 5" },
];

export default function LiveWinTicker() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Rotate notifications every few seconds (dynamics over 2 mins)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % DUMMY_WINNERS.length);
        }, 4500); // 4.5 seconds per ticker
        return () => clearInterval(timer);
    }, []);

    const winner = DUMMY_WINNERS[currentIndex];

    return (
        <div className="bg-gray-900 border-b border-gray-800 overflow-hidden relative shadow-inner h-12 flex flex-col justify-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center gap-4">
                <div className="flex items-center gap-2 border-r border-gray-700 pr-4 shrink-0 relative z-10">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                    </span>
                    <span className="text-red-500 font-bold text-xs uppercase tracking-widest">Live</span>
                </div>

                <div className="flex-1 relative h-6 overflow-hidden">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={currentIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute inset-0 flex items-center text-sm"
                        >
                            <div className="flex items-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
                                <Trophy className="w-4 h-4 text-yellow-500 shrink-0" />
                                <span className="font-bold text-white shrink-0">{winner.name}</span>
                                <span className="text-gray-400 shrink-0">just won</span>
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 shrink-0">
                                    {winner.prize}
                                </span>
                                <span className="text-gray-500 text-xs shrink-0 hidden sm:inline">(from {winner.amount} ticket)</span>
                                <span className="text-gray-600 text-xs shrink-0 ml-auto hidden md:inline">{winner.time}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
