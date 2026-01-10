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
    return date;
  };

  const getDayColor = (calories: number, target: number) => {
    if (calories === 0) return "border-gray-300 dark:border-gray-700";
    if (calories < target * 0.8) return "border-[#F9B487]";
    if (calories < target) return "border-blue-500";
    if (calories < target * 1.2) return "border-green-500";
    return "border-red-500";
  };

  const getCompletionIcon = (meals: number) => {
    if (meals >= 3) return "✅";
    if (meals >= 1) return "🟡";
    return "⚫";
  };

  return (
    <div className="bg-secondary/10 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-linear-to-r from-foreground/10 to-foreground/5 rounded-lg">
          <Calendar className="w-5 h-5 text-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            تفصيل الأيام
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            نظرة مفصلة على كل يوم من الأسبوع
          </p>
        </div>
      </div>

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
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-xl border-l-4 ${getDayColor(
                calories,
                dailyTarget.calories
              )} bg-linear-to-r from-background/40 to-background/90 shadow-sm`}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {formatDate(day.log_date).toString()}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {getCompletionIcon(day.daily_meals)}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {day.daily_meals} وجبة
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Flame className="w-4 h-4 text-foreground" />
                      <span className="font-bold text-gray-800 dark:text-white">
                        {Math.round(calories)}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        سعرة
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {((calories / dailyTarget.calories) * 100).toFixed(0)}% من
                      الهدف
                    </div>
                  </div>
                </div>
              </div>

              {/* Macros Mini Bars */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Beef className="w-3 h-3 text-blue-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        بروتين
                      </span>
                    </div>
                    <span className="text-xs font-medium text-gray-800 dark:text-white">
                      {Math.round(protein)}g
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                    <div
                      className="h-1 rounded-full bg-blue-500"
                      style={{
                        width: `${Math.min(
                          (protein / dailyTarget.protein) * 100,
                          100
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Wheat className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        كارب
                      </span>
                    </div>
                    <span className="text-xs font-medium text-gray-800 dark:text-white">
                      {Math.round(carbs)}g
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                    <div
                      className="h-1 rounded-full bg-green-500"
                      style={{
                        width: `${Math.min(
                          (carbs / dailyTarget.carbs) * 100,
                          100
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Droplets className="w-3 h-3 text-orange-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        دهون
                      </span>
                    </div>
                    <span className="text-xs font-medium text-gray-800 dark:text-white">
                      {Math.round(fat)}g
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                    <div
                      className="h-1 rounded-full bg-orange-500"
                      style={{
                        width: `${Math.min(
                          (fat / dailyTarget.fat) * 100,
                          100
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Empty days */}
        {7 - dailyData.length > 0 && (
          <div className="p-4 rounded-xl border border-dashed border-foreground bg-background/50">
            <div className="text-center">
              <div className="text-2xl mb-2">📅</div>
              <p className="text-gray-600 dark:text-gray-400">
                {7 - dailyData.length} أيام بدون تسجيلات
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                أضف سجلات طعام لتتبع تقدمك في هذه الأيام
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyBreakdown;
