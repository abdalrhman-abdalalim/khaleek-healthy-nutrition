import { Progress } from "@/components/ui/progress";
import { Beef, Droplet, Wheat } from "lucide-react";

interface IProps {
  targets: {
    calories: number | null;
    protein: number | null;
    carbs: number | null;
    fat: number | null;
  };
  food: {
    calories: number | null;
    protein: number | null;
    carbs: number | null;
    fat: number | null;
    mealCount: number | null;
  };
  fatProgress: number;
}
const Macros = ({ food, targets, fatProgress }: IProps) => {
  const carbsProgress = (food?.carbs ?? 0 / (targets?.carbs ?? 0)) * 100;
  const proteinProgress = (food?.protein ?? 0 / (targets?.protein ?? 0)) * 100;
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Beef className="h-4 w-4 text-blue-500" />
          <span className="text-xs text-secondary/70">بروتين</span>
        </div>
        <div>
          <div className="font-bold text-secondary text-lg">
            {food.protein}g
          </div>
          <div className="text-xs text-secondary/70">
            هدف: {targets.protein}g
          </div>
        </div>
        <Progress value={Math.min(proteinProgress, 100)} className="h-1.5" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Wheat className="h-4 w-4 text-green-500" />
          <span className="text-xs text-secondary/70">كارب</span>
        </div>
        <div>
          <div className="font-bold text-secondary text-lg">{food.carbs}g</div>
          <div className="text-xs text-secondary/70">هدف: {targets.carbs}g</div>
        </div>
        <Progress value={Math.min(carbsProgress, 100)} className="h-1.5" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Droplet className="h-4 w-4 text-yellow-500" />
          <span className="text-xs text-secondary/70">دهون</span>
        </div>
        <div>
          <div className="font-bold text-secondary text-lg">{food.fat}g</div>
          <div className="text-xs text-secondary/70">هدف: {targets.fat}g</div>
        </div>
        <Progress value={Math.min(fatProgress, 100)} className="h-1.5" />
      </div>
    </div>
  );
};
export default Macros;
