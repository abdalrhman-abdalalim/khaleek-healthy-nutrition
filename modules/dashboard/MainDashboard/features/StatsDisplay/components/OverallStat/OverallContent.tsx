import { CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IProps {
  stats: {
    profile_completion: boolean;
    days_active: number;
  };
}

const OverallContent = ({ stats }: IProps) => {
  const monthlyProgress = Math.min(stats.days_active * 5, 100);

  const hasNoOverallData =
    stats.days_active === 0 || !stats.profile_completion;

  if (hasNoOverallData) {
    return (
      <CardContent className="relative z-10">
        <div className="text-center py-6 space-y-4">
          <p className="text-sm font-semibold text-secondary">
            الرجاء تسجيل وجباتك أولاً
          </p>

          <Button
            asChild
            className="inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-secondary text-background font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Link href="/dashboard/profile/edit">
              تسجيل وجباتك
            </Link>
          </Button>
        </div>
      </CardContent>
    );
  }

  return (
    <CardContent className="relative z-10">
      <div className="space-y-4">
        <div className="text-center mb-3">
          <div className="text-3xl font-bold text-secondary mb-1">
            {stats.days_active}
          </div>
          <div className="text-sm text-secondary/60">أيام النشاط</div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="h-3 w-3 text-foreground/60" />
              <span className="text-xs text-secondary/70">
                حالة الملف
              </span>
            </div>
            <span className="text-xs font-medium text-green-400">
              مكتمل
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-3 w-3 text-foreground/60" />
              <span className="text-xs text-secondary/70">
                التواصل المستمر
              </span>
            </div>
            <span className="font-medium text-secondary">
              {stats.days_active > 7
                ? "🔥"
                : stats.days_active > 3
                ? "⭐"
                : "📈"}
            </span>
          </div>
        </div>

        <div className="pt-3 border-t border-foreground/10">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-secondary/70">التقدم الشهري</span>
            <span className="text-foreground">{monthlyProgress}%</span>
          </div>
          <Progress
            value={monthlyProgress}
            className="h-1.5 bg-background/50"
          />
        </div>
      </div>
    </CardContent>
  );
};

export default OverallContent;
