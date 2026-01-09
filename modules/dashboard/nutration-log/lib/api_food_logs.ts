// app/dashboard/lib/api_food_logs.ts
import api from "@/shared/Lib/axios";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FoodLogTextRequest, FoodLogTextResponse, ParsedFoodItem } from "./types";

export const createFoodLogFromText = async (
  data: FoodLogTextRequest
): Promise<FoodLogTextResponse> => {
  const formData = new FormData();
  formData.append("meal_type", data.meal_type);
  formData.append("text", data.text);

  const response = await api.post<FoodLogTextResponse>(
    "/food-logs/text",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export const parseFoodText = async (
  text: string
): Promise<ParsedFoodItem[]> => {
  try {
    const response = await api.post("/food-logs/parse-text", { text });
    return response.data.data || [];
  } catch (error) {
    console.error("Error parsing food text:", error);
    return [];
  }
};

export const useCreateFoodLogFromText = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createFoodLogFromText,
    onSuccess: () => {
      // Invalidate relevant queries to refresh data
      queryClient.invalidateQueries({ queryKey: ["today-progress"] });
      queryClient.invalidateQueries({ queryKey: ["food-logs"] });
      queryClient.invalidateQueries({ queryKey: ["nutrition"] });
    },
    onError: (error) => {
      console.error("Error creating food log:", error);
    },
  });
};

export const useParseFoodText = () => {
  return useMutation({
    mutationFn: parseFoodText,
  });
};
