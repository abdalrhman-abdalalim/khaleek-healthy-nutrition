"use client";

import { TrendingUp } from "lucide-react";

type Props = {
  analysis: string | null;
};

const NutritionAnalysisSection = ({ analysis }: Props) => {
  if (!analysis) return null;

  return (
    <div className="bg-linear-to-br from-secondary/10 to-transparent backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/30 shadow-xl mb-8">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-8 h-8 text-secondary" />
        <h2 className="text-3xl font-bold text-textcolor">التحليل الغذائي</h2>
      </div>
      <p className="text-lg text-textcolor/90 leading-relaxed">{analysis}</p>
    </div>
  );
};

export default NutritionAnalysisSection;
