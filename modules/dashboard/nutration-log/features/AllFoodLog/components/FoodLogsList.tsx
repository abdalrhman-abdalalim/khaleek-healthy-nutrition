// features/AllFoodLogs/FoodLogsList.tsx
"use client";

import { motion } from "framer-motion";
import { Search, Calendar, Download } from "lucide-react";
import { useState } from "react";
import FoodLogItem from "./FoodLogItem";

interface FoodLog {
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
  source: string;
  meal_type: string | null;
  food_time: string | null;
  is_cached: boolean;
  logged_at: string;
  created_at: string;
}

interface FoodLogsListProps {
  logs: FoodLog[];
  isLoading: boolean;
  isError: boolean;
}

const FoodLogsList = ({ logs, isLoading, isError }: FoodLogsListProps) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const filteredLogs =
    logs?.filter((log) => {
      const matchesSearch = log.raw_input
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesFilter =
        filter === "all" ||
        log.source === filter ||
        (filter === "auto" && log.source !== "manual");

      return matchesSearch && matchesFilter;
    }) || [];

  const totalCalories = filteredLogs.reduce(
    (sum, log) => sum + log.nutrition.calories,
    0
  );
  const totalProtein = filteredLogs.reduce(
    (sum, log) => sum + log.nutrition.protein,
    0
  );
  const totalCarbs = filteredLogs.reduce(
    (sum, log) => sum + log.nutrition.carbs,
    0
  );

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-xl h-32"
          ></div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">❌</div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          حدث خطأ في تحميل البيانات
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          تعذر تحميل سجلات الطعام. يرجى المحاولة مرة أخرى.
        </p>
      </div>
    );
  }

  if (!logs || logs.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">📝</div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          لا توجد سجلات طعام
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          ابدأ بإضافة أول سجل طعام لتتبع تغذيتك
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className="bg-linear-to-r from-background to-[#1a4a4d] dark:from-secondary dark:to-[#e5f2de] rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl">📊</div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white dark:text-background">
                {filteredLogs.length}
              </p>
              <p className="text-sm text-background/80">عدد السجلات</p>
            </div>
          </div>
        </div>
        <div className="bg-linear-to-r from-foreground to-[#ffc49c] rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl">🔥</div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">
                {Math.round(totalCalories)}
              </p>
              <p className="text-sm text-white/80">إجمالي السعرات</p>
            </div>
          </div>
        </div>
        <div className="bg-linear-to-r from-blue-500 to-blue-600 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl">💪</div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">
                {Math.round(totalProtein)}g
              </p>
              <p className="text-sm text-white/80">إجمالي البروتين</p>
            </div>
          </div>
        </div>
        <div className="bg-linear-to-r from-green-500 to-green-600 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl">⚡</div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">
                {Math.round(totalCarbs)}g
              </p>
              <p className="text-sm text-white/80">إجمالي الكاربوهيدرات</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Food Logs List */}
      <div className="space-y-4">
        {filteredLogs.map((log, index) => (
          <FoodLogItem key={log.id} log={log} index={index} />
        ))}
      </div>

      {/* Pagination or Load More */}
      {filteredLogs.length > 0 && (
        <div className="flex justify-center pt-6">
          <button className="px-6 py-2.5 bg-linear-to-r from-foreground to-[#ffc49c] text-background rounded-lg hover:opacity-90 transition-opacity">
            تحميل المزيد
          </button>
        </div>
      )}
    </div>
  );
};

export default FoodLogsList;
