"use client";

import { Toaster } from "react-hot-toast";
import TrainingFormHeader from "./components/TrainingFormHeader";

import { ActivityType } from "./models/type";
import { useTrainingForm } from "./lib/useTrainingForm";
import TrainingForm from "./features/TrainingForm";

export default function AddTrainingScreen() {
  const {
    formData,
    isPending,
    updateField,
    handleSubmit,
    isCardio,
    isStrength,
  } = useTrainingForm();

  const activityTypes: { value: ActivityType; label: string }[] = [
    { value: "cardio", label: "كارديو"},
    { value: "strength", label: "قوة"},
    { value: "flexibility", label: "مرونة" },
    { value: "sports", label: "رياضات" },
    { value: "hiit", label: "HIIT"},
    { value: "other", label: "أخرى"},
  ];

  return (
    <div className="min-h-screen bg-background p-6 mb-14 mt-16">
      <div className="max-w-4xl mx-auto">

        <Toaster position="top-center" />
        <TrainingFormHeader  title="إضافة نشاط رياضي" subtitle="أدخل بيانات التمرين بدقة"/>

        <TrainingForm
          formData={formData}
          activityTypes={activityTypes}
          isPending={isPending}
          isCardio={isCardio}
          isStrength={isStrength}
          updateField={updateField}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
