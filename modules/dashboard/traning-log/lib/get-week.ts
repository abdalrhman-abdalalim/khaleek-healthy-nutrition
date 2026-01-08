import api from "@/shared/Lib/axios";
import { GetWeeklyTrainingLogsResponse } from "../models/getweekly/type";

export const getWeeklyTrainingLogs =
  async (): Promise<GetWeeklyTrainingLogsResponse> => {
    const { data } =
      await api.get<GetWeeklyTrainingLogsResponse>(
        "/training-logs/weekly"
      );

    return data;
  };
