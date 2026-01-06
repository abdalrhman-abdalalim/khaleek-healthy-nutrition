import { CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Brain } from "lucide-react";

interface IProps {
  total_recommendations: number;
}
const AiStatHeader = ({ total_recommendations }: IProps) => {
  return (
    <CardHeader className="pb-2 relative z-10">
      <div className="flex items-center justify-between">
        <CardTitle className="text-sm font-semibold text-secondary flex items-center gap-2">
          <div className="p-2 rounded-lg bg-linear-to-br from-purple-500/20 to-purple-600/10">
            <Brain className="h-4 w-4 text-purple-400" />
          </div>
          <span>الذكاء الاصطناعي</span>
        </CardTitle>
        <Badge className="bg-linear-to-r from-foreground/20 to-foreground/10 text-foreground text-xs font-normal">
          {total_recommendations} توصية
        </Badge>
      </div>
    </CardHeader>
  );
};
export default AiStatHeader;
