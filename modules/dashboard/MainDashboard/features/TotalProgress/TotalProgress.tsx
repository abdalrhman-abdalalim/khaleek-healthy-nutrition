// components/dashboard/TodayProgress.tsx
"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Target,
  Flame,
  Dumbbell,
  TrendingDown,
  Apple,
  Beef,
  Wheat,
  Droplet,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import TotalProgressHeader from "./components/TotalProgressHeader";
import PieChartHeader from "./components/PieChartHeader";
import PieChartFooter from "./components/PieChartFooter";
import Calories from "./components/Calories";

// Static data matching your API response
const staticTodayData = {
  date: "2026-01-07",
  food: {
    calories: 10,
    protein: 20,
    carbs: 40,
    fat: 0,
    meal_count: 0,
  },
  training: {
    calories_burned: 10,
    total_minutes: 0,
    session_count: 30,
  },
  targets: {
    calories: 1853,
    protein: 139,
    carbs: 208,
    fat: 51,
  },
  net_calories: 0,
  calorie_surplus_deficit: -1853,
  progress_percentage: 0,
};

export default function TodayProgress() {
  const data = staticTodayData;

  // Prepare data for pie chart (Targets vs Actual)
  const macroData = [
    { name: "بروتين مستهلك", value: data.food.protein, color: "#3b82f6" },
    { name: "كارب مستهلك", value: data.food.carbs, color: "#10b981" },
    { name: "دهون مستهلكة", value: data.food.fat, color: "#f59e0b" },
    {
      name: "بروتين متبقي",
      value: data.targets.protein - data.food.protein,
      color: "#60a5fa",
    },
    {
      name: "كارب متبقي",
      value: data.targets.carbs - data.food.carbs,
      color: "#34d399",
    },
    {
      name: "دهون متبقية",
      value: data.targets.fat - data.food.fat,
      color: "#fbbf24",
    },
  ].filter((item) => item.value > 0);

  // Alternative pie chart: Just consumed macros
  const consumedMacros = [
    { name: "بروتين", value: data.food.protein, color: "#3b82f6" },
    { name: "كاربوهيدرات", value: data.food.carbs, color: "#10b981" },
    { name: "دهون", value: data.food.fat, color: "#f59e0b" },
  ].filter((item) => item.value > 0);

  // Calculate percentages
  const calorieProgress = (data.food.calories / data.targets.calories) * 100;
  const proteinProgress = (data.food.protein / data.targets.protein) * 100;
  const carbsProgress = (data.food.carbs / data.targets.carbs) * 100;
  const fatProgress = (data.food.fat / data.targets.fat) * 100;

  return (
    <Card className="bg-background/50 border-foreground/20 mx-5 mb-6">
      <TotalProgressHeader date={data.date} />

      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column: Pie Chart */}
          <div className="space-y-4">
            <PieChartHeader consumedMacros={consumedMacros} />
            <PieChartFooter
              meal_count={data.food.meal_count}
              session_count={data.training.session_count}
            />
          </div>

          {/* Right Column: Progress Stats */}
          <div className="space-y-6">
            {/* Calories */}
            <Calories
              targetCal={data.targets.calories}
              calorieProgress={data.progress_percentage}
              calorie_surplus_deficit={data.calorie_surplus_deficit}
              calories={data.net_calories}
            />

            {/* Macros */}
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
                <Progress
                  value={Math.min(proteinProgress, 100)}
                  className="h-1.5"
                />
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
                <Progress
                  value={Math.min(carbsProgress, 100)}
                  className="h-1.5"
                />
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
                <Progress
                  value={Math.min(fatProgress, 100)}
                  className="h-1.5"
                />
              </div>
            </div>

            {/* Training */}
            <div className="space-y-3 border-t border-foreground/10 pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium text-secondary">
                    التمارين
                  </span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-secondary">
                    {data.training.session_count} جلسة
                  </div>
                  <div className="text-xs text-secondary/70">
                    {data.training.total_minutes} دقيقة
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary/70">السعرات المحروقة</span>
                  <span className="font-medium text-secondary">
                    {data.training.calories_burned} سعرة
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary/70">صافي السعرات</span>
                  <span
                    className={`font-medium ${
                      data.net_calories < 0
                        ? "text-green-500"
                        : "text-secondary"
                    }`}
                  >
                    {data.net_calories} سعرة
                  </span>
                </div>
              </div>
            </div>

            {/* Overall Progress */}
            <div className="space-y-2 bg-foreground/5 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-secondary">
                  التقدم اليومي
                </span>
                <span className="font-bold text-secondary text-lg">
                  {data.progress_percentage}%
                </span>
              </div>
              <Progress value={data.progress_percentage} className="h-2" />
              <p className="text-xs text-secondary/60 text-center">
                {data.progress_percentage === 0
                  ? "ابدأ بتسجيل وجباتك اليومية"
                  : data.progress_percentage < 50
                  ? "استمر، أنت على الطريق الصحيح"
                  : "أداء ممتاز! استمر في التقدم"}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
