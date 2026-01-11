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
import { motion } from "framer-motion";

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
    if (value === 0) return "#D9E9CF";
    if (value < target * 0.8) return "#F9B487";
    if (value < target) return "#D9E9CF";
    if (value < target * 1.2) return "#F9B487";
    return "#F9B487";
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-background border-2 border-foreground/40 p-4 rounded-xl shadow-xl"
        >
          <p className="font-bold text-textcolor mb-3">{label}</p>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-medium text-textcolor/70">السعرات: </span>
              <span className="font-bold text-foreground">
                {data.calories.toFixed(0)}
              </span>
            </p>
            <p className="text-sm">
              <span className="font-medium text-textcolor/70">البروتين: </span>
              <span className="font-bold text-secondary">
                {data.protein.toFixed(0)}g
              </span>
            </p>
            <p className="text-sm">
              <span className="font-medium text-textcolor/70">
                الكربوهيدرات:{" "}
              </span>
              <span className="font-bold text-foreground">
                {data.carbs.toFixed(0)}g
              </span>
            </p>
            <p className="text-sm">
              <span className="font-medium text-textcolor/70">الدهون: </span>
              <span className="font-bold text-secondary">
                {data.fat.toFixed(0)}g
              </span>
            </p>
            {data.meals > 0 && (
              <p className="text-sm">
                <span className="font-medium text-textcolor/70">
                  عدد الوجبات:{" "}
                </span>
                <span className="font-bold text-foreground">{data.meals}</span>
              </p>
            )}
          </div>
        </motion.div>
      );
    }
    return null;
  };

  const metrics = [
    { key: "calories", label: "السعرات", icon: "🔥", color: "#F9B487" },
    { key: "protein", label: "البروتين", icon: "💪", color: "#D9E9CF" },
    { key: "carbs", label: "الكربوهيدرات", icon: "🌾", color: "#F9B487" },
    { key: "fat", label: "الدهون", icon: "🫒", color: "#D9E9CF" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      {/* Metric Selector */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex gap-2 overflow-x-auto pb-2"
      >
        {metrics.map((metric, index) => (
          <motion.button
            key={metric.key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveMetric(metric.key as any)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap font-medium border-2 ${
              activeMetric === metric.key
                ? "bg-gradient-to-r from-foreground to-secondary border-foreground text-textcolor shadow-lg"
                : "bg-background/60 border-foreground/30 text-textcolor/80 hover:border-foreground/50 hover:bg-background/80"
            }`}
          >
            <span className="text-lg">{metric.icon}</span>
            <span>{metric.label}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Chart Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-gradient-to-br from-secondary/15 to-foreground/10 rounded-2xl p-6 border-2 border-foreground/30 shadow-lg"
      >
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={fullWeekData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#F9B487"
                opacity={0.2}
              />
              <XAxis
                dataKey="day"
                stroke="#EEEEEE"
                fontSize={12}
                tick={{ fill: "#EEEEEE" }}
              />
              <YAxis
                stroke="#EEEEEE"
                fontSize={12}
                tick={{ fill: "#EEEEEE" }}
                tickFormatter={(value) => value.toLocaleString()}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey={activeMetric}
                radius={[8, 8, 0, 0]}
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4 mt-6 pt-6 border-t-2 border-foreground/30 flex-wrap"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-4 h-4 rounded bg-foreground shadow-lg"
            />
            <span className="text-sm text-textcolor/80 font-medium">
              أقل من 80%
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              className="w-4 h-4 rounded bg-secondary shadow-lg"
            />
            <span className="text-sm text-textcolor/80 font-medium">
              80%-100%
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              className="w-4 h-4 rounded bg-foreground shadow-lg"
            />
            <span className="text-sm text-textcolor/80 font-medium">
              100%-120%
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              className="w-4 h-4 rounded bg-secondary shadow-lg"
            />
            <span className="text-sm text-textcolor/80 font-medium">
              أكثر من 120%
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WeeklyChart;
