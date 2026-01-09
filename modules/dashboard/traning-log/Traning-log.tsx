"use client";

import { Loader2 } from "lucide-react";
import TrainingHeader from "./components/TrainingHeader";
import WeeklySummaryCard from "./features/WeeklySummary";
import TrainingLogsSection from "./features/TrainingLogsSection";
import EmptyTrainingLogs from "./components/EmptyTrainingLogs";
import EmptyTrainingState from "./components/EmptyTrainingState";
import { useTrainingLogLogic } from "./lib/useTrainingLogLogic";


export default function TrainingLog() {
  const { logsData, weeklyData, filteredLogs, searchText, setSearchText, selectedType,setSelectedType, selectedDate,
    setSelectedDate, activityColors,isLoading} = useTrainingLogLogic();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 text-foreground animate-spin" />
          <p className="text-textcolor text-xl">جاري تحميل البيانات...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <TrainingHeader />

        {weeklyData?.data && (
          <WeeklySummaryCard weeklyData={weeklyData.data} activityColors={activityColors} />
        )}

        {logsData?.data && logsData.data.length > 0 && (
          <TrainingLogsSection
            logsData={logsData}
            filteredLogs={filteredLogs}
            searchText={searchText}
            setSearchText={setSearchText}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            activityColors={activityColors}
          />
        )}

        {filteredLogs?.length === 0 && <EmptyTrainingLogs />}

        {logsData?.data && logsData.data.length === 0 && (
          <EmptyTrainingState
            title="لا توجد تمارين مسجلة"
            description="ابدأ بتسجيل أول تمرين لك واستمتع بتتبع تقدمك"
            actionHref="/dashboard/training/add_train"
            actionLabel="إضافة تمرين جديد"
          />
        )}
      </div>
    </div>
  );
}
