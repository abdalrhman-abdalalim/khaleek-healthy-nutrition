"use client";

import { Dumbbell } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/shared/Lib/utils";
import Link from "next/link";

interface EmptyTrainingStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function EmptyTrainingState({
  title = "لا توجد تمارين مسجلة",
  description = "ابدأ بتسجيل أول تمرين لك واستمتع بتتبع تقدمك",
  actionLabel = "إضافة تمرين جديد",
  actionHref = "/training",
}: EmptyTrainingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6 rounded-3xl bg-secondary/10 backdrop-blur-xl border border-secondary/30 shadow-2xl animate-in fade-in zoom-in-95">
      
      <div className="inline-flex items-center justify-center w-24 h-24 bg-foreground/20 rounded-full mb-6 border border-foreground/40 shadow-lg">
        <Dumbbell className="w-12 h-12 text-foreground" />
      </div>

      <h3 className="text-3xl font-black text-textcolor mb-3">
        {title}
      </h3>

      <p className="text-textcolor/70 text-lg max-w-md mb-8">
        {description}
      </p>

      {actionHref && (
        <Link
          href={actionHref}
          className={cn(
            buttonVariants(),
            "h-14 px-10 text-lg font-bold rounded-2xl bg-foreground text-background hover:bg-foreground/90 shadow-xl hover:shadow-2xl transition-all"
          )}
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
