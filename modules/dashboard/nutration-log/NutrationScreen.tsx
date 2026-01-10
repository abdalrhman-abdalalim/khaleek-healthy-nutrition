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
export type ViewType = "all" | "daily" | "weekly";

const NutrationScreen = () => {
  const { data: progressData, isLoading } = useTodayProgressData();
  const {
    data: foodLogsData,
    isLoading: logsLoading,
    isError: logsError,
  } = useFoodLogs();
  const [showProgress, setShowProgress] = useState(false);
  const [activeView, setActiveView] = useState<ViewType>("daily");
  const [mounted, setMounted] = useState(false);

  // Helper function to calculate percentage
  const calculatePercentage = (consumed, target) => {
    if (!target || target === 0) return 0;
    const percentage = (consumed / target) * 100;
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
              {/* Weekly Overview */}
              <div className="bg-gradient-to-br from-white to-[#D9E9CF] dark:from-[#174143] dark:to-[#1a4a4d] rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-r from-[#F9B487]/10 to-[#F9B487]/5 rounded-xl">
                      <TrendingUp className="w-6 h-6 text-[#F9B487]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#174143] dark:text-[#EEEEEE]">
                        النظرة الأسبوعية
                      </h2>
                      <p className="text-[#174143]/70 dark:text-[#EEEEEE]/70 text-sm">
                        تتبع تقدمك على مدار الأسبوع
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-[#F9B487]/10 to-[#F9B487]/5 rounded-full border border-[#F9B487]/30 dark:border-[#F9B487]/50">
                    <span className="text-[#F9B487] font-semibold text-sm flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      أسبوعي
                    </span>
                  </div>
                </div>

                {/* Weekly Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {[
                    {
                      label: "متوسط السعرات اليومية",
                      value: "2,340",
                      change: "+5%",
                      color: "from-[#F9B487] to-[#ffc49c]",
                    },
                    {
                      label: "إجمالي البروتين",
                      value: "420g",
                      change: "+12%",
                      color: "from-blue-500 to-blue-600",
                    },
                    {
                      label: "أيام الالتزام",
                      value: "6/7",
                      change: "86%",
                      color: "from-green-500 to-green-600",
                    },
                    {
                      label: "أفضل يوم",
                      value: "الثلاثاء",
                      change: "2,890 سعرة",
                      color: "from-purple-500 to-purple-600",
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
                    >
                      <p className="text-sm text-[#174143]/70 dark:text-[#EEEEEE]/70 mb-2">
                        {stat.label}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-[#174143] dark:text-[#EEEEEE]">
                          {stat.value}
                        </p>
                        <span
                          className={`text-xs px-2 py-1 bg-gradient-to-r ${stat.color} text-white rounded-full`}
                        >
                          {stat.change}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Weekly Chart Placeholder */}
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-8 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-5xl mb-4 text-[#F9B487]">📈</div>
                    <h3 className="text-xl font-semibold text-[#174143] dark:text-[#EEEEEE] mb-2">
                      مخطط التقدم الأسبوعي
                    </h3>
                    <p className="text-[#174143]/70 dark:text-[#EEEEEE]/70">
                      سيظهر هنا مخطط بياني يعرض تقدمك على مدار الأسبوع
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* View Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center gap-2 text-sm text-[#174143]/70 dark:text-[#EEEEEE]/70"
      >
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F9B487] to-[#ffc49c] animate-pulse"></div>
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
