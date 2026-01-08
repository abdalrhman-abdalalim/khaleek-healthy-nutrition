"use client";

import { useEffect, useState } from "react";
import BackgroundElements from "./features/BackgroundElements/BackgroundElements";
import FeaturesSection from "./features/FeaturesSection/FeaturesSection";
import VoiceFeatureSection from "./features/VoiceFeatureSection/VoiceFeatureSection";
import BudgetAwareSection from "./features/BudgetAwareSection/BudgetAwareSection";
import StatsSuccessSection from "./features/StatsSuccessSection/StatsSuccessSection";
import HowItWorksSection from "./features/HowItWorksSection/HowItWorksSection";
import DietTypesSection from "./features/DietTypesSection/DietTypesSection";

export default function HomeScreen() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen  md:pt-24 overflow-hidden">
      <BackgroundElements />
          <FeaturesSection/>
          <HowItWorksSection/>
          <VoiceFeatureSection/>
          <DietTypesSection/>
          <BudgetAwareSection/>
          <StatsSuccessSection/>
    </section>
  );
}
