require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
});

async function main() {
    try {
        console.log("--- Starting DB Test ---");
        const url = process.env.DATABASE_URL;
        if (!url) {
            console.error("❌ DATABASE_URL is undefined!");
            process.exit(1);
        }
        console.log(`✅ DATABASE_URL found (length: ${url.length})`);
        console.log(`URL starts with: ${url.substring(0, 15)}...`);

        console.log("Connecting to Prisma...");
        await prisma.$connect();
        console.log("✅ Connected successfully!");

        const userCount = await prisma.user.count();
        console.log("User count:", userCount);

        await prisma.$disconnect();
    } catch (e) {
        console.error("❌ Connection failed:");
        console.error(e);
        process.exit(1);
    }
}

main();
