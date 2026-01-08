import { authModel } from "@/shared/Lib/auth";
import { LoginResponse } from "./type";

export const loginModel = {
  handleLoginSuccess(response: LoginResponse) {
    const token = response.data.access_token;
    authModel.setToken(token);
    if (typeof window !== "undefined") {
      localStorage.setItem("user_name", response.data.user.name);
      localStorage.setItem("user_email", response.data.user.email);
    }
  },
};
