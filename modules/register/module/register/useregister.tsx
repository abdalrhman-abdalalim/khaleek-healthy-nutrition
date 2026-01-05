import { useMutation } from "@tanstack/react-query";
import api from "@/lib/axios";
import Cookies from "js-cookie";
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

const TOKEN_KEY = "token";

const setAuthToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, {
    expires: 7,
    secure: true,
    sameSite: "strict",
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: registerApi,

    onSuccess: (response) => {
      const token = response.data.access_token;
      setAuthToken(token);
    },

    onError: (error: any) => {
      console.error(
        " Register error:",
        error?.response?.data || error.message
      );
    },
  });
};
