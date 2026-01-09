export interface WeeklyPeriod {
  start: string;
  end: string;
  type: "weekly";
  label: string;
}

export interface WeeklyRecommendations {
  nutrition: string[];
  training: string[];
  goals: string[];
}

export interface MealSuggestions {
  breakfast: string;
  lunch: string;
  dinner: string;
  snacks: string[];
}

export interface WeeklyAIRecommendation {
  id: string;
  period: WeeklyPeriod;
  summary: string;
  recommendations: WeeklyRecommendations;
  meal_suggestions: MealSuggestions;
  training_suggestions: string[] | null;
  nutrition_analysis: string | null;
  adherence_score: number;
  overall_rating: number | null;
  improvement_areas: string[] | null;
  ai_model: string;
  is_active: boolean;
  is_helpful: boolean | null;
  user_feedback: string | null;
  viewed_at: string | null;
  is_fallback: boolean;
  created_at: string;
  updated_at: string;
}

export interface WeeklyAIRecommendationResponse {
  success: boolean;
  message: string;
  data: WeeklyAIRecommendation;
}
