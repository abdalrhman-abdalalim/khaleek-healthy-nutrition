"use client";

import { CheckCircle } from "lucide-react";

interface RecommendationCategoryProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  variant?: "secondary" | "foreground";
}

const RecommendationCategory = ({
  title,
  icon,
  items,
  variant = "secondary",
}: RecommendationCategoryProps) => {
  const border =
    variant === "secondary"
      ? "border-secondary/30 from-secondary/10"
      : "border-foreground/30 from-foreground/10";

  const iconColor =
    variant === "secondary" ? "text-secondary" : "text-foreground";

  return (
    <div
      className={`bg-linear-to-br ${border} to-transparent backdrop-blur-xl rounded-3xl p-8 border-2 shadow-xl`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={iconColor}>{icon}</div>
        <h3 className="text-2xl font-bold text-textcolor">{title}</h3>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 p-4 bg-background/50 rounded-2xl border ${
              variant === "secondary"
                ? "border-secondary/20"
                : "border-foreground/20"
            }`}
          >
            <CheckCircle
              className={`w-5 h-5 ${iconColor} shrink-0 mt-0.5`}
            />
            <span className="text-textcolor/90">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationCategory;
