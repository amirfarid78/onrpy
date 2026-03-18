require("dotenv").config({ path: process.env.ENV_FILE || ".env.production" });

const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const DEFAULT_ADMIN_PHONE = "+923001234567";
const DEFAULT_ADMIN_NAME = "Admin";
const DEFAULT_REFERRAL_REWARD = 50;

function normalizePhone(phone) {
  if (!phone) return null;
  const digits = String(phone).replace(/\D/g, "");

  if (digits.startsWith("92") && digits.length === 12) return `+${digits}`;
  if (digits.startsWith("0") && digits.length === 11) return `+92${digits.slice(1)}`;
  if (digits.length === 10) return `+92${digits}`;

  return null;
}

async function seedReferralSettings() {
  const rewardRaw = process.env.REFERRAL_REWARD_AMOUNT;
  const rewardAmount = Number.isFinite(Number(rewardRaw))
    ? Number(rewardRaw)
    : DEFAULT_REFERRAL_REWARD;

  const existing = await prisma.referralSetting.findFirst();
  if (existing) {
    await prisma.referralSetting.update({
      where: { id: existing.id },
      data: { rewardAmount, isActive: true },
    });
    console.log("Updated referral settings");
    return;
  }

  await prisma.referralSetting.create({
    data: {
      rewardAmount,
      isActive: true,
    },
  });
  console.log("Created referral settings");
}

async function seedAdminUser() {
  const rawPhone = process.env.ADMIN_PHONE || DEFAULT_ADMIN_PHONE;
  const normalizedPhone = normalizePhone(rawPhone);

  if (!normalizedPhone) {
    throw new Error(
      "Invalid ADMIN_PHONE. Use 3001234567, 03001234567, or +923001234567 format."
    );
  }

  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword || adminPassword.length < 8) {
    throw new Error("ADMIN_PASSWORD is required and must be at least 8 characters.");
  }

  const adminName = process.env.ADMIN_NAME || DEFAULT_ADMIN_NAME;
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const referralCode = `ADMIN-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

  const user = await prisma.user.upsert({
    where: { phone: normalizedPhone },
    update: {
      name: adminName,
      role: "ADMIN",
      password: hashedPassword,
      phoneVerified: true,
    },
    create: {
      phone: normalizedPhone,
      name: adminName,
      role: "ADMIN",
      password: hashedPassword,
      phoneVerified: true,
      referralCode,
      wallet: {
        create: {
          balance: 0,
          currency: "PKR",
        },
      },
    },
    include: {
      wallet: true,
    },
  });

  if (!user.wallet) {
    await prisma.wallet.create({
      data: {
        userId: user.id,
        balance: 0,
        currency: "PKR",
      },
    });
  }

  console.log(`Admin user ensured: ${normalizedPhone}`);
}

async function seedPools() {
  const existingPoolCount = await prisma.lotteryPool.count();
  if (existingPoolCount > 0) {
    console.log(`Skipping pools seed. Existing pools: ${existingPoolCount}`);
    return;
  }

  console.log("Seeding initial pools...");

  for (let i = 1; i <= 5; i += 1) {
    await prisma.lotteryPool.create({
      data: {
        productName: `iPhone 15 Pro Max - Batch ${i}`,
        productImage:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-natural-titanium-select-202309?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693510915120",
        pricePerEntry: 100,
        maxSlots: 100,
        filledSlots: Math.floor(Math.random() * 80),
        status: "OPEN",
        startDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
        endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        description: "Win the latest iPhone 15 Pro Max! Limited slots available.",
      },
    });
  }

  for (let i = 1; i <= 5; i += 1) {
    await prisma.lotteryPool.create({
      data: {
        productName: `PlayStation 5 - Batch ${i}`,
        productImage:
          "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
        pricePerEntry: 50,
        maxSlots: 200,
        filledSlots: 0,
        status: "OPEN",
        startDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
        endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        description: "Next gen gaming awaits! Pre-book your slot now.",
      },
    });
  }

  for (let i = 1; i <= 5; i += 1) {
    await prisma.lotteryPool.create({
      data: {
        productName: `Samsung S24 Ultra - Batch ${i}`,
        productImage:
          "https://images.samsung.com/is/image/samsung/p6pim/pk/2401/gallery/pk-galaxy-s24-s928-sm-s928bztqpkd-thumb-539573349",
        pricePerEntry: 150,
        maxSlots: 50,
        filledSlots: 50,
        status: "DRAWN",
        startDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
        endDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        description: "This pool has ended.",
      },
    });
  }

  console.log("Initial pools seeded");
}

async function main() {
  console.log("Starting production seed...");
  await seedReferralSettings();
  await seedAdminUser();
  await seedPools();
  console.log("Production seed completed successfully");
}

main()
  .catch((error) => {
    console.error("Production seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
