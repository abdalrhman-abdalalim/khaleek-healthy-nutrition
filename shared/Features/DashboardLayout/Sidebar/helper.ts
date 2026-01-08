// helper.ts
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

// Create a separate client-side logout function
export const handleLogoutClient = () => {
  Cookies.remove("token");
  Cookies.remove("refresh_token");
  Cookies.remove("user");

  // Optional: Clear localStorage
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
  }

  // Redirect to home
  window.location.href = "/"; // Use window.location for immediate redirect
};

// Hook version for components
export const useLogout = () => {
  const router = useRouter();

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("refresh_token");
    Cookies.remove("user");

    if (typeof window !== "undefined") {
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
    }

    router.push("/");
  };

  return logout;
};
