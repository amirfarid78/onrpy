"use client";

import { createContext, useContext, useEffect, useState } from "react";
import EnrollmentToast from "./EnrollmentToast";
import { AnimatePresence } from "framer-motion";

const NotificationContext = createContext({});

export function NotificationProvider({ children }: { children: React.ReactNode }) {
    const [queue, setQueue] = useState<{ id: string; message: string }[]>([]);
    const [current, setCurrent] = useState<{ id: string; message: string } | null>(null);

    // Polling for notifications
    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const res = await fetch("/api/notifications/recent-entries");
                if (res.ok) {
                    const data = await res.json();
                    // Filter out notifications we've already seen (simple check by ID in current session)
                    // For simplicity, we just add them to queue if not already there.
                    // In a real app, we'd track seen IDs more robustly.

                    if (data.notifications && data.notifications.length > 0) {
                        setQueue(prev => {
                            const newItems = data.notifications.filter((n: any) =>
                                !prev.some(p => p.id === n.id) && (current?.id !== n.id)
                            );
                            return [...prev, ...newItems];
                        });
                    }
                }
            } catch (error) {
                console.error("Error polling notifications:", error);
            }
        };

        const interval = setInterval(fetchNotifications, 10000); // Poll every 10s
        fetchNotifications(); // Initial fetch

        return () => clearInterval(interval);
    }, [current]);

    // Process queue
    useEffect(() => {
        if (!current && queue.length > 0) {
            const next = queue[0];
            setCurrent(next);
            setQueue(prev => prev.slice(1));
        }
    }, [queue, current]);

    return (
        <NotificationContext.Provider value={{}}>
            {children}
            <AnimatePresence>
                {current && (
                    <EnrollmentToast
                        key={current.id}
                        notification={current}
                        onClose={() => setCurrent(null)}
                    />
                )}
            </AnimatePresence>
        </NotificationContext.Provider>
    );
}

export const useNotification = () => useContext(NotificationContext);
