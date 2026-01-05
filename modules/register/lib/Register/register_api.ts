import api from "@/lib/axios";
import { RegisterRequest, RegisterResponse } from "./type";


export const registerApi = async (
  payload: RegisterRequest
): Promise<RegisterResponse> => {
  const { data } = await api.post<RegisterResponse>(
    "/auth/register",
    payload
  );

  return data;
};
