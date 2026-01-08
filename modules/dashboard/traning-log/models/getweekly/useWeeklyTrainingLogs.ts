import { useQuery } from "@tanstack/react-query";
import { GetWeeklyTrainingLogsResponse } from "./type";
import { getWeeklyTrainingLogs } from "../../lib/get-week";

export const WEEKLY_TRAINING_LOGS_QUERY_KEY = ["training-logs", "weekly"];

export const useWeeklyTrainingLogs = () => {
  return useQuery<GetWeeklyTrainingLogsResponse>({
    queryKey: WEEKLY_TRAINING_LOGS_QUERY_KEY,
    queryFn: getWeeklyTrainingLogs,
  });
};
