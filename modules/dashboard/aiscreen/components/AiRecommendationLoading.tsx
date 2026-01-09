"use client";

import { Loader2 } from "lucide-react";

const AiRecommendationLoading = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-16 h-16 text-foreground animate-spin" />
        <p className="text-textcolor text-2xl font-bold">جاري تحليل بياناتك...</p>
        <p className="text-textcolor/70">الذكاء الاصطناعي يحضر توصياتك المخصصة</p>
      </div>
    </div>
  );
};

export default AiRecommendationLoading;
