"use client";

import { useState, useEffect, useRef } from "react";
import { Save, Loader2, Settings as SettingsIcon, Shield, UploadCloud, Globe, Phone, Mail, FileText } from "lucide-react";

interface ReferralSettings {
    rewardAmount: number;
    isActive: boolean;
}

interface SiteSettings {
    siteName: string;
    siteDescription: string;
    contactEmail: string;
    contactPhone: string;
    logoUrl: string;
    faviconUrl: string;
}

export default function AdminSettingsPage() {
    const [referralSettings, setReferralSettings] = useState<ReferralSettings>({ rewardAmount: 50, isActive: true });
    const [siteSettings, setSiteSettings] = useState<SiteSettings>({
        siteName: "Zeva - One Rupee Game",
        siteDescription: "",
        contactEmail: "",
        contactPhone: "",
        logoUrl: "",
        faviconUrl: "",
    });

    const [loading, setLoading] = useState(true);
    const [savingRef, setSavingRef] = useState(false);
    const [savingSite, setSavingSite] = useState(false);

    const logoInputRef = useRef<HTMLInputElement>(null);
    const faviconInputRef = useRef<HTMLInputElement>(null);

    const [uploadingLogo, setUploadingLogo] = useState(false);
    const [uploadingFavicon, setUploadingFavicon] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [refRes, siteRes] = await Promise.all([
                fetch("/api/admin/referrals"),
                fetch("/api/settings")
            ]);

            const refData = await refRes.json();
            const siteData = await siteRes.json();

            if (refData.settings) setReferralSettings(refData.settings);
            if (siteData.settings) setSiteSettings({
                siteName: siteData.settings.siteName || "",
                siteDescription: siteData.settings.siteDescription || "",
                contactEmail: siteData.settings.contactEmail || "",
                contactPhone: siteData.settings.contactPhone || "",
                logoUrl: siteData.settings.logoUrl || "",
                faviconUrl: siteData.settings.faviconUrl || "",
            });

        } catch (error) {
            console.error("Error fetching settings:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSaveReferral = async () => {
        setSavingRef(true);
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
            setSavingRef(false);
        }
    };

    const handleSaveSite = async () => {
        setSavingSite(true);
        try {
            await fetch("/api/admin/settings", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(siteSettings),
            });
            alert("Site settings saved!");
        } catch (error) {
            alert("Error saving site settings");
        } finally {
            setSavingSite(false);
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: "logoUrl" | "faviconUrl") => {
        const file = e.target.files?.[0];
        if (!file) return;

        const setUploading = type === "logoUrl" ? setUploadingLogo : setUploadingFavicon;
        setUploading(true);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/admin/upload", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();
            if (data.success) {
                setSiteSettings((prev) => ({ ...prev, [type]: data.url }));
            } else {
                alert("Upload failed.");
            }
        } catch (error) {
            console.error("Upload error", error);
            alert("Error uploading file.");
        } finally {
            setUploading(false);
            if (e.target) e.target.value = ""; // Reset input
        }
    };

    if (loading) return <div className="p-8 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" /></div>;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <SettingsIcon className="w-8 h-8 text-gray-600" />
                System Settings
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* General Site Settings */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <Globe className="w-5 h-5 text-blue-600" />
                        </div>
                        <h2 className="text-lg font-bold text-gray-900">General Information</h2>
                    </div>

                    <div className="space-y-4 flex-1">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Site Name</label>
                            <input
                                type="text"
                                value={siteSettings.siteName}
                                onChange={(e) => setSiteSettings({ ...siteSettings, siteName: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                                value={siteSettings.siteDescription}
                                onChange={(e) => setSiteSettings({ ...siteSettings, siteDescription: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                                rows={2}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1.5"><Mail className="w-4 h-4"/> Contact Email</label>
                                <input
                                    type="email"
                                    value={siteSettings.contactEmail}
                                    onChange={(e) => setSiteSettings({ ...siteSettings, contactEmail: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1.5"><Phone className="w-4 h-4"/> Contact Phone</label>
                                <input
                                    type="text"
                                    value={siteSettings.contactPhone}
                                    onChange={(e) => setSiteSettings({ ...siteSettings, contactPhone: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                                />
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                            {/* Logo Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Site Logo</label>
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    ref={logoInputRef} 
                                    className="hidden" 
                                    onChange={(e) => handleFileUpload(e, "logoUrl")}
                                />
                                <div className="flex items-center gap-3">
                                    {siteSettings.logoUrl ? (
                                        <div className="w-12 h-12 rounded-lg bg-gray-50 border p-1 shrink-0 overflow-hidden">
                                            <img src={siteSettings.logoUrl} alt="Logo" className="w-full h-full object-contain" />
                                        </div>
                                    ) : (
                                        <div className="w-12 h-12 rounded-lg bg-gray-50 border flex items-center justify-center shrink-0">
                                            <FileText className="w-5 h-5 text-gray-300"/>
                                        </div>
                                    )}
                                    <button 
                                        onClick={() => logoInputRef.current?.click()}
                                        disabled={uploadingLogo}
                                        className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg flex items-center gap-1.5"
                                    >
                                        {uploadingLogo ? <Loader2 className="w-4 h-4 animate-spin"/> : <UploadCloud className="w-4 h-4" />}
                                        Upload Logo
                                    </button>
                                </div>
                            </div>
                            {/* Favicon Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Favicon</label>
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    ref={faviconInputRef} 
                                    className="hidden" 
                                    onChange={(e) => handleFileUpload(e, "faviconUrl")}
                                />
                                <div className="flex items-center gap-3">
                                    {siteSettings.faviconUrl ? (
                                        <div className="w-12 h-12 rounded-lg bg-gray-50 border p-1 shrink-0 overflow-hidden">
                                            <img src={siteSettings.faviconUrl} alt="Favicon" className="w-full h-full object-contain" />
                                        </div>
                                    ) : (
                                        <div className="w-12 h-12 rounded-lg bg-gray-50 border flex items-center justify-center shrink-0">
                                            <FileText className="w-5 h-5 text-gray-300"/>
                                        </div>
                                    )}
                                    <button 
                                        onClick={() => faviconInputRef.current?.click()}
                                        disabled={uploadingFavicon}
                                        className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg flex items-center gap-1.5"
                                    >
                                        {uploadingFavicon ? <Loader2 className="w-4 h-4 animate-spin"/> : <UploadCloud className="w-4 h-4" />}
                                        Upload Icon
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-gray-100">
                        <button
                            onClick={handleSaveSite}
                            disabled={savingSite}
                            className="bg-primary text-white hover:bg-primary-dark transition-colors px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50 text-sm justify-center w-full shadow-sm"
                        >
                            {savingSite ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                            Save General Settings
                        </button>
                    </div>
                </div>

                {/* Referral Settings */}
                <div className="space-y-6 flex flex-col">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-none">
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
                                disabled={savingRef}
                                className="btn-primary px-4 py-2 flex items-center gap-2 disabled:opacity-50 text-sm w-full justify-center"
                            >
                                {savingRef ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                Save Referrals
                            </button>
                        </div>
                    </div>

                    {/* General Settings Placeholder */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 opacity-60 flex-1 relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute inset-0 bg-gray-50/50 flex items-center justify-center z-10 backdrop-blur-[1px]">
                            <span className="bg-white border text-gray-600 px-3 py-1.5 shadow-sm rounded-full text-xs font-bold uppercase tracking-wider">Coming In Future Updates</span>
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <Shield className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-lg font-bold text-gray-900">Security & Maintenance</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between opacity-50">
                                <span className="text-sm text-gray-700">Maintenance Mode</span>
                                <div className="w-10 h-5 bg-gray-200 rounded-full"></div>
                            </div>
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
