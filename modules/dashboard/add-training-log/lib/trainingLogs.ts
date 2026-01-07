import api from "@/shared/Lib/axios";
import { CreateTrainingLogPayload, CreateTrainingLogResponse } from "../models/type";


export const createTrainingLog = async (
  payload: CreateTrainingLogPayload
): Promise<CreateTrainingLogResponse> => {

  const finalPayload =
    payload.activity_type === "cardio"
      ? payload
      : { ...payload, distance: undefined };

  const { data } = await api.post<CreateTrainingLogResponse>(
    "/training-logs",
    finalPayload
  );

  return data;
};
