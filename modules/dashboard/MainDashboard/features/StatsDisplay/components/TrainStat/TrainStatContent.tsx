"use client";

import { CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, Clock } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/shared/Lib/utils";

interface IProps {
  training: {
    total_sessions: number;
    total_minutes: number | null;
    total_calories_burned: number | null;
    last_session_date: string | null;
  };
}

const TrainStatContent = ({ training }: IProps) => {
  const trainingCompletion =
    training.total_sessions > 0
      ? Math.min(training.total_sessions * 10, 100)
      : 0;

  const hasNoTrainingData =
    training.total_sessions === 0 ||
    !training.total_calories_burned ||
    !training.total_minutes ||
    trainingCompletion === 0;

  if (hasNoTrainingData) {
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
            {training.total_sessions}
          </div>
          <div className="text-sm text-secondary/60">جلسات التمرين</div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-3 w-3 text-foreground/60" />
              <span className="text-xs text-secondary/70">
                السعرات المحروقة
              </span>
            </div>
            <span className="font-medium text-secondary">
              {training.total_calories_burned} سعرة
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-3 w-3 text-foreground/60" />
              <span className="text-xs text-secondary/70">
                دقائق التمرين
              </span>
            </div>
            <span className="font-medium text-secondary">
              {training.total_minutes} دقيقة
            </span>
          </div>
        </div>

        <div className="pt-3 border-t border-foreground/10">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-secondary/70">التقدم الشهري</span>
            <span className="text-foreground">{trainingCompletion}%</span>
          </div>
          <Progress
            value={trainingCompletion}
            className="h-1.5 bg-background/50"
          />
        </div>
      </div>
    </CardContent>
  );
};

export default TrainStatContent;
