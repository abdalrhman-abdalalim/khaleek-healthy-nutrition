"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";
import { ActivityType, CreateTrainingLogPayload } from "../models/type";
import SelectField from "../../edit_profile_page/components/SelectField";
import TextField from "../../edit_profile_page/components/TextField";


interface ActivityTypeOption {
  value: ActivityType;
  label: string;
}

interface TrainingFormProps {
  formData: CreateTrainingLogPayload;
  activityTypes: ActivityTypeOption[];
  isPending: boolean;
  isCardio: boolean;
  isStrength: boolean;
  onSubmit: (e: React.FormEvent) => void;
  updateField: (field: keyof CreateTrainingLogPayload, value: any) => void;
}

const TrainingForm: React.FC<TrainingFormProps> = ({
  formData,
  activityTypes,
  isPending,
  isCardio,
  isStrength,
  onSubmit,
  updateField,
}) => {
  return (
    <div className="bg-secondary/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-secondary/30">
      <div className="space-y-6">
        <TextField
          label="اسم النشاط"
          value={formData.activity_name}
          onChange={(e) => updateField("activity_name", e.target.value)}
          placeholder="مثال: تمرين صدر، جري، يوجا..."
          required
        />

        <SelectField
          label="نوع النشاط"
          value={formData.activity_type}
          onChange={(value) => updateField("activity_type", value as ActivityType)}
          options={activityTypes.map((t) => ({
            value: t.value,
            label: ` ${t.label}`,
          }))}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextField
            label="المدة (دقيقة)"
            placeholder="60"
            type="number"
            min={1}
            value={formData.duration || ""}
            onChange={(e) => updateField("duration", Number(e.target.value))}
            required
          />

          <TextField
            label="مستوى الشدة (1-10)"
            placeholder="5"
            type="number"
            min={1}
            max={10}
            value={formData.intensity_level}
            onChange={(e) =>
              updateField("intensity_level", Number(e.target.value))
            }
            required
          />
        </div>

        {isStrength && (
          <div className="p-6 bg-foreground/10 rounded-2xl border-2 border-foreground/30 space-y-4">
            <h3 className="text-xl font-bold text-foreground">
               تفاصيل تمرين القوة
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <TextField
                label="عدد التكرارات"
                placeholder="3"
                type="number"
                min={1}
                value={formData.reps || ""}
                onChange={(e) => updateField("reps", Number(e.target.value))}
              />
              <TextField
                label="عدد المجموعات"
                placeholder="4"
                type="number"
                min={1}
                value={formData.sets || ""}
                onChange={(e) => updateField("sets", Number(e.target.value))}
              />
              <TextField
                label="الوزن (كجم)"
                placeholder="20"
                type="number"
                min={0}
                step={0.5}
                value={formData.weight_used || ""}
                onChange={(e) =>
                  updateField("weight_used", Number(e.target.value))
                }
              />
            </div>
          </div>
        )}

        {isCardio && (
          <TextField
            label="المسافة (كم)"
            placeholder="2.5"
            type="number"
            min={0}
            step={0.1}
            value={formData.distance || ""}
            onChange={(e) => updateField("distance", Number(e.target.value))}
          />
        )}

        <TextField
          label="معدل نبضات القلب (40-220)"
          placeholder="145"
          type="number"
          min={40}
          max={220}
          value={formData.heart_rate_avg || ""}
          onChange={(e) =>
            updateField("heart_rate_avg", Number(e.target.value))
          }
        />

        <TextField
          label="تاريخ ووقت التمرين"
          type="datetime-local"
          value={formData.performed_at.replace(" ", "T").slice(0, 16)}
          onChange={(e) =>
            updateField("performed_at", e.target.value.replace("T", " ") + ":00")
          }
          required
        />

       <div className="space-y-2"> 
            <Label htmlFor="notes" className="text-lg font-bold text-textcolor flex items-center gap-2"> 
                <MessageSquare className="w-5 h-5 text-foreground" /> ملاحظات (اختياري) 
            </Label> 
            <Textarea id="notes" value={formData.notes || ""} 
                onChange={(e) => updateField("notes", e.target.value)} 
                placeholder="أضف أي ملاحظات عن التمرين..." rows={4} 
                className="text-lg bg-background/50 border-2 border-secondary/30 focus:border-foreground text-textcolor rounded-xl resize-none placeholder:text-textcolor/40" 
            /> 
        </div>

        <Button
          onClick={onSubmit}
          disabled={isPending}
          className="w-full h-14 text-xl font-bold bg-foreground text-background rounded-2xl"
        >
          {isPending ? "جاري الحفظ..." : "حفظ التمرين"}
        </Button>
      </div>
    </div>
  );
};

export default TrainingForm;
