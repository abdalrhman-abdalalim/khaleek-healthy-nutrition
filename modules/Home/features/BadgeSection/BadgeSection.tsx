import { Sparkles } from "lucide-react";

const BadgeSection = () => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 border border-background/20 mb-8">
      <Sparkles className="h-4 w-4 text-secondary" />
      <span className="text-sm font-medium text-secondary">
        الذكاء الاصطناعي في خدمة صحتك
      </span>
    </div>
  );
};
export default BadgeSection;
