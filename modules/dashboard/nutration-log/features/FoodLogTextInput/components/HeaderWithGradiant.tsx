import { motion } from "framer-motion";
import { ChefHat, Sparkles } from "lucide-react";

const HeaderWithGradiant = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl bg-linear-to-r from-foreground/20 via-secondary/20 to-foreground/10 p-6 border-2 border-foreground/30 shadow-lg"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 right-0 w-32 h-32 bg-foreground/20 rounded-full -translate-y-16 translate-x-16 blur-2xl"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full translate-y-12 -translate-x-12 blur-2xl"
      />

      {/* Main Content */}
      <div className="relative z-10 flex items-center gap-4">
        {/* Icon Container */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="p-3 rounded-xl bg-linear-to-br from-foreground to-secondary shadow-lg shrink-0"
        >
          <ChefHat className="w-6 h-6 text-textcolor" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex-1"
        >
          <motion.h2
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-2xl font-bold text-textcolor"
          >
            تسجيل الطعام
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-textcolor/70 mt-1 font-medium"
          >
            سجل وجباتك اليومية بسهولة واحصل على تحليل غذائي فوري
          </motion.p>
        </motion.div>

        {/* Sparkles Icon */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="shrink-0"
        >
          <Sparkles className="w-6 h-6 text-foreground animate-pulse" />
        </motion.div>
      </div>

    </motion.div>
  );
};

export default HeaderWithGradiant;
