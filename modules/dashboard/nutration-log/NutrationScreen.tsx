"use client";

import { useEffect, useState } from "react";
import Macros from "../MainDashboard/features/TotalProgress/components/Macros";
import { useTodayProgressData } from "../MainDashboard/models/TodayProgressData";
import FoodLogTextInput from "./features/FoodLogTextInput/FoodLogInput";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, List, TrendingUp, BarChart3 } from "lucide-react";
import ScreenHeader from "./features/ScreenHeader/ScreenHeader";
import TabsNavigation from "./features/TabsNavigation/TabsNavigation";

// Define the view types
export type ViewType = "all" | "daily" | "weekly";

const NutrationScreen = () => {
  const { data: progressData, isLoading } = useTodayProgressData();
  const [showProgress, setShowProgress] = useState(false);
  const [activeView, setActiveView] = useState<ViewType>("daily");
  const [mounted, setMounted] = useState(false);

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
            <div className="space-y-6">
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    label: "إجمالي التسجيلات",
                    value: "156",
                    icon: "📊",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    label: "متوسط السعرات",
                    value: "2,340",
                    icon: "🔥",
                    color: "from-amber-500 to-orange-500",
                  },
                  {
                    label: "أكثر وجبة تكراراً",
                    value: "الفطور",
                    icon: "🍳",
                    color: "from-emerald-500 to-green-500",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-3xl">{stat.icon}</div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`h-1 mt-4 bg-gradient-to-r ${stat.color} rounded-full`}
                    ></div>
                  </motion.div>
                ))}
              </div>

              {/* All Food Logs Content */}
              <div className="bg-background/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500/10 to-blue-600/5 rounded-xl">
                    <List className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                      جميع سجلات الطعام
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      عرض وتصفية جميع سجلات الطعام السابقة
                    </p>
                  </div>
                </div>
                {/* Add your all food logs table/component here */}
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">📋</div>
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    قائمة جميع التسجيلات
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    سيظهر هنا جدول بجميع سجلات الطعام
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeView === "daily" && (
            <div className="space-y-8">
              {/* Add New Food */}
              <div className="bg-background/50 border-foreground/20 dark:from-background shadow-2xl rounded-2xl p-6 md:p-8 border dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl">
                    <svg
                      className="w-6 h-6 text-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                      إضافة طعام جديد
                    </h2>
                    <p className="text-gray-600 dark:text-foreground text-sm">
                      سجل وجباتك اليومية بسهولة
                    </p>
                  </div>
                </div>
                <FoodLogTextInput />
              </div>

              {/* Today's Progress */}
              {!isLoading && progressData && (
                <div
                  className={`
                    bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800
                    rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700
                    transition-all duration-500 transform
                    ${
                      showProgress
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }
                  `}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 rounded-xl">
                        <BarChart3 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                          تقدم اليوم
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          مقارنة بين المستهدف والمستهلك
                        </p>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 rounded-full border border-emerald-200 dark:border-emerald-800">
                      <span className="text-emerald-700 dark:text-emerald-300 font-semibold text-sm flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        يومي
                      </span>
                    </div>
                  </div>
                  <Macros
                    targets={progressData.targets}
                    food={progressData.food}
                    fatProgress={
                      progressData.food.fat && progressData.targets.fat
                        ? (progressData.food.fat / progressData.targets.fat) *
                          100
                        : 0
                    }
                  />
                </div>
              )}
            </div>
          )}

          {activeView === "weekly" && (
            <div className="space-y-6">
              {/* Weekly Overview */}
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500/10 to-purple-600/5 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                      النظرة الأسبوعية
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      تتبع تقدمك على مدار الأسبوع
                    </p>
                  </div>
                </div>

                {/* Weekly Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {[
                    {
                      label: "متوسط السعرات اليومية",
                      value: "2,340",
                      change: "+5%",
                    },
                    { label: "إجمالي البروتين", value: "420g", change: "+12%" },
                    { label: "أيام الالتزام", value: "6/7", change: "86%" },
                    {
                      label: "أفضل يوم",
                      value: "الثلاثاء",
                      change: "2,890 سعرة",
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-gray-700"
                    >
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {stat.label}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">
                          {stat.value}
                        </p>
                        <span className="text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">
                          {stat.change}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Weekly Chart Placeholder */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-5xl mb-4">📈</div>
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      مخطط التقدم الأسبوعي
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
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
        className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400"
      >
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary/60 animate-pulse"></div>
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
