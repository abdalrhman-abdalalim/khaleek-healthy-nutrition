import { authModel } from "@/shared/Lib/auth";
import { RegisterResponse } from "./type";

export const registerModel = {
  handleRegisterSuccess(response: RegisterResponse) {
    const token = response.data.access_token;
    authModel.setToken(token);
  },
};
