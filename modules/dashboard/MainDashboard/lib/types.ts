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

// app/dashboard/lib/types.ts (or create a new one)

export interface TodayFoodStats {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  meal_count: number;
}

export interface TodayTrainingStats {
  calories_burned: number;
  total_minutes: number;
  session_count: number;
}

export interface TodayTargets {
  calories: number | null;
  protein: number | null;
  carbs: number | null;
  fat: number | null;
}

export interface TodayProgressData {
  date: string;
  food: TodayFoodStats;
  training: TodayTrainingStats;
  targets: TodayTargets;
  net_calories: number;
  calorie_surplus_deficit: number;
  progress_percentage: number;
}

export interface TodayProgressResponse {
  success: boolean;
  message: string;
  data: TodayProgressData;
}
