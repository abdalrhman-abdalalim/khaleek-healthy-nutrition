"use client";

import { usePathname } from "next/navigation";
import PublicLayout from "@/shared/Features/PublicLayout/PublicLayout";
import DashboardLayout from "@/shared/Features/DashboardLayout/DashboardLayout";

export default function LayoutSwitcher({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const Layout = isDashboard ? DashboardLayout : PublicLayout;
  return <Layout>{children}</Layout>;
}
