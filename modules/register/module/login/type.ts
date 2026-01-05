export interface LoginRequest {
  email: string;
  password: string;
}

interface UserProfile {
  age: number | null;
  gender: string | null;
  height: number | null;
  weight: number | null;
  target_weight: number | null;
  activity_level: string | null;
  goal: string | null;
  diet_type: string | null;
  budget_level: string | null;
}

interface DailyTargets {
  calories: number | null;
  protein: number | null;
  carbs: number | null;
  fat: number | null;
}

interface UserSettings {
  voice_enabled: boolean;
  ai_recommendations_enabled: boolean;
  notification_frequency: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  profile: UserProfile;
  daily_targets: DailyTargets;
  settings: UserSettings;
  created_at: string;
  updated_at: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    access_token: string;
    token_type: "bearer";
    expires_in: number;
  };
}