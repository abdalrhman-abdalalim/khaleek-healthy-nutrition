import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/shared/Lib/utils";
import { User } from "lucide-react";

const LoginButtonSection = () => {
  return (
    <div className="bg-linear-to-r from-background/80 to-background/40 border border-foreground/20 rounded-2xl p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-right">
          <h4 className="text-lg font-semibold text-secondary mb-2">
            جاهز لبدء رحلتك الصحية؟
          </h4>
          <p className="text-sm text-secondary/70">
            انضم إلى آلاف المستخدمين الذين يحققون أهدافهم
          </p>
        </div>
        <button
          className={cn(
            buttonVariants(),
            "bg-linear-to-r from-foreground to-foreground/90 text-secondary hover:from-foreground hover:to-foreground shadow-lg shadow-foreground/20 hover:shadow-foreground/30 px-8 py-6 rounded-xl hover:scale-105 transition-all duration-300 min-w-45"
          )}
          onClick={() => (window.location.href = "/Register")}
        >
          <User className="ml-2 h-5 w-5 text-background" />
          <span className="font-semibold text-background">تسجيل الدخول</span>
        </button>
      </div>
    </div>
  );
};
export default LoginButtonSection;
