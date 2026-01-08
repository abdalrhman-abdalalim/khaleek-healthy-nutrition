import router from "next/router";
import cockies from "js-cookie";
export const handleLogout = () => {
  cockies.remove("token");
  router.push("/");
};
