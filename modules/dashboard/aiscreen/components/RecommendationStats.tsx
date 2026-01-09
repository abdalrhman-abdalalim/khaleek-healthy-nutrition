"use client";

import { Calendar, TrendingUp, Star } from "lucide-react";

interface RecommendationStatsProps {
  period: {
    label: string;
    start: string;
    end: string;
  };
  adherencePercentage: number;
  overallRating: number | null;
}

const RecommendationStats = ({
  period,
  adherencePercentage,
  overallRating,
}: RecommendationStatsProps) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 mb-12">
      <div className="bg-linear-to-br from-secondary/20 to-secondary/5 backdrop-blur-xl rounded-3xl p-6 border-2 border-secondary/30 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <Calendar className="w-6 h-6 text-secondary" />
          <span className="text-textcolor/70 font-semibold">الفترة</span>
        </div>
        <div className="text-2xl font-bold text-secondary">{period.label}</div>
        <div className="text-sm text-textcolor/60 mt-1">
          {new Date(period.start).toLocaleDateString("ar-EG")} -{" "}
          {new Date(period.end).toLocaleDateString("ar-EG")}
        </div>
      </div>

      <div className="bg-linear-to-br from-foreground/20 to-foreground/5 backdrop-blur-xl rounded-3xl p-6 border-2 border-foreground/30 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="w-6 h-6 text-foreground" />
          <span className="text-textcolor/70 font-semibold">نسبة الالتزام</span>
        </div>
        <div className="text-4xl font-black text-foreground mb-2">
          {adherencePercentage}%
        </div>
        <div className="h-3 bg-background/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-foreground to-secondary rounded-full transition-all duration-1000"
            style={{ width: `${adherencePercentage}%` }}
          />
        </div>
      </div>

      <div className="bg-linear-to-br from-secondary/20 to-secondary/5 backdrop-blur-xl rounded-3xl p-6 border-2 border-secondary/30 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <Star className="w-6 h-6 text-secondary" />
          <span className="text-textcolor/70 font-semibold">التقييم العام</span>
        </div>
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-8 h-8 ${
                i < (overallRating || 0)
                  ? "text-secondary fill-secondary"
                  : "text-textcolor/30"
              }`}
            />
          ))}
        </div>
        <div className="text-sm text-textcolor/60 mt-2">
          {overallRating || 0}/5 نجوم
        </div>
      </div>
    </div>
  );
};

export default RecommendationStats;
