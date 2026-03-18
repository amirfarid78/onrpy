"use client";

import { useState, useEffect } from "react";
import { Save, Loader2, Settings as SettingsIcon, Bell, Shield } from "lucide-react";

interface ReferralSettings {
    rewardAmount: number;
    isActive: boolean;
}

export default function AdminSettingsPage() {
    const [referralSettings, setReferralSettings] = useState<ReferralSettings>({ rewardAmount: 50, isActive: true });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch("/api/admin/referrals");
            const data = await res.json();
            setReferralSettings(data.settings);
        } catch (error) {
            console.error("Error fetching settings:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSaveReferral = async () => {
        setSaving(true);
        try {
            await fetch("/api/admin/referrals", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(referralSettings),
            });
            alert("Referral settings saved!");
        } catch (error) {
            alert("Error saving settings");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="p-8 text-center">Loading...</div>;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <SettingsIcon className="w-8 h-8 text-gray-600" />
                System Settings
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Referral Settings */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-orange-50 rounded-lg">
                            <UsersIcon className="w-5 h-5 text-orange-600" />
                        </div>
                        <h2 className="text-lg font-bold text-gray-900">Referral System</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Referral Reward (Rs)</label>
                            <input
                                type="number"
                                value={referralSettings.rewardAmount}
                                onChange={(e) => setReferralSettings({ ...referralSettings, rewardAmount: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="isActive"
                                checked={referralSettings.isActive}
                                onChange={(e) => setReferralSettings({ ...referralSettings, isActive: e.target.checked })}
                                className="w-4 h-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                            />
                            <label htmlFor="isActive" className="text-sm font-medium text-gray-700">Enable Referral System</label>
                        </div>
                        <button
                            onClick={handleSaveReferral}
                            disabled={saving}
                            className="btn-primary px-4 py-2 flex items-center gap-2 disabled:opacity-50 text-sm w-full justify-center"
                        >
                            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                            Save Changes
                        </button>
                    </div>
                </div>

                {/* General Settings Placeholder */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 opacity-60 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-50/50 flex items-center justify-center z-10">
                        <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">Coming Soon</span>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <Shield className="w-5 h-5 text-blue-600" />
                        </div>
                        <h2 className="text-lg font-bold text-gray-900">Security & Maintenance</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Maintenance Mode</span>
                            <div className="w-10 h-5 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Allow New Registrations</span>
                            <div className="w-10 h-5 bg-green-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function UsersIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}
