// models/useFoodLogs.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@/shared/Lib/axios";

export interface FoodLog {
  id: string;
  raw_input: string;
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    macros_percentage: {
      protein: number;
      carbs: number;
      fat: number;
    };
  };
  source: string;
  meal_type: string | null;
  food_time: string | null;
  is_cached: boolean;
  logged_at: string;
  created_at: string;
}

interface FoodLogsResponse {
  success: boolean;
  message: string;
  data: FoodLog[];
}

export const useFoodLogs = () => {
  return useQuery<FoodLogsResponse>({
    queryKey: ["food-logs"],
    queryFn: async () => {
      const response = await api.get<FoodLogsResponse>("/food-logs");
      return response.data;
    },
  });
};
