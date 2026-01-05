import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/lib/ReactQueryProvider";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "  خليك healty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased`}>
         <ReactQueryProvider>

            {children}
         </ReactQueryProvider>
      </body>
    </html>
  );
}
