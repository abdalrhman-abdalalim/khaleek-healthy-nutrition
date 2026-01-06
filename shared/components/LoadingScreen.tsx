"use client";

import React from "react";
import { Loader2 } from "lucide-react";

interface LoadingScreenProps {
  className?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ className = "" }) => {
  return (
    <div
      className={`min-h-screen bg-background flex items-center justify-center ${className}`}
    >
      <Loader2 className="w-12 h-12 animate-spin text-foreground" />
    </div>
  );
};

export default LoadingScreen;
