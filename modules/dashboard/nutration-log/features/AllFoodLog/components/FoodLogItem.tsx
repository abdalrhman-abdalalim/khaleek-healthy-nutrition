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
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(249, 180, 135, 0.15)" }}
      className="bg-linear-to-br from-secondary/15 to-foreground/10 rounded-xl p-5 border-2 border-foreground/25 hover:border-foreground/50 transition-all duration-300 group shadow-lg"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.05 + 0.1 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-5"
      >
        {/* Left Side - Title and Meta */}
        <div className="flex-1 w-full">
          <motion.h3
            whileHover={{ scale: 1.02 }}
            className="font-bold text-textcolor text-lg group-hover:text-foreground transition-colors"
          >
            {log.raw_input}
          </motion.h3>

          {/* Meta Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 + 0.15 }}
            className="flex flex-wrap items-center gap-3 mt-2"
          >
            {/* Time */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 text-textcolor/70 text-sm font-medium"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Clock className="w-4 h-4 text-foreground" />
              </motion.div>
              <span>{log.logged_at}</span>
            </motion.div>

            {/* Source Badge */}
            {log.source && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 + 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 text-xs font-semibold bg-linear-to-r from-foreground/20 to-secondary/20 text-foreground rounded-full border border-foreground/30 hover:border-foreground/50 transition-colors"
              >
                {log.source === "manual" ? "🖊️ يدوي" : "⚙️ تلقائي"}
              </motion.span>
            )}
          </motion.div>
        </div>

        {/* Right Side - Calories Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 + 0.15 }}
          whileHover={{ scale: 1.08, rotate: 2 }}
          className="bg-linear-to-br from-foreground/30 to-secondary/20 p-4 rounded-lg border border-foreground/30 shadow-md"
        >
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Flame className="w-5 h-5 text-foreground" />
            </motion.div>
            <div className="flex items-baseline gap-1">
              <span className="font-bold text-xl text-textcolor">
                {Math.round(log.nutrition.calories)}
              </span>
              <span className="text-sm text-textcolor/70 font-medium">
                سعرة
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Nutrition Breakdown Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.05 + 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5"
      >
        {/* Protein Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 + 0.25 }}
          whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(249, 180, 135, 0.2)" }}
          className="bg-linear-to-br from-foreground/15 to-foreground/5 rounded-lg p-4 border border-foreground/25 shadow-md"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                className="p-2 bg-linear-to-br from-foreground/30 to-foreground/10 rounded-lg"
              >
                <Beef className="w-4 h-4 text-foreground" />
              </motion.div>
              <span className="font-bold text-textcolor">البروتين</span>
            </div>
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-bold text-foreground text-lg"
            >
              {Math.round(log.nutrition.protein)}g
            </motion.span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-background/40 rounded-full h-2 overflow-hidden border border-foreground/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${Math.min(log.nutrition.macros_percentage.protein, 100)}%`,
              }}
              transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
              className="h-full rounded-full bg-linear-to-r from-foreground to-secondary shadow-lg"
            />
          </div>

          {/* Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 + 0.35 }}
            className="text-xs text-textcolor/60 mt-2 font-semibold text-right"
          >
            {log.nutrition.macros_percentage.protein.toFixed(1)}%
          </motion.div>
        </motion.div>

        {/* Carbs Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 + 0.3 }}
          whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(217, 233, 207, 0.2)" }}
          className="bg-linear-to-br from-secondary/15 to-secondary/5 rounded-lg p-4 border border-secondary/25 shadow-md"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                className="p-2 bg-linear-to-br from-secondary/30 to-secondary/10 rounded-lg"
              >
                <Wheat className="w-4 h-4 text-secondary" />
              </motion.div>
              <span className="font-bold text-textcolor">الكربوهيدرات</span>
            </div>
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-bold text-secondary text-lg"
            >
              {Math.round(log.nutrition.carbs)}g
            </motion.span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-background/40 rounded-full h-2 overflow-hidden border border-secondary/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${Math.min(log.nutrition.macros_percentage.carbs, 100)}%`,
              }}
              transition={{ delay: index * 0.05 + 0.35, duration: 0.8 }}
              className="h-full rounded-full bg-linear-to-r from-secondary to-foreground shadow-lg"
            />
          </div>

          {/* Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 + 0.4 }}
            className="text-xs text-textcolor/60 mt-2 font-semibold text-right"
          >
            {log.nutrition.macros_percentage.carbs.toFixed(1)}%
          </motion.div>
        </motion.div>

        {/* Fat Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 + 0.35 }}
          whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(249, 180, 135, 0.15)" }}
          className="bg-linear-to-br from-foreground/10 to-foreground/5 rounded-lg p-4 border border-foreground/20 shadow-md"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                className="p-2 bg-linear-to-br from-foreground/20 to-foreground/5 rounded-lg"
              >
                <Droplets className="w-4 h-4 text-foreground" />
              </motion.div>
              <span className="font-bold text-textcolor">الدهون</span>
            </div>
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-bold text-foreground text-lg"
            >
              {Math.round(log.nutrition.fat)}g
            </motion.span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-background/40 rounded-full h-2 overflow-hidden border border-foreground/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${Math.min(log.nutrition.macros_percentage.fat, 100)}%`,
              }}
              transition={{ delay: index * 0.05 + 0.4, duration: 0.8 }}
              className="h-full rounded-full bg-linear-to-r from-foreground to-secondary shadow-lg"
            />
          </div>

          {/* Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 + 0.45 }}
            className="text-xs text-textcolor/60 mt-2 font-semibold text-right"
          >
            {log.nutrition.macros_percentage.fat.toFixed(1)}%
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Macros Summary Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.05 + 0.4 }}
        className="mt-5 pt-4 border-t border-foreground/20"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-sm font-bold text-textcolor/80"
          >
            توزيع الماكروز:
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 + 0.45 }}
            className="flex flex-wrap gap-4"
          >
            {/* Protein Summary */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-foreground/10 border border-foreground/20"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 rounded-full bg-foreground"
              />
              <span className="text-xs font-semibold text-textcolor">
                بروتين{" "}
                <span className="text-foreground">
                  {log.nutrition.macros_percentage.protein.toFixed(0)}%
                </span>
              </span>
            </motion.div>

            {/* Carbs Summary */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/10 border border-secondary/20"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                className="w-2.5 h-2.5 rounded-full bg-secondary"
              />
              <span className="text-xs font-semibold text-textcolor">
                كارب{" "}
                <span className="text-secondary">
                  {log.nutrition.macros_percentage.carbs.toFixed(0)}%
                </span>
              </span>
            </motion.div>

            {/* Fat Summary */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-foreground/10 border border-foreground/20"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                className="w-2.5 h-2.5 rounded-full bg-foreground"
              />
              <span className="text-xs font-semibold text-textcolor">
                دهون{" "}
                <span className="text-foreground">
                  {log.nutrition.macros_percentage.fat.toFixed(0)}%
                </span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FoodLogItem;
