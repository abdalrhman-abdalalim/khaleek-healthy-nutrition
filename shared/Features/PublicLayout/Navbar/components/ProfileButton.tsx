"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

interface ProfileButtonProps {
  name: string;
  email: string;
  href?: string;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({
  name,
  email,
  href = "/dashboard/profile",
}) => {
  return (
    <div className="relative">
      <Link href={href} className="flex items-center gap-3 px-4 py-3 hover:bg-foreground/5 transition-colors duration-200 group">
        <button className="flex items-center gap-3 px-4 py-2.5 bg-linear-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 rounded-2xl border border-foreground/20 hover:border-foreground/30 transition-all duration-300 shadow-lg hover:shadow-xl group">
          
          <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-lg">{name.charAt(0).toUpperCase()}</span>
          </div>

          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-semibold text-foreground">{name}</span>
            <span className="text-xs text-foreground/60 flex items-center gap-1">
              <Mail className="w-3 h-3" />
              {email}
            </span>
          </div>

        </button>
      </Link>
    </div>
  );
};

export default ProfileButton;
