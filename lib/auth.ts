import bcrypt from "bcrypt";
import { SignJWT, jwtVerify } from "jose";

const SALT_ROUNDS = 10;

const getJwtSecret = () => new TextEncoder().encode(
    process.env.JWT_SECRET || "default-secret-key-change-me"
);

/**
 * Hash a password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * Verify a password against a hash
 */
export async function verifyPassword(
    password: string,
    hash: string
): Promise<boolean> {
    return bcrypt.compare(password, hash);
}

/**
 * Generate a JWT token
 */
export async function generateJWT(
    userId: string,
    role: string
): Promise<string> {
    return new SignJWT({ sub: userId, role })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(getJwtSecret());
}

/**
 * Verify and decode a JWT token
 */
export async function verifyJWT(token: string) {
    try {
        const { payload } = await jwtVerify(token, getJwtSecret());
        return payload;
    } catch (error) {
        return null;
    }
}

/**
 * Validate and format phone number
 * Accepts formats like: 3001234567, 03001234567, +923001234567
 * Returns: +923001234567
 */
export function validatePhoneNumber(phone: string): string | null {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, "");

    // Check if it starts with 92 (country code)
    if (cleaned.startsWith("92") && cleaned.length === 12) {
        return `+${cleaned}`;
    }

    // Check if it starts with 0 (local format)
    if (cleaned.startsWith("0") && cleaned.length === 11) {
        return `+92${cleaned.substring(1)}`;
    }

    // Check if it's just the 10-digit number
    if (cleaned.length === 10) {
        return `+92${cleaned}`;
    }

    return null;
}

/**
 * Sanitize user input to prevent XSS
 */
export function sanitizeInput(input: string): string {
    return input.trim().replace(/[<>]/g, "");
}
