import { LucideIcon } from "lucide-react";

interface IProps {
  Icon: LucideIcon;
}
const StatIcon = ({ Icon }: IProps) => {
  return (
    <div className="flex items-center justify-center mb-2">
      <div className="p-2 rounded-lg bg-foreground/20 text-foreground">
        <Icon className="w-5 h-5" />
      </div>
    </div>
  );
};
export default StatIcon;
