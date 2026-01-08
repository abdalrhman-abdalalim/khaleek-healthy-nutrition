// app/dashboard/hooks/useTodayProgressData.ts
import { useTodayProgress } from "../lib/api_today_progress";

// Define transformed data structure (optional, based on your needs)
export interface TodayProgressTransformed {
  net_calories: number;
  calorieSurplusDeficit: number;
  progress_percentage: number;
  date: Date;
  food: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    mealCount: number;
  };
  training: {
    caloriesBurned: number;
    totalMinutes: number;
    sessionCount: number;
  };
  targets: {
    calories: number | null;
    protein: number | null;
    carbs: number | null;
    fat: number | null;
  };
  summary: {
    netCalories: number;
    calorieSurplusDeficit: number;
    progressPercentage: number;
  };
}

export function useTodayProgressData() {
  const { data, isError, isLoading, error, refetch } = useTodayProgress();

  // Transform the data if needed
  const transformedData: TodayProgressTransformed | null = data?.data
    ? {
        date: new Date(data.data.date),
        food: {
          calories: data.data.food.calories,
          protein: data.data.food.protein,
          carbs: data.data.food.carbs,
          fat: data.data.food.fat,
          mealCount: data.data.food.meal_count,
        },
        training: {
          caloriesBurned: data.data.training.calories_burned,
          totalMinutes: data.data.training.total_minutes,
          sessionCount: data.data.training.session_count,
        },
        targets: {
          calories: data.data.targets.calories,
          protein: data.data.targets.protein,
          carbs: data.data.targets.carbs,
          fat: data.data.targets.fat,
        },
        summary: {
          netCalories: data.data.net_calories,
          calorieSurplusDeficit: data.data.calorie_surplus_deficit,
          progressPercentage: data.data.progress_percentage,
        },
        net_calories: data.data.net_calories,
        calorieSurplusDeficit: data.data.calorie_surplus_deficit,
        progress_percentage: data.data.progress_percentage,
      }
    : null;

  return {
    data: transformedData,
    rawData: data?.data,
    isError,
    isLoading,
    error,
    refetch,
    success: data?.success || false,
    message: data?.message || "",
  };
}
