import { UpdateProfilePayload } from "../../models/type";

export const DIET_TYPE_LABELS: Record<string, string> = {
  balanced: "متوازن",
  keto: "كيتو",
  vegetarian: "نباتي",
  vegan: "نباتي صرف",
  mediterranean: "البحر المتوسط",
};
export const BUDGET_LEVEL_LABELS: Record<string, string> = {
  low: "محدود",
  medium: "متوسط",
  high: "مرتفع",
};
export const ACTIVITY_LEVEL_LABELS: Record<string, string> = {
  sedentary: "قليل الحركة",
  light: "نشاط خفيف",
  moderate: "نشاط متوسط",
  active: "نشط",
  very_active: "نشط جداً",
};
export const GOAL_LABELS: Record<string, string> = {
  lose_weight: "فقدان الوزن",
  maintain: "الحفاظ على الوزن",
  gain_weight: "زيادة الوزن",
  build_muscle: "بناء العضلات",
};
export const NOTIFICATION_FREQUENCY_LABELS: Record<string, string> = {
  never: "أبداً",
  daily: "يومي",
  weekly: "أسبوعي",
};
export const GENDER_LABELS: Record<string, string> = {
  male: "ذكر",
  female: "أنثى",
};


export const VALID_ACTIVITY_LEVELS: UpdateProfilePayload['activity_level'][] = [
  "sedentary",
  "light",
  "moderate",
  "active",
  "very_active",
];

export const VALID_GOALS: UpdateProfilePayload['goal'][] = [
  "lose_weight",
  "maintain",
  "gain_weight",
  "build_muscle",
];

export const VALID_DIET_TYPES: UpdateProfilePayload['diet_type'][] = [
  "balanced",
  "keto",
  "vegetarian",
  "vegan",
  "mediterranean",
];

export const VALID_BUDGET_LEVELS: UpdateProfilePayload['budget_level'][] = [
  "low",
  "medium",
  "high",
];

export const VALID_NOTIFICATION_FREQUENCIES: UpdateProfilePayload['notification_frequency'][] = [
  "never",
  "daily",
  "weekly",
];
