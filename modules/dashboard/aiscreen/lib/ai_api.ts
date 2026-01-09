import api from "@/shared/Lib/axios";
import { WeeklyAIRecommendationResponse } from "../models/type";

export const getWeeklyAIRecommendation = async () => {
  const { data } = await api.get<WeeklyAIRecommendationResponse>(
    "/ai-recommendations/weekly"
  );
  return data;
};