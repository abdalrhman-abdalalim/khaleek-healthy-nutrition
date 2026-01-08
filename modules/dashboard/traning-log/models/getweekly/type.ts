import { ActivityType } from "../getall/type";

export interface WeeklyDailyData {
  session_date: string; 
  daily_calories_burned: string;
  daily_duration: string;
  daily_sessions: number;
}

export interface WeeklyTotals {
  total_calories_burned: string;
  total_duration: string;
  total_sessions: number;
  avg_session_duration: string;
}

export interface WeeklyActivityBreakdown {
  activity_type: ActivityType;
  session_count: number;
  total_duration: string;
  total_calories: string;
}

export interface WeeklyTrainingSummary {
  daily_data: WeeklyDailyData[];
  totals: WeeklyTotals;
  activity_breakdown: WeeklyActivityBreakdown[];
  days_trained: number;
}

export interface GetWeeklyTrainingLogsResponse {
  success: boolean;
  message: string;
  data: WeeklyTrainingSummary;
}
