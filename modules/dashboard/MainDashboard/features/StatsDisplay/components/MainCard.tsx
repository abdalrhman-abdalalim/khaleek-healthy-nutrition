import { Card } from "@/components/ui/card";
import GlowEffect from "./GlowEffect";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const MainCard = ({ children }: IProps) => {
  // Validate children to prevent NaN
  const validatedChildren = (() => {
    if (typeof children === "number") {
      if (isNaN(children)) {
        return "0"; // or any fallback value
      }
      return children;
    }
    return children;
  })();

  return (
    <Card className="group relative bg-linear-to-br from-secondary/40 to-secondary/10  backdrop-blur-xl border-0 hover:border-foreground/30 transition-all duration-300 hover:shadow-lg">
      <GlowEffect />
      {validatedChildren}
    </Card>
  );
};

export default MainCard;
