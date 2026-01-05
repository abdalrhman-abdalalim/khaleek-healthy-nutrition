import api from "@/lib/axios";
import { LoginRequest, LoginResponse } from "./type";


export const loginApi = async (
  payload: LoginRequest
): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>(
    "/auth/login",
    payload
  );

  return data;
};
