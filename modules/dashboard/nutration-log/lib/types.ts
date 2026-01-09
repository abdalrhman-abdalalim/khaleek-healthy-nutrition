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
