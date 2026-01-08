export type ActivityType =
  | "cardio"
  | "strength"
  | "flexibility"
  | "sports"
  | "hiit"
  | "other";

export interface TrainingLog {
  id: string;
  activity_name: string;
  activity_type: ActivityType;
  duration: number;
  intensity_level: number;
  intensity_description: string;
  estimated_calories_burned: number;
  calories_per_minute: number;
  reps: number | null;
  sets: number | null;
  weight_used: string | null;
  distance: string | null;
  heart_rate_avg: number | null;
  notes: string | null;
  performed_at: string;
  created_at: string;
}

export interface GetTrainingLogsResponse {
  success: boolean;
  message: string;
  data: TrainingLog[];
}
