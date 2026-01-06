"use client";

import React from "react";
import { AlertCircle } from "lucide-react";

interface ErrorAlertProps {
  error?: unknown;
  className?: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ error, className = "" }) => {
  if (!error) return null;

  const message =
    error instanceof Error
      ? error.message
      : "حدث خطأ أثناء حفظ التغييرات";

  return (
    <div
      className={`bg-red-500/20 border border-red-500/50 rounded-2xl p-4 mb-6 flex items-center gap-3 animate-in fade-in slide-in-from-top-2 ${className}`}
    >
      <AlertCircle className="w-6 h-6 text-red-400 shrink-0" />
      <p className="text-red-300 font-medium">{message}</p>
    </div>
  );
};

export default ErrorAlert;
