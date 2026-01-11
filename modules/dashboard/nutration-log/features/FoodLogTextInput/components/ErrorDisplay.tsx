import { AnimatePresence, motion } from "framer-motion";

interface IProps {
  parseError: Error | null;
}

const ErrorDisplay = ({ parseError }: IProps) => {
  return (
    <AnimatePresence>
      {parseError && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: -10 }}
            className="p-5 bg-linear-to-r from-foreground/20 to-secondary/10 border-2 border-foreground/40 rounded-2xl backdrop-blur-sm shadow-lg"
          >
            <div className="flex items-start gap-4">
              {/* Icon Container */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-3 bg-linear-to-br from-foreground to-secondary rounded-xl shadow-lg flex-shrink-0"
              >
                <svg
                  className="w-6 h-6 text-textcolor"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex-1"
              >
                <h4 className="font-bold text-foreground text-lg">
                  يحتاج التحليل إلى تعديل
                </h4>
                <p className="text-sm text-textcolor/70 mt-2 leading-relaxed">
                  نرجو التأكد من كتابة الوصف بشكل واضح مع الكميات
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-3 p-3 bg-background/50 rounded-lg border border-foreground/20"
                >
                  <p className="text-xs text-textcolor/60 font-medium">
                    💡 مثال: "تناولت 2 بيضة مسلوقة مع خبز أسمر وكوب حليب"
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-foreground/40"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorDisplay;
