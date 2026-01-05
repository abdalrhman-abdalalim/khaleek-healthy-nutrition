import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../lib/Login/login_api";
import { loginModel } from "../../lib/Login/login_model";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginApi,

    onSuccess: (response) => {
      loginModel.handleLoginSuccess(response);
    },

    onError: (error: {
      response: {
        data: {
          message: string;
        };
      };
    }) => {
      console.error("Login error:", error?.response?.data.message);
    },
  });
};
