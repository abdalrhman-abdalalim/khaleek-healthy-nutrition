import { CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Dumbbell } from "lucide-react";

interface IProps {
  total_sessions: number;
}
const TrainStatHeader = ({ total_sessions }: IProps) => {
  return (
    <CardHeader className="pb-2 relative z-10">
      <div className="flex items-center justify-between">
        <CardTitle className="text-sm font-semibold text-secondary flex items-center gap-2">
          <div className="p-2 rounded-lg bg-linear-to-br from-blue-500/20 to-blue-600/10">
            <Dumbbell className="h-4 w-4 text-blue-400" />
          </div>
          <span>التمارين</span>
        </CardTitle>
        <Badge
          className={`${
            total_sessions > 0
              ? "bg-linear-to-r from-blue-500/20 to-blue-600/10 text-blue-400"
              : "bg-foreground/10 text-foreground/60"
          } text-xs font-normal`}
        >
          {total_sessions > 0 ? "نشط" : "غير نشط"}
        </Badge>
      </div>
    </CardHeader>
  );
};
export default TrainStatHeader;
