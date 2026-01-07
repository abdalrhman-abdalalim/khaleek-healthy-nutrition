"use client";

import React from "react";
import { Dumbbell } from "lucide-react";

interface TrainingFormHeaderProps {
  title?: string;
  subtitle?: string;
}

const TrainingFormHeader: React.FC<TrainingFormHeaderProps> = ({
  title = "تسجيل تمرين جديد",
  subtitle = "سجل تفاصيل تمرينك اليومي",
}) => {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="p-4 bg-foreground rounded-3xl shadow-xl">
          <Dumbbell className="w-8 h-8 text-background" />
        </div>
      </div>

      <h1 className="text-4xl font-black text-secondary mb-2 drop-shadow-lg">
        {title}
      </h1>

      <p className="text-textcolor/70">{subtitle}</p>
    </div>
  );
};

export default TrainingFormHeader;
