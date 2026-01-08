"use client";

import {
  BarChart3,
  Flame,
  Clock,
  Target,
  TrendingUp,
} from "lucide-react";
import { WeeklyTrainingSummary } from "../models/getweekly/type";
import ActivityBreakdown from "../components/ActivityBreakdown";
import StatCard from "../components/StatCard";
import DailyData from "../components/DailyData";

interface WeeklySummaryCardProps {
  weeklyData: WeeklyTrainingSummary; 
  activityColors: Record<string, string>;
}

export default function WeeklySummaryCard({ weeklyData, activityColors }: WeeklySummaryCardProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <BarChart3 className="w-7 h-7 text-foreground" />
        <h2 className="text-3xl font-bold text-textcolor">ملخص الأسبوع</h2>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
        icon={<Flame className="w-8 h-8 text-secondary" />}
        value={Number(weeklyData.totals.total_calories_burned)}
        label="سعرة حرارية"
        color="secondary"
        />
        <StatCard
        icon={<Clock className="w-8 h-8 text-foreground" />}
        value={Number(weeklyData.totals.total_duration)}
        label="دقيقة تمرين"
        color="foreground"
        />

        <StatCard
            icon={<Target className="w-8 h-8 text-textcolor" />}
            value={weeklyData.totals.total_sessions}
            label="جلسة تمرين"
            color="textcolor"
        />
        <StatCard
            icon={<TrendingUp className="w-8 h-8 text-secondary" />}
            value={weeklyData.days_trained}
            label="يوم تدريب"
            color="secondary"
        />
        </div>

        <ActivityBreakdown data={weeklyData.activity_breakdown} activityColors={activityColors} />

        <DailyData data={weeklyData.daily_data} />

    </div>
  );
}

