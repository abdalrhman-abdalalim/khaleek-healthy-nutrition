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
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-2 rounded-lg bg-linear-to-r from-foreground/20 to-secondary/20"
          >
            <Clock className="w-5 h-5 text-foreground" />
          </motion.div>
          <Label className="text-lg font-bold text-textcolor">
            اختر نوع الوجبة
          </Label>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {mealTypes.map((meal, index) => (
            <motion.div
              key={meal.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                type="button"
                className={`
                  relative w-full h-full p-5 rounded-2xl transition-all duration-300
                  flex flex-col items-center justify-center gap-3 group overflow-hidden
                  ${
                    mealType === meal.value
                      ? "border-2 border-foreground shadow-xl scale-[1.02] bg-linear-to-br from-foreground/20 to-secondary/20"
                      : "border-2 border-foreground/20 bg-background/50 hover:border-foreground/40 hover:bg-secondary/10"
                  }
                `}
                onClick={() => setMealType(meal.value)}
              >
                {/* Active Background Glow */}
                {mealType === meal.value && (
                  <motion.div
                    layoutId="activeMealGlow"
                    className={`absolute inset-0 bg-linear-to-br ${getMealTypeColor(
                      meal.value
                    )} opacity-5 rounded-2xl`}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Shimmer Effect for Active */}
                {mealType === meal.value && (
                  <motion.div
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-textcolor/10 to-transparent"
                  />
                )}

                {/* Icon */}
                <motion.div
                  animate={
                    mealType === meal.value
                      ? { scale: [1, 1.1, 1] }
                      : { scale: 1 }
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`
                    relative p-3 rounded-xl text-2xl transition-all duration-300
                    ${
                      mealType === meal.value
                        ? "scale-110 bg-linear-to-br from-foreground to-secondary text-textcolor shadow-lg"
                        : "bg-foreground/20 text-foreground group-hover:bg-foreground/40"
                    }
                  `}
                >
                  {meal.icon}
                </motion.div>

                {/* Label */}
                <div className="relative z-10 text-center">
                  <motion.span
                    animate={{
                      color: mealType === meal.value ? "#F9B487" : "#EEEEEE",
                    }}
                    transition={{ duration: 0.3 }}
                    className="font-bold text-sm"
                  >
                    {meal.label}
                  </motion.span>
                </div>

                {/* Active Indicator Dot */}
                {mealType === meal.value && (
                  <motion.div
                    layoutId="activeMealIndicator"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-3 right-3 w-3 h-3 bg-linear-to-r from-foreground to-secondary rounded-full shadow-lg"
                  />
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-foreground/0 via-transparent to-secondary/0 group-hover:from-foreground/5 group-hover:to-secondary/5 transition-all duration-500 rounded-2xl" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Text Input - Enhanced */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="p-2 rounded-lg bg-linear-to-r from-secondary/20 to-foreground/20"
          >
            <Apple className="w-5 h-5 text-foreground" />
          </motion.div>
          <Label className="text-lg font-bold text-textcolor">
            وصف الوجبة
          </Label>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative group"
        >
          {/* Floating Background Effect */}
          <motion.div
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -inset-1 bg-linear-to-r from-foreground/20 via-secondary/20 to-foreground/20 rounded-2xl blur"
          />

          <div className="relative bg-linear-to-br from-secondary/20 to-foreground/10 rounded-2xl border-2 border-foreground/30 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Textarea */}
            <Textarea
              id="foodText"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="مثال: 2 بيضة مسلوقة + خبز أسمر + كوب حليب"
              className="min-h-40 text-textcolor resize-none relative bg-transparent border-0 focus:ring-0 text-lg rounded-2xl px-6 py-5 placeholder:text-textcolor/40 focus:outline-none"
              dir="auto"
              maxLength={500}
              disabled={isCreating || isSubmitting}
            />

            {/* Bottom Bar with Character Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-between px-6 py-4 border-t-2 border-foreground/20 bg-linear-to-r from-background/30 to-background/20"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Flame className="w-4 h-4 text-foreground" />
                </motion.div>
                <span className="text-xs text-textcolor/70 font-medium">
                  تقدير السعرات
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{
                      backgroundColor:
                        text.length > 400
                          ? "#F9B487"
                          : text.length > 300
                            ? "#D9E9CF"
                            : "#D9E9CF",
                    }}
                    className="w-2 h-2 rounded-full"
                  />
                  <motion.span
                    animate={{
                      color:
                        text.length > 400
                          ? "#F9B487"
                          : text.length > 300
                            ? "#D9E9CF"
                            : "#EEEEEE",
                    }}
                    className="text-sm font-medium"
                  >
                    {text.length}/500
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Submit Button - Animated */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.button
          type="submit"
          disabled={!text.trim() || isCreating || isSubmitting}
          className={`
            w-full h-16 text-lg font-bold rounded-2xl
            relative overflow-hidden group
            transition-all duration-500
            shadow-lg hover:shadow-2xl 
            ${
              !text.trim() || isCreating || isSubmitting
                ? "opacity-60 cursor-not-allowed"
                : "opacity-100"
            }
          `}
        >
          {/* Animated linear Background */}
          <motion.div
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-linear-to-r from-foreground via-secondary to-foreground bg-[length:200%_200%]"
          />

          {/* Shimmer Effect */}
          <motion.div
            animate={{ x: [-100, 100] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-textcolor/20 to-transparent"
          />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center gap-3">
            {isCreating || isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-textcolor/30 border-t-textcolor rounded-full"
                />
                <span className="text-black font-semibold">
                  جاري المعالجة...
                </span>
              </>
            ) : (
              <>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-5 h-5 text-black" />
                </motion.div>
                <span className="text-black">تسجيل الوجبة</span>
              </>
            )}
          </div>

          {/* Success Icon */}
          <AnimatePresence>
            {!isCreating && !isSubmitting && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="absolute left-6"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-1 bg-textcolor/20 rounded-lg border border-textcolor/40"
                >
                  <ChefHat className="w-5 h-5 text-textcolor" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Error Display */}
      <ErrorDisplay parseError={parseError} />
    </form>
  );
};

export default FoodLogForm;
