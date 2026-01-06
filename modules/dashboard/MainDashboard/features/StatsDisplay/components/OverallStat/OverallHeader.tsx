import { CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, TrendingUp } from "lucide-react";

interface IProps {
  profile_completion: boolean;
}
const OverallHeader = ({ profile_completion }: IProps) => {
  return (
    <CardHeader className="pb-2 relative z-10">
      <div className="flex items-center justify-between">
        <CardTitle className="text-sm font-semibold text-secondary flex items-center gap-2">
          <div className="p-2 rounded-lg bg-linear-to-br from-green-500/20 to-green-600/10">
            <TrendingUp className="h-4 w-4 text-green-400" />
          </div>
          <span>النشاط العام</span>
        </CardTitle>
        <Badge
          className={`${
            profile_completion
              ? "bg-linear-to-r from-green-500/20 to-green-600/10 text-green-400"
              : "bg-orange-500/20 text-orange-400"
          } text-xs font-normal`}
        >
          {profile_completion ? "مكتمل" : "غير مكتمل"}
        </Badge>
      </div>
    </CardHeader>
  );
};
export default OverallHeader;
