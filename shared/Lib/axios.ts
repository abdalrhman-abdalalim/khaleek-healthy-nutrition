import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

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
      const { status, data } = error.response;

      // Handle 401 Unauthorized - Session expired
      if (status === 401) {
        // Show Arabic toast message
        toast.error("انتهت صلاحية الجلسة، يرجى تسجيل الدخول مرة أخرى", {
          duration: 5000,
        });

        Cookies.remove("token");

        setTimeout(() => {
          if (typeof window !== "undefined") {
            window.location.href = "/Register"; // or your login route
          }
        }, 2000);
      }

      console.error("API Error:", data);
    } else if (error.request) {
      console.error("No response from server");
    } else {
      console.error("Axios Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
