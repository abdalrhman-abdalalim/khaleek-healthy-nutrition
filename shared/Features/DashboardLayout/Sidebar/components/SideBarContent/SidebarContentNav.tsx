import { Button } from "@/components/ui/button";
import { navItems } from "../../data";
import { cn } from "@/shared/Lib/utils";
import { useRouter } from "next/navigation";

interface IProps {
  isExpanded: boolean;
}
const SidebarContentNav = ({ isExpanded }: IProps) => {
  const router = useRouter();
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";
  const isItemActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };
  return (
    <nav className="flex-1 p-2 space-y-1">
      {navItems.map((item) => {
        const isActive = isItemActive(item.href);
        return (
          <Button
            key={item.label}
            variant="ghost"
            className={cn(
              "w-full justify-start h-12 px-3 transition-all duration-300 relative group cursor-pointer ",
              "hover:bg-secondary/10 hover:text-primary",
              isActive && "bg-secondary/10 text-primary shadow-sm",
              isExpanded ? "gap-3 " : ""
            )}
            onClick={() => router.push(item.href)}
          >
            <item.icon className="text-foreground " size={20} />
            <span
              className={`whitespace-nowrap text-textcolor ${
                !isExpanded ? "md:hidden" : ""
              }`}
            >
              {item.label}
            </span>
          </Button>
        );
      })}
    </nav>
  );
};
export default SidebarContentNav;
