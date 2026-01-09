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
          className="overflow-hidden"
        >
          <div className="p-5 bg-linear-to-r from-red-50/80 to-red-100/80 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800 rounded-2xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-linear-to-br from-red-500 to-red-600 rounded-xl shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-red-800 dark:text-red-300">
                  يحتاج التحليل إلى تعديل
                </h4>
                <p className="text-sm text-red-700 dark:text-red-400 mt-1">
                  نرجو التأكد من كتابة الوصف بشكل واضح مع الكميات
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ErrorDisplay;
