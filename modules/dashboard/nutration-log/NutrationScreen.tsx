"use client";

import { useEffect, useState } from "react";
import { useTodayProgressData } from "../MainDashboard/models/TodayProgressData";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, List, TrendingUp } from "lucide-react";
import ScreenHeader from "./features/ScreenHeader/ScreenHeader";
import TabsNavigation from "./features/TabsNavigation/TabsNavigation";
import DailyFoodLog from "./features/DailyFoodLog/DailyFoodLog";
import { useFoodLogs } from "./models/useFoodLogs";
import FoodLogsList from "./features/AllFoodLog/components/FoodLogsList";
import AllFoodLog from "./features/AllFoodLog/AllFoodLog";
import { useWeeklySummary } from "./models/useWeeklySummary";
import WeeklyStats from "./features/WeeklyView/components/WeeklyStats";
import WeeklyChart from "./features/WeeklyView/components/WeeklyChart";
import DailyBreakdown from "./features/WeeklyView/components/DailyBreakDown";

export type ViewType = "all" | "daily" | "weekly";

const NutrationScreen = () => {
  const { data: progressData, isLoading } = useTodayProgressData();
  const {
    data: weeklyData,
    isLoading: weeklyLoading,
    isError: weeklyError,
  } = useWeeklySummary();
  const {
    data: foodLogsData,
    isLoading: logsLoading,
    isError: logsError,
  } = useFoodLogs();
  const [showProgress, setShowProgress] = useState(false);
  const [activeView, setActiveView] = useState<ViewType>("daily");
  const [mounted, setMounted] = useState(false);

  // Helper function to calculate percentage
  const calculatePercentage = (
    consumed: number | undefined,
    target: number | null | undefined
  ) => {
    if (!target || target === 0) return 0;
    const percentage = (consumed! / target) * 100;
    return Math.min(percentage, 100);
  };

  // Progress data calculations
  const caloriesProgress = calculatePercentage(
    progressData?.food.calories,
    progressData?.targets.calories
  );
  const proteinProgress = calculatePercentage(
    progressData?.food.protein,
    progressData?.targets.protein
  );
  const carbsProgress = calculatePercentage(
    progressData?.food.carbs,
    progressData?.targets.carbs
  );
  const fatProgress = calculatePercentage(
    progressData?.food.fat,
    progressData?.targets.fat
  );

  useEffect(() => {
    setMounted(true);
    if (!isLoading && progressData) {
      const timer = setTimeout(() => setShowProgress(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading, progressData]);

  if (!mounted) {
    return (
      <div className="space-y-8 p-2">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="space-y-4"
        >
          <div className="h-12 bg-secondary/30 rounded-lg"></div>
          <div className="h-64 bg-secondary/30 rounded-2xl"></div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-2">
      <ScreenHeader />

      {/* Modern Tabs Navigation */}
      <TabsNavigation activeView={activeView} setActiveView={setActiveView} />

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeView === "all" && (
            <AllFoodLog
              Foodlength={foodLogsData?.data.length}
              Logs={foodLogsData?.data}
              logsError={logsError}
              logsLoading={logsLoading}
            />
          )}

          {activeView === "daily" && (
            <DailyFoodLog
              caloriesProgress={caloriesProgress}
              carbsProgress={carbsProgress}
              fatProgress={fatProgress}
              isLoading={isLoading}
              progressData={progressData}
              proteinProgress={proteinProgress}
            />
          )}

          {activeView === "weekly" && (
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-linear-to-br from-secondary/20 to-foreground/10 rounded-2xl p-6 border-2 border-foreground/30 shadow-xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="p-3 bg-linear-to-br from-foreground to-secondary rounded-xl shadow-lg"
                    >
                      <TrendingUp className="w-6 h-6 text-textcolor" />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl font-bold text-textcolor">
                        النظرة الأسبوعية
                      </h2>
                      <p className="text-textcolor/70 text-sm mt-1">
                        تتبع تقدمك على مدار الأسبوع
                      </p>
                      {weeklyData?.data?.period && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="flex items-center gap-2 mt-2"
                        >
                          <span className="text-xs px-3 py-1 bg-foreground/30 text-textcolor rounded-full font-medium border border-foreground/40">
                            {new Date(
                              weeklyData.data.period.start
                            ).toLocaleDateString("ar-SA")}
                          </span>
                          <span className="text-xs text-textcolor/50">→</span>
                          <span className="text-xs px-3 py-1 bg-secondary/30 text-textcolor rounded-full font-medium border border-secondary/40">
                            {new Date(
                              weeklyData.data.period.end
                            ).toLocaleDateString("ar-SA")}
                          </span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-linear-to-r from-foreground to-secondary rounded-full border-2 border-foreground/40 shadow-lg"
                  >
                    <span className="text-textcolor font-bold text-sm flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      أسبوعي
                    </span>
                  </motion.div>
                </div>

                {weeklyLoading ? (
                  <div className="space-y-6">
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="space-y-4"
                    >
                      <div className="h-32 bg-secondary/30 rounded-xl"></div>
                      <div className="h-64 bg-secondary/30 rounded-xl"></div>
                      <div className="h-48 bg-secondary/30 rounded-xl"></div>
                    </motion.div>
                  </div>
                ) : weeklyError ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-5xl mb-4">❌</div>
                    <h3 className="text-xl font-bold text-textcolor mb-2">
                      حدث خطأ في تحميل البيانات الأسبوعية
                    </h3>
                    <p className="text-textcolor/70">
                      تعذر تحميل بيانات الأسبوع. يرجى المحاولة مرة أخرى.
                    </p>
                  </motion.div>
                ) : weeklyData?.data ? (
                  <div className="space-y-8">
                    {/* Weekly Stats */}
                    <WeeklyStats
                      summary={weeklyData.data.summary}
                      targets={weeklyData.data.targets}
                      adherence={weeklyData.data.adherence}
                      trends={weeklyData.data.trends}
                    />

                    {/* Weekly Chart */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-linear-to-br from-background/80 to-secondary/20 rounded-2xl p-6 border-2 border-foreground/30 shadow-lg"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="p-2.5 bg-linear-to-br from-foreground to-secondary rounded-lg shadow-lg"
                        >
                          <TrendingUp className="w-5 h-5 text-textcolor" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-bold text-textcolor">
                            مخطط التقدم الأسبوعي
                          </h3>
                          <p className="text-sm text-textcolor/70">
                            تتبع استهلاكك اليومي خلال الأسبوع
                          </p>
                        </div>
                      </div>

                      <WeeklyChart
                        dailyData={weeklyData.data.summary.daily_data}
                        dailyTarget={weeklyData.data.targets.daily}
                      />
                    </motion.div>

                    {/* Daily Breakdown */}
                    <DailyBreakdown
                      dailyData={weeklyData.data.summary.daily_data}
                      dailyTarget={weeklyData.data.targets.daily}
                    />

                    {/* Insights Grid */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      {/* Notes Card */}
                      <motion.div
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="bg-linear-to-br from-foreground/20 to-secondary/10 rounded-2xl p-5 border-2 border-foreground/30 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <h4 className="font-bold text-textcolor mb-3 flex items-center gap-2">
                          💡 ملاحظات
                        </h4>
                        <ul className="space-y-2 text-sm text-textcolor/80">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-foreground rounded-full" />
                            معدل الالتزام: {weeklyData.data.adherence}%
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-foreground rounded-full" />
                            أيام مسجلة: {weeklyData.data.summary.days_logged}{" "}
                            من 7
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-foreground rounded-full" />
                            متوسط سعرات يومي:{" "}
                            {Math.round(
                              weeklyData.data.summary.averages.daily_calories
                            )}
                          </li>
                        </ul>
                      </motion.div>

                      {/* Recommendations Card */}
                      <motion.div
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="bg-linear-to-br from-secondary/20 to-foreground/10 rounded-2xl p-5 border-2 border-secondary/30 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <h4 className="font-bold text-textcolor mb-3 flex items-center gap-2">
                          🎯 توصيات
                        </h4>
                        <ul className="space-y-2 text-sm text-textcolor/80">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full" />
                            حاول تسجيل جميع أيام الأسبوع
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full" />
                            حافظ على استهلاك متوازن للماكروز
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full" />
                            راجع أهدافك الأسبوعية بانتظام
                          </li>
                        </ul>
                      </motion.div>

                      {/* Achievements Card */}
                      <motion.div
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="bg-linear-to-br from-foreground/20 to-background/40 rounded-2xl p-5 border-2 border-foreground/30 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <h4 className="font-bold text-textcolor mb-3 flex items-center gap-2">
                          📊 الإنجازات
                        </h4>
                        <ul className="space-y-2 text-sm text-textcolor/80">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-foreground rounded-full" />
                            إجمالي سعرات:{" "}
                            {Math.round(
                              parseFloat(
                                weeklyData.data.summary.totals.total_calories
                              )
                            ).toLocaleString()}
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-foreground rounded-full" />
                            إجمالي وجبات:{" "}
                            {weeklyData.data.summary.totals.total_meals}
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-foreground rounded-full" />
                            أداء:{" "}
                            {weeklyData.data.trends.trend === "improving"
                              ? "📈 متحسن"
                              : "📉 يحتاج تحسين"}
                          </li>
                        </ul>
                      </motion.div>
                    </motion.div>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-5xl mb-4">📅</div>
                    <h3 className="text-xl font-bold text-textcolor mb-2">
                      لا توجد بيانات أسبوعية
                    </h3>
                    <p className="text-textcolor/70">
                      ابدأ بتسجيل وجباتك اليومية لرؤية تقريرك الأسبوعي
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* View Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center gap-2 text-sm text-textcolor/70"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-linear-to-r from-foreground to-secondary"
        />
        <span className="font-medium">
          {activeView === "all" && "عرض جميع سجلات الطعام"}
          {activeView === "daily" && "تتبع التقدم اليومي"}
          {activeView === "weekly" && "النظرة الأسبوعية"}
        </span>
      </motion.div>
    </div>
  );
};

export default NutrationScreen;
