import { CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, Target } from "lucide-react";

interface IProps {
  stats: { profile_completion: boolean; days_active: number };
}
const OverallContent = ({ stats }: IProps) => {
  return (
    <CardContent className="relative z-10">
      <div className="space-y-4">
        {/* Active days */}
        <div className="text-center mb-3">
          <div className="text-3xl font-bold text-secondary mb-1">
            {stats.days_active}
          </div>
          <div className="text-sm text-secondary/60">أيام النشاط</div>
        </div>

        <div className="space-y-3">
          {/* Profile status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="h-3 w-3 text-foreground/60" />
              <span className="text-xs text-secondary/70">حالة الملف</span>
            </div>
            <span
              className={`text-xs font-medium ${
                stats.profile_completion ? "text-green-400" : "text-orange-400"
              }`}
            >
              {stats.profile_completion ? "مكتمل" : "مطلوب إكمال"}
            </span>
          </div>

          {/* Streak indicator */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-3 w-3 text-foreground/60" />
              <span className="text-xs text-secondary/70">التواصل المستمر</span>
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

        {/* Activity streak progress */}
        <div className="pt-3 border-t border-foreground/10">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-secondary/70">التقدم الشهري</span>
            <span className="text-foreground">
              {Math.min(stats.days_active * 5, 100)}%
            </span>
          </div>
          <Progress
            value={Math.min(stats.days_active * 5, 100)}
            className="h-1.5 bg-background/50"
          />
        </div>
      </div>
    </CardContent>
  );
};
export default OverallContent;
