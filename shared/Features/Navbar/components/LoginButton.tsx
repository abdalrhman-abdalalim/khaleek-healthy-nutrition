import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';
import Link from "next/link";

const LoginButton = () => {
  return (
    <Link href="/Register">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          px-8 py-3 rounded-xl font-bold
          flex items-center gap-2
          bg-linear-to-r from-blue-500 to-cyan-500
          text-white
          shadow-lg hover:shadow-xl hover:shadow-blue-500/30
          transition-all duration-300
          group
        `}
      >
        <motion.div whileHover={{ rotate: -15 }}>
          <LogIn className="w-5 h-5" />
        </motion.div>
        <span>تسجيل الدخول</span>
      </motion.button>
    </Link>
  );
};

export default LoginButton;
