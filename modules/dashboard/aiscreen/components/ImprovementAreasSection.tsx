"use client";

import { AlertCircle, Target } from "lucide-react";

type Props = {
  areas: string[] | null;
};

const ImprovementAreasSection = ({ areas }: Props) => {
  if (!areas || areas.length === 0) return null;

  return (
    <div className="bg-linear-to-br from-foreground/10 to-secondary/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-foreground/30 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Target className="w-8 h-8 text-foreground" />
        <h2 className="text-3xl font-bold text-textcolor">مجالات التحسين</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {areas.map((area, index) => (
          <div key={index} className="flex items-start gap-3 p-5 bg-background/50 rounded-2xl border border-foreground/20 hover:border-foreground/40 transition-all duration-300">
            <AlertCircle className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
            <span className="text-textcolor/90">{area}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImprovementAreasSection;
