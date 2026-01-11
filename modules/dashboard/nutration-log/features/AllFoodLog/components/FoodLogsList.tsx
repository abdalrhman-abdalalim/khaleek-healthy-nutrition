"use client";

import { motion } from "framer-motion";
import { Search, Calendar, Download, TrendingUp } from "lucide-react";
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
  const totalFat = filteredLogs.reduce(
    (sum, log) => sum + log.nutrition.fat,
    0
  );

  // Loading State
  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-4"
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-linear-to-r from-foreground/20 to-secondary/20 rounded-xl h-32 border border-foreground/20"
          />
        ))}
      </motion.div>
    );
  }

  if (isError) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-4"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl mb-4"
        >
          ❌
        </motion.div>
        <h3 className="text-2xl font-bold text-textcolor mb-3">
          حدث خطأ في تحميل البيانات
        </h3>
        <p className="text-textcolor/70 font-medium">
          تعذر تحميل سجلات الطعام. يرجى المحاولة مرة أخرى.
        </p>
      </motion.div>
    );
  }

  if (!logs || logs.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 px-4"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl mb-4"
        >
          📝
        </motion.div>
        <h3 className="text-2xl font-bold text-textcolor mb-3">
          لا توجد سجلات طعام
        </h3>
        <p className="text-textcolor/70 font-medium">
          ابدأ بإضافة أول سجل طعام لتتبع تغذيتك
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Stats Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {/* Total Logs Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(249, 180, 135, 0.2)" }}
          className="bg-linear-to-br from-background/50 to-background/20 rounded-xl p-5 border-2 border-foreground/30 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-4xl"
            >
              📊
            </motion.div>
            <div className="text-right">
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl font-bold text-foreground"
              >
                {filteredLogs.length}
              </motion.p>
              <p className="text-sm text-textcolor/70 font-medium">عدد السجلات</p>
            </div>
          </div>
        </motion.div>

        {/* Total Calories Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(249, 180, 135, 0.3)" }}
          className="bg-linear-to-br from-foreground/20 to-secondary/10 rounded-xl p-5 border-2 border-foreground/40 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl"
            >
              🔥
            </motion.div>
            <div className="text-right">
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl font-bold text-foreground"
              >
                {Math.round(totalCalories)}
              </motion.p>
              <p className="text-sm text-textcolor/70 font-medium">إجمالي السعرات</p>
            </div>
          </div>
        </motion.div>

        {/* Total Protein Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(249, 180, 135, 0.2)" }}
          className="bg-linear-to-br from-foreground/15 to-foreground/5 rounded-xl p-5 border-2 border-foreground/30 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl"
            >
              💪
            </motion.div>
            <div className="text-right">
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl font-bold text-foreground"
              >
                {Math.round(totalProtein)}
              </motion.p>
              <p className="text-sm text-textcolor/70 font-medium">بروتين (g)</p>
            </div>
          </div>
        </motion.div>

        {/* Total Carbs Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(217, 233, 207, 0.2)" }}
          className="bg-linear-to-br from-secondary/20 to-secondary/5 rounded-xl p-5 border-2 border-secondary/30 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-4xl"
            >
              ⚡
            </motion.div>
            <div className="text-right">
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl font-bold text-secondary"
              >
                {Math.round(totalCarbs)}
              </motion.p>
              <p className="text-sm text-textcolor/70 font-medium">كاربوهيدرات (g)</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Search and Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="flex flex-col md:flex-row gap-4 items-stretch md:items-center"
      >
        {/* Search Input */}
        <motion.div
          whileFocus={{ scale: 1.02 }}
          className="flex-1 relative"
        >
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/60 pointer-events-none" />
          <input
            type="text"
            placeholder="ابحث عن طعام..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pr-12 pl-4 py-3 rounded-lg bg-background/40 border-2 border-foreground/30 text-textcolor placeholder-textcolor/50 focus:outline-none focus:border-foreground/60 transition-colors font-medium"
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-2"
        >
          {["all", "manual", "auto"].map((filterOption) => (
            <motion.button
              key={filterOption}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(filterOption)}
              className={`px-4 py-2.5 rounded-lg font-semibold transition-all ${
                filter === filterOption
                  ? "bg-linear-to-r from-foreground to-secondary text-background shadow-lg"
                  : "bg-background/40 border-2 border-foreground/30 text-textcolor hover:border-foreground/60"
              }`}
            >
              {filterOption === "all"
                ? "الكل"
                : filterOption === "manual"
                ? "يدوي"
                : "تلقائي"}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Food Logs List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="space-y-4"
      >
        {filteredLogs.map((log, index) => (
          <FoodLogItem key={log.id} log={log} index={index} />
        ))}
      </motion.div>

      {/* Load More Button */}
      {filteredLogs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center pt-6"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 24px rgba(249, 180, 135, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-linear-to-r from-foreground to-secondary text-background rounded-lg font-bold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
          >
            <TrendingUp className="w-5 h-5" />
            تحميل المزيد
          </motion.button>
        </motion.div>
      )}

      {/* Results Summary */}
      {filteredLogs.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="text-center pt-4 border-t border-foreground/20"
        >
          <p className="text-textcolor/70 font-medium">
            عرض{" "}
            <span className="text-foreground font-bold">{filteredLogs.length}</span>{" "}
            من{" "}
            <span className="text-foreground font-bold">{logs.length}</span>{" "}
            سجلات
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FoodLogsList;
