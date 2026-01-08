import { cn } from "@/shared/Lib/utils";
import SidebarContent from "./SideBarContent/SidebarContent";

interface IProps {
  isExpanded: boolean;
  isMobile: boolean;
  setIsExpanded: (expanded: boolean) => void;
}
const MobileSidebar = ({ isExpanded, isMobile, setIsExpanded }: IProps) => {
  return (
    <>
      <aside
        className={cn(
          "fixed top-0 right-0 h-screen bg-background/80 backdrop-blur-xl border-r border-border/50 z-40 transition-all duration-300 ease-in-out overflow-hidden",
          isExpanded ? "w-64" : "w-16"
        )}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <SidebarContent
          isExpanded={isExpanded}
          isMobile={isMobile}
          setIsExpanded={setIsExpanded}
        />
      </aside>
    </>
  );
};
export default MobileSidebar;
