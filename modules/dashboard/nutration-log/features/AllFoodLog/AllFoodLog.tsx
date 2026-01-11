import { motion } from "framer-motion";
import { Clock, List } from "lucide-react";
import FoodLogsList from "./components/FoodLogsList";
import { FoodLog } from "../../models/useFoodLogs";

interface IProps {
  Foodlength: number | undefined;
  Logs: FoodLog[] | undefined;
  logsLoading: boolean;
  logsError: boolean;
}

const AllFoodLog = ({ Foodlength, Logs, logsLoading, logsError }: IProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* All Food Logs Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="bg-linear-to-br from-secondary/20 to-foreground/10 rounded-2xl p-6 md:p-8 border-2 border-foreground/30 shadow-xl hover:shadow-2xl transition-shadow"
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8"
        >
          {/* Left Side - Title and Description */}
          <div className="flex items-center gap-4 flex-1">
            {/* Icon Container */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="p-3 bg-linear-to-br from-foreground/30 to-secondary/20 rounded-xl border border-foreground/20"
            >
              <List className="w-6 h-6 text-foreground" />
            </motion.div>

            {/* Title and Subtitle */}
            <div>
              <motion.h2
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-2xl md:text-3xl font-bold text-textcolor"
              >
                جميع سجلات الطعام
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-textcolor/70 text-sm mt-1 font-medium"
              >
                عرض وتصفية جميع سجلات الطعام السابقة
              </motion.p>
            </div>
          </div>

          {/* Right Side - Count Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-5 py-3 bg-linear-to-r from-foreground/20 to-secondary/20 rounded-full border-2 border-foreground/40 hover:border-foreground/60 transition-colors shadow-lg"
          >
            <span className="text-foreground font-bold text-base flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Clock className="w-5 h-5" />
              </motion.div>
              <span className="text-textcolor">{Foodlength || 0}</span>
              <span className="text-textcolor/70 font-medium">سجلات</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="h-1 bg-linear-to-r from-transparent via-foreground/30 to-transparent rounded-full mb-6"
        />

        {/* Food Logs List Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <FoodLogsList
            logs={Logs || []}
            isLoading={logsLoading}
            isError={logsError}
          />
        </motion.div>

        {/* Empty State */}
        {!logsLoading && !logsError && (!Logs || Logs.length === 0) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center justify-center py-12 px-4"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-linear-to-br from-foreground/20 to-secondary/20 flex items-center justify-center mb-4"
            >
              <List className="w-8 h-8 text-foreground/60" />
            </motion.div>
            <h3 className="text-lg font-bold text-textcolor mb-2">
              لا توجد سجلات طعام
            </h3>
            <p className="text-textcolor/60 text-center max-w-md">
              ابدأ بإضافة وجباتك الأولى لتتبع نظامك الغذائي بشكل أفضل
            </p>
          </motion.div>
        )}

        {/* Error State */}
        {logsError && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-foreground/10 border-2 border-foreground/30"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-foreground"
            />
            <span className="text-foreground font-medium">
              حدث خطأ في تحميل السجلات. يرجى المحاولة لاحقاً
            </span>
          </motion.div>
        )}

        {/* Loading State */}
        {logsLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center py-12"
          >
            <div className="flex gap-2">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="w-3 h-3 rounded-full bg-foreground"
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
                className="w-3 h-3 rounded-full bg-secondary"
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                className="w-3 h-3 rounded-full bg-foreground"
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default AllFoodLog;
