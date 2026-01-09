import { useQuery } from "@tanstack/react-query";
import { getWeeklyAIRecommendation } from "../lib/ai_api";


export const useWeeklyAIRecommendation = () => {
  return useQuery({
    queryKey: ["ai-recommendations", "weekly"],
    queryFn: getWeeklyAIRecommendation,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
};
