// app/dashboard/page.tsx
"use client";
import UserGreeting from "./features/UserGreeing/UserGreeing";
import StatsDisplay from "./features/StatsDisplay/StatsDisplay";

const MainDashboardScreen = () => {
  return (
    <div className="min-h-screen pb-10">
      <UserGreeting />

      <div>
        <StatsDisplay />
      </div>
    </div>
  );
};

export default MainDashboardScreen;
