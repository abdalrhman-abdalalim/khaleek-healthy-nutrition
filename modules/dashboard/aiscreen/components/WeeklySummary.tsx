"use client";

import { Brain, Sparkles } from "lucide-react";

interface WeeklySummaryProps {
  summary: string;
  aiModel: string;
}

const WeeklySummary = ({ summary, aiModel }: WeeklySummaryProps) => {
  return (
    <div className="bg-linear-to-br from-foreground/10 to-secondary/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-foreground/30 shadow-2xl mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="w-8 h-8 text-foreground" />
        <h2 className="text-3xl font-bold text-textcolor">
          الملخص الأسبوعي
        </h2>
      </div>

      <p className="text-lg text-textcolor/90 leading-relaxed">{summary}</p>

      <div className="mt-6 flex items-center gap-3 p-4 bg-foreground/10 rounded-2xl border border-foreground/30">
        <Brain className="w-6 h-6 text-foreground shrink-0" />
        <div className="text-sm text-textcolor/80">
          <span className="font-bold text-foreground">محلل بواسطة:</span>{" "}
          {aiModel}
        </div>
      </div>
    </div>
  );
};

export default WeeklySummary;
