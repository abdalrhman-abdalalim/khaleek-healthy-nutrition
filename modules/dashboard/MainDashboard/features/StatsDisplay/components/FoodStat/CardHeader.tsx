import { Badge } from "@/components/ui/badge";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Flame } from "lucide-react";

interface IProps {
  total_logs: number;
}

const CardHead = ({ total_logs }: IProps) => {
  return (
    <CardHeader className="pb-2 relative z-10">
      <div className="flex items-center justify-between">
        <CardTitle className="text-sm font-semibold text-secondary flex items-center gap-2">
          <div className="p-2 rounded-lg bg-linear-to-br from-orange-500/20 to-orange-600/10">
            <Flame className="h-4 w-4 text-orange-400" />
          </div>
          <span>التغذية</span>
        </CardTitle>
        <Badge className="bg-linear-to-r from-foreground/20 to-foreground/10 text-foreground text-xs font-normal">
          {total_logs} وجبة
        </Badge>
      </div>
    </CardHeader>
  );
};
export default CardHead;
