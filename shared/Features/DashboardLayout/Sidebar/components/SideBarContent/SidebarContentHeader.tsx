import { cn } from "@/shared/Lib/utils";
import { Brain } from "lucide-react";
import Link from "next/link";

interface IProps {
  isExpanded: boolean;

  isMobile: boolean;
}
const SidebarContentHeader = ({ isExpanded }: IProps) => {
  return (
    <div className="flex items-center justify-between px-2 py-3">
      <Link href={"/"}>
        <div
          className={cn(
            "flex items-center gap-3 transition-all duration-300",
            !isExpanded && "justify-center"
          )}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-foreground to-background shadow-lg">
            <Brain className="h-6 w-6 text-textcolor" />
          </div>
          <h1 className="text-lg md:hidden block font-semibold whitespace-nowrap">
            <span className="text-xl font-bold text-textcolor">خليك هيلثي</span>
          </h1>
          {isExpanded && (
            <h1 className="text-lg font-semibold whitespace-nowrap">
              <span className="text-xl font-bold text-textcolor">
                خليك هيلثي
              </span>
            </h1>
          )}
        </div>
      </Link>
    </div>
  );
};
export default SidebarContentHeader;
