// app/dashboard/hooks/useFoodLogsData.ts
"use client";
import {
  useCreateFoodLogFromText,
  useParseFoodText,
} from "../lib/api_food_logs";
import { FoodLogTextRequest } from "../lib/types";

export interface FoodLogTransformed {
  id: string;
  mealType: string;
  text: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  createdAt: Date;
  updatedAt: Date;
  formattedTime?: string;
}

export interface CreateFoodLogOptions {
  onSuccess?: (data: FoodLogTransformed) => void;
  onError?: (error: string) => void;
}

export function useFoodLogsData() {
  const createMutation = useCreateFoodLogFromText();
  const parseMutation = useParseFoodText();

  const createFoodLog = async (
    data: FoodLogTextRequest,
    options?: CreateFoodLogOptions
  ) => {
    try {
      const response = await createMutation.mutateAsync(data);

      if (response.success) {
        const transformedData: FoodLogTransformed = {
          id: response.data.id,
          mealType: response.data.meal_type,
          text: response.data.text,
          calories: response.data.calories,
          protein: response.data.protein,
          carbs: response.data.carbs,
          fat: response.data.fat,
          createdAt: new Date(response.data.created_at),
          updatedAt: new Date(response.data.updated_at),
          formattedTime: formatTime(new Date(response.data.created_at)),
        };

        options?.onSuccess?.(transformedData);
        return { success: true, data: transformedData };
      } else {
        options?.onError?.(response.message);
        return { success: false, error: response.message };
      }
    } catch (error) {
      return { success: false, error: error };
    }
  };

  const parseFoodText = async (text: string) => {
    try {
      const result = await parseMutation.mutateAsync(text);
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error };
    }
  };

  return {
    // Mutations
    createFoodLog,
    parseFoodText,

    // Loading states
    isCreating: createMutation.isPending,
    isParsing: parseMutation.isPending,

    // Errors
    createError: createMutation.error,
    parseError: parseMutation.error,

    // Reset functions
    resetCreate: createMutation.reset,
    resetParse: parseMutation.reset,
  };
}

// Helper function to format time
function formatTime(date: Date): string {
  return date.toLocaleTimeString("ar-EG", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}
