// app/dashboard/lib/api_user_stats.ts
import api from "@/shared/Lib/axios";
import { UserStatsResponse } from "./types";
import { useQuery } from "@tanstack/react-query";

export const getUserStats = async (): Promise<UserStatsResponse> => {
  const { data } = await api.get<UserStatsResponse>("/user/stats");
  return data;
};

export const useUserStats = () => {
  return useQuery({
    queryKey: ["user-stats"],
    queryFn: getUserStats,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
