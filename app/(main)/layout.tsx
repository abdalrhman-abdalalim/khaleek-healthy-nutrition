"use client";

import { Cairo } from "next/font/google";
import "./globals.css";
import Head from "next/head"; // Import Head
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
    <>
      <Head>
        <title>خليك هيلثي | نظام التغذية الذكي بالعربي</title>
        <meta
          name="description"
          content="حلل وجباتك بالعربي، تابع تمارينك، واحصل على توصيات ذكية لتحقيق أهدافك الصحية."
        />
        <meta
          name="keywords"
          content="تغذية, لياقة, تحليل وجبات, تتبع تمارين, نظام غذائي, صحة, ذكاء اصطناعي"
        />
        <meta name="author" content="خليك هيلثي" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="خليك هيلثي | نظام التغذية الذكي بالعربي"
        />
        <meta
          property="og:description"
          content="اكتب أي وجبة بالعربي والنظام هيحللها لحظة بلحظة مع حساب السعرات والبروتين والكربوهيدرات والدهون!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://khaleek-healthy-nutrition.vercel.app"
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:locale" content="ar_SA" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="خليك هيلثي | نظام التغذية الذكي بالعربي"
        />
        <meta
          name="twitter:description"
          content="نظام ذكي لتحليل الوجبات والتوصيات الغذائية باللغة العربية"
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />

        {/* Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <html lang="ar" dir="rtl">
        <body className={`${cairo.variable} font-sans antialiased`}>
          <ReactQueryProvider>
            <Toaster position="top-center" />
            <PublicLayout>{children}</PublicLayout>
          </ReactQueryProvider>
        </body>
      </html>
    </>
  );
}
