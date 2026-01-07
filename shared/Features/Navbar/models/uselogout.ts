
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { logoutApi } from "../lib/login";
import { removeToken } from "@/shared/Lib/auth";

export const useLogout = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      removeToken();             
      router.replace("/Register"); 
    },
  });
};
