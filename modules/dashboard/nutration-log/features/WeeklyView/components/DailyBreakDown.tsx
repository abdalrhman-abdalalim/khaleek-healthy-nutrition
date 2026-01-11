// features/WeeklyView/components/DailyBreakdown.tsx
"use client";

import { motion } from "framer-motion";
import { Calendar, Flame, Beef, Wheat, Droplets } from "lucide-react";

interface DailyBreakdownProps {
  dailyData: Array<{
    log_date: string;
    daily_calories: string;
    daily_protein: string;
    daily_carbs: string;
    daily_fat: string;
    daily_meals: number;
  }>;
  dailyTarget: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

const DailyBreakdown = ({ dailyData, dailyTarget }: DailyBreakdownProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-SA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getDayColor = (calories: number, target: number) => {
    if (calories === 0) return "border-foreground/20";
    if (calories < target * 0.8) return "border-foreground";
    if (calories < target) return "border-secondary";
    if (calories < target * 1.2) return "border-foreground";
    return "border-foreground";
  };

  const getDayBgColor = (calories: number, target: number) => {
    if (calories === 0) return "from-background/40 to-background/60";
    if (calories < target * 0.8)
      return "from-foreground/10 to-background/40";
    if (calories < target) return "from-secondary/15 to-background/40";
    if (calories < target * 1.2)
      return "from-foreground/15 to-background/40";
    return "from-foreground/20 to-background/40";
  };

  const getCompletionIcon = (meals: number) => {
    if (meals >= 3) return "✅";
    if (meals >= 1) return "🟡";
    return "⚫";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-secondary/15 to-foreground/10 rounded-2xl p-6 border-2 border-foreground/30 shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="p-3 rounded-lg bg-gradient-to-br from-foreground to-secondary shadow-lg"
        >
          <Calendar className="w-5 h-5 text-textcolor" />
        </motion.div>
        <div>
          <h3 className="text-lg font-bold text-textcolor">تفصيل الأيام</h3>
          <p className="text-sm text-textcolor/70 mt-1">
            نظرة مفصلة على كل يوم من الأسبوع
          </p>
        </div>
      </div>

      {/* Daily Items */}
      <div className="space-y-4">
        {dailyData.map((day, index) => {
          const calories = parseFloat(day.daily_calories);
          const protein = parseFloat(day.daily_protein);
          const carbs = parseFloat(day.daily_carbs);
          const fat = parseFloat(day.daily_fat);

          return (
            <motion.div
              key={day.log_date}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className={`p-4 rounded-xl border-l-4 ${getDayColor(
                calories,
                dailyTarget.calories
              )} bg-gradient-to-r ${getDayBgColor(
                calories,
                dailyTarget.calories
              )} shadow-md hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Day Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <motion.h4
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="font-bold text-textcolor"
                  >
                    {formatDate(day.log_date)}
                  </motion.h4>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg">
                      {getCompletionIcon(day.daily_meals)}
                    </span>
                    <span className="text-sm text-textcolor/70 font-medium">
                      {day.daily_meals} وجبة
                    </span>
                  </div>
                </div>

                {/* Calories Display */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.08 + 0.1 }}
                  className="text-right"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Flame className="w-4 h-4 text-foreground" />
                    </motion.div>
                    <span className="font-bold text-textcolor text-lg">
                      {Math.round(calories)}
                    </span>
                    <span className="text-sm text-textcolor/70">سعرة</span>
                  </div>
                  <div className="text-xs text-textcolor/60 font-medium">
                    {((calories / dailyTarget.calories) * 100).toFixed(0)}% من
                    الهدف
                  </div>
                </motion.div>
              </div>

              {/* Macros Progress Bars */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.08 + 0.2 }}
                className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-foreground/20"
              >
                {/* Protein */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                      >
                        <Beef className="w-3.5 h-3.5 text-foreground" />
                      </motion.div>
                      <span className="text-xs text-textcolor/70 font-medium">
                        بروتين
                      </span>
                    </div>
                    <span className="text-xs font-bold text-textcolor">
                      {Math.round(protein)}g
                    </span>
                  </div>
                  <div className="w-full bg-background/60 rounded-full h-2 overflow-hidden border border-foreground/20">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${Math.min(
                          (protein / dailyTarget.protein) * 100,
                          100
                        )}%`,
                      }}
                      transition={{ delay: index * 0.08 + 0.3, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-foreground to-secondary rounded-full"
                    />
                  </div>
                </div>

                {/* Carbs */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.4,
                        }}
                      >
                        <Wheat className="w-3.5 h-3.5 text-secondary" />
                      </motion.div>
                      <span className="text-xs text-textcolor/70 font-medium">
                        كارب
                      </span>
                    </div>
                    <span className="text-xs font-bold text-textcolor">
                      {Math.round(carbs)}g
                    </span>
                  </div>
                  <div className="w-full bg-background/60 rounded-full h-2 overflow-hidden border border-secondary/20">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${Math.min(
                          (carbs / dailyTarget.carbs) * 100,
                          100
                        )}%`,
                      }}
                      transition={{ delay: index * 0.08 + 0.3, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-secondary to-foreground rounded-full"
                    />
                  </div>
                </div>

                {/* Fat */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.6,
                        }}
                      >
                        <Droplets className="w-3.5 h-3.5 text-foreground" />
                      </motion.div>
                      <span className="text-xs text-textcolor/70 font-medium">
                        دهون
                      </span>
                    </div>
                    <span className="text-xs font-bold text-textcolor">
                      {Math.round(fat)}g
                    </span>
                  </div>
                  <div className="w-full bg-background/60 rounded-full h-2 overflow-hidden border border-foreground/20">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${Math.min(
                          (fat / dailyTarget.fat) * 100,
                          100
                        )}%`,
                      }}
                      transition={{ delay: index * 0.08 + 0.3, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-foreground to-secondary rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Empty Days Message */}
        {7 - dailyData.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: dailyData.length * 0.08 + 0.2 }}
            className="p-6 rounded-xl border-2 border-dashed border-foreground/40 bg-background/50 hover:bg-background/70 transition-colors duration-300"
          >
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl mb-3"
              >
                📅
              </motion.div>
              <p className="text-textcolor/80 font-medium">
                {7 - dailyData.length} أيام بدون تسجيلات
              </p>
              <p className="text-sm text-textcolor/60 mt-2">
                أضف سجلات طعام لتتبع تقدمك في هذه الأيام
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default DailyBreakdown;
