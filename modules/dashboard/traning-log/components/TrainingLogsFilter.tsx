"use client";

import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/shared/Lib/utils";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface TrainingLogsFilterProps {
  searchText: string;
  setSearchText: (v: string) => void;
  selectedType: string;
  setSelectedType: (v: string) => void;
  selectedDate: string;
  setSelectedDate: (v: string) => void;
}

export default function TrainingLogsFilter({
  searchText,
  setSearchText,
  selectedType,
  setSelectedType,
  selectedDate,
  setSelectedDate,
}: TrainingLogsFilterProps) {
  return (
    <div
      className="
        bg-secondary/10 
        backdrop-blur-xl 
        rounded-3xl 
        p-6 
        border 
        border-secondary/30
      "
    >
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-4
        "
      >
        <Input
          placeholder=" ابحث باسم التمرين..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="
            h-12 
            text-lg 
            bg-background/60
            text-textcolor
            border-2 border-secondary/30
            rounded-xl
            placeholder:text-textcolor/50
            focus:border-foreground
            focus:ring-2 focus:ring-foreground/40
            transition-all
          "
        />

        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger
            className="
              h-12 
              bg-background/60
              text-textcolor
              border-2 border-secondary/30
              rounded-xl
              focus:border-foreground
              focus:ring-2 focus:ring-foreground/40
              transition-all
            "
          >
            <SelectValue placeholder="نوع التمرين" />
          </SelectTrigger>

          <SelectContent
            className="
              bg-background
              text-textcolor
              border border-secondary/30
              rounded-xl
            "
          >
            <SelectItem value="all">الكل</SelectItem>
            <SelectItem value="cardio">كارديو</SelectItem>
            <SelectItem value="strength">قوة</SelectItem>
            <SelectItem value="flexibility">مرونة</SelectItem>
            <SelectItem value="sports">رياضات</SelectItem>
            <SelectItem value="hiit">HIIT</SelectItem>
            <SelectItem value="other">أخرى</SelectItem>
          </SelectContent>
        </Select>

        <Input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="
            h-12
            bg-background/60
            text-textcolor
            border-2 border-secondary/30
            rounded-xl
            focus:border-foreground
            focus:ring-2 focus:ring-foreground/40
            transition-all
          "
        />

        <button
          onClick={() => {
            setSearchText("");
            setSelectedType("all");
            setSelectedDate("");
          }}
          className={cn(
            buttonVariants(),
            "h-12",
            "w-full",
            "rounded-xl",
            "border-2 border-foreground",
            "text-foreground",
            "font-bold",
            "bg-transparent",
            "hover:bg-foreground",
            "hover:text-background",
            "transition-all",
            "active:scale-95"
          )}
        >
          مسح الفلاتر
        </button>
      </div>
    </div>
  );
}
