import { authModel } from "@/lib/auth";
import { RegisterResponse } from "./type";


export const registerModel = {
  handleRegisterSuccess(response: RegisterResponse) {
    const token = response.data.access_token;
    authModel.setToken(token);
  },
};
