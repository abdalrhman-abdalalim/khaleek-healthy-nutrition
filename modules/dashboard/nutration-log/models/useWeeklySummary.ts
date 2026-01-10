// models/useWeeklySummary.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@/shared/Lib/axios";

interface DailyData {
  log_date: string;
  daily_calories: string;
  daily_protein: string;
  daily_carbs: string;
  daily_fat: string;
  daily_meals: number;
}

interface WeeklySummaryResponse {
  success: boolean;
  message: string;
  data: {
    period: {
      start: string;
      end: string;
    };
    summary: {
      daily_data: DailyData[];
      totals: {
        total_calories: string;
        total_protein: string;
        total_carbs: string;
        total_fat: string;
        total_meals: number;
      };
      averages: {
        daily_calories: number;
        daily_protein: number;
        daily_carbs: number;
        daily_fat: number;
      };
      days_logged: number;
    };
    targets: {
      daily: {
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
      };
      weekly: {
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
      };
    };
    adherence: number;
    trends: {
      trend: string;
      volatility: number;
    };
  };
}

export const useWeeklySummary = () => {
  return useQuery<WeeklySummaryResponse>({
    queryKey: ["weekly-summary"],
    queryFn: async () => {
      const response = await api.get<WeeklySummaryResponse>(
        "/food-logs/weekly"
      );
      return response.data;
    },
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
