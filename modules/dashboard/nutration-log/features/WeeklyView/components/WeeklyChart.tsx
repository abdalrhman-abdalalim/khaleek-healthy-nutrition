/* eslint-disable react-hooks/static-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
// features/WeeklyView/components/WeeklyChart.tsx
"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useState } from "react";

interface WeeklyChartProps {
  dailyData: Array<{
    log_date: string;
    daily_calories: string;
    daily_protein: string;
    daily_carbs: string;
    daily_fat: string;
    daily_meals: number;
  }>;
  dailyTarget: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

const WeeklyChart = ({ dailyData, dailyTarget }: WeeklyChartProps) => {
  const [activeMetric, setActiveMetric] = useState<
    "calories" | "protein" | "carbs" | "fat"
  >("calories");

  // Format data for chart
  const chartData = dailyData.map((item) => {
    const date = new Date(item.log_date);
    const dayName = date.toLocaleDateString("ar-SA", { weekday: "short" });

    return {
      day: dayName,
      date: item.log_date.split("-")[2],
      calories: parseFloat(item.daily_calories),
      protein: parseFloat(item.daily_protein),
      carbs: parseFloat(item.daily_carbs),
      fat: parseFloat(item.daily_fat),
      meals: item.daily_meals,
      target: dailyTarget[activeMetric],
    };
  });

  // Fill missing days
  const daysOfWeek = [
    "أحد",
    "اثنين",
    "ثلاثاء",
    "أربعاء",
    "خميس",
    "جمعة",
    "سبت",
  ];
  const fullWeekData = daysOfWeek.map((day, index) => {
    const existingData = chartData.find((item) => item.day === day);
    return (
      existingData || {
        day,
        date: "",
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        meals: 0,
        target: dailyTarget[activeMetric],
      }
    );
  });

  const getBarColor = (value: number, target: number) => {
    if (value === 0) return "#D1D5DB";
    if (value < target * 0.8) return "#F9B487";
    if (value < target) return "#60A5FA";
    if (value < target * 1.2) return "#34D399";
    return "#F87171";
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-semibold text-gray-800 dark:text-white mb-2">
            {label}
          </p>
          <div className="space-y-1">
            <p className="text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                السعرات:{" "}
              </span>
              <span className="font-bold text-foreground">
                {data.calories.toFixed(0)}
              </span>
            </p>
            <p className="text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                البروتين:{" "}
              </span>
              <span className="font-bold text-blue-500">
                {data.protein.toFixed(0)}g
              </span>
            </p>
            <p className="text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                الكربوهيدرات:{" "}
              </span>
              <span className="font-bold text-green-500">
                {data.carbs.toFixed(0)}g
              </span>
            </p>
            <p className="text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                الدهون:{" "}
              </span>
              <span className="font-bold text-orange-500">
                {data.fat.toFixed(0)}g
              </span>
            </p>
            {data.meals > 0 && (
              <p className="text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  عدد الوجبات:{" "}
                </span>
                <span className="font-bold text-purple-500">{data.meals}</span>
              </p>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      {/* Metric Selector */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {[
          { key: "calories", label: "السعرات", icon: "🔥", color: "#F9B487" },
          { key: "protein", label: "البروتين", icon: "💪", color: "#60A5FA" },
          { key: "carbs", label: "الكربوهيدرات", icon: "🌾", color: "#34D399" },
          { key: "fat", label: "الدهون", icon: "🫒", color: "#FBBF24" },
        ].map((metric) => (
          <button
            key={metric.key}
            onClick={() => setActiveMetric(metric.key as any)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
              activeMetric === metric.key
                ? "bg-background text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            <span>{metric.icon}</span>
            <span>{metric.label}</span>
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-seondary/20 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={fullWeekData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="day" stroke="#9CA3AF" fontSize={12} />
              <YAxis
                stroke="#9CA3AF"
                fontSize={12}
                tickFormatter={(value) => value.toLocaleString()}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey={activeMetric}
                radius={[4, 4, 0, 0]}
                fill={getBarColor(0, dailyTarget[activeMetric])}
              >
                {fullWeekData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={getBarColor(entry[activeMetric], entry.target)}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Target Line Indicator */}
        <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-foreground"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              أقل من 80%
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-500"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              80%-100%
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-500"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              100%-120%
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-500"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              أكثر من 120%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyChart;
