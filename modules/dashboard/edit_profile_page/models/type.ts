export interface UpdateProfilePayload {
  age: number;
  gender: "male" | "female";
  height: number;
  weight: number;
  target_weight: number;
  activity_level: "sedentary" | "light" | "moderate" | "active" | "very_active";
  goal: "lose_weight" | "maintain" | "gain_weight" | "build_muscle";
  diet_type: "balanced" | "keto" | "vegetarian" | "vegan" | "mediterranean";
  budget_level: "low" | "medium" | "high";
  voice_enabled: boolean;
  ai_recommendations_enabled: boolean;
  notification_frequency: "never" | "daily" | "weekly";
}

export interface UserProfile {
  age: number;
  gender: "male" | "female";
  height: string;
  weight: string;
  target_weight: string;
  activity_level: string;
  goal: string;
  diet_type: string;
  budget_level: string;
}

export interface DailyTargets {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface UserSettings {
  voice_enabled: boolean;
  ai_recommendations_enabled: boolean;
  notification_frequency: "never" | "daily" | "weekly";
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

export interface UpdateProfileResponse {
  success: boolean;
  message: string;
  data: User;
}
