/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import { Cairo } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/shared/Lib/ReactQueryProvider";
import PublicLayout from "@/shared/Features/PublicLayout/PublicLayout";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = usePathname();

  if (router.startsWith("/dashboard")) {
    const DashboardLayout =
      require("@/shared/Features/DashboardLayout/DashboardLayout").default;
    return (
      <html lang="ar" dir="rtl">
        <body className={`${cairo.variable} font-sans antialiased`}>
          <ReactQueryProvider>
            <Toaster position="top-center" />
            <DashboardLayout>{children}</DashboardLayout>
          </ReactQueryProvider>
        </body>
      </html>
    );
  }
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased`}>
        <ReactQueryProvider>
          <Toaster position="top-center" />
          <PublicLayout>{children}</PublicLayout>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
