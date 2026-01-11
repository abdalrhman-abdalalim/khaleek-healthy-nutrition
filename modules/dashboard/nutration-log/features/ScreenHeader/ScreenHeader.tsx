import { motion } from "framer-motion";

const ScreenHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="relative inline-block"
      >
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -inset-4 bg-gradient-to-r from-foreground/20 via-secondary/20 to-foreground/20 rounded-2xl blur-xl"
        />

        <motion.h1
          className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-secondary to-foreground bg-clip-text text-transparent"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          التغذية اليومية
        </motion.h1>

        <motion.div
          className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-foreground to-transparent opacity-80 rounded-full"
          animate={{ scaleX: [0.7, 1, 0.7], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 -right-8 w-6 h-1 bg-gradient-to-l from-secondary to-transparent"
          animate={{ x: [0, 4, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 -left-8 w-6 h-1 bg-gradient-to-r from-foreground to-transparent"
          animate={{ x: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-textcolor/75 mt-6 text-lg font-medium tracking-wide"
      >
        تتبع وادارة نظامك الغذائي بذكاء
      </motion.p>

      {/* Stats Line */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex items-center justify-center gap-6 mt-6 flex-wrap"
      >
        {[
          { icon: "📊", label: "تتبع دقيق" },
          { icon: "🎯", label: "أهداف واضحة" },
          { icon: "💪", label: "نتائج مثبتة" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-foreground/15 to-secondary/15 border border-foreground/30 hover:border-foreground/50 transition-colors"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-medium text-textcolor/80">
              {item.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 h-1 bg-gradient-to-r from-transparent via-foreground/40 to-transparent rounded-full"
      />
    </motion.div>
  );
};

export default ScreenHeader;
