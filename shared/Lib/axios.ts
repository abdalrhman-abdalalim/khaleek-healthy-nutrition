import axios from "axios";

const api = axios.create({
  baseURL: "http://khalik-healthy.kerneltech.site/",
 headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",

  },
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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
    // "ngrok-skip-browser-warning": "true",