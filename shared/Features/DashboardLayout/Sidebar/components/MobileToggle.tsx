import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface IProps {
  setIsMobileOpen: (open: boolean) => void;
  isMobileOpen: boolean;
}
const MobileToggle = ({ setIsMobileOpen, isMobileOpen }: IProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-4 left-4 z-50 md:hidden bg-foreground/80 backdrop-blur-sm "
      onClick={() => setIsMobileOpen(!isMobileOpen)}
    >
      {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
    </Button>
  );
};
export default MobileToggle;
