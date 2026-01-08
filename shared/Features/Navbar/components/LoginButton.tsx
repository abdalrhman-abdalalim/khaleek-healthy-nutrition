import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";

const LoginButton = () => {
  return (
    <Button
          className="bg-linear-to-r from-foreground to-foreground/90 text-secondary hover:from-foreground hover:to-foreground shadow-lg shadow-foreground/20 hover:shadow-foreground/30 px-8 py-6 rounded-xl hover:scale-105 transition-all duration-300 min-w-45"
          onClick={() => (window.location.href = "/Register")}
        >
          <User className="ml-2 h-5 w-5 text-background" />
          <span className="font-semibold text-background">تسجيل الدخول</span>
        </Button>
  );
};
export default LoginButton;