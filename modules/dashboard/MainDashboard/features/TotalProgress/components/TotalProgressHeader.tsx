import { CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";

interface IProps {
  date: Date | undefined;
}
const TotalProgressHeader = ({ date }: IProps) => {
  return (
    <CardHeader>
      <CardTitle className="text-lg font-semibold text-secondary flex items-center gap-2">
        <Target className="h-5 w-5 text-foreground" />
        تقدم اليوم
        <span className="text-sm font-normal text-secondary/60">
          {date ? new Date(date).toLocaleDateString("ar-SA") : "غير محدد"}
        </span>
      </CardTitle>
    </CardHeader>
  );
};
export default TotalProgressHeader;
