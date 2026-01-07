import { Progress } from "@/components/ui/progress";
import { Flame, TrendingDown } from "lucide-react";

interface IProps {
  calories: number;
  targetCal: number;
  calorie_surplus_deficit: number;
  calorieProgress: number;
}
const Calories = ({
  calories,
  targetCal,
  calorie_surplus_deficit,
  calorieProgress,
}: IProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Flame className="h-4 w-4 text-orange-500" />
          <span className="text-sm font-medium text-secondary">
            السعرات الحرارية
          </span>
        </div>
        <div className="text-right">
          <div className="font-bold text-secondary">
            {calories} / {targetCal}
          </div>
          <div
            className={`text-xs ${
              calorie_surplus_deficit < 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {calorie_surplus_deficit > 0 ? "+" : ""}
            {calorie_surplus_deficit} سعرة
            <TrendingDown className="inline mr-1 h-3 w-3" />
          </div>
        </div>
      </div>
      <Progress value={Math.min(calorieProgress, 100)} className="h-2" />
    </div>
  );
};
export default Calories;
