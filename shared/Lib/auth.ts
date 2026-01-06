import Cookies from "js-cookie";

const TOKEN_KEY = "token";

export const authModel = {
  setToken(token: string) {
    Cookies.set(TOKEN_KEY, token, {
      expires: 7,
      secure: true,
      sameSite: "strict",
    });
  },

  getToken() {
    return Cookies.get(TOKEN_KEY);
  },

  clearToken() {
    Cookies.remove(TOKEN_KEY);
  },
};
export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};
export const getToken = () => {
  return Cookies.get("token");
};