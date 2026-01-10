"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/shared/Lib/utils";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLogout } from "../../helper";

interface IProps {
  isExpanded: boolean;
}

const SidebarContentProfile = ({ isExpanded }: IProps) => {
  const handleLogout = useLogout();

  const [userName, setUserName] = useState<string | null>(null);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("user_name"));
    setPathname(window.location.pathname);
  }, []);

  const isItemActive = (href: string) => {
    if (href === "/dashboard/profile") {
      return pathname === "/dashboard/profile";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="p-4">
      <div
        className={cn(
          "flex items-center gap-3 mb-4 p-2 rounded-lg hover:bg-accent transition-all duration-200 group hover:bg-foreground/10",
          !isExpanded && "justify-center"
        )}
      >
        <Link
          href="/dashboard/profile"
          className="relative flex gap-2 items-center"
        >
          <div
            className={`w-10 h-10 rounded-full bg-linear-to-br from-foreground/80 to-foreground/10 flex items-center justify-center ${
              isItemActive("/dashboard/profile")
                ? "border-2 border-foreground shadow-sm"
                : "border"
            }`}
          >
            <User size={18} className="text-secondary" />
          </div>

          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />

          <div
            className={`flex-1 min-w-0 ${
              isExpanded ? "block" : "md:hidden block"
            }`}
          >
            <p className="text-sm text-foreground font-bold truncate">
              {userName ?? "—"}
            </p>
          </div>
        </Link>
      </div>

      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start h-12 px-3 text-red-500 hover:bg-red-500/10 hover:text-red-600",
          isExpanded ? "gap-3" : "justify-center"
        )}
        onClick={handleLogout}
      >
        <LogOut size={20} />
        <span
          className={`whitespace-nowrap ${
            isExpanded ? "block" : "max-md:block md:hidden"
          }`}
        >
          Logout
        </span>
      </Button>
    </div>
  );
};

export default SidebarContentProfile;
