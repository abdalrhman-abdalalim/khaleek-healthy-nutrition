"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useCreateTrainingLog } from "../models/useCreateTrainingLog";
import { CreateTrainingLogPayload } from "../models/type";

export const useTrainingForm = () => {
  const { mutate, isPending } = useCreateTrainingLog();

  const initialState: CreateTrainingLogPayload = {
    activity_name: "",
    activity_type: "cardio",
    duration: 0,
    intensity_level: 5,
    performed_at:
      new Date().toISOString().slice(0, 16).replace("T", " ") + ":00",
  };

  const [formData, setFormData] =
    useState<CreateTrainingLogPayload>(initialState);

  const updateField = (
    field: keyof CreateTrainingLogPayload,
    value: any
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.activity_name.trim()) {
      toast.error("من فضلك أدخل اسم التمرين");
      return false;
    }

    if (!formData.duration || formData.duration <= 0) {
      toast.error("من فضلك أدخل مدة التمرين");
      return false;
    }

    if (!formData.intensity_level) {
      toast.error("من فضلك اختر شدة التمرين");
      return false;
    }

    if (!formData.performed_at) {
      toast.error("من فضلك اختر تاريخ التمرين");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    mutate(formData, {
      onSuccess: () => {
        toast.success("تم تسجيل التمرين بنجاح ");
        setFormData(initialState);
      },
      onError: (err: any) => {
        toast.error(err?.response?.data?.message || "حدث خطأ أثناء التسجيل");
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
