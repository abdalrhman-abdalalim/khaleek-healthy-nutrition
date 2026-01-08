"use client";
import { Cairo } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/shared/Lib/ReactQueryProvider";
import PublicLayout from "@/shared/Features/PublicLayout/PublicLayout";
import DashboardLayout from "@/shared/Features/DashboardLayout/DashboardLayout"; // ✅ Import directly
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isDashboard, setIsDashboard] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDashboard(pathname?.startsWith("/dashboard") || false);
  }, [pathname]);

  // During initial render, show loading or consistent layout
  if (!mounted) {
    // Return a neutral layout that matches both possibilities
    return (
      <html lang="ar" dir="rtl">
        <body className={`${cairo.variable} font-sans antialiased`}>
          <div className="min-h-screen bg-background" />
        </body>
      </html>
    );
  }

  const Layout = isDashboard ? DashboardLayout : PublicLayout;

  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased`}>
        <ReactQueryProvider>
          <Toaster position="top-center" />
          <Layout>{children}</Layout>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
