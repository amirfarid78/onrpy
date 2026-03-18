import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || "default-secret-key-change-me"
);

// Routes that require authentication
const protectedRoutes = ["/dashboard", "/wallet", "/pools", "/admin", "/upcoming", "/winners"];

// Routes that are public (no auth required)
const publicRoutes = ["/", "/login", "/signup"];

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the route is protected
    const isProtectedRoute = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    );

    // Check if the route is public
    const isPublicRoute = publicRoutes.some((route) => pathname === route);

    // Allow public routes and API routes
    if (isPublicRoute || pathname.startsWith("/api/") || pathname.startsWith("/_next/")) {
        return NextResponse.next();
    }

    // For protected routes, verify JWT token
    if (isProtectedRoute) {
        const sessionCookie = request.cookies.get("session");

        if (!sessionCookie) {
            // No session cookie, redirect to login
            const url = new URL("/login", request.url);
            return NextResponse.redirect(url);
        }

        try {
            // Verify JWT token
            const { payload } = await jwtVerify(sessionCookie.value, JWT_SECRET);

            // Check if user is admin for admin routes
            if (pathname.startsWith("/admin") && payload.role !== "ADMIN") {
                // Not an admin, redirect to dashboard
                const url = new URL("/dashboard", request.url);
                return NextResponse.redirect(url);
            }

            // Token is valid, allow access
            return NextResponse.next();
        } catch (error) {
            // Invalid token, redirect to login
            const url = new URL("/login", request.url);
            const response = NextResponse.redirect(url);

            // Clear invalid session cookie
            response.cookies.delete("session");

            return response;
        }
    }

    // Allow all other routes
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (public folder)
         */
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
