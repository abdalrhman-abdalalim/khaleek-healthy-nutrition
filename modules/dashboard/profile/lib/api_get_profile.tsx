import api from "@/lib/axios"; 
import { IUser } from "../models/get_profile/type";


export const fetchMe = async (): Promise<IUser> => {
  const { data } = await api.get<IUser>("/auth/me");
  return data;
};
