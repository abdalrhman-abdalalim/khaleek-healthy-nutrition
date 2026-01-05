export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface UserProfile {
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

export interface DailyTargets {
  calories: number | null;
  protein: number | null;
  carbs: number | null;
  fat: number | null;
}

export interface UserSettings {
  voice_enabled: boolean | null;
  ai_recommendations_enabled: boolean | null;
  notification_frequency: string | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profile: UserProfile;
  daily_targets: DailyTargets;
  settings: UserSettings;
  created_at: string;
  updated_at: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    access_token: string;
    token_type: "bearer";
    expires_in: number;
  };
}
