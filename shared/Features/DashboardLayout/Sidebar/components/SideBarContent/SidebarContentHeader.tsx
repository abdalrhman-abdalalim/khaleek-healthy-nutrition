import { cn } from "@/shared/Lib/utils";
import { Brain } from "lucide-react";
import Link from "next/link";
import Logo from "@/public/Screenshot_2026-01-15_at_11.25.47_PM-removebg-preview.png";
import Image from "next/image";
import roundedImage from "@/public/Gemini_Generated_Image_stfpzfstfpzfstfp_-_Edited-removebg-preview.png";

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
            "flex items-center  transition-all duration-300",
            !isExpanded && "justify-center"
          )}
        >
          <Image
            src={Logo}
            alt="Logo"
            width={340}
            height={10}
            className="h-20 w-40 object-cover  flex-1"
          />

          {/* {isExpanded && (
            <Image
              src={Logo}
              alt="Logo"
              width={240}
              height={10}
              className="h-20 w-40 object-cover bflex-1"
            />
          )} */}
        </div>
      </Link>
    </div>
  );
};
export default SidebarContentHeader;
