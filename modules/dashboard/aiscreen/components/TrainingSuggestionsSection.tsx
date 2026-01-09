"use client";

import { Dumbbell } from "lucide-react";

type Props = {
  suggestions: string[] | null;
};

const TrainingSuggestionsSection = ({ suggestions }: Props) => {
  if (!suggestions || suggestions.length === 0) return null;

  return (
    <div className="bg-linear-to-br from-foreground/10 to-transparent backdrop-blur-xl rounded-3xl p-8 border-2 border-foreground/30 shadow-xl mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Dumbbell className="w-8 h-8 text-foreground" />
        <h2 className="text-3xl font-bold text-textcolor">خطة التمارين المقترحة</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="flex items-start gap-3 p-5 bg-background/50 rounded-2xl border border-foreground/20">
            <div className="shrink-0 w-8 h-8 bg-foreground/20 rounded-full flex items-center justify-center">
              <span className="text-foreground font-bold">{index + 1}</span>
            </div>
            <span className="text-textcolor/90 leading-relaxed">{suggestion}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingSuggestionsSection;
