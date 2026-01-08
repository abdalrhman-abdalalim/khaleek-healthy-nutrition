import { Dumbbell } from "lucide-react";

interface IProps {
  training: {
    caloriesBurned: number;
    totalMinutes: number;
    sessionCount: number;
  };
  net_calories: number;
}
const Training = ({ training, net_calories }: IProps) => {
  return (
    <div className="space-y-3 border-t border-foreground/10 pt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-4 w-4 text-purple-500" />
          <span className="text-sm font-medium text-secondary">التمارين</span>
        </div>
        <div className="text-right">
          <div className="font-bold text-secondary">
            {training.sessionCount} جلسة
          </div>
          <div className="text-xs text-secondary/70">
            {training.totalMinutes} دقيقة
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-secondary/70">السعرات المحروقة</span>
          <span className="font-medium text-secondary">
            {training.caloriesBurned} سعرة
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-secondary/70">صافي السعرات</span>
          <span
            className={`font-medium ${
              net_calories < 0 ? "text-green-500" : "text-secondary"
            }`}
          >
            {net_calories} سعرة
          </span>
        </div>
      </div>
    </div>
  );
};
export default Training;
