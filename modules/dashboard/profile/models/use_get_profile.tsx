
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../lib/api_get_profile";


export const useGetProfile = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    staleTime: 1000 * 60 * 5, 
    retry: false,
  });
};
