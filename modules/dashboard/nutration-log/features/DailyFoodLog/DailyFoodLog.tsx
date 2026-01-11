import { motion } from "framer-motion";
import { TodayProgressTransformed } from "@/modules/dashboard/MainDashboard/models/TodayProgressData";
import FoodLogTextInput from "../FoodLogTextInput/FoodLogInput";
import CircularProgress from "./components/CircularProgress";

interface IProps {
  isLoading: boolean;
  progressData: TodayProgressTransformed | null;
  caloriesProgress: number;
  proteinProgress: number;
  carbsProgress: number;
  fatProgress: number;
}

const DailyFoodLog = ({
  isLoading,
  progressData,
  carbsProgress,
  fatProgress,
  proteinProgress,
  caloriesProgress,
}: IProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Add New Food Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="bg-gradient-to-br from-secondary/20 to-foreground/10 border-2 border-foreground/30 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow"
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="p-3 bg-gradient-to-br from-foreground/30 to-secondary/20 rounded-xl border border-foreground/20"
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
          </motion.div>

          <div>
            <motion.h2
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-2xl md:text-3xl font-bold text-textcolor"
            >
              إضافة طعام جديد
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-textcolor/70 text-sm mt-1 font-medium"
            >
              سجل وجباتك اليومية بسهولة
            </motion.p>
          </div>
        </div>

        {/* Food Log Input */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <FoodLogTextInput />
        </motion.div>
      </motion.div>

      {/* Today's Progress Section */}
      {!isLoading && progressData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-4"
        >
          {/* Progress Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="flex items-center gap-3 px-2"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-gradient-to-r from-foreground to-secondary"
            />
            <h3 className="text-xl font-bold text-textcolor">تقدم اليوم</h3>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
              className="w-1 h-1 rounded-full bg-gradient-to-r from-secondary to-foreground"
            />
          </motion.div>

          {/* Progress Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-4"
          >
            {/* Calories Progress */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <CircularProgress
                percentage={caloriesProgress}
                label="السعرات"
                value={progressData.food.calories}
                target={progressData.targets.calories}
                unit="سعرة"
                color="from-foreground to-secondary"
              />
            </motion.div>

            {/* Protein Progress */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <CircularProgress
                percentage={proteinProgress}
                label="البروتين"
                value={progressData.food.protein}
                target={progressData.targets.protein}
                unit="g"
                color="from-secondary to-foreground"
              />
            </motion.div>

            {/* Carbs Progress */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <CircularProgress
                percentage={carbsProgress}
                label="الكربوهيدرات"
                value={progressData.food.carbs}
                target={progressData.targets.carbs}
                unit="g"
                color="from-foreground to-secondary"
              />
            </motion.div>

            {/* Fat Progress */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <CircularProgress
                percentage={fatProgress}
                label="الدهون"
                value={progressData.food.fat}
                target={progressData.targets.fat}
                unit="g"
                color="from-secondary to-foreground"
              />
            </motion.div>
          </motion.div>

          {/* Progress Summary Footer */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex items-center justify-between px-2 py-4 rounded-xl bg-background/40 border border-foreground/20"
          >
            <div className="text-sm text-textcolor/70 font-medium">
              إجمالي السعرات المستهلكة
            </div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2"
            >
              <span className="text-2xl font-bold text-foreground">
                {Math.round(progressData.food.calories)}
              </span>
              <span className="text-textcolor/60 font-medium">
                / {progressData.targets.calories}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Loading State */}
      {isLoading && (
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
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
  );
};

export default DailyFoodLog;
