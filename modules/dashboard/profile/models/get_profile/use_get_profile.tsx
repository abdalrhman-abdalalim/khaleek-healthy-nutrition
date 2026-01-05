import { useQuery } from "@tanstack/react-query";
import { IUser } from "./type";
import { fetchMe } from "../../lib/api_get_profile";


export const useAuth = () => {
  return useQuery<IUser, Error>({
    queryKey: ["auth", "me"],
    queryFn: fetchMe,
    staleTime: 1000 * 60 * 5, 
  });
};
