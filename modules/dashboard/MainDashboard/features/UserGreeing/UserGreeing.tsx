// components/dashboard/UserGreeting.tsx
"use client";

import { Sparkles } from "lucide-react";

interface UserGreetingProps {
  userName?: string;
  greeting?: string;
}

export default function UserGreeting({
  userName = "أحمد",
  greeting = "مرحباً",
}: UserGreetingProps) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-linear-to-r from-foreground/40 to-foreground/90 shadow-sm my-3 mx-5">
      <div className="flex items-center gap-3">
        {/* Sparkle icon */}
        <div className="p-2 rounded-lg bg-background/20">
          <Sparkles className="h-5 w-5 text-background" />
        </div>

        {/* Greeting text */}
        <div>
          <h1 className="text-xl font-bold text-background">
            {greeting}، <span className="font-extrabold">{userName}</span>
          </h1>
          <p className="text-sm text-background/80 mt-0.5">
            جاهز لتحقيق أهدافك اليوم؟
          </p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="hidden sm:block">
        <div className="h-8 w-8 rounded-full bg-background/20 animate-pulse-slow" />
      </div>
    </div>
  );
}
