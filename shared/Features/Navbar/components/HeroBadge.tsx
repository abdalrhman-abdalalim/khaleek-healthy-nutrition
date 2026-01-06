import { Brain } from "lucide-react";
import Link from "next/link";

const HeroBadge = () => {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-foreground to-background shadow-lg">
          <Brain className="h-6 w-6 text-textcolor" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-textcolor">خليك هيلثي</span>
      </div>
    </Link>
  );
};
export default HeroBadge;
