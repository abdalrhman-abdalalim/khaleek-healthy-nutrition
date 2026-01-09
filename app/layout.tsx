import { Cairo } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/shared/Lib/ReactQueryProvider";
import { Toaster } from "react-hot-toast";
import LayoutSwitcher from "@/shared/Lib/LayoutSwitcher";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased`}>
        <ReactQueryProvider>
          <Toaster position="top-center" />
          <LayoutSwitcher>{children}</LayoutSwitcher>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
