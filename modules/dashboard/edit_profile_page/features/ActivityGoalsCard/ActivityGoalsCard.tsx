"use client";

import React from "react";
import { Activity } from "lucide-react";
import { UpdateProfilePayload } from "../../models/type";
import CurrentValueBadge from "../../components/CurrentValueBadge";
import SelectField from "../../components/SelectField";


interface ActivityGoalsCardProps {
  formData: UpdateProfilePayload;
  setFormData: React.Dispatch<React.SetStateAction<UpdateProfilePayload>>;
  profileData?: any;
}

const ActivityGoalsCard: React.FC<ActivityGoalsCardProps> = ({ formData, setFormData, profileData }) => {
  return (
    <div className="bg-secondary/20 backdrop-blur-xl rounded-3xl p-6 border border-foreground/20 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-foreground/20 rounded-xl flex items-center justify-center">
          <Activity className="w-5 h-5 text-foreground" />
        </div>
        <h2 className="text-2xl font-bold text-textcolor">النشاط والأهداف</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          <CurrentValueBadge value={profileData?.data.profile.activity_level} />

          <SelectField
            label="مستوى النشاط"
            value={formData.activity_level}
            onChange={(value) =>
              setFormData({
                ...formData,
                activity_level: value as UpdateProfilePayload["activity_level"],
              })
            }
            options={[
              { value: "sedentary", label: "قليل الحركة" },
              { value: "light", label: "نشاط خفيف" },
              { value: "moderate", label: "نشاط متوسط" },
              { value: "active", label: "نشط" },
              { value: "very_active", label: "نشط جداً" },
            ]}
          />
        </div>

        <div className="space-y-3">
          <CurrentValueBadge value={profileData?.data.profile.goal} />

          <SelectField
            label="الهدف"
            value={formData.goal}
            onChange={(value) =>
              setFormData({
                ...formData,
                goal: value as UpdateProfilePayload["goal"],
              })
            }
            options={[
              { value: "lose_weight", label: "فقدان الوزن" },
              { value: "maintain", label: "الحفاظ على الوزن" },
              { value: "gain_weight", label: "زيادة الوزن" },
              { value: "build_muscle", label: "بناء العضلات" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityGoalsCard;
