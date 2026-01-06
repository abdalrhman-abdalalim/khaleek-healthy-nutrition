// components/dashboard/StatsDisplay.tsx
"use client";

import { Card } from "@/components/ui/card";

import GlowEffect from "./components/GlowEffect";
import Cardcontent from "./components/FoodStat/Cardcontent";
import CardHead from "./components/FoodStat/CardHeader";
import TrainStatHeader from "./components/TrainStat/TrainStatHeader";
import TrainStatContent from "./components/TrainStat/TrainStatContent";
import AiStatHeader from "./components/AiStat/AiStatHeader";
import AiStatContent from "./components/AiStat/AiStatContent";
import OverallHeader from "./components/OverallStat/OverallHeader";
import OverallContent from "./components/OverallStat/OverallContent";
import MainCard from "./components/MainCard";
import { ReactNode } from "react";

interface StatsData {
  food: {
    total_logs: number;
    total_calories: string;
    avg_daily_calories: string;
    last_log_date: string;
  };
  training: {
    total_sessions: number;
    total_minutes: number | null;
    total_calories_burned: number | null;
    last_session_date: string | null;
  };
  ai: {
    total_recommendations: number;
    avg_adherence_score: number | null;
    helpful_count: number | null;
  };
  profile_completion: boolean;
  days_active: number;
}

interface StatsDisplayProps {
  stats: StatsData;
}

export default function StatsDisplay({ stats }: StatsDisplayProps) {
  const statData: ReactNode[] = [
    <>
      <CardHead total_logs={stats.food.total_logs} />
      <Cardcontent food={stats.food} />
    </>,
    <>
      <TrainStatHeader total_sessions={stats.training.total_sessions} />
      <TrainStatContent training={stats.training} />
    </>,
    <>
      <AiStatHeader total_recommendations={stats.ai.total_recommendations} />
      <AiStatContent ai={stats.ai} />
    </>,
    <>
      <OverallHeader profile_completion={stats.profile_completion} />
      <OverallContent stats={stats} />
    </>,
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 mb-5">
      {statData.map((content, index) => (
        <MainCard key={index}>{content}</MainCard>
      ))}
    </div>
  );
}
