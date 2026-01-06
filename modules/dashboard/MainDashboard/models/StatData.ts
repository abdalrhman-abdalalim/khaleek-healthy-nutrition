// app/dashboard/hooks/useStatData.ts
import { useUserStats } from "../lib/api_user_stats";
import { StatsData } from "./types";

export function useStatData() {
  const { data, isError, isLoading, error } = useUserStats();

  const statDat: StatsData | null = data?.data
    ? {
        food: {
          total_logs: data.data.food.total_logs,
          total_calories: parseFloat(data.data.food.total_calories),
          avg_daily_calories: parseFloat(data.data.food.avg_daily_calories),
          last_log_date: (data.data.food.last_log_date),
        },
        training: {
          total_sessions: data.data.training.total_sessions,
          total_minutes: data.data.training.total_minutes || 0,
          total_calories_burned: data.data.training.total_calories_burned || 0,
          last_session_date: data.data.training.last_session_date,
        },
        ai: {
          total_recommendations: data.data.ai.total_recommendations,
          avg_adherence_score: data.data.ai.avg_adherence_score || 0,
          helpful_count: data.data.ai.helpful_count || 0,
        },
        profile_completion: data.data.profile_completion,
        days_active: data.data.days_active,
      }
    : null;

  return {
    data: statDat,
    isError,
    isLoading,
    error,
    rawData: data,
  };
}
