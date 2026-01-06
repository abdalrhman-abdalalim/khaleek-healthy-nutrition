"use client";

import { motion } from "framer-motion";
import { Loader2, LogOut } from "lucide-react";

interface LogoutButtonProps {
  isPending: boolean;
  onLogout: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ isPending, onLogout }) => {
  return (
    <motion.button
      onClick={onLogout}
      disabled={isPending}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-6 py-3 rounded-xl font-bold text-white
        flex items-center justify-center gap-2
        transition-all duration-300
        ${isPending 
          ? "bg-red-500/50 cursor-not-allowed" 
          : "bg-linear-to-r from-red-500 to-red-600 hover:shadow-xl hover:shadow-red-500/30"
        }
      `}
    >
      {isPending ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <Loader2 className="w-5 h-5" />
        </motion.div>
      ) : (
        <>
          <LogOut className="w-5 h-5" />
          تسجيل الخروج
        </>
      )}
    </motion.button>
  );
};

export default LogoutButton;
