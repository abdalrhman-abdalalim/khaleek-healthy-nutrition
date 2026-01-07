import { Progress } from "@/components/ui/progress";
import { Beef } from "lucide-react";

interface IProps {}
const Macros = ({}: IProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Beef className="h-4 w-4 text-blue-500" />
          <span className="text-xs text-secondary/70">بروتين</span>
        </div>
        <div>
          <div className="font-bold text-secondary text-lg">
            {data.food.protein}g
          </div>
          <div className="text-xs text-secondary/70">
            هدف: {data.targets.protein}g
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
          <div className="font-bold text-secondary text-lg">
            {data.food.carbs}g
          </div>
          <div className="text-xs text-secondary/70">
            هدف: {data.targets.carbs}g
          </div>
        </div>
        <Progress value={Math.min(carbsProgress, 100)} className="h-1.5" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Droplet className="h-4 w-4 text-yellow-500" />
          <span className="text-xs text-secondary/70">دهون</span>
        </div>
        <div>
          <div className="font-bold text-secondary text-lg">
            {data.food.fat}g
          </div>
          <div className="text-xs text-secondary/70">
            هدف: {data.targets.fat}g
          </div>
        </div>
        <Progress value={Math.min(fatProgress, 100)} className="h-1.5" />
      </div>
    </div>
  );
};
export default Macros;
