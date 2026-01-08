import { authModel } from "@/shared/Lib/auth";
import { RegisterResponse } from "./type";

export const registerModel = {
  handleRegisterSuccess(response: RegisterResponse) {
    const { access_token, user } = response.data;

    authModel.setToken(access_token);

    if (typeof window !== "undefined") {
      localStorage.setItem("user_name", user.name);
      localStorage.setItem("user_email", user.email);
    }
  },
};
