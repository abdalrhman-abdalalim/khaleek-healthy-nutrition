// app/dashboard/layout.tsx or wherever you need it
"use client";

import Sidebar from "./Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Main content area - adjust padding based on sidebar state */}
      <main className="transition-all duration-300 md:mr-16 bg-secondary/10 rounded-tr-4xl rounded-br-4xl">
        <div className="p-4 md:p-6">{children}</div>
      </main>
    </div>
  );
}
