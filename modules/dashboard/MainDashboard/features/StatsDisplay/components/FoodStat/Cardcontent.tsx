import { CardContent } from "@/components/ui/card";
import { Clock, Target } from "lucide-react";

interface IProps {
  food: {
    total_calories: string;
    avg_daily_calories: string;
    last_log_date: string;
  };
}
const Cardcontent = ({ food }: IProps) => {
  return (
    <CardContent className="relative z-10">
      <div className="space-y-4">
        {/* Main calorie stat */}
        <div className="text-center mb-3">
          <div className="text-3xl font-bold text-secondary mb-1">
            {parseFloat(food.total_calories).toFixed(0)}
          </div>
          <div className="text-sm text-secondary/60">إجمالي السعرات</div>
        </div>

        <div className="space-y-3">
          {/* Average daily calories */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="h-3 w-3 text-foreground/60" />
              <span className="text-xs text-secondary/70">المتوسط اليومي</span>
            </div>
            <span className="font-medium text-secondary">
              {parseFloat(food.avg_daily_calories).toFixed(0)} سعرة
            </span>
          </div>

          {/* Last activity */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-3 w-3 text-foreground/60" />
              <span className="text-xs text-secondary/70">آخر وجبة</span>
            </div>
            <span className="text-xs font-medium text-foreground">
              {food.last_log_date}
            </span>
          </div>
        </div>
      </div>
    </CardContent>
  );
};
export default Cardcontent;
