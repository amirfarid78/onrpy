import prisma from "@/lib/prisma";
import PoolForm from "@/components/admin/PoolForm";
import { redirect } from "next/navigation";

export default async function EditPoolPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const pool = await prisma.lotteryPool.findUnique({ where: { id } });

    if (!pool) redirect("/admin/pools");

    return <PoolForm initialData={pool} isEdit />;
}
