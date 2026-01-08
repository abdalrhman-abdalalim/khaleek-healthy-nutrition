import api from "@/shared/Lib/axios";
import { GetTrainingLogsResponse } from "../models/getall/type";


export const getTrainingLogs = async (): Promise<GetTrainingLogsResponse> => {
  const { data } = await api.get<GetTrainingLogsResponse>(
    "/training-logs"
  );
  return data;
};
