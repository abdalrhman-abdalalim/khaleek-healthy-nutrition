import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "../../(main)/globals.css";

import Providers from "@/shared/components/Providers";
import DashboardLayout from "@/shared/Features/DashboardLayout/DashboardLayout";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: {
    default: "لوحة التحكم - خليك هيلثي",
    template: "%s | خليك هيلثي",
  },
  description: "لوحة التحكم الشخصية لتتبع تغذيتك ونشاطك البدني",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon.ico", sizes: "180x180", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
  },
};

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={cairo.variable}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Providers>
          <DashboardLayout>{children}</DashboardLayout>
        </Providers>
      </body>
    </html>
  );
}
