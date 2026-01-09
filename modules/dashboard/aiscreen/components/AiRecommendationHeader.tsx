"use client";

import { Brain } from "lucide-react";

const AiRecommendationHeader = () => {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="p-4 bg-linear-to-br from-foreground to-secondary rounded-3xl shadow-2xl animate-pulse">
          <Brain className="w-12 h-12 text-background" />
        </div>
      </div>

      <h1 className="text-5xl md:text-6xl font-black text-center text-secondary mb-4">
        توصياتك الأسبوعية
      </h1>

      <p className="text-center text-textcolor/70 text-xl">
        تحليل شامل وتوصيات مخصصة من مدربك الذكي
      </p>
    </div>
  );
};

export default AiRecommendationHeader;
