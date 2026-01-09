"use client";
import { Cairo } from "next/font/google";
import "./globals.css";

import PublicLayout from "@/shared/Features/PublicLayout/PublicLayout";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/shared/Lib/ReactQueryProvider";

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