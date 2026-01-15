import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/public/Screenshot_2026-01-15_at_11.25.47_PM-removebg-preview.png";

interface LogoProps {
  className?: string;
  href?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * Responsive Logo component that adapts to all screen sizes
 * Uses Next.js Image optimization for better performance
 */
const Logo = ({ 
  className = "", 
  href = "/",
  priority = false,
  sizes = "(max-width: 640px) 120px, (max-width: 1024px) 160px, 240px"
}: LogoProps) => {
  return (
    <Link href={href} className={`flex items-center ${className}`}>
      <Image
        src={LogoImage}
        alt="خليك هيلثي - Logo"
        width={240}
        height={60}
        priority={priority}
        sizes={sizes}
        className="h-auto w-full max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[240px] object-contain transition-opacity hover:opacity-90"
      />
    </Link>
  );
};

export default Logo;
