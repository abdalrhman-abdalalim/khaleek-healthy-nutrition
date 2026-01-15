"use client";

import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/shared/Lib/ReactQueryProvider";

/**
 * Client-side providers wrapper
 * Separates client components from server components for better performance
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "var(--background)",
            color: "var(--foreground)",
            borderRadius: "0.75rem",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          },
        }}
      />
      {children}
    </ReactQueryProvider>
  );
}
