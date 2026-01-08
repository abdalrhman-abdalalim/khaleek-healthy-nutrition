"use client";

import { useState, useMemo } from "react";
import { useTrainingLogs } from "../models/getall/useTrainingLogs";
import { useWeeklyTrainingLogs } from "../models/getweekly/useWeeklyTrainingLogs";

export function useTrainingLogLogic() {
  const { data: logsData, isLoading: logsLoading } = useTrainingLogs();
  const { data: weeklyData, isLoading: weeklyLoading } = useWeeklyTrainingLogs();

  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedDate, setSelectedDate] = useState<string>("");

  const filteredLogs = useMemo(() => {
    if (!logsData?.data) return [];
    return logsData.data.filter((log) => {
      const matchesName = log.activity_name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchesType =
        selectedType === "all" || log.activity_type === selectedType;

      const matchesDate =
        !selectedDate || log.performed_at.slice(0, 10) === selectedDate;

      return matchesName && matchesType && matchesDate;
    });
  }, [logsData, searchText, selectedType, selectedDate]);

  const activityColors: Record<string, string> = {
    cardio: "bg-secondary/20 border-secondary text-secondary",
    strength: "bg-foreground/20 border-foreground text-foreground",
    flexibility: "bg-textcolor/20 border-textcolor text-textcolor",
    sports: "bg-secondary/30 border-secondary text-secondary",
    hiit: "bg-foreground/30 border-foreground text-foreground",
    other: "bg-textcolor/30 border-textcolor text-textcolor"
  };

  const isLoading = logsLoading || weeklyLoading;

  return {
    logsData,
    weeklyData,
    filteredLogs,
    searchText,
    setSearchText,
    selectedType,
    setSelectedType,
    selectedDate,
    setSelectedDate,
    activityColors,
    isLoading
  };
}
