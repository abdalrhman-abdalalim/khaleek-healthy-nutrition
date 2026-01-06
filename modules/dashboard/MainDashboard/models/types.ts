export interface StatsData {
  food: {
    total_logs: number;
    total_calories: number;
    avg_daily_calories: number;
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
}
