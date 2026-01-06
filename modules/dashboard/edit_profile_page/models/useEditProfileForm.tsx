import { useState, useEffect, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { UpdateProfilePayload, UpdateProfileResponse } from "./type";
import { updateProfile } from "../lib/api_edit_profile";
import { useGetProfile } from "../../profile/models/use_get_profile"; 
import toast from "react-hot-toast";
import { VALID_ACTIVITY_LEVELS, VALID_BUDGET_LEVELS, VALID_DIET_TYPES, VALID_GOALS, VALID_NOTIFICATION_FREQUENCIES } from "../lib/constants/profileLabels";


export const useEditProfileForm = () => {
  const { data: profileData, isLoading } = useGetProfile();
  const isInitialized = useRef(false);

  const [formData, setFormData] = useState<UpdateProfilePayload>({
    age: 0,
    gender: "male",
    height: 0,
    weight: 0,
    target_weight: 0,
    activity_level: "sedentary",
    goal: "maintain",
    diet_type: "balanced",
    budget_level: "medium",
    voice_enabled: true,
    ai_recommendations_enabled: true,
    notification_frequency: "daily",
  });

  const updateProfileMutation = useMutation<UpdateProfileResponse, unknown, UpdateProfilePayload>({
    mutationFn: (payload) => updateProfile(payload),
  });

  useEffect(() => {
    if (profileData?.data && !isInitialized.current) {
      const user = profileData.data;

      const safeValue = <T extends string>(value: string, validList: T[], defaultValue: T): T =>
        validList.includes(value as T) ? (value as T) : defaultValue;

      setFormData({
        age: user.profile.age,
        gender: user.profile.gender === "male" || user.profile.gender === "female" ? user.profile.gender : "male",
        height: parseFloat(user.profile.height),
        weight: parseFloat(user.profile.weight),
        target_weight: parseFloat(user.profile.target_weight),
        activity_level: safeValue(user.profile.activity_level, VALID_ACTIVITY_LEVELS, "sedentary"),
        goal: safeValue(user.profile.goal, VALID_GOALS, "maintain"),
        diet_type: safeValue(user.profile.diet_type, VALID_DIET_TYPES, "balanced"),
        budget_level: safeValue(user.profile.budget_level, VALID_BUDGET_LEVELS, "medium"),
        voice_enabled: user.settings.voice_enabled,
        ai_recommendations_enabled: user.settings.ai_recommendations_enabled,
        notification_frequency: safeValue(user.settings.notification_frequency, VALID_NOTIFICATION_FREQUENCIES, "daily"),
      });

      isInitialized.current = true;
    }
  }, [profileData]);

  const handleSubmit = () => {
    updateProfileMutation.mutate(formData, {
      onSuccess: () => {
        toast.success('تم تحديث الملف الشخصي بنجاح!');
      },
      onError: () => {
        toast.error('حدث خطأ أثناء تحديث الملف الشخصي');
      },
    });
  };

  return {
    profileData,
    formData,
    setFormData,
    handleSubmit,
    isPending: updateProfileMutation.isPending,
    isError: updateProfileMutation.isError,
    error: updateProfileMutation.error,
    isLoadingProfile: isLoading,
  };
};
