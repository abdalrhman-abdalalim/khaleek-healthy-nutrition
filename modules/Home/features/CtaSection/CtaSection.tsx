"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/shared/Lib/utils";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const CtaSection = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
      <Link
        href="/auth/register"
        className={cn(
          buttonVariants({ size: "lg" }),
          "bg-foreground text-secondary hover:bg-foreground/90 px-8 py-6 text-lg font-medium"
        )}
      >
        ابدأ رحلتك مجاناً
        <ArrowRight className="mr-2 h-5 w-5" />
      </Link>
    </div>
  );
};
export default CtaSection;
