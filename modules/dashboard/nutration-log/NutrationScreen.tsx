"use client";
import { useEffect, useState } from "react";
import Macros from "../MainDashboard/features/TotalProgress/components/Macros";
import { useTodayProgressData } from "../MainDashboard/models/TodayProgressData";
import FoodLogTextInput from "./features/FoodLogTextInput/FoodLogInput";

const NutrationScreen = () => {
  const { data: progressData, isLoading } = useTodayProgressData();
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    if (!isLoading && progressData) {
      const timer = setTimeout(() => setShowProgress(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading, progressData]);

  return (
    <div className="space-y-8 p-2">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold  text-textcolor">
          التغذية اليومية
        </h1>
        <p className="text-foreground mt-2">تتبع وادارة نظامك الغذائي بذكاء</p>
      </div>

      <div className="bg-background/50 border-foregr ound/20 dark:from-background shadow-2xl  rounded-2xl p-6 md:p-8 border dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-linear-to-r from-primary/10 to-primary/5 rounded-xl">
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

      {/* Today's Progress - Enhanced with Animation */}
      {!isLoading && progressData && (
        <div
          className={`
            bg-linear-to-br dark:from-foreground/10 dark:via-foreground/5 dark:to-foreground/10 

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
                <svg
                  className="w-6 h-6 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
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
            <div className="px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-full">
              <span className="text-emerald-700 dark:text-emerald-300 font-semibold text-sm">
                يومي
              </span>
            </div>
          </div>
          <Macros
            targets={progressData.targets}
            food={progressData.food}
            fatProgress={
              progressData.food.fat && progressData.targets.fat
                ? (progressData.food.fat / progressData.targets.fat) * 100
                : 0
            }
          />
        </div>
      )}
    </div>
  );
};

export default NutrationScreen;
