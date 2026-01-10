"use client";
import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  value?: string;
  options: Option[];
  onChange: (value: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, value, options, onChange }) => {
  // جيب الـ label الصحيح حسب الـ value
  const selectedLabel = options.find(opt => opt.value === value)?.label || options[0]?.label;
  
  return (
    <div className="space-y-2">
      <Label className="text-textcolor/90 text-base">{label}</Label>
      
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="bg-background/40 border-foreground/20 text-textcolor focus:border-foreground focus:ring-foreground h-12 text-lg">
          <SelectValue placeholder={selectedLabel}>
            {selectedLabel}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-background border-foreground/20">
          {options.map((opt) => (
            <SelectItem
              key={opt.value}
              value={opt.value}
              className="text-textcolor focus:bg-foreground/20 focus:text-textcolor"
            >
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectField;