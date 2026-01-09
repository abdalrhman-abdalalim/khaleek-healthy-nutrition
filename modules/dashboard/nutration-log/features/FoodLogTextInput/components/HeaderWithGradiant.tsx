import { motion } from "framer-motion";
import { ChefHat, Sparkles } from "lucide-react";

const HeaderWithGradiant = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl bg-linear-to-r from-background/10 via-background/5 to-transparent p-6 border border-background/20"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-background/5 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-background/5 rounded-full translate-y-12 -translate-x-12"></div>

      <div className="relative z-10 flex items-center gap-4">
        <div className="p-3 rounded-xl bg-linear-to-br from-background to-background/80 shadow-lg">
          <ChefHat className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-textcolor">تسجيل الطعام</h2>
          <p className="text-foreground/70 mt-1">
            سجل وجباتك اليومية بسهولة واحصل على تحليل غذائي فوري
          </p>
        </div>
        <Sparkles className="w-5 h-5 text-amber-500 ml-auto animate-pulse" />
      </div>
    </motion.div>
  );
};
export default HeaderWithGradiant;
