"use client";

import { AlertCircle } from "lucide-react";

type Props = {
  message?: string;
};

const AiRecommendationError = ({ message }: Props) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-md bg-foreground/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-foreground/30 text-center">
        <AlertCircle className="w-16 h-16 text-foreground mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-textcolor mb-2">حدث خطأ</h3>
        <p className="text-textcolor/70">{message || "لم نتمكن من تحميل التوصيات"}</p>
      </div>
    </div>
  );
};

export default AiRecommendationError;
