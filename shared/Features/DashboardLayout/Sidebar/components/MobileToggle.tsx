"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/shared/Lib/utils";
import { Menu, X } from "lucide-react";

interface IProps {
  setIsMobileOpen: (open: boolean) => void;
  isMobileOpen: boolean;
}
const MobileToggle = ({ setIsMobileOpen, isMobileOpen }: IProps) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        "fixed top-4 left-4 z-50 md:hidden bg-foreground/80 backdrop-blur-sm "
      )}
      onClick={() => setIsMobileOpen(!isMobileOpen)}
    >
      {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  );
};
export default MobileToggle;
