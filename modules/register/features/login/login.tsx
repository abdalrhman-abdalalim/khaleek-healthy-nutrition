"use client";

import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import AuthInput from "../authLayout/AuthInput";
import AuthButton from "../authLayout/AuthButton";

interface LoginFormProps {
  loginData: {
    email: string;
    password: string;
  };
  setLoginData: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;
  showLoginPassword: boolean;
  setShowLoginPassword: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

const LoginForm = ({
  loginData,
  setLoginData,
  showLoginPassword,
  setShowLoginPassword,
  onSubmit,
  loading,
}: LoginFormProps) => {
  return (
    <motion.div
      key="login"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
    >
      <form onSubmit={onSubmit} className="space-y-5">
        <AuthInput
          id="login-email"
          label="البريد الإلكتروني"
          type="email"
          placeholder="example@email.com"
          icon={<Mail />}
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          required
        />

        <AuthInput
          id="login-password"
          label="كلمة المرور"
          type={showLoginPassword ? "text" : "password"}
          placeholder="••••••••"
          icon={<Lock />}
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          rightAction={
            <button
              type="button"
              onClick={() => setShowLoginPassword(!showLoginPassword)}
            >
              {showLoginPassword ? <EyeOff /> : <Eye />}
            </button>
          }
          required
        />

        <AuthButton loading={loading} loadingText="جاري تسجيل الدخول...">
          تسجيل الدخول
        </AuthButton>
      </form>
    </motion.div>
  );
};

export default LoginForm;
