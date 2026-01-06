"use client";

import React from "react";
import { User } from "lucide-react";
import { UpdateProfilePayload } from "../../models/type";
import TextField from "../../components/TextField";
import SelectField from "../../components/SelectField";
import CurrentValueBadge from "../../components/CurrentValueBadge";


interface PersonalInfoCardProps {
  formData: UpdateProfilePayload;
  setFormData: React.Dispatch<React.SetStateAction<UpdateProfilePayload>>;
  profileData?: any;
}

const PersonalInfoCard: React.FC<PersonalInfoCardProps> = ({ formData, setFormData, profileData }) => {
  return (
    <div className="bg-secondary/20 backdrop-blur-xl rounded-3xl p-6 border border-foreground/20 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-foreground/20 rounded-xl flex items-center justify-center">
          <User className="w-5 h-5 text-foreground" />
        </div>
        <h2 className="text-2xl font-bold text-textcolor">المعلومات الشخصية</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextField
          label="العمر"
          type="number"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) || 0 })}
          placeholder="أدخل عمرك"
        />

        <TextField
          label="الطول (سم)"
          type="number"
          value={formData.height}
          onChange={(e) => setFormData({ ...formData, height: parseFloat(e.target.value) || 0 })}
          placeholder="أدخل طولك"
        />

        <TextField
          label="الوزن الحالي (كجم)"
          type="number"
          value={formData.weight}
          onChange={(e) => setFormData({ ...formData, weight: parseFloat(e.target.value) || 0 })}
          placeholder="أدخل وزنك"
        />

        <TextField
          label="الوزن المستهدف (كجم)"
          type="number"
          value={formData.target_weight}
          onChange={(e) => setFormData({ ...formData, target_weight: parseFloat(e.target.value) || 0 })}
          placeholder="أدخل الوزن المستهدف"
        />

        <div className="flex flex-col sm:flex-row sm:items-end sm:gap-4">
          <SelectField
            label="الجنس"
            value={formData.gender}
            onChange={(value) =>
              setFormData({ ...formData, gender: value as "male" | "female" })
            }
            options={[
              { value: "male", label: "ذكر" },
              { value: "female", label: "أنثى" },
            ]}
          />

          <CurrentValueBadge
            value={profileData?.data.profile.gender}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
