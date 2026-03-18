"use client";

import { useState, useEffect } from "react";
import { Save, Loader2, Users, DollarSign } from "lucide-react";

interface ReferralStats {
    totalReferrals: number;
    totalPayouts: number;
    topReferrers: { name: string; phone: string; count: number }[];
}

interface ReferralSettings {
    rewardAmount: number;
    isActive: boolean;
}

export default function AdminReferralsPage() {
    const [settings, setSettings] = useState<ReferralSettings>({ rewardAmount: 50, isActive: true });
    const [stats, setStats] = useState<ReferralStats>({ totalReferrals: 0, totalPayouts: 0, topReferrers: [] });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch("/api/admin/referrals");
            const data = await res.json();
            setSettings(data.settings);
            setStats(data.stats);
        } catch (error) {
            console.error("Error fetching referral data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            await fetch("/api/admin/referrals", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(settings),
            });
            alert("Settings saved successfully!");
        } catch (error) {
            alert("Error saving settings");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="p-8 text-center">Loading...</div>;

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Referral System Management</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Total Referrals</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.totalReferrals}</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <DollarSign className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Total Payouts</p>
                        <p className="text-2xl font-bold text-gray-900">Rs. {stats.totalPayouts}</p>
                    </div>
                </div>
            </div>

            {/* Settings Form */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Configuration</h2>
                <div className="space-y-4 max-w-md">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Referral Reward (Rs)</label>
                        <input
                            type="number"
                            value={settings.rewardAmount}
                            onChange={(e) => setSettings({ ...settings, rewardAmount: parseFloat(e.target.value) })}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="isActive"
                            checked={settings.isActive}
                            onChange={(e) => setSettings({ ...settings, isActive: e.target.checked })}
                            className="w-4 h-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                        />
                        <label htmlFor="isActive" className="text-sm font-medium text-gray-700">Enable Referral System</label>
                    </div>
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="btn-primary px-6 py-2 flex items-center gap-2 disabled:opacity-50"
                    >
                        {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                        Save Settings
                    </button>
                </div>
            </div>

            {/* Top Referrers */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Top Referrers</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-100 text-sm text-gray-500">
                                <th className="pb-3 font-medium">User</th>
                                <th className="pb-3 font-medium">Referrals</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {stats.topReferrers.map((referrer, i) => (
                                <tr key={i} className="text-sm">
                                    <td className="py-3">
                                        <div className="font-medium text-gray-900">{referrer.name || "Unknown"}</div>
                                        <div className="text-gray-500">{referrer.phone}</div>
                                    </td>
                                    <td className="py-3 font-medium text-gray-900">{referrer.count}</td>
                                </tr>
                            ))}
                            {stats.topReferrers.length === 0 && (
                                <tr>
                                    <td colSpan={2} className="py-4 text-center text-gray-500">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
