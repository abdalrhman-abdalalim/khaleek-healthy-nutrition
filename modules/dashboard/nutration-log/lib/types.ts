// app/dashboard/lib/types/foodLogs.ts
export interface FoodLogTextRequest {
  meal_type: "breakfast" | "lunch" | "dinner" | "snack";
  text: string;
}

export interface FoodLogTextResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    meal_type: string;
    text: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    created_at: string;
    updated_at: string;
  };
}

export interface ParsedFoodItem {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  quantity?: string;
  unit?: string;
}

export interface DailySummaryResponse {
  success: boolean;
  message: string;
  data: {
    date: string;
    summary: {
      total_calories: number | null;
      total_protein: number | null;
      total_carbs: number | null;
      total_fat: number | null;
      meal_count: number;
      avg_meal_calories: number | null;
      meal_types: string[] | null;
    };
    targets: {
      calories: number;
      protein: number;
      carbs: number;
      fat: number;
    };
    percentages: {
      calories: number;
      protein: number;
      carbs: number;
      fat: number;
    };
    remaining: {
      calories: number;
      protein: number;
      carbs: number;
      fat: number;
    };
    is_on_track: boolean;
  };
}

export interface DailySummaryTransformed {
  date: string;
  summary: {
    totalCalories: number | null;
    totalProtein: number | null;
    totalCarbs: number | null;
    totalFat: number | null;
    mealCount: number;
    avgMealCalories: number | null;
    mealTypes: string[] | null;
  };
  targets: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  percentages: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  remaining: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  isOnTrack: boolean;
}

export interface ProgressData {
  food: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  targets: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}
