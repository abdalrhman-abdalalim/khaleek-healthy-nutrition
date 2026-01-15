"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/shared/Lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {  LayoutDashboard } from "lucide-react";

const LoginButton = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const cookies = document.cookie.split(";");
        const tokenCookie = cookies.find((cookie) =>
          cookie.trim().startsWith("token=")
        );

        if (tokenCookie) {
          const token = tokenCookie.split("=")[1];
          if (token && token.trim()) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);



  const handleDashboard = () => {
    router.push("/dashboard");
  };

  if (isLoading) {
    return (
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex items-center gap-4"
      >
        <div className="w-24 h-10 bg-linear-to-r from-foreground/20 to-secondary/20 rounded-lg border border-foreground/30" />
      </motion.div>
    );
  }

  if (isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={handleDashboard}
            className={cn(
              buttonVariants(),
              "bg-linear-to-r from-foreground to-secondary text-background hover:shadow-lg transition-shadow font-bold flex items-center gap-2"
            )}
          >
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <LayoutDashboard className="w-5 h-5" />
            </motion.div>
            لوحة التحكم
          </button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-4"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="/Register"
          className={cn(
            buttonVariants(),
            "bg-linear-to-r from-background to-background/80 text-secondary hover:shadow-lg transition-shadow font-bold border-2 border-secondary/30 flex items-center gap-2"
          )}
        >
          ابدأ مجاناً
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default LoginButton;
