import {
  Apple,
  BarChart3,
  Dumbbell,
  Home,
  Settings,
  Target,
} from "lucide-react";

export const navItems = [
  {
    icon: Home,
    label: "لوحة التحكم",
    href: "/dashboard",
    description: "نظرة عامة على بياناتك",
  },
  {
    icon: Apple,
    label: "التغذية",
    href: "/nutrition",
    description: "تتبع الوجبات والسعرات",
  },
  {
    icon: Dumbbell,
    label: "التدريب",
    href: "/training",
    description: "تمارين وخطة التدريب",
  },
  {
    icon: BarChart3,
    label: "التقدم",
    href: "/progress",
    description: "تتبع تقدمك",
  },
  {
    icon: Target,
    label: "الأهداف",
    href: "/goals",
    description: "أهدافك وطموحاتك",
  },
];
