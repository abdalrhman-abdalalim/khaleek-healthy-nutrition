"use client";

import { Sparkles } from "lucide-react";

interface WeeklySummaryProps {
  summary: string;
}

const WeeklySummary = ({ summary }: WeeklySummaryProps) => {
  return (
    <div className="bg-linear-to-br from-foreground/10 to-secondary/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-foreground/30 shadow-2xl mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="w-8 h-8 text-foreground" />
        <h2 className="text-3xl font-bold text-textcolor">
          الملخص الأسبوعي
        </h2>
      </div>

      <p className="text-lg text-textcolor/90 leading-relaxed">{summary}</p>
    </div>
  );
};

export default WeeklySummary;
