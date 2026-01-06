import api from "@/shared/Lib/axios"; 
import { UpdateProfilePayload, UpdateProfileResponse } from "../models/type";


export const updateProfile = async (payload: UpdateProfilePayload): Promise<UpdateProfileResponse> => {
  const { data } = await api.put<UpdateProfileResponse>("/user/profile", payload);
  return data;
};
