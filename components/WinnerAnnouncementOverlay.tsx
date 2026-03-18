"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";

interface Announcement {
    id: string;
    poolId: string;
    productName: string;
    productImage: string;
    winnerName: string;
    winnerImage: string;
    winnerPhone: string;
    revealTime: number;
}

interface Participant {
    id: string;
    name: string;
    image: string | null;
}

export default function WinnerAnnouncementOverlay() {
    const [announcement, setAnnouncement] = useState<Announcement | null>(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [phase, setPhase] = useState<"idle" | "drawing" | "winner">("idle");
    const [participants, setParticipants] = useState<Participant[]>([]);

    useEffect(() => {
        const q = query(collection(db, "announcements"), orderBy("createdAt", "desc"), limit(1));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    const data = change.doc.data() as Announcement;
                    // Process if reveal time is in the future or very recent
                    if (data.revealTime > Date.now() - 5000) {
                        setAnnouncement({ ...data, id: change.doc.id });
                        handleNewAnnouncement(data);
                    }
                }
            });
        });

        return () => unsubscribe();
    }, []);

    const handleNewAnnouncement = async (data: Announcement) => {
        try {
            const res = await fetch(`/api/pools/${data.poolId}/entries`);
            if (res.ok) {
                const users = await res.json();
                setParticipants(users.length > 0 ? users : generateDummyParticipants());
            } else {
                setParticipants(generateDummyParticipants());
            }
        } catch (e) {
            console.error("Failed to fetch participants", e);
            setParticipants(generateDummyParticipants());
        }

        setShowOverlay(true);
        setPhase("drawing");
    };

    const generateDummyParticipants = () => {
        return Array.from({ length: 50 }).map((_, i) => ({
            id: `dummy-${i}`,
            name: `User ${Math.floor(Math.random() * 10000)}`,
            image: null
        }));
    };

    useEffect(() => {
        if (!announcement || !showOverlay) return;

        const interval = setInterval(() => {
            const now = Date.now();
            const diff = announcement.revealTime - now;

            if (diff <= 0) {
                if (phase !== "winner") {
                    setPhase("winner");
                    triggerConfetti();
                }
                setTimeLeft(0);
            } else {
                setPhase("drawing");
                setTimeLeft(Math.ceil(diff / 1000));
            }
        }, 100);

        return () => clearInterval(interval);
    }, [announcement, showOverlay, phase]);

    const triggerConfetti = () => {
        const duration = 8000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 45, spread: 360, ticks: 100, zIndex: 9999 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 80 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        // Big burst at start
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#FFD700', '#FFA500', '#FF4500'],
            zIndex: 9999
        });
    };

    // Close overlay
    useEffect(() => {
        if (phase === "winner") {
            const timer = setTimeout(() => {
                setShowOverlay(false);
                setPhase("idle");
                setAnnouncement(null);
            }, 15000);
            return () => clearTimeout(timer);
        }
    }, [phase]);

    if (!showOverlay || !announcement) return null;

    return (
        <AnimatePresence>
            {showOverlay && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl"
                >
                    <div className="relative w-full max-w-lg mx-4">
                        {/* Ambient Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-purple-600 rounded-full blur-[100px] opacity-30 animate-pulse" />

                        <motion.div
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-center text-white relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                                <h2 className="text-3xl font-black uppercase tracking-widest relative z-10 drop-shadow-md">
                                    {phase === "winner" ? "🎉 WINNER 🎉" : "DRAWING WINNER"}
                                </h2>
                                <p className="text-orange-100 mt-2 font-medium relative z-10">{announcement.productName}</p>
                            </div>

                            {/* Main Content */}
                            <div className="p-8 min-h-[400px] flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white">

                                {phase === "drawing" && (
                                    <div className="flex flex-col items-center w-full space-y-8">
                                        {/* Countdown Circle */}
                                        <div className="relative">
                                            <svg className="w-32 h-32 transform -rotate-90">
                                                <circle
                                                    cx="64"
                                                    cy="64"
                                                    r="60"
                                                    stroke="currentColor"
                                                    strokeWidth="8"
                                                    fill="transparent"
                                                    className="text-gray-200"
                                                />
                                                <motion.circle
                                                    cx="64"
                                                    cy="64"
                                                    r="60"
                                                    stroke="currentColor"
                                                    strokeWidth="8"
                                                    fill="transparent"
                                                    className="text-orange-500"
                                                    initial={{ pathLength: 1 }}
                                                    animate={{ pathLength: 0 }}
                                                    transition={{ duration: 15, ease: "linear" }} // Match API time
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-5xl font-black text-gray-900">{timeLeft}</span>
                                            </div>
                                        </div>

                                        {/* Slot Machine */}
                                        <div className="w-full h-64 overflow-hidden relative bg-gray-900 rounded-xl border-4 border-gray-800 shadow-inner">
                                            {/* Glass Reflection */}
                                            <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
                                            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-red-500/50 z-10 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />

                                            <motion.div
                                                animate={{ y: [0, -2000] }}
                                                transition={{ repeat: Infinity, duration: 3, ease: "linear" }} // Faster spin
                                                className="flex flex-col items-center gap-6 py-4"
                                            >
                                                {[...participants, ...participants, ...participants, ...participants].map((p, i) => (
                                                    <div key={i} className="text-3xl font-bold text-white/90 font-mono tracking-wider h-12 flex items-center justify-center">
                                                        {p.name}
                                                    </div>
                                                ))}
                                            </motion.div>
                                        </div>
                                        <p className="text-gray-500 text-sm animate-pulse mt-4">Selecting random winner...</p>
                                    </div>
                                )}

                                {phase === "winner" && (
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                        transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
                                        className="flex flex-col items-center text-center w-full"
                                    >
                                        <div className="relative mb-8 mt-4">
                                            <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                                            <div className="w-40 h-40 rounded-full border-4 border-yellow-400 p-1 relative z-10 bg-white shadow-xl">
                                                <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                                                    {announcement.winnerImage ? (
                                                        <img src={announcement.winnerImage} alt="Winner" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center bg-orange-100 text-orange-600 font-bold text-6xl">
                                                            {announcement.winnerName[0]}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-black px-6 py-2 rounded-full shadow-lg border-2 border-white z-20 whitespace-nowrap uppercase tracking-wider">
                                                🎉 WINNER 🎉
                                            </div>
                                        </div>

                                        <motion.h3
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-4xl font-black text-gray-900 mb-2 mt-4"
                                        >
                                            {announcement.winnerName}
                                        </motion.h3>

                                        <motion.p
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="text-gray-500 font-mono text-xl mb-8"
                                        >
                                            {announcement.winnerPhone}
                                        </motion.p>

                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.6, type: "spring" }}
                                            className="px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg rounded-full font-bold shadow-lg shadow-orange-500/30 animate-bounce cursor-pointer hover:scale-105 transition-transform"
                                            onClick={() => setShowOverlay(false)}
                                        >
                                            Congratulations!
                                        </motion.div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
