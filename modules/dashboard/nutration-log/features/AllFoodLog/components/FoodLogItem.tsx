// features/AllFoodLogs/FoodLogItem.tsx
"use client";

import { motion } from "framer-motion";
import { Flame, Beef, Wheat, Droplets, Clock } from "lucide-react";

interface FoodLogItemProps {
  log: {
    id: string;
    raw_input: string;
    nutrition: {
      calories: number;
      protein: number;
      carbs: number;
      fat: number;
      macros_percentage: {
        protein: number;
        carbs: number;
        fat: number;
      };
    };
    logged_at: string;
    source: string;
  };
  index: number;
}

const FoodLogItem = ({ log, index }: FoodLogItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-linear-to-br from-background/20 to-secondary/10  rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-foreground dark:hover:border-foreground transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 dark:text-white text-lg group-hover:text-background dark:group-hover:text-foreground transition-colors">
            {log.raw_input}
          </h3>
          <div className="flex items-center gap-4 mt-2 text-sm">
            {/* <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(log.logged_at)}</span>
            </div> */}
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span>{log.logged_at}</span>
            </div>
            {log.source && (
              <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                {log.source === "manual" ? "يدوي" : "تلقائي"}
              </span>
            )}
          </div>
        </div>
        <div className="bg-linear-to-r from-foreground/10 to-foreground/5 p-3 rounded-lg">
          <div className="flex items-center gap-1">
            <Flame className="w-5 h-5 text-foreground" />
            <span className="font-bold text-lg text-background dark:text-white">
              {Math.round(log.nutrition.calories)}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              سعرة
            </span>
          </div>
        </div>
      </div>

      {/* Nutrition Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {/* Protein */}
        <div className="bg-linear-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-900/10 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Beef className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                البروتين
              </span>
            </div>
            <span className="font-bold text-gray-800 dark:text-white">
              {Math.round(log.nutrition.protein)}g
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
            <div
              className="h-1.5 rounded-full bg-blue-500"
              style={{
                width: `${Math.min(
                  log.nutrition.macros_percentage.protein,
                  100
                )}%`,
              }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-left">
            {log.nutrition.macros_percentage.protein.toFixed(1)}%
          </div>
        </div>

        {/* Carbs */}
        <div className="bg-linear-to-r from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-900/10 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Wheat className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                الكربوهيدرات
              </span>
            </div>
            <span className="font-bold text-gray-800 dark:text-white">
              {Math.round(log.nutrition.carbs)}g
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
            <div
              className="h-1.5 rounded-full bg-green-500"
              style={{
                width: `${Math.min(
                  log.nutrition.macros_percentage.carbs,
                  100
                )}%`,
              }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-left">
            {log.nutrition.macros_percentage.carbs.toFixed(1)}%
          </div>
        </div>

        {/* Fat */}
        <div className="bg-linear-to-r from-orange-50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-900/10 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                <Droplets className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                الدهون
              </span>
            </div>
            <span className="font-bold text-gray-800 dark:text-white">
              {Math.round(log.nutrition.fat)}g
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
            <div
              className="h-1.5 rounded-full bg-orange-500"
              style={{
                width: `${Math.min(log.nutrition.macros_percentage.fat, 100)}%`,
              }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-left">
            {log.nutrition.macros_percentage.fat.toFixed(1)}%
          </div>
        </div>
      </div>

      {/* Macros Summary */}
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-600 dark:text-gray-400">
            توزيع الماكروز:
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-gray-700 dark:text-gray-300">
                بروتين {log.nutrition.macros_percentage.protein.toFixed(0)}%
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-gray-700 dark:text-gray-300">
                كارب {log.nutrition.macros_percentage.carbs.toFixed(0)}%
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              <span className="text-gray-700 dark:text-gray-300">
                دهون {log.nutrition.macros_percentage.fat.toFixed(0)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodLogItem;
