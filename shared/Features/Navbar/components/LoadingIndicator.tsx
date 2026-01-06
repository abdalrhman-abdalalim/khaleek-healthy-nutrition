"use client";

import { Loader2 } from "lucide-react";

interface LoadingIndicatorProps {
  size?: number;      
  text?: string;       
  className?: string;  
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  size = 4,         
  text = "جاري التحميل...",
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Loader2 className={`animate-spin w-${size} h-${size}`} />
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default LoadingIndicator;
