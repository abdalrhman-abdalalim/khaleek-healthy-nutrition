import { Card } from "@/components/ui/card";
import GlowEffect from "./GlowEffect";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const MainCard = ({ children }: IProps) => {
  return (
    <Card className="group relative bg-linear-to-br from-secondary/40 to-secondary/10  backdrop-blur-xl border-foreground hover:border-foreground/30 transition-all duration-300 hover:shadow-lg">
      <GlowEffect />
      {children}
    </Card>
  );
};
export default MainCard;
