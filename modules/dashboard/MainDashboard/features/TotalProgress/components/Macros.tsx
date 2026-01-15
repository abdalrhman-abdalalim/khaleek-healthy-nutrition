import { Progress } from "@/components/ui/progress";
import { Beef, Droplet, Wheat } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/shared/Lib/utils";
import Link from "next/link";

interface IProps {
  targets?: {
    // ✅ Make targets optional
    calories: number | null;
    protein: number | null;
    carbs: number | null;
    fat: number | null;
  };
  food?:
    | {
        calories: number | null;
        protein: number | null;
        carbs: number | null;
        fat: number | null;
        mealCount: number | null;
      }
    | undefined;
  fatProgress?: number; // ✅ Make fatProgress optional too
}

const Macros = ({ food, targets }: IProps) => {
  const hasNoData =
    !targets ||
    !food ||
    food.mealCount === 0 ||
    food.mealCount === null ||
    !targets.protein ||
    !targets.carbs ||
    !targets.fat;

  if (hasNoData) {
    return (
      <div className="text-center py-6 space-y-4 col-span-3">
        <p className="text-sm font-semibold text-secondary">
          الرجاء تحديد أهدافك وتسجيل وجباتك أولاً
        </p>

        <Link
          href="/dashboard/profile/edit"
          className={cn(
            buttonVariants(),
            "inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-secondary text-background font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          )}
        >
          إعداد الأهداف الغذائية
        </Link>
      </div>
    );
  }

  const carbsProgress = ((food.carbs ?? 0) / (targets.carbs ?? 1)) * 100;
  const proteinProgress = ((food.protein ?? 0) / (targets.protein ?? 1)) * 100;
  const fatProgressValue = ((food.fat ?? 0) / (targets.fat ?? 1)) * 100;

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
        <Progress value={Math.min(fatProgressValue, 100)} className="h-1.5" />
      </div>
    </div>
  );
};

export default Macros;
