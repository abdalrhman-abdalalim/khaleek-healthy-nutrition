"use client";

import { Calendar, Clock, Flame, TrendingUp, Weight, Repeat, Layers, MapPin, Heart, MessageCircle } from "lucide-react";
import React from "react";
import { TrainingLog } from "../models/getall/type";

interface TrainingLogCardProps {
  log: TrainingLog; 
  activityColors: Record<string, string>;
}

export default function TrainingLogCard({ log, activityColors }: TrainingLogCardProps) {
  return (
    <div className="group relative overflow-hidden bg-secondary/10 backdrop-blur-xl rounded-3xl p-6 border-2 border-secondary/30 hover:border-foreground transition-all duration-300 hover:scale-[1.02] shadow-xl">
      <div className="absolute top-0 left-0 w-40 h-40 bg-foreground/10 rounded-full blur-3xl" />
      <div className="relative space-y-4">

        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h3 className="text-2xl font-bold text-textcolor">{log.activity_name}</h3>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-1 ${activityColors[log.activity_type]}`}>
                {log.activity_type === "cardio" ? "كارديو" : log.activity_type === "strength" ? "قوة" : log.activity_type === "flexibility" ? "مرونة" : log.activity_type === "sports" ? "رياضات" : log.activity_type === "hiit" ? "HIIT" : "أخرى"}
              </div>
            </div>
          </div>

          <div className="text-right space-y-1">
            <div className="flex items-center justify-end gap-2 text-textcolor/70 text-lg">
              <Calendar className="w-4 h-4 text-foreground" />
              <span>{new Date(log.performed_at).toLocaleDateString("ar-EG")}</span>
            </div>
            <div className="flex items-center justify-end gap-2 text-textcolor/70 text-lg">
              <Clock className="w-4 h-4 text-foreground" />
              <span>{new Date(log.performed_at).toLocaleTimeString("ar-EG",{ hour:"2-digit", minute:"2-digit" })}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-foreground/10 rounded-2xl border border-foreground/30">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-5 h-5 text-foreground" />
              <span className="text-textcolor/70 text-sm">السعرات</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{log.estimated_calories_burned}</div>
            <div className="text-xs text-textcolor/60 mt-1">{log.calories_per_minute} س/د</div>
          </div>

          <div className="p-4 bg-secondary/10 rounded-2xl border border-secondary/30">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-secondary" />
              <span className="text-textcolor/70 text-sm">المدة</span>
            </div>
            <div className="text-2xl font-bold text-secondary">{log.duration}</div>
            <div className="text-xs text-textcolor/60 mt-1">دقيقة</div>
          </div>
        </div>

        <div className="p-4 bg-textcolor/5 rounded-2xl border border-textcolor/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-textcolor/70 text-sm flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-textcolor" />
              مستوى الشدة
            </span>
            <span className="text-xl font-bold text-textcolor">{log.intensity_level}/10</span>
          </div>
          <div className="text-sm text-foreground font-semibold">{log.intensity_description}</div>
        </div>

        {log.activity_type === "strength" && (log.reps || log.sets || log.weight_used) && (
          <div className="p-4 bg-foreground/10 rounded-2xl border border-foreground/30">
            <div className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
              <Weight className="w-5 h-5" />
              تفاصيل القوة
            </div>
            <div className="grid grid-cols-3 gap-3 text-textcolor">
              {log.reps && <StatCard icon={<Repeat className="w-5 h-5 text-foreground" />} label="التكرارات" value={log.reps} />}
              {log.sets && <StatCard icon={<Layers className="w-5 h-5 text-foreground" />} label="المجموعات" value={log.sets} />}
              {log.weight_used && <StatCard icon={<Weight className="w-5 h-5 text-foreground" />} label="الوزن" value={`${log.weight_used} كجم`} />}
            </div>
          </div>
        )}

        {log.activity_type === "cardio" && log.distance && (
          <div className="p-4 bg-secondary/10 rounded-2xl border border-secondary/30 flex items-center gap-3">
            <MapPin className="w-5 h-5 text-secondary" />
            <div>
              <div className="text-sm font-bold text-secondary mb-1">المسافة</div>
              <div className="text-2xl font-bold text-textcolor">{log.distance} كم</div>
            </div>
          </div>
        )}

        {log.heart_rate_avg && (
          <div className="p-4 bg-foreground/10 rounded-2xl border border-foreground/30">
            <div className="flex items-center justify-between">
              <span className="text-sm text-textcolor/70 flex items-center gap-2">
                <Heart className="w-5 h-5 text-foreground" />
                معدل النبض
              </span>
              <span className="text-xl font-bold text-foreground">{log.heart_rate_avg} bpm</span>
            </div>
          </div>
        )}

        {log.notes && (
          <div className="p-4 bg-background/30 rounded-2xl border border-textcolor/20 flex items-start gap-3">
            <MessageCircle className="w-5 h-5 text-textcolor/70 mt-1" />
            <div>
              <div className="text-sm text-textcolor/70 mb-1">ملاحظات:</div>
              <div className="text-textcolor">{log.notes}</div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) {
  return (
    <div className="flex flex-col items-center gap-1 text-center bg-background/40 rounded-xl p-3 border border-secondary/20">
      {icon}
      <div className="text-xs opacity-70">{label}</div>
      <div className="text-lg font-bold">{value}</div>
    </div>
  );
}
