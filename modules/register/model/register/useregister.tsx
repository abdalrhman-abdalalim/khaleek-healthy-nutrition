import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../../lib/Register/register_api";
import { registerModel } from "../../lib/Register/register_model";


export const useRegister = () => {
  return useMutation({
    mutationFn: registerApi,

    onSuccess: (response) => {
      registerModel.handleRegisterSuccess(response);
    },

    onError: (error: any) => {
      console.error(
        "Register error:",
        error?.response?.data || error.message
      );
    },
  });
};
