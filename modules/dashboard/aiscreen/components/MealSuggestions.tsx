"use client";

import { Utensils } from "lucide-react";

interface MealSuggestionsProps {
  breakfast: string;
  lunch: string;
  dinner: string;
  snacks?: string[];
}

const MealSuggestions = ({
  breakfast,
  lunch,
  dinner,
  snacks,
}: MealSuggestionsProps) => {
  return (
    <div className="bg-linear-to-br from-foreground/10 to-secondary/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-foreground/30 shadow-2xl mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Utensils className="w-8 h-8 text-foreground" />
        <h2 className="text-3xl font-bold text-textcolor">
          اقتراحات الوجبات
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <MealCard title="🌅 الإفطار" text={breakfast} variant="secondary" />
        <MealCard title="☀️ الغداء" text={lunch} variant="foreground" />
        <MealCard title="🌙 العشاء" text={dinner} variant="secondary" />
      </div>

      {snacks && snacks.length > 0 && (
        <div className="mt-6 bg-foreground/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-foreground/30">
          <div className="text-xl font-bold text-foreground mb-4">
            🍎 وجبات خفيفة
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {snacks.map((snack, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-background/50 rounded-xl"
              >
                <div className="w-2 h-2 bg-foreground rounded-full" />
                <span className="text-textcolor/90">{snack}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MealCard = ({
  title,
  text,
  variant,
}: {
  title: string;
  text: string;
  variant: "secondary" | "foreground";
}) => {
  return (
    <div
      className={`${
        variant === "secondary"
          ? "bg-secondary/10 border-secondary/30 text-secondary"
          : "bg-foreground/10 border-foreground/30 text-foreground"
      } backdrop-blur-sm rounded-2xl p-6 border-2`}
    >
      <div className="text-xl font-bold mb-3">{title}</div>
      <p className="text-textcolor/90 leading-relaxed">{text}</p>
    </div>
  );
};

export default MealSuggestions;
