"use client";
import { CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, TrendingUp } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/shared/Lib/utils";
import Link from "next/link";
import { useMemo } from "react";

interface IProps {
  ai: {
    total_recommendations: number;
    avg_adherence_score: number | null;
    helpful_count: number | null;
  };
}

const AiStatContent = ({ ai }: IProps) => {
  // Normalize null values to 0 for consistent comparison between server and client
  // This ensures the same logic runs on both server and client
  const avgAdherenceScore = ai.avg_adherence_score ?? 0;
  const helpfulCount = ai.helpful_count ?? 0;

  // Calculate aiEngagement with consistent, deterministic logic
  // Using useMemo ensures the calculation is stable
  const aiEngagement = useMemo(() => {
    if (ai.total_recommendations > 0) {
      return Number(Math.min(ai.total_recommendations * 20, 100).toFixed(2));
    }
    return 10;
  }, [ai.total_recommendations]);

  const hasNoAiData =
    ai.total_recommendations === 0 ||
    avgAdherenceScore === 0 ||
    helpfulCount === 0 ||
    aiEngagement === 0;

  if (hasNoAiData) {
    return (
      <CardContent className="relative z-10">
        <div className="text-center py-6 space-y-4">
          <p className="text-sm font-semibold text-secondary">
            الرجاء تسجيل وجباتك أولاً
          </p>

          <Link
            href="/dashboard/profile/edit"
            className={cn(
              buttonVariants(),
              "inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-secondary text-background font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            )}
          >
            تسجيل وجباتك
          </Link>
        </div>
      </CardContent>
    );
  }

  return (
    <CardContent className="relative z-10">
      <div className="space-y-4">
        <div className="text-center mb-3">
          <div className="text-3xl font-bold text-secondary mb-1">
            {avgAdherenceScore}%
          </div>
          <div className="text-sm text-secondary/60">معدل الإلتزام</div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-3 w-3 text-foreground/60" />
              <span className="text-xs text-secondary/70">
                التوصيات المفيدة
              </span>
            </div>
            <span className="font-medium text-secondary">{helpfulCount}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-3 w-3 text-foreground/60" />
              <span className="text-xs text-secondary/70">مستوى التفاعل</span>
            </div>
            <span
              className={`text-xs font-medium ${
                ai.total_recommendations > 5
                  ? "text-green-400"
                  : ai.total_recommendations > 0
                  ? "text-yellow-400"
                  : "text-secondary/60"
              }`}
            >
              {ai.total_recommendations > 5
                ? "عالي"
                : ai.total_recommendations > 0
                ? "متوسط"
                : "منخفض"}
            </span>
          </div>
        </div>

        <div className="pt-3 border-t border-foreground/10">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-secondary/70">مشاركة الذكاء الاصطناعي</span>
            <span className="text-foreground">{aiEngagement}%</span>
          </div>
          <Progress value={aiEngagement} className="h-1.5 bg-background/50" />
        </div>
      </div>
    </CardContent>
  );
};

export default AiStatContent;
