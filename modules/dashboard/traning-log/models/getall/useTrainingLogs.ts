import { useQuery } from "@tanstack/react-query";
import { getTrainingLogs } from "../../lib/get_all";

export const TRAINING_LOGS_QUERY_KEY = ["training-logs"];

export const useTrainingLogs = () => {
  return useQuery({
    queryKey: TRAINING_LOGS_QUERY_KEY,
    queryFn: getTrainingLogs,
  });
};
