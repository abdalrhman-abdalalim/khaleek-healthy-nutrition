"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useCreateTrainingLog } from "../models/useCreateTrainingLog";
import { CreateTrainingLogPayload } from "../models/type";


export const useTrainingForm = () => {
  const { mutate, isPending } = useCreateTrainingLog();

  const [formData, setFormData] = useState<CreateTrainingLogPayload>({
    activity_name: "",
    activity_type: "cardio",
    duration: 0,
    intensity_level: 5,
    performed_at:
      new Date().toISOString().slice(0, 16).replace("T", " ") + ":00",
  });

  const updateField = (
    field: keyof CreateTrainingLogPayload,
    value: any
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(formData, {
      onSuccess: () => {
        toast.success("تم تسجيل التمرين بنجاح");
        setFormData({
          activity_name: "",
          activity_type: "cardio",
          duration: 0,
          intensity_level: 5,
          performed_at:
            new Date().toISOString().slice(0, 16).replace("T", " ") + ":00",
        });
      },
      onError: (err: any) => {
        toast.error(err?.response?.data?.message || "حدث خطأ");
      },
    });
  };

  return {
    formData,
    isPending,
    updateField,
    handleSubmit,
    isCardio: formData.activity_type === "cardio",
    isStrength: formData.activity_type === "strength",
  };
};
