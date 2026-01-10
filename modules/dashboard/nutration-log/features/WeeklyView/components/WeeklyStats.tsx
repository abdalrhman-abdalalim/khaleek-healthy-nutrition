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
        return <TrendingUp className="w-5 h-5 text-green-500" />;
      case "declining":
        return <TrendingDown className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
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
    if (percentage >= 90) return "text-green-500";
    if (percentage >= 70) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Adherence Score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
        className="bg-linear-to-br from-background to-[#1a4a4d] rounded-xl p-5 shadow-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-white/10 rounded-lg">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <span
              className={`text-3xl font-bold ${getAdherenceColor(adherence)}`}
            >
              {adherence}%
            </span>
            <p className="text-white/80 text-sm mt-1">معدل الالتزام</p>
          </div>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div
            className="h-2 rounded-full bg-linear-to-r from-foreground to-[#ffc49c]"
            style={{ width: `${Math.min(adherence, 100)}%` }}
          ></div>
        </div>
        <div className="flex items-center justify-between text-xs text-white/60 mt-2">
          <span>0%</span>
          <span>الهدف: 100%</span>
        </div>
      </motion.div>

      {/* Days Logged */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-linear-to-br from-foreground to-[#ffc49c] rounded-xl p-5 shadow-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-white/20 rounded-lg">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-white">
              {summary.days_logged}/7
            </span>
            <p className="text-white/80 text-sm mt-1">أيام مسجلة</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="w-4 h-4 text-white" />
          <span className="text-sm text-white/90">
            {Math.round((summary.days_logged / 7) * 100)}% من الأسبوع
          </span>
        </div>
      </motion.div>

      {/* Total Meals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-linear-to-br from-blue-500 to-blue-600 rounded-xl p-5 shadow-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-white/20 rounded-lg">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-white">
              {summary.totals.total_meals}
            </span>
            <p className="text-white/80 text-sm mt-1">إجمالي الوجبات</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-white/90">
            متوسط{" "}
            {Math.round(
              summary.totals.total_meals / Math.max(summary.days_logged, 1)
            )}{" "}
            وجبة/يوم
          </span>
        </div>
      </motion.div>

      {/* Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-linear-to-br from-purple-500 to-purple-600 rounded-xl p-5 shadow-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-white/20 rounded-lg">{getTrendIcon()}</div>
          <div className="text-right">
            <span className="text-2xl font-bold text-white">
              {getTrendText()}
            </span>
            <p className="text-white/80 text-sm mt-1">مؤشر الأداء</p>
          </div>
        </div>
        {trends.volatility > 0 && (
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-white/90">
              تقلب: {trends.volatility.toFixed(1)}%
            </span>
          </div>
        )}
      </motion.div>

      {/* Macros Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="md:col-span-2 lg:col-span-4 bg-white dark:bg-gray-800 rounded-xl p-5 shadow border border-gray-200 dark:border-gray-700"
      >
        <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">
          ملخص الماكروز الأسبوعي
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Calories */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-foreground/10 rounded-lg">
                  <Flame className="w-4 h-4 text-foreground" />
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  السعرات
                </span>
              </div>
              <span className="font-bold text-gray-800 dark:text-white">
                {Math.round(parseFloat(summary.totals.total_calories))}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-foreground"
                style={{ width: `${Math.min(caloriesPercentage, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>0 سعرة</span>
              <span>{targets.weekly.calories.toLocaleString()} سعرة</span>
            </div>
          </div>

          {/* Protein */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Beef className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  البروتين
                </span>
              </div>
              <span className="font-bold text-gray-800 dark:text-white">
                {Math.round(parseFloat(summary.totals.total_protein))}g
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-blue-500"
                style={{ width: `${Math.min(proteinPercentage, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>0g</span>
              <span>{targets.weekly.protein}g</span>
            </div>
          </div>

          {/* Carbs */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Wheat className="w-4 h-4 text-green-500 dark:text-green-400" />
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  الكربوهيدرات
                </span>
              </div>
              <span className="font-bold text-gray-800 dark:text-white">
                {Math.round(parseFloat(summary.totals.total_carbs))}g
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-green-500"
                style={{ width: `${Math.min(carbsPercentage, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>0g</span>
              <span>{targets.weekly.carbs}g</span>
            </div>
          </div>

          {/* Fat */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <Droplets className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  الدهون
                </span>
              </div>
              <span className="font-bold text-gray-800 dark:text-white">
                {Math.round(parseFloat(summary.totals.total_fat))}g
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-orange-500"
                style={{ width: `${Math.min(fatPercentage, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>0g</span>
              <span>{targets.weekly.fat}g</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WeeklyStats;
