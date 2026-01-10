"use client";

import { useEffect, useState } from "react";
import { useTodayProgressData } from "../MainDashboard/models/TodayProgressData";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, List, TrendingUp } from "lucide-react";
import ScreenHeader from "./features/ScreenHeader/ScreenHeader";
import TabsNavigation from "./features/TabsNavigation/TabsNavigation";
import DailyFoodLog from "./features/DailyFoodLog/DailyFoodLog";
import { useFoodLogs } from "./models/useFoodLogs"; // Import the new hook
import FoodLogsList from "./features/AllFoodLog/components/FoodLogsList"; //
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
    return Math.min(percentage, 100); // Cap at 100%
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
        <div className="animate-pulse">
          <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg mb-4"></div>
          <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
        </div>
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
          transition={{ duration: 0.2 }}
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
              <div className="bg-linear-to-br from-white to-secondary dark:from-background dark:to-[#1a4a4d] rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-linear-to-r from-foreground/10 to-foreground/5 rounded-xl">
                      <TrendingUp className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-background dark:text-textcolor">
                        النظرة الأسبوعية
                      </h2>
                      <p className="text-background/70 dark:text-textcolor/70 text-sm">
                        تتبع تقدمك على مدار الأسبوع
                      </p>
                      {weeklyData?.data?.period && (
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs px-2 py-1 bg-foreground/10 text-foreground rounded-full">
                            {new Date(
                              weeklyData.data.period.start
                            ).toLocaleDateString("ar-SA")}
                          </span>
                          <span className="text-xs text-background/60 dark:text-textcolor/60">
                            →
                          </span>
                          <span className="text-xs px-2 py-1 bg-foreground/10 text-foreground rounded-full">
                            {new Date(
                              weeklyData.data.period.end
                            ).toLocaleDateString("ar-SA")}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-linear-to-r from-foreground/10 to-foreground/5 rounded-full border border-foreground/30 dark:border-foreground/50">
                    <span className="text-foreground font-semibold text-sm flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      أسبوعي
                    </span>
                  </div>
                </div>

                {weeklyLoading ? (
                  <div className="space-y-6">
                    <div className="animate-pulse space-y-4">
                      <div className="h-32 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
                      <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
                      <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
                    </div>
                  </div>
                ) : weeklyError ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">❌</div>
                    <h3 className="text-xl font-semibold text-background dark:text-textcolor mb-2">
                      حدث خطأ في تحميل البيانات الأسبوعية
                    </h3>
                    <p className="text-background/70 dark:text-textcolor/70">
                      تعذر تحميل بيانات الأسبوع. يرجى المحاولة مرة أخرى.
                    </p>
                  </div>
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
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 bg-linear-to-r from-foreground/10 to-foreground/5 rounded-lg">
                          <TrendingUp className="w-5 h-5 text-foreground" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                            مخطط التقدم الأسبوعي
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            تتبع استهلاكك اليومي خلال الأسبوع
                          </p>
                        </div>
                      </div>

                      <WeeklyChart
                        dailyData={weeklyData.data.summary.daily_data}
                        dailyTarget={weeklyData.data.targets.daily}
                      />
                    </div>

                    {/* Daily Breakdown */}
                    <DailyBreakdown
                      dailyData={weeklyData.data.summary.daily_data}
                      dailyTarget={weeklyData.data.targets.daily}
                    />

                    {/* Insights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-linear-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-900/10 rounded-xl p-5 border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                          💡 ملاحظات
                        </h4>
                        <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-400">
                          <li>• معدل الالتزام: {weeklyData.data.adherence}%</li>
                          <li>
                            • أيام مسجلة: {weeklyData.data.summary.days_logged}{" "}
                            من 7
                          </li>
                          <li>
                            • متوسط سعرات يومي:{" "}
                            {Math.round(
                              weeklyData.data.summary.averages.daily_calories
                            )}
                          </li>
                        </ul>
                      </div>

                      <div className="bg-linear-to-r from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-900/10 rounded-xl p-5 border border-green-200 dark:border-green-800">
                        <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                          🎯 توصيات
                        </h4>
                        <ul className="space-y-2 text-sm text-green-700 dark:text-green-400">
                          <li>• حاول تسجيل جميع أيام الأسبوع</li>
                          <li>• حافظ على استهلاك متوازن للماكروز</li>
                          <li>• راجع أهدافك الأسبوعية بانتظام</li>
                        </ul>
                      </div>

                      <div className="bg-linear-to-r from-foreground/10 to-foreground/5 rounded-xl p-5 border border-foreground/30">
                        <h4 className="font-semibold text-background dark:text-textcolor mb-2">
                          📊 الإنجازات
                        </h4>
                        <ul className="space-y-2 text-sm text-background/80 dark:text-textcolor/80">
                          <li>
                            • إجمالي سعرات:{" "}
                            {Math.round(
                              parseFloat(
                                weeklyData.data.summary.totals.total_calories
                              )
                            ).toLocaleString()}
                          </li>
                          <li>
                            • إجمالي وجبات:{" "}
                            {weeklyData.data.summary.totals.total_meals}
                          </li>
                          <li>
                            • أداء:{" "}
                            {weeklyData.data.trends.trend === "improving"
                              ? "📈 متحسن"
                              : "📉 يحتاج تحسين"}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">📅</div>
                    <h3 className="text-xl font-semibold text-[#174143] dark:text-textcolor mb-2">
                      لا توجد بيانات أسبوعية
                    </h3>
                    <p className="text-[#174143]/70 dark:text-[#EEEEEE]/70">
                      ابدأ بتسجيل وجباتك اليومية لرؤية تقريرك الأسبوعي
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* View Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center gap-2 text-sm text-background/70 dark:text-textcolor/70"
      >
        <div className="w-2 h-2 rounded-full bg-linear-to-r from-foreground to-[#ffc49c] animate-pulse"></div>
        <span>
          {activeView === "all" && "عرض جميع سجلات الطعام"}
          {activeView === "daily" && "تتبع التقدم اليومي"}
          {activeView === "weekly" && "النظرة الأسبوعية"}
        </span>
      </motion.div>
    </div>
  );
};

export default NutrationScreen;
