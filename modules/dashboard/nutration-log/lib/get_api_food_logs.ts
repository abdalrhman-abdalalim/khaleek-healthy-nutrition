// Add these imports to existing file
import api from "@/shared/Lib/axios";
import {
  DailySummaryResponse,
  DailySummaryTransformed,
  ProgressData,
} from "./types";

// Add this function to existing exports
export const getDailySummary = async (
  date?: string
): Promise<DailySummaryTransformed> => {
  const params = new URLSearchParams();
  if (date) {
    params.append("date", date);
  }

  const response = await api.get<DailySummaryResponse>(
    `/food-logs/daily${params.toString() ? `?${params.toString()}` : ""}`
  );

  if (!response.data.success) {
    throw new Error(response.data.message);
  }

  return transformDailySummary(response.data.data);
};

// Helper function to transform API response
const transformDailySummary = (
  data: DailySummaryResponse["data"]
): DailySummaryTransformed => {
  return {
    date: data.date,
    summary: {
      totalCalories: data.summary.total_calories,
      totalProtein: data.summary.total_protein,
      totalCarbs: data.summary.total_carbs,
      totalFat: data.summary.total_fat,
      mealCount: data.summary.meal_count,
      avgMealCalories: data.summary.avg_meal_calories,
      mealTypes: data.summary.meal_types,
    },
    targets: data.targets,
    percentages: data.percentages,
    remaining: data.remaining,
    isOnTrack: data.is_on_track,
  };
};

// Add this function to convert to ProgressData format
export const transformToProgressData = (
  data: DailySummaryTransformed
): ProgressData => {
  return {
    food: {
      calories: data.summary.totalCalories || 0,
      protein: data.summary.totalProtein || 0,
      carbs: data.summary.totalCarbs || 0,
      fat: data.summary.totalFat || 0,
    },
    targets: data.targets,
  };
};
