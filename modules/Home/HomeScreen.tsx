// components/sections/HomeScreentsx
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Sparkles, Target, Users, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import BackgroundElements from "./features/BackgroundElements/BackgroundElements";
import BadgeSection from "./features/BadgeSection/BadgeSection";
import MainTitles from "./features/MainTitles/MainTitles";
import Stats from "./features/Stats/Stats";

export default function HomeScreen() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative  pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      <BackgroundElements />
      <div className="container relative px-6">
        <div className="max-w-5xl mx-auto text-center">
          <BadgeSection />
          <MainTitles />
          <Stats />
        </div>
      </div>
    </section>
  );
}
