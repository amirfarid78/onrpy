import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { writeFile } from "fs/promises";
import { extname, join } from "path";
import { mkdir } from "fs/promises";

export async function POST(request: NextRequest) {
    try {
        const cookieStore = await cookies();
        const session = cookieStore.get("session")?.value;
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-me");
        const { payload } = await jwtVerify(session, secret);

        if (payload.role !== "ADMIN") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const formData = await request.formData();
        const file = formData.get("file") as File | null;

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Make sure uploads directory exists inside public
        const uploadDir = join(process.cwd(), "public", "uploads");
        try {
            await mkdir(uploadDir, { recursive: true });
        } catch(e) {
            // Error handling if it already exists
        }

        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const ext = extname(file.name);
        const filename = `${uniqueSuffix}${ext}`;
        const filePath = join(uploadDir, filename);

        await writeFile(filePath, buffer);

        const url = `/uploads/${filename}`;
        return NextResponse.json({ success: true, url });

    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
