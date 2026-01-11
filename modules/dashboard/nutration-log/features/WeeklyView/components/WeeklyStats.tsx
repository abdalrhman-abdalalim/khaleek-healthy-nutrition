// features/WeeklyView/components/WeeklyStats.tsx
"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Target,
  Calendar,
  CheckCircle,
  AlertCircle,
  Flame,
  Beef,
  Wheat,
  Droplets,
} from "lucide-react";

interface WeeklyStatsProps {
  summary: {
    totals: {
      total_calories: string;
      total_protein: string;
      total_carbs: string;
      total_fat: string;
      total_meals: number;
    };
    averages: {
      daily_calories: number;
      daily_protein: number;
      daily_carbs: number;
      daily_fat: number;
    };
    days_logged: number;
  };
  targets: {
    weekly: {
      calories: number;
      protein: number;
      carbs: number;
      fat: number;
    };
  };
  adherence: number;
  trends: {
    trend: string;
    volatility: number;
  };
}

const WeeklyStats = ({
  summary,
  targets,
  adherence,
  trends,
}: WeeklyStatsProps) => {
  const calculatePercentage = (consumed: string, target: number) => {
    const consumedNum = parseFloat(consumed);
    if (target === 0) return 0;
    return (consumedNum / target) * 100;
  };

  const caloriesPercentage = calculatePercentage(
    summary.totals.total_calories,
    targets.weekly.calories
  );
  const proteinPercentage = calculatePercentage(
    summary.totals.total_protein,
    targets.weekly.protein
  );
  const carbsPercentage = calculatePercentage(
    summary.totals.total_carbs,
    targets.weekly.carbs
  );
  const fatPercentage = calculatePercentage(
    summary.totals.total_fat,
    targets.weekly.fat
  );

  const getTrendIcon = () => {
    switch (trends.trend) {
      case "improving":
        return <TrendingUp className="w-5 h-5 text-foreground" />;
      case "declining":
        return <TrendingDown className="w-5 h-5 text-foreground" />;
      default:
        return <AlertCircle className="w-5 h-5 text-secondary" />;
    }
  };

  const getTrendText = () => {
    switch (trends.trend) {
      case "improving":
        return "تحسن في الأداء";
      case "declining":
        return "انخفاض في الأداء";
      case "stable":
        return "مستقر";
      default:
        return "بيانات غير كافية";
    }
  };

  const getAdherenceColor = (percentage: number) => {
    if (percentage >= 90) return "text-foreground";
    if (percentage >= 70) return "text-secondary";
    return "text-foreground";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Adherence Score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.5 }}
        whileHover={{ scale: 1.02, y: -4 }}
        className="bg-gradient-to-br from-background to-background/80 rounded-2xl p-6 shadow-lg border-2 border-foreground/30 hover:shadow-xl transition-shadow"
      >
        <div className="flex items-center justify-between mb-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="p-3 bg-foreground/20 rounded-lg"
          >
            <Target className="w-6 h-6 text-foreground" />
          </motion.div>
          <div className="text-right">
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`text-3xl font-bold ${getAdherenceColor(adherence)}`}
            >
              {adherence}%
            </motion.span>
            <p className="text-textcolor/70 text-sm mt-1 font-medium">
              معدل الالتزام
            </p>
          </div>
        </div>
        <div className="w-full bg-background/60 rounded-full h-2.5 overflow-hidden border border-foreground/20">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(adherence, 100)}%` }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-full rounded-full bg-gradient-to-r from-foreground to-secondary"
          />
        </div>
        <div className="flex items-center justify-between text-xs text-textcolor/60 mt-3 font-medium">
          <span>0%</span>
          <span>الهدف: 100%</span>
        </div>
      </motion.div>

      {/* Days Logged */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        whileHover={{ scale: 1.02, y: -4 }}
        className="bg-gradient-to-br from-foreground to-foreground/80 rounded-2xl p-6 shadow-lg border-2 border-foreground/40 hover:shadow-xl transition-shadow"
      >
        <div className="flex items-center justify-between mb-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -10 }}
            className="p-3 bg-textcolor/20 rounded-lg"
          >
            <Calendar className="w-6 h-6 text-textcolor" />
          </motion.div>
          <div className="text-right">
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
              className="text-3xl font-bold text-textcolor"
            >
              {summary.days_logged}/7
            </motion.span>
            <p className="text-textcolor/80 text-sm mt-1 font-medium">
              أيام مسجلة
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 mt-2"
        >
          <CheckCircle className="w-4 h-4 text-textcolor" />
          <span className="text-sm text-textcolor/90 font-medium">
            {Math.round((summary.days_logged / 7) * 100)}% من الأسبوع
          </span>
        </motion.div>
      </motion.div>

      {/* Total Meals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ scale: 1.02, y: -4 }}
        className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-6 shadow-lg border-2 border-secondary/40 hover:shadow-xl transition-shadow"
      >
        <div className="flex items-center justify-between mb-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="p-3 bg-background/40 rounded-lg"
          >
            <CheckCircle className="w-6 h-6 text-background" />
          </motion.div>
          <div className="text-right">
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              className="text-3xl font-bold text-background"
            >
              {summary.totals.total_meals}
            </motion.span>
            <p className="text-background/80 text-sm mt-1 font-medium">
              إجمالي الوجبات
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 mt-2"
        >
          <span className="text-sm text-background/90 font-medium">
            متوسط{" "}
            {Math.round(
              summary.totals.total_meals / Math.max(summary.days_logged, 1)
            )}{" "}
            وجبة/يوم
          </span>
        </motion.div>
      </motion.div>

      {/* Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        whileHover={{ scale: 1.02, y: -4 }}
        className="bg-gradient-to-br from-foreground/90 to-secondary/80 rounded-2xl p-6 shadow-lg border-2 border-foreground/40 hover:shadow-xl transition-shadow"
      >
        <div className="flex items-center justify-between mb-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="p-3 bg-textcolor/20 rounded-lg"
          >
            {getTrendIcon()}
          </motion.div>
          <div className="text-right">
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="text-2xl font-bold text-textcolor"
            >
              {getTrendText()}
            </motion.span>
            <p className="text-textcolor/80 text-sm mt-1 font-medium">
              مؤشر الأداء
            </p>
          </div>
        </div>
        {trends.volatility > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 mt-2"
          >
            <span className="text-sm text-textcolor/90 font-medium">
              تقلب: {trends.volatility.toFixed(1)}%
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* Macros Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="md:col-span-2 lg:col-span-4 bg-gradient-to-br from-secondary/20 to-foreground/10 rounded-2xl p-6 shadow-lg border-2 border-foreground/30"
      >
        <motion.h3
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="font-bold text-lg text-textcolor mb-6"
        >
          ملخص الماكروز الأسبوعي
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Calories */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-3 p-4 rounded-xl bg-background/40 border border-foreground/30 hover:bg-background/60 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-foreground/30 rounded-lg"
                >
                  <Flame className="w-4 h-4 text-foreground" />
                </motion.div>
                <span className="font-bold text-textcolor/80">السعرات</span>
              </div>
              <span className="font-bold text-textcolor">
                {Math.round(parseFloat(summary.totals.total_calories))}
              </span>
            </div>
            <div className="w-full bg-background/60 rounded-full h-2.5 overflow-hidden border border-foreground/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${Math.min(caloriesPercentage, 100)}%`,
                }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="h-full rounded-full bg-foreground"
              />
            </div>
            <div className="flex justify-between text-xs text-textcolor/60 font-medium">
              <span>0 سعرة</span>
              <span>{targets.weekly.calories.toLocaleString()} سعرة</span>
            </div>
          </motion.div>

          {/* Protein */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 }}
            className="space-y-3 p-4 rounded-xl bg-background/40 border border-secondary/30 hover:bg-background/60 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-secondary/30 rounded-lg"
                >
                  <Beef className="w-4 h-4 text-secondary" />
                </motion.div>
                <span className="font-bold text-textcolor/80">البروتين</span>
              </div>
              <span className="font-bold text-textcolor">
                {Math.round(parseFloat(summary.totals.total_protein))}g
              </span>
            </div>
            <div className="w-full bg-background/60 rounded-full h-2.5 overflow-hidden border border-secondary/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${Math.min(proteinPercentage, 100)}%`,
                }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="h-full rounded-full bg-secondary"
              />
            </div>
            <div className="flex justify-between text-xs text-textcolor/60 font-medium">
              <span>0g</span>
              <span>{targets.weekly.protein}g</span>
            </div>
          </motion.div>

          {/* Carbs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-3 p-4 rounded-xl bg-background/40 border border-foreground/30 hover:bg-background/60 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-foreground/30 rounded-lg"
                >
                  <Wheat className="w-4 h-4 text-foreground" />
                </motion.div>
                <span className="font-bold text-textcolor/80">الكربوهيدرات</span>
              </div>
              <span className="font-bold text-textcolor">
                {Math.round(parseFloat(summary.totals.total_carbs))}g
              </span>
            </div>
            <div className="w-full bg-background/60 rounded-full h-2.5 overflow-hidden border border-foreground/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${Math.min(carbsPercentage, 100)}%`,
                }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="h-full rounded-full bg-foreground"
              />
            </div>
            <div className="flex justify-between text-xs text-textcolor/60 font-medium">
              <span>0g</span>
              <span>{targets.weekly.carbs}g</span>
            </div>
          </motion.div>

          {/* Fat */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65 }}
            className="space-y-3 p-4 rounded-xl bg-background/40 border border-secondary/30 hover:bg-background/60 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-secondary/30 rounded-lg"
                >
                  <Droplets className="w-4 h-4 text-secondary" />
                </motion.div>
                <span className="font-bold text-textcolor/80">الدهون</span>
              </div>
              <span className="font-bold text-textcolor">
                {Math.round(parseFloat(summary.totals.total_fat))}g
              </span>
            </div>
            <div className="w-full bg-background/60 rounded-full h-2.5 overflow-hidden border border-secondary/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${Math.min(fatPercentage, 100)}%`,
                }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="h-full rounded-full bg-secondary"
              />
            </div>
            <div className="flex justify-between text-xs text-textcolor/60 font-medium">
              <span>0g</span>
              <span>{targets.weekly.fat}g</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WeeklyStats;
