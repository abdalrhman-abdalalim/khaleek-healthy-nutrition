"use client";

import React from "react";
import { Settings } from "lucide-react";
import { UpdateProfilePayload } from "../../models/type";
import SwitchField from "../../components/SwitchField";
import SelectField from "../../components/SelectField";
import CurrentValueBadge from "../../components/CurrentValueBadge";


interface SettingsCardProps {
  formData: UpdateProfilePayload;
  setFormData: React.Dispatch<React.SetStateAction<UpdateProfilePayload>>;
  profileData?: any;
}

const SettingsCard: React.FC<SettingsCardProps> = ({ formData, setFormData, profileData }) => {
  return (
    <div className="bg-secondary/20 backdrop-blur-xl rounded-3xl p-6 border border-foreground/20 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-foreground/20 rounded-xl flex items-center justify-center">
          <Settings className="w-5 h-5 text-foreground" />
        </div>
        <h2 className="text-2xl font-bold text-textcolor">الإعدادات</h2>
      </div>

      <div className="space-y-6">
        <SwitchField
          label="تفعيل الصوت"
          description="استخدم الأوامر الصوتية للتحكم في التطبيق"
          checked={formData.voice_enabled}
          onChange={(checked) => setFormData({ ...formData, voice_enabled: checked })}
        />

        <SwitchField
          label="توصيات الذكاء الاصطناعي"
          description="احصل على توصيات مخصصة بناءً على نشاطك"
          checked={formData.ai_recommendations_enabled}
          onChange={(checked) => setFormData({ ...formData, ai_recommendations_enabled: checked })}
        />

        <div className="flex flex-col sm:flex-row sm:items-end sm:gap-4">
          <SelectField
            label="تكرار الإشعارات"
            value={formData.notification_frequency}
            onChange={(value) =>
              setFormData({
                ...formData,
                notification_frequency: value as UpdateProfilePayload["notification_frequency"],
              })
            }
            options={[
              { value: "never", label: "أبداً" },
              { value: "daily", label: "يومي" },
              { value: "weekly", label: "أسبوعي" },
            ]}
          />
          <CurrentValueBadge value={profileData?.data.settings.notification_frequency} />
        </div>
      </div>
    </div>
  );
};

export default SettingsCard;
