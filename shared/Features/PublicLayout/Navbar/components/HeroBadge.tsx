import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Screenshot_2026-01-15_at_11.25.47_PM-removebg-preview.png";

const HeroBadge = () => {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative">
        <Image src={Logo} alt="Hero Badge" width={240} height={40} />
      </div>
    </Link>
  );
};
export default HeroBadge;
