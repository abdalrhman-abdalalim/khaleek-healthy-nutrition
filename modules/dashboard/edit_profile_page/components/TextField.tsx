"use client";
import React, { InputHTMLAttributes } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, ...props }) => (
  <div className="space-y-2">
    <Label className="text-textcolor/90 text-base">{label}</Label>
    <Input
      className="bg-background/40 border-foreground/20 text-textcolor focus:border-foreground focus:ring-foreground h-12 text-lg"
      {...props}
    />
  </div>
);

export default TextField;
