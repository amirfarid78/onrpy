import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    try {
        console.log("Connecting to database...");
        // Try to find a user (any user)
        const user = await prisma.user.findFirst();

        if (user) {
            console.log("Found user:", user.id);
            console.log("Attempting to update profile fields...");

            // Attempt to update with new fields
            const updated = await prisma.user.update({
                where: { id: user.id },
                data: {
                    address: "Test Address",
                    city: "Test City",
                    zip: "12345"
                }
            });

            console.log("Successfully updated user profile!");
            console.log("Updated fields:", {
                address: updated.address,
                city: updated.city,
                zip: updated.zip
            });
        } else {
            console.log("No users found in database to test update.");
        }
    } catch (error) {
        console.error("Error during test:", error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
