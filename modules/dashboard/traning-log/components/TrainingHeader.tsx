"use client";

import { Dumbbell } from "lucide-react";
import { useRouter } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/shared/Lib/utils";

export default function TrainingHeader() {
  const router = useRouter();

  const handleAddTraining = () => {
    router.push("/dashboard/training/add_train");
  };

  return (
    <div className="text-center space-y-4">
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="p-4 bg-foreground rounded-3xl shadow-xl animate-pulse">
          <Dumbbell className="w-10 h-10 text-background" />
        </div>
      </div>
      <h1 className="text-5xl font-black text-secondary mb-2 drop-shadow-lg">
        سجل التمارين
      </h1>
      <p className="text-textcolor/70 text-lg">
        تتبع تقدمك وإنجازاتك الرياضية
      </p>

      <button
        className={cn(
          buttonVariants(),
          "h-14 px-10 text-lg font-bold rounded-2xl bg-foreground text-background hover:bg-foreground/90 shadow-xl hover:shadow-2xl transition-all"
        )}
        onClick={handleAddTraining}
      >
        إضافة تمرين جديد
      </button>
    </div>
  );
}
