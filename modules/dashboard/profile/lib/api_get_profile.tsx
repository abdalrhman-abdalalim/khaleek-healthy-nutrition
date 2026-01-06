import api from "@/shared/Lib/axios";
import { AuthMeResponse } from "../models/type";


export const getMe = async (): Promise<AuthMeResponse> => {
  const { data } = await api.get<AuthMeResponse>("/auth/me");
  return data;
};
