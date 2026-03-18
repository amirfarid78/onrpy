import prisma from "@/lib/prisma";
import { Plus, Trash2, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";
import DeleteAdButton from "@/components/admin/DeleteAdButton";

async function getAds() {
    return await prisma.ad.findMany({
        orderBy: { createdAt: "desc" },
    });
}

export default async function AdminAdsPage() {
    const ads = await getAds();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">Ad Management</h1>
                <Link
                    href="/admin/ads/new"
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Create New Ad
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ads.map((ad) => (
                    <div key={ad.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
                        <div className="relative h-40 bg-gray-100">
                            <img
                                src={ad.imageUrl}
                                alt={ad.title}
                                className="w-full h-full object-cover"
                            />
                            <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold ${ad.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                                {ad.isActive ? "Active" : "Inactive"}
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-gray-900 mb-1">{ad.title}</h3>
                            {ad.linkUrl && (
                                <a href={ad.linkUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center gap-1 mb-3">
                                    <ExternalLink className="w-3 h-3" />
                                    {ad.linkUrl}
                                </a>
                            )}

                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                                <Calendar className="w-3 h-3" />
                                <span>{new Date(ad.startDate).toLocaleDateString()} - {new Date(ad.endDate).toLocaleDateString()}</span>
                            </div>

                            <div className="flex justify-end pt-3 border-t border-gray-50">
                                <DeleteAdButton id={ad.id} />
                            </div>
                        </div>
                    </div>
                ))}
                {ads.length === 0 && (
                    <div className="col-span-full text-center py-12 bg-white rounded-xl border border-dashed border-gray-200">
                        <p className="text-gray-500">No ads created yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
