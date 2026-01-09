/* eslint-disable @typescript-eslint/no-unused-vars */
// app/dashboard/components/FoodLogTextInput.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";
import { useFoodLogsData } from "../../models/nutration-food-log";
import { getMealTypeInfo, mealTypes } from "../../utils/mealTypes";
import { Sparkles, Zap, ChefHat, Apple, Clock, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderWithGradiant from "./components/HeaderWithGradiant";
import FoodLogForm from "./components/FoodLogForm";
import TipsSection from "./components/TipsSection";

export default function FoodLogTextInput() {
  const [mealType, setMealType] = useState<
    "breakfast" | "lunch" | "dinner" | "snack"
  >("breakfast");
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeExample, setActiveExample] = useState<number | null>(null);

  const { createFoodLog, parseFoodText, isCreating, parseError } =
    useFoodLogsData();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) {
      toast.error("الرجاء إدخال وصف للطعام");
      return;
    }

    setIsSubmitting(true);

    try {
      // First try to parse the text to show preview
      const parseResult = await parseFoodText(text);

      if (parseResult.success && parseResult.data?.length) {
        toast.success(
          `تم التعرف على ${parseResult.data.length} عنصر غذائي بنجاح! ✨`,
          {
            icon: "👨‍🍳",
            style: {
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
            },
          }
        );
      }

      // Create the food log
      const result = await createFoodLog({ meal_type: mealType, text });

      if (result.success) {
        toast.success(`تم إضافة ${getMealTypeInfo(mealType).label} بنجاح! 🎉`, {
          duration: 3000,
          icon: "✅",
          style: {
            background: "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",
            color: "white",
          },
        });
        setText(""); // Clear input
      }
    } catch (error) {
      toast.error("حدث خطأ أثناء حفظ الطعام", {
        icon: "❌",
        style: {
          background: "linear-gradient(135deg, #ff6b6b 0%, #ff4757 100%)",
          color: "white",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMealTypeColor = (type: string) => {
    const colors = {
      breakfast: "from-amber-400 via-orange-400 to-yellow-400",
      lunch: "from-emerald-400 via-teal-400 to-green-400",
      dinner: "from-blue-400 via-indigo-400 to-purple-400",
      snack: "from-purple-400 via-pink-400 to-rose-400",
    };
    return colors[type as keyof typeof colors];
  };

  return (
    <div className="space-y-8">
      {/* Header with Gradient */}
      <HeaderWithGradiant />

      <FoodLogForm
        mealType={mealType}
        setMealType={setMealType}
        text={text}
        setText={setText}
        isCreating={isCreating}
        isSubmitting={isSubmitting}
        parseError={parseError}
        handleSubmit={handleSubmit}
        getMealTypeColor={getMealTypeColor}
      />

      <TipsSection />
    </div>
  );
}
