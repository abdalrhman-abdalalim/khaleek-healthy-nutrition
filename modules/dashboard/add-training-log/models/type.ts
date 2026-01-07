export type ActivityType =
  | "cardio"
  | "strength"
  | "flexibility"
  | "sports"
  | "hiit"
  | "other";

export interface CreateTrainingLogPayload {
  activity_name: string;
  activity_type: ActivityType;
  duration: number;            // minutes
  intensity_level: number;     // 1 - 10
  reps?: number;               // optional (strength)
  sets?: number;               // optional (strength)
  weight_used?: number;        // kg (strength)
  distance?: number;           // ⚠️ only cardio
  heart_rate_avg?: number;     // 40 - 220
  notes?: string;
  performed_at: string;        // "YYYY-MM-DD HH:mm:ss"
}

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
  distance: number | null;
  heart_rate_avg: number | null;
  notes: string | null;
  performed_at: string;
  created_at: string;
}

export interface CreateTrainingLogResponse {
  success: boolean;
  message: string;
  data: TrainingLog;
}
