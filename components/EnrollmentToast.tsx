"use client";

import { useEffect, useState } from "react";
import { UserPlus, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Notification {
    id: string;
    message: string;
}

export default function EnrollmentToast({ notification, onClose }: { notification: Notification; onClose: () => void }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, [notification, onClose]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed bottom-4 left-4 z-50 bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-xl p-4 flex items-center gap-3 max-w-sm"
        >
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <UserPlus className="w-5 h-5" />
            </div>
            <div className="flex-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">New Enrollment</p>
                <p className="text-sm font-semibold text-gray-800">{notification.message}</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
            </button>
        </motion.div>
    );
}
