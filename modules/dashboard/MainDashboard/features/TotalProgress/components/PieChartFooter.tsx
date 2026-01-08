import { Apple } from "lucide-react";

interface IProps {
  meal_count: number | undefined;

  session_count: number | undefined;
}
const PieChartFooter = ({ meal_count, session_count }: IProps) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2">
        <Apple className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-secondary/70">{meal_count} وجبة</span>
        <span className="text-xs text-secondary/50">|</span>
        <span className="text-sm text-secondary/70">{session_count} تمرين</span>
      </div>
    </div>
  );
};
export default PieChartFooter;
