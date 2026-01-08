import SidebarContentHeader from "./SidebarContentHeader";
import SidebarContentNav from "./SidebarContentNav";
import SidebarContentProfile from "./SidebarContentProfile";

interface IProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  isMobile: boolean;
}

const SidebarContent = ({ isExpanded, isMobile }: IProps) => {
  return (
    <>
      <SidebarContentHeader isExpanded={isExpanded} isMobile={isMobile} />

      <SidebarContentNav isExpanded={isExpanded} />

      <SidebarContentProfile isExpanded={isExpanded} />
    </>
  );
};
export default SidebarContent;
