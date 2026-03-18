import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    console.log("Seeding pools...");

    // Active Pools (Open, Started)
    for (let i = 1; i <= 5; i++) {
        await prisma.lotteryPool.create({
            data: {
                productName: `iPhone 15 Pro Max - Batch ${i}`,
                productImage: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-natural-titanium-select-202309?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693510915120",
                pricePerEntry: 100,
                maxSlots: 100,
                filledSlots: Math.floor(Math.random() * 80),
                status: "OPEN",
                startDate: new Date(Date.now() - 24 * 60 * 60 * 1000), // Started yesterday
                endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Ends in 2 days
                description: "Win the latest iPhone 15 Pro Max! Limited slots available.",
            },
        });
    }

    // Upcoming Pools (Open, Future Start)
    for (let i = 1; i <= 5; i++) {
        await prisma.lotteryPool.create({
            data: {
                productName: `PlayStation 5 - Batch ${i}`,
                productImage: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
                pricePerEntry: 50,
                maxSlots: 200,
                filledSlots: 0,
                status: "OPEN",
                startDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Starts tomorrow
                endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // Ends in 5 days
                description: "Next gen gaming awaits! Pre-book your slot now.",
            },
        });
    }

    // Past Pools (Closed/Drawn)
    for (let i = 1; i <= 5; i++) {
        await prisma.lotteryPool.create({
            data: {
                productName: `Samsung S24 Ultra - Batch ${i}`,
                productImage: "https://images.samsung.com/is/image/samsung/p6pim/pk/2401/gallery/pk-galaxy-s24-s928-sm-s928bztqpkd-thumb-539573349",
                pricePerEntry: 150,
                maxSlots: 50,
                filledSlots: 50,
                status: "DRAWN",
                startDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // Started 10 days ago
                endDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // Ended 5 days ago
                description: "This pool has ended.",
            },
        });
    }

    console.log("Seeding completed!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
