// components/dashboard/TodayProgress.tsx
"use client";
import { Card, CardContent } from "@/components/ui/card";
import TotalProgressHeader from "./components/TotalProgressHeader";
import PieChartHeader from "./components/PieChartHeader";
import PieChartFooter from "./components/PieChartFooter";
import Calories from "./components/Calories";
import Macros from "./components/Macros";
import Training from "./components/Training";
import OverallProgress from "./components/OverallProgress";
import LoadingScreen from "@/shared/components/LoadingScreen";
import ErrorAlert from "@/shared/components/ErrorAlert";
import EmptyState from "@/shared/components/EmptyState";
import { useTodayProgressData } from "../../models/TodayProgressData";

export default function TodayProgress() {
  const { data, isLoading, isError } = useTodayProgressData();
  if (isLoading) {
    <LoadingScreen />;
  }
  if (isError) {
    return <ErrorAlert />;
  }
  if (!data) {
    return (
      <EmptyState
        title="لا توجد إحصائيات"
        message="ابدأ بتسجيل وجباتك وتمارينك."
      />
    );
  }

  const consumedMacros = [
    { name: "بروتين", value: data.food.protein, color: "#3b82f6" },
    { name: "كاربوهيدرات", value: data.food.carbs, color: "#10b981" },
    { name: "دهون", value: data.food.fat, color: "#f59e0b" },
  ].filter((item) => item.value > 0);

  const fatProgress = (data.food.fat / (data?.targets.fat ?? 0)) * 100;

  return (
    <Card className="bg-background/50 border-foreground/20 mx-5 mb-6">
      <TotalProgressHeader date={data.date} />
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <PieChartHeader consumedMacros={consumedMacros} />
            <PieChartFooter
              meal_count={data.food.mealCount}
              session_count={data.training.sessionCount}
            />
          </div>
          <div className="space-y-6">
            <Calories
              targetCal={data.targets.calories ?? 0}
              calorieProgress={data.progress_percentage}
              calorie_surplus_deficit={data.calorieSurplusDeficit}
              calories={data.net_calories}
            />
            <Macros
              fatProgress={fatProgress}
              food={data?.food}
              targets={data.targets}
            />
            <Training
              net_calories={data.net_calories}
              training={data?.training}
            />
            <OverallProgress progress_percentage={data.progress_percentage} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
