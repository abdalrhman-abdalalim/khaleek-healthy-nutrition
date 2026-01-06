import { CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, Clock } from "lucide-react";

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
  return (
    <CardContent className="relative z-10">
      <div className="space-y-4">
        {/* Main sessions stat */}
        <div className="text-center mb-3">
          <div className="text-3xl font-bold text-secondary mb-1">
            {training.total_sessions}
          </div>
          <div className="text-sm text-secondary/60">جلسات التمرين</div>
        </div>

        <div className="space-y-3">
          {/* Calories burned */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-3 w-3 text-foreground/60" />
              <span className="text-xs text-secondary/70">
                السعرات المحروقة
              </span>
            </div>
            <span className="font-medium text-secondary">
              {training.total_calories_burned || 0} سعرة
            </span>
          </div>

          {/* Total minutes */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-3 w-3 text-foreground/60" />
              <span className="text-xs text-secondary/70">دقائق التمرين</span>
            </div>
            <span className="font-medium text-secondary">
              {training.total_minutes || 0} دقيقة
            </span>
          </div>
        </div>

        {/* Progress bar for training consistency */}
        {trainingCompletion > 0 && (
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
        )}
      </div>
    </CardContent>
  );
};
export default TrainStatContent;
