"use client";

import LoginButton from "./components/LoginButton";
import HeroBadge from "./components/HeroBadge";
import { useGetProfile } from "@/modules/dashboard/profile/models/use_get_profile";
import { useLogout } from "./models/uselogout";
import { getToken } from "@/shared/Lib/auth";
import DashboardButton from "./components/DashboardButton";
import LogoutButton from "./components/LogoutButton";
import ProfileButton from "./components/ProfileButton";
import LoadingIndicator from "./components/LoadingIndicator";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [token, setToken] = useState(getToken());
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newToken = getToken();
      if (newToken !== token) setToken(newToken);
    }, 500);
    return () => clearInterval(interval);
  }, [token]);

  const { data, isLoading } = useGetProfile();
  const { mutate: logout, isPending } = useLogout();

  const hasValidToken = !!token && data?.success;

  return (
    <header className="sticky top-0 z-50 w-full bg-linear-to-br from-secondary/10 to-secondary/20 backdrop-blur-xl border-b border-foreground/10">
      <div className="container flex h-20 items-center justify-between px-6">
          <HeroBadge />

          {token && <DashboardButton />}
          {isLoading && <LoadingIndicator />}

          <div className="flex items-center gap-4">
            {hasValidToken && <ProfileButton name={data.data.name} email={data.data.email} />}
            {!hasValidToken && !isLoading && <LoginButton />}
            
            {token && <LogoutButton isPending={isPending} onLogout={logout} />}
          </div>

      </div>
    </header>
  );
}
