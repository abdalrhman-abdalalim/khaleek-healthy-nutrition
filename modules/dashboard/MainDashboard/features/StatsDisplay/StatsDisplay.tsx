"use client";
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
import { useStatData } from "../../models/StatData";
import LoadingScreen from "@/shared/components/LoadingScreen";
import ErrorAlert from "@/shared/components/ErrorAlert";
import EmptyState from "@/shared/components/EmptyState";

export default function StatsDisplay() {
  const { data: stats, isLoading, isError } = useStatData();
  if (isLoading) {
    <LoadingScreen />;
  }
  if (isError) {
    return <ErrorAlert />;
  }
  if (!stats) {
    return (
      <EmptyState
        title="لا توجد إحصائيات"
        message="ابدأ بتسجيل وجباتك وتمارينك."
      />
    );
  }

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
