// app/dashboard/lib/utils/mealTypes.ts
export const mealTypes = [
  {
    value: "breakfast",
    label: "فطور",
    icon: "🌅",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    value: "lunch",
    label: "غداء",
    icon: "☀️",
    color: "bg-orange-100 text-orange-800",
  },
  {
    value: "dinner",
    label: "عشاء",
    icon: "🌙",
    color: "bg-blue-100 text-blue-800",
  },
  {
    value: "snack",
    label: "وجبة خفيفة",
    icon: "🍎",
    color: "bg-green-100 text-green-800",
  },
] as const;

export type MealType = (typeof mealTypes)[number]["value"];

export const getMealTypeInfo = (mealType: MealType) => {
  return mealTypes.find((meal) => meal.value === mealType) || mealTypes[0];
};

export const getMealTypeLabel = (mealType: string): string => {
  const meal = mealTypes.find((m) => m.value === mealType);
  return meal ? meal.label : mealType;
};

export const formatMealTypeWithIcon = (mealType: string): string => {
  const meal = mealTypes.find((m) => m.value === mealType);
  return meal ? `${meal.icon} ${meal.label}` : mealType;
};
