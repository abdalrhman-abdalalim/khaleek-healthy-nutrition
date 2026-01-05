"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

const AuthLayout = ({ title, description, children }: Props) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12 relative overflow-hidden ">
      <Toaster position="top-center" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 bg-(--foreground)/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 40, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-(--foreground)/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="bg-(--secondary) border-none shadow-2xl">
          <CardHeader className="text-center space-y-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto w-20 h-20 bg-linear-to-br from-(--foreground) to-orange-400 rounded-full flex items-center justify-center shadow-lg"
            >
              <User className="w-10 h-10 text-white" />
            </motion.div>

            <CardTitle className="text-3xl font-black text-(--textcolor)">
              {title}
            </CardTitle>

            <CardDescription className="text-base text-gray-600">
              {description}
            </CardDescription>
          </CardHeader>

          <CardContent> {children}</CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
