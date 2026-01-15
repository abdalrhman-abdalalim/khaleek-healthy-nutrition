"use client";

import { useState } from "react";
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
      // const parseResult = await parseFoodText(text);

      // if (parseResult.success && parseResult.data?.length) {
      //   toast.success(
      //     `تم التعرف على ${parseResult.data.length} عنصر غذائي بنجاح! ✨`,
      //     {
      //       icon: "👨‍🍳",
      //       style: {
      //         background: "linear-gradient(135deg, #F9B487 0%, #D9E9CF 100%)",
      //         color: "#174143",
      //       },
      //     }
      //   );
      // }

      const result = await createFoodLog({ meal_type: mealType, text });

      if (result.success) {
        toast.success(`تم إضافة ${getMealTypeInfo(mealType).label} بنجاح! 🎉`, {
          duration: 3000,
          icon: "✅",
          style: {
            background: "linear-gradient(135deg, #D9E9CF 0%, #F9B487 100%)",
            color: "#174143",
          },
        });
        setText("");
      }
    } catch (error) {
      toast.error("حدث خطأ أثناء حفظ الطعام", {
        icon: "❌",
        style: {
          background: "linear-gradient(135deg, #F9B487 0%, #D9E9CF 100%)",
          color: "#174143",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMealTypeColor = (type: string) => {
    const colors = {
      breakfast: "from-foreground via-secondary to-foreground",
      lunch: "from-secondary via-foreground to-secondary",
      dinner: "from-foreground to-secondary",
      snack: "from-secondary to-foreground",
    };
    return colors[type as keyof typeof colors];
  };

  return (
    <div className="space-y-8">
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
