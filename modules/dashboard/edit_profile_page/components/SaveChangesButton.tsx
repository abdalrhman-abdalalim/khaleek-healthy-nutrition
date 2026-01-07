"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Save } from "lucide-react";
import { useRouter } from "next/navigation";
interface SaveChangesButtonProps {
  isPending: boolean;
  onClick: () => Promise<void>;
  redirectTo?: string;
}

const SaveChangesButton: React.FC<SaveChangesButtonProps> = ({
  isPending,
  onClick,
  redirectTo = "/dashboard/profile",
}) => {
  const router = useRouter();

  const handleClick = async () => {
    try {
      await onClick();         
      router.push(redirectTo);  
    } catch (error) {
      
    }
  };

  return (
    <div className="flex justify-end gap-4">
      <Button
        onClick={handleClick}
        disabled={isPending}
        className="bg-linear-to-r from-foreground to-foreground/80 text-background
                   hover:from-foreground/90 hover:to-foreground/70
                   h-14 px-8 text-lg font-bold rounded-2xl shadow-lg
                   hover:shadow-xl transition-all disabled:opacity-50"
      >
        {isPending ? (
          <>
            <Loader2 className="ml-2 h-5 w-5 animate-spin" />
            جاري الحفظ...
          </>
        ) : (
          <>
            <Save className="ml-2 h-5 w-5" />
            حفظ التغييرات
          </>
        )}
      </Button>
    </div>
  );
};

export default SaveChangesButton;
