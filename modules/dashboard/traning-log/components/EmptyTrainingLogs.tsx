"use client";

import { SearchX } from "lucide-react";

interface EmptyTrainingLogsProps {
  title?: string;
  description?: string;
}

export default function EmptyTrainingLogs({
  title = "لا توجد نتائج",
  description = "لا توجد تمارين مطابقة لبحثك، جرّب تغيير الفلاتر أو البحث بكلمة أخرى",
}: EmptyTrainingLogsProps) {
  return (
    <div
      className="flex flex-col  items-center justify-center  text-center py-16 px-6 rounded-3xl bg-secondary/10 backdrop-blur-xl border
        border-secondary/30 shadow-xl animate-in fade-in zoom-in-95"
    >
      <div
        className="
          mb-6
          p-5
          rounded-full
          bg-foreground/20
          border
          border-foreground/40
        "
      >
        <SearchX className="w-10 h-10 text-foreground" />
      </div>

      <h3 className="text-2xl font-black text-textcolor mb-2">
        {title}
      </h3>

      <p className="text-textcolor/70 text-lg max-w-md">
        {description}
      </p>
    </div>
  );
}
