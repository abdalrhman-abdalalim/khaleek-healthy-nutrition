// app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import UserGreeting from "./features/UserGreeing/UserGreeing";
import StatsDisplay from "./features/StatsDisplay/StatsDisplay";

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

const stats: StatsData = {
  food: {
    total_logs: 1,
    total_calories: "265.00",
    avg_daily_calories: "265.000000",
    last_log_date: "2026-01-06 00:19:33",
  },
  training: {
    total_sessions: 0,
    total_minutes: null,
    total_calories_burned: null,
    last_session_date: null,
  },
  ai: {
    total_recommendations: 0,
    avg_adherence_score: null,
    helpful_count: null,
  },
  profile_completion: true,
  days_active: 1,
};
const MainDashboardScreen = () => {
  return (
    <div className="min-h-screen pb-10">
      <UserGreeting />

      <div>
        <StatsDisplay stats={stats} />
      </div>
    </div>
  );
};

export default MainDashboardScreen;
