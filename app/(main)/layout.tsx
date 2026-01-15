import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

import PublicLayout from "@/shared/Features/PublicLayout/PublicLayout";
import Providers from "@/shared/components/Providers";

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
    default: "خليك هيلثي - منصة التغذية الذكية",
    template: "%s | خليك هيلثي",
  },
  description:
    "منصة ذكية تعتمد على الذكاء الاصطناعي لتحليل تغذيتك، تتبع نشاطك البدني، وتقديم توصيات شخصية تساعدك على تحقيق أهدافك الصحية بكل كفاءة وذكاء.",
  keywords: [
    "تغذية",
    "صحة",
    "ذكاء اصطناعي",
    "لياقة بدنية",
    "نظام غذائي",
    "تتبع السعرات",
  ],
  authors: [{ name: "خليك هيلثي" }],
  creator: "خليك هيلثي",
  publisher: "خليك هيلثي",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "/",
    siteName: "خليك هيلثي",
    title: "خليك هيلثي - منصة التغذية الذكية",
    description:
      "منصة ذكية تعتمد على الذكاء الاصطناعي لتحليل تغذيتك وتتبع نشاطك البدني",
  },
  twitter: {
    card: "summary_large_image",
    title: "خليك هيلثي - منصة التغذية الذكية",
    description:
      "منصة ذكية تعتمد على الذكاء الاصطناعي لتحليل تغذيتك وتتبع نشاطك البدني",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon.ico", sizes: "180x180", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#16a34a",
};

export default function RootLayout({
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <PublicLayout>{children}</PublicLayout>
        </Providers>
      </body>
    </html>
  );
}
