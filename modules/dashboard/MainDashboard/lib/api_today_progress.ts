// app/dashboard/lib/api_today_progress.ts
import api from "@/shared/Lib/axios";
import { TodayProgressResponse } from "./types";
import { useQuery } from "@tanstack/react-query";

export const getTodayProgress = async (): Promise<TodayProgressResponse> => {
  const { data } = await api.get<TodayProgressResponse>("/user/today-progress");
  return data;
};

export const useTodayProgress = () => {
  return useQuery({
    queryKey: ["today-progress"],
    queryFn: getTodayProgress,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: false,
  });
};
