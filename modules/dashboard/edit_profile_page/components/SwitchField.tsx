"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface SwitchFieldProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const SwitchField: React.FC<SwitchFieldProps> = ({ label, description, checked, onChange }) => (
  <div className="flex items-center justify-between p-5 bg-background/40 rounded-2xl border border-foreground/10">
    <div className="space-y-1">
      <Label className="text-textcolor text-lg font-medium cursor-pointer">{label}</Label>
      {description && <p className="text-textcolor/60 text-sm">{description}</p>}
    </div>
    <Switch checked={checked} onCheckedChange={onChange} className="data-[state=checked]:bg-foreground" />
  </div>
);

export default SwitchField;
