// app/dashboard/components/FoodLogTextInput.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";
import { useFoodLogsData } from "../../models/nutration-food-log";
import { getMealTypeInfo, mealTypes } from "../../utils/mealTypes";

export default function FoodLogTextInput() {
  const [mealType, setMealType] = useState<
    "breakfast" | "lunch" | "dinner" | "snack"
  >("breakfast");
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { createFoodLog, parseFoodText, isCreating, parseError } =
    useFoodLogsData();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) {
      toast.error("الرجاء إدخال وصف للطعام");
      return;
    }

    setIsSubmitting(true);

    // First try to parse the text to show preview
    const parseResult = await parseFoodText(text);

    if ((parseResult.success && parseResult.data?.length) ?? 0 > 0) {
      // Show parsed items in toast
      toast.success(`تم التعرف على ${parseResult.data} عنصر غذائي`);
    }

    // Create the food log
    const result = await createFoodLog(
      { meal_type: mealType, text },
      {
        onSuccess: (data) => {
          toast.success(`تم إضافة ${getMealTypeInfo(mealType).label} بنجاح!`);
          setText(""); // Clear input
        },
        onError: (error) => {
          toast.error("حدث خطأ أثناء حفظ الطعام");
          console.error("Food log error:", error);
        },
      }
    );

    setIsSubmitting(false);
  };

  const getMealTypeColor = (type: string) => {
    const colors = {
      breakfast: "bg-gradient-to-r from-amber-500 to-orange-500",
      lunch: "bg-gradient-to-r from-emerald-500 to-teal-500",
      dinner: "bg-gradient-to-r from-blue-500 to-indigo-500",
      snack: "bg-gradient-to-r from-purple-500 to-pink-500",
    };
    return colors[type as keyof typeof colors];
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Meal Type Selection - Enhanced */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-4 bg-linear-to-b from-primary to-primary/60 rounded-full"></div>
            <Label className="text-base font-semibold text-gray-800 dark:text-white">
              نوع الوجبة
            </Label>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {mealTypes.map((meal) => (
              <Button
                key={meal.value}
                type="button"
                variant="ghost"
                className={`
                  relative h-auto py-4 px-3 rounded-xl border-2 transition-all duration-300
                  flex flex-col items-center justify-center gap-2 group
                  ${
                    mealType === meal.value
                      ? `${getMealTypeColor(
                          meal.value
                        )} text-white border-transparent shadow-lg`
                      : "border-0 bg-secondary/30"
                  }
                `}
                onClick={() => setMealType(meal.value)}
              >
                <span
                  className={`text-2xl transition-transform duration-300 ${
                    mealType === meal.value
                      ? "scale-110"
                      : "group-hover:scale-105"
                  }`}
                >
                  {meal.icon}
                </span>
                <span className="font-semibold text-sm">{meal.label}</span>
                {mealType === meal.value && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Text Input - Enhanced */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-4 bg-linear-to-b from-primary to-primary/60 rounded-full"></div>
            <Label className="text-base font-semibold text-gray-800 dark:text-white">
              وصف الطعام
            </Label>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent rounded-xl group-hover:from-primary/10 transition-all duration-300"></div>
            <Textarea
              id="foodText"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="مثال: 2 بيضة مسلوقة + خبز أسمر + كوب حليب"
              className="min-h-30 resize-none relative border-2  bg-secondary/5 focus:border-primary transition-all duration-300 text-base rounded-xl px-4 py-3"
              dir="auto"
            />
            <div className="flex items-center justify-between mt-2 px-1">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                اكتب وصفاً واضحاً للوجبة (بالعربية أو الإنجليزية)
              </p>
              <span
                className={`text-xs ${
                  text.length > 200 ? "text-red-500" : "text-gray-400"
                }`}
              >
                {text.length}/200
              </span>
            </div>
          </div>
        </div>

        {/* Submit Button - Enhanced */}
        <Button
          type="submit"
          disabled={!text.trim() || isCreating || isSubmitting}
          className={`
            w-full h-14 text-lg font-semibold rounded-xl
            bg-gradient-to-r from-primary to-primary/80 
            hover:from-primary/90 hover:to-primary/70
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0
            shadow-lg hover:shadow-xl
            ${isCreating || isSubmitting ? "animate-pulse" : ""}
          `}
        >
          {isCreating || isSubmitting ? (
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>جاري الإضافة...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span>إضافة الطعام</span>
            </div>
          )}
        </Button>

        {/* Error Display - Enhanced */}
        {parseError && (
          <div className="p-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3 animate-shake">
            <div className="p-2 bg-red-100 dark:bg-red-800 rounded-lg">
              <svg
                className="w-5 h-5 text-red-600 dark:text-red-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium text-red-800 dark:text-red-300">
                ⚠️ خطأ في التحليل
              </p>
              <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                تأكد من أن الوصف واضح وصحيح
              </p>
            </div>
          </div>
        )}
      </form>

      {/* Quick Examples - Enhanced */}
      <div className="p-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <h4 className="font-bold text-gray-700 dark:text-gray-300">
            أمثلة سريعة
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              text: "2 بيضة مسلوقة + رغيف خبز أسمر + كوب حليب",
              emoji: "🥚🍞🥛",
            },
            {
              text: "صدر دجاج مشوي 150 جم + أرز بسمتي + سلطة",
              emoji: "🍗🍚🥗",
            },
            { text: "تفاحة متوسطة + حفنة لوز + كوب زبادي", emoji: "🍎🌰🥛" },
          ].map((example, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setText(example.text)}
              className="group relative overflow-hidden p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary transition-all duration-300 text-right"
            >
              <div className="absolute left-3 top-3 text-2xl opacity-80">
                {example.emoji}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300 pr-10 group-hover:text-primary transition-colors duration-300">
                {example.text}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
