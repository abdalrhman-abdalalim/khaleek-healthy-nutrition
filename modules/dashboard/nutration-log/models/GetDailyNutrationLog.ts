"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { DailySummaryTransformed, ProgressData } from "../lib/types";
import { getDailySummary, transformToProgressData } from "../lib/get_api_food_logs";

interface UseDailySummaryOptions {
  date?: string;
  enabled?: boolean;
  onSuccess?: (data: DailySummaryTransformed) => void;
  onError?: (error: Error) => void;
}

export function useDailySummary(options: UseDailySummaryOptions = {}) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["daily-summary", options.date],
    queryFn: () => getDailySummary(options.date),
    enabled: options.enabled !== false,
  });

  // Helper to get progress data for components
  const getProgressData = (): ProgressData => {
    if (!query.data) {
      return {
        food: { calories: 0, protein: 0, carbs: 0, fat: 0 },
        targets: { calories: 0, protein: 0, carbs: 0, fat: 0 },
      };
    }
    return transformToProgressData(query.data);
  };

  // Invalidate and refresh function
  const refreshDailySummary = () => {
    queryClient.invalidateQueries({ queryKey: ["daily-summary"] });
  };

  return {
    // Query data
    data: query.data,
    progressData: getProgressData(),

    // Query state
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,

    // Refresh function
    refresh: refreshDailySummary,

    // Query refetch
    refetch: query.refetch,
  };
}
