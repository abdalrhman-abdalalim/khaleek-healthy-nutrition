"use client";

import React from "react";
import { User } from "lucide-react";

interface ProfileHeaderCardProps {
  title?: string;
  subtitle?: string;
}

const ProfileHeaderCard: React.FC<ProfileHeaderCardProps> = ({
  title = "تعديل الملف الشخصي",
  subtitle = "قم بتحديث معلوماتك الشخصية وإعداداتك",
}) => {
  return (
    <div className="bg-linear-to-br from-secondary/40 to-secondary/20 backdrop-blur-xl rounded-3xl p-8 mb-6 border border-foreground/20 shadow-2xl">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-linear-to-br from-foreground to-foreground/70 rounded-2xl flex items-center justify-center shadow-xl">
          <User className="w-8 h-8 text-background" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-textcolor">{title}</h1>
          <p className="text-textcolor/70 mt-1">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderCard;
