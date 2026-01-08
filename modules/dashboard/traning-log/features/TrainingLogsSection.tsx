"use client";

import React from "react";
import { Dumbbell } from "lucide-react";
import TrainingLogCard from "./TrainingLogCard";
import TrainingLogsFilter from "../components/TrainingLogsFilter";
import { TrainingLog } from "../models/getall/type";

interface TrainingLogsSectionProps {
  logsData: { data: TrainingLog[] };
  filteredLogs?: TrainingLog[];
  searchText: string;
  setSearchText: (val: string) => void;
  selectedType: string;
  setSelectedType: (val: string) => void;
  selectedDate: string;
  setSelectedDate: (val: string) => void;
  activityColors: Record<string, string>;
}

export default function TrainingLogsSection({
  logsData,
  filteredLogs,
  searchText,
  setSearchText,
  selectedType,
  setSelectedType,
  selectedDate,
  setSelectedDate,
  activityColors,
}: TrainingLogsSectionProps) {
    
    const sortedLogs = [...(filteredLogs || [])].sort(
    (a, b) => new Date(a.performed_at).getTime() - new Date(b.performed_at).getTime()
    );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Dumbbell className="w-7 h-7 text-secondary" />
        <h2 className="text-3xl font-bold text-textcolor">
          جميع التمارين ({logsData.data.length})
        </h2>
      </div>

      <TrainingLogsFilter
        searchText={searchText}
        setSearchText={setSearchText}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sortedLogs?.map((log) => (
          <TrainingLogCard key={log.id} log={log} activityColors={activityColors} />
        ))}
      </div>
    </div>
  );
}
