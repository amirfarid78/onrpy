import type { Metadata } from "next";
import "./globals.css";

import prisma from "@/lib/prisma";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await prisma.siteSetting.findUnique({
    where: { id: "global" },
  });

  const title = settings?.siteName || "Zeva - One Rupee Game";
  const description = settings?.siteDescription || "Pakistan's premier prize pool platform. Win iPhones, bikes, gold & more starting at just Rs. 1!";
  
  return {
    title,
    description,
    manifest: "/manifest.json",
    themeColor: "#f97316",
    icons: settings?.faviconUrl ? { icon: settings.faviconUrl } : undefined,
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: title,
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
      userScalable: false,
      viewportFit: "cover",
    },
  };
}

import { NotificationProvider } from "@/components/NotificationProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Material Symbols Outlined (for icons used page-wide) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </body>
    </html>
  );
}
