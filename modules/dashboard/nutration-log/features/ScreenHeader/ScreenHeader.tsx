import { motion } from "framer-motion";

const ScreenHeader = () => {
  return (
    <div className="text-center mb-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative inline-block"
      >
        <motion.h1 
          className="text-3xl md:text-4xl font-bold bg-linear-to-r from-foreground via-secondary to-foreground bg-clip-text text-transparent"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          التغذية اليومية
        </motion.h1>
        <motion.div 
          className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-transparent via-foreground to-transparent opacity-70"
          animate={{ scaleX: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        ></motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-textcolor/70 mt-3 text-lg font-medium"
      >
        تتبع وادارة نظامك الغذائي بذكاء
      </motion.p>

    
    </div>
  );
};

export default ScreenHeader;
