import { authModel } from "@/shared/Lib/auth";
import { LoginResponse } from "./type";

export const loginModel = {
  handleLoginSuccess(response: LoginResponse) {
    const token = response.data.access_token;
    authModel.setToken(token);
  },
};
