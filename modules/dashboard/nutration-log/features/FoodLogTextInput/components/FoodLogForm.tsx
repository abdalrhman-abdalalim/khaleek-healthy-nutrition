import { Apple, ChefHat, Clock, Flame, Sparkles } from "lucide-react";
import { Label } from "recharts";
import { mealTypes } from "../../../utils/mealTypes";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dispatch, SetStateAction } from "react";
import ErrorDisplay from "./ErrorDisplay";

interface IProps {
  mealType: string;
  setMealType: Dispatch<
    SetStateAction<"breakfast" | "lunch" | "dinner" | "snack">
  >;
  text: string;
  setText: (text: string) => void;
  isCreating: boolean;
  isSubmitting: boolean;
  parseError: Error | null;
  handleSubmit: (e: React.FormEvent) => void;
  getMealTypeColor: (type: string) => string;
}
const FoodLogForm = ({
  handleSubmit,
  isCreating,
  isSubmitting,
  mealType,
  parseError,
  setMealType,
  setText,
  text,
  getMealTypeColor,
}: IProps) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Meal Type Selection - Enhanced with Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-linear-to-r from-background/10 to-background/5">
            <Clock className="w-5 h-5 text-foreground" />
          </div>
          <Label className="text-lg font-bold text-gray-800 dark:text-white">
            اختر نوع الوجبة
          </Label>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {mealTypes.map((meal, index) => (
            <motion.div
              key={meal.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <button
                type="button"
                className={`
                    relative w-full h-full p-5 rounded-2xl transition-all duration-300
                    flex flex-col items-center justify-center gap-3 group overflow-hidden border-0
                    ${
                      mealType === meal.value
                        ? `border-transparent shadow-xl scale-[1.02]`
                        : "dark:bg-secondary/20 hover:border-background/30"
                    }
                  `}
                onClick={() => setMealType(meal.value)}
              >
                {mealType === meal.value && (
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${getMealTypeColor(
                      meal.value
                    )} opacity-10`}
                  />
                )}

                {mealType === meal.value && (
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                )}

                <div
                  className={`
                      relative p-3 rounded-xl text-2xl transition-all duration-300
                      ${
                        mealType === meal.value
                          ? "scale-110 bg-foreground/90 backdrop-blur-sm"
                          : "bg-foreground/20 group-hover:bg-foreground/50"
                      }
                    `}
                >
                  {meal.icon}
                </div>

                <div className="relative z-10 text-center">
                  <span
                    className={`
                        font-bold text-sm transition-colors duration-300
                        ${
                          mealType === meal.value
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-700 dark:text-gray-300"
                        }
                      `}
                  >
                    {meal.label}
                  </span>
                </div>

                {/* Active Indicator */}
                {mealType === meal.value && (
                  <motion.div
                    layoutId="activeMeal"
                    className="absolute top-3 right-3 w-2 h-2 bg-linear-to-r from-background to-background/60 rounded-full"
                  />
                )}

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-background/0 via-background/0 to-background/0 group-hover:via-background/5 group-hover:to-background/10 transition-all duration-500 rounded-2xl" />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Text Input - Enhanced with Floating Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-linear-to-r from-background/10 to-background/5">
            <Apple className="w-5 h-5 text-foreground" />
          </div>
          <Label className="text-lg font-bold text-gray-800 dark:text-white">
            وصف الوجبة
          </Label>
        </div>

        <div className="relative group">
          {/* Floating Background Effect */}
          <div className="absolute -inset-1 bg-linear-to-r from-background/20 via-transparent to-background/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative from-background/40 rounded-2xl  border-gray-200  overflow-hidden shadow-lg">
            <Textarea
              id="foodText"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="مثال: 2 بيضة مسلوقة + خبز أسمر + كوب حليب"
              className="min-h-45 text-white resize-none relative bg-secondary/20 border-0 focus:ring-0 text-lg rounded-2xl px-6 py-5  dark:placeholder:text-textcolor placeholder:text-right focus:outline-none"
              dir="auto"
              maxLength={500}
            />

            {/* Bottom Bar with Character Count */}
            <div className="flex items-center justify-between px-6 py-4  dark:border-gray-800 bg-linear-to-r from-background/20 to-background">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Flame className="w-4 h-4 text-amber-500" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    تقدير السعرات
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      text.length > 400
                        ? "bg-red-500 animate-pulse"
                        : text.length > 300
                        ? "bg-amber-500"
                        : "bg-green-500"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      text.length > 400
                        ? "text-red-600 dark:text-red-400"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {text.length}/500
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Submit Button - Animated Gradient */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <Button
          type="submit"
          disabled={!text.trim() || isCreating || isSubmitting}
          className={`
              w-full h-16 text-lg font-bold rounded-2xl
              relative overflow-hidden group
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-500
              shadow-2xl hover:shadow-3xl
            `}
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-background group-hover:from-background/90 group-hover:via-background/80 group-hover:to-background/90 transition-all duration-500" />

          {/* Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center gap-3">
            {isCreating || isSubmitting ? (
              <>
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span className="animate-pulse text-foreground">
                  جاري المعالجة...
                </span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 animate-pulse text-foreground" />
                <span className="text-foreground">تسجيل الوجبة</span>
              </>
            )}
          </div>

          {/* Success Checkmark Animation */}
          <AnimatePresence>
            {!isCreating && !isSubmitting && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute left-6"
              >
                <div className="p-1 bg-white/20 rounded-lg">
                  <ChefHat className="w-5 h-5 text-foreground" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Error Display */}
      <ErrorDisplay parseError={parseError} />
    </form>
  );
};
export default FoodLogForm;
