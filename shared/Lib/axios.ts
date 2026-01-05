import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "https://khalik-healthy.kerneltech.site/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = Cookies.get("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else if (error.request) {
      console.error("No response from server");
    } else {
      console.error("Axios Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
