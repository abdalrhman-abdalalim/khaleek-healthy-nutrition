import { useMutation } from "@tanstack/react-query";
import api from "@/lib/axios";
import Cookies from "js-cookie";
import { LoginRequest, LoginResponse } from "./type";

const loginApi = async (
  payload: LoginRequest
): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>(
    "/auth/login",
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

export const useLogin = () => {
  return useMutation({
    mutationFn: loginApi,

    onSuccess: (response) => {
      const token = response.data.access_token;
      setAuthToken(token);
    },

    onError: (error: any) => {
      console.error(
        "Login error:",
        error?.response?.data || error.message
      );
    },
  });
};
