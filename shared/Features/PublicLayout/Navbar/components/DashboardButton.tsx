"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";

interface DashboardButtonProps {
  href?: string;
  className?: string; 
}

const DashboardButton: React.FC<DashboardButtonProps> = ({
  href = "/dashboard",
  className = "",
}) => {
  return (
    <Link href={href}>
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`
          px-6 py-3 rounded-xl font-bold
          flex items-center gap-2
          bg-linear-to-r from-blue-500/10 to-cyan-500/10
          hover:from-blue-500/20 hover:to-cyan-500/20
          text-foreground 
          border border-blue-500/20 hover:border-blue-500/40
          transition-all duration-300
          shadow-lg hover:shadow-blue-500/20
          group
          ${className}
        `}
      >
        <motion.div whileHover={{ rotate: 15 }}>
          <LayoutDashboard className="w-5 h-5" />
        </motion.div>
        <span>لوحة التحكم</span>
      </motion.button>
    </Link>
  );
};

export default DashboardButton;
