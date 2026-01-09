import { motion } from "framer-motion";

const ScreenHeader = () => {
  return (
    <div className="text-center mb-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative inline-block"
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
          التغذية اليومية
        </h1>
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-foreground/70 mt-3 text-lg"
      >
        تتبع وادارة نظامك الغذائي بذكاء
      </motion.p>
    </div>
  );
};
export default ScreenHeader;
