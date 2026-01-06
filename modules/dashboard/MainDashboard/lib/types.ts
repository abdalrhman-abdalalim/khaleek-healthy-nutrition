// app/dashboard/models/types.ts

export interface UserStatsResponse {
  success: boolean;
  message: string;
  data: {
    food: {
      total_logs: number;
      total_calories: string;
      avg_daily_calories: string;
      last_log_date: string;
    };
    training: {
      total_sessions: number;
      total_minutes: number | null;
      total_calories_burned: number | null;
      last_session_date: string | null;
    };
    ai: {
      total_recommendations: number;
      avg_adherence_score: number | null;
      helpful_count: number | null;
    };
    profile_completion: boolean;
    days_active: number;
  };
}
