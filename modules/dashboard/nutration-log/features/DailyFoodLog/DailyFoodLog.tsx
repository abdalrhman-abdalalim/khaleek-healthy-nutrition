import { TodayProgressTransformed } from "@/modules/dashboard/MainDashboard/models/TodayProgressData";
import FoodLogTextInput from "../FoodLogTextInput/FoodLogInput";
import CircularProgress from "./components/CircularProgress";

interface IProps {
  isLoading: boolean;
  progressData: TodayProgressTransformed | null;
  caloriesProgress: number;
  proteinProgress: number;
  carbsProgress: number;
  fatProgress: number;
}
const DailyFoodLog = ({
  isLoading,
  progressData,
  caloriesProgress,
  carbsProgress,
  fatProgress,
  proteinProgress,
}: IProps) => {
  return (
    <div className="space-y-8">
      {/* Add New Food */}
      <div className="bg-background/50 border-foreground/20 dark:from-background shadow-2xl rounded-2xl p-6 md:p-8 border dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-linear-to-r from-primary/10 to-primary/5 rounded-xl">
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              إضافة طعام جديد
            </h2>
            <p className="text-gray-600 dark:text-foreground text-sm">
              سجل وجباتك اليومية بسهولة
            </p>
          </div>
        </div>
        <FoodLogTextInput />
      </div>

      {/* Today's Progress */}
      {!isLoading && progressData && (
        <div>
          {/* Your existing JSX */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
            <CircularProgress
              percentage={caloriesProgress}
              label="السعرات"
              value={progressData.food.calories}
              target={progressData.targets.calories}
              unit="سعرة"
              // icon={Flame}
            />
            <CircularProgress
              percentage={proteinProgress}
              label="البروتين"
              value={progressData.food.protein}
              target={progressData.targets.protein}
              unit="g"
              // icon={Beef}
            />
            <CircularProgress
              percentage={carbsProgress}
              label="الكربوهيدرات"
              value={progressData.food.carbs}
              target={progressData.targets.carbs}
              unit="g"
              // icon={Wheat}
            />
            <CircularProgress
              percentage={fatProgress}
              label="الدهون"
              value={progressData.food.fat}
              target={progressData.targets.fat}
              unit="g"
              // icon={Droplets}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default DailyFoodLog;
