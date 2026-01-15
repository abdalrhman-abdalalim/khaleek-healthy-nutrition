import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/shared/Lib/utils";
import { CardContent } from "@/components/ui/card";
import { Clock, Target, User } from "lucide-react";
import Link from "next/link";

interface IProps {
  food: {
    total_calories?: number;
    avg_daily_calories?: number;
    last_log_date?: string;
  };
}

const Cardcontent = ({ food }: IProps) => {
  const hasNoData =
    !food.total_calories ||
    food.total_calories === 0 ||
    !food.avg_daily_calories ||
    food.avg_daily_calories === 0 ||
    !food.last_log_date;

  return (
    <CardContent className="relative z-10">
      <div className="space-y-4">

        {hasNoData ? (
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
            سجيل وجباتك
          </Link>
        </div>
        ) : (
          <>
            <div className="text-center mb-3">
              <div className="text-3xl font-bold text-secondary mb-1">
                {food.total_calories}
              </div>
              <div className="text-sm text-secondary/60">
                إجمالي السعرات
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="h-3 w-3 text-foreground/60" />
                  <span className="text-xs text-secondary/70">
                    المتوسط اليومي
                  </span>
                </div>
                <span className="font-medium text-secondary">
                  {food.avg_daily_calories} سعرة
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3 text-foreground/60" />
                  <span className="text-xs text-secondary/70">
                    آخر وجبة
                  </span>
                </div>
                <span className="text-xs font-medium text-foreground">
                  {food.last_log_date}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </CardContent>
  );
};

export default Cardcontent;
