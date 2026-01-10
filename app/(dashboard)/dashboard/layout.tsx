import { Cairo } from "next/font/google";
import "../../(main)/globals.css";

import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/shared/Lib/ReactQueryProvider";
import DashboardLayout from "@/shared/Features/DashboardLayout/DashboardLayout";

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
    <html
      lang="ar"
      dir="rtl"
      className={cairo.variable}
      suppressHydrationWarning
    >
      <body
        className="font-sans antialiased"
        suppressHydrationWarning
      >
        <ReactQueryProvider>
          <Toaster position="top-center" />
          <DashboardLayout>{children}</DashboardLayout>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
