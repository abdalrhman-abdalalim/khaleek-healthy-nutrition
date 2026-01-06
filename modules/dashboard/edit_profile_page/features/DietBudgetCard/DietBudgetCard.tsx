"use client";

import React from "react";
import { Utensils } from "lucide-react";
import { UpdateProfilePayload } from "../../models/type";
import CurrentValueBadge from "../../components/CurrentValueBadge";
import SelectField from "../../components/SelectField";


interface DietBudgetCardProps {
  formData: UpdateProfilePayload;
  setFormData: React.Dispatch<React.SetStateAction<UpdateProfilePayload>>;
  profileData?: any;
}

const DietBudgetCard: React.FC<DietBudgetCardProps> = ({ formData, setFormData, profileData }) => {
  return (
    <div className="bg-secondary/20 backdrop-blur-xl rounded-3xl p-6 border border-foreground/20 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-foreground/20 rounded-xl flex items-center justify-center">
          <Utensils className="w-5 h-5 text-foreground" />
        </div>
        <h2 className="text-2xl font-bold text-textcolor">النظام الغذائي والميزانية</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          <CurrentValueBadge value={profileData?.data.profile.diet_type} />

          <SelectField
            label="نوع النظام الغذائي"
            value={formData.diet_type}
            onChange={(value) =>
              setFormData({
                ...formData,
                diet_type: value as UpdateProfilePayload["diet_type"],
              })
            }
            options={[
              { value: "balanced", label: "متوازن" },
              { value: "keto", label: "كيتو" },
              { value: "vegetarian", label: "نباتي" },
              { value: "vegan", label: "نباتي صرف" },
              { value: "mediterranean", label: "البحر المتوسط" },
            ]}
          />
        </div>

        <div className="space-y-3">
          <CurrentValueBadge value={profileData?.data.profile.budget_level} />

          <SelectField
            label="مستوى الميزانية"
            value={formData.budget_level}
            onChange={(value) =>
              setFormData({
                ...formData,
                budget_level: value as UpdateProfilePayload["budget_level"],
              })
            }
            options={[
              { value: "low", label: "محدود" },
              { value: "medium", label: "متوسط" },
              { value: "high", label: "مرتفع" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default DietBudgetCard;
