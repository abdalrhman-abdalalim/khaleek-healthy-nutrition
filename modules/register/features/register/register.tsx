"use client";

import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, CheckCircle2 } from "lucide-react";
import AuthInput from "../authLayout/AuthInput";
import AuthButton from "../authLayout/AuthButton";

interface RegisterFormProps {
  registerData: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  setRegisterData: React.Dispatch<React.SetStateAction<any>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showConfirmPassword: boolean;
  setShowConfirmPassword: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

const RegisterForm = ({
  registerData,
  setRegisterData,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  onSubmit,
  loading,
}: RegisterFormProps) => {
  return (
    <motion.div
      key="register"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <form onSubmit={onSubmit} className="space-y-5">
        <AuthInput
          id="register-name"
          placeholder="الاسم"
          label="الاسم الكامل"
          icon={<User />}
          value={registerData.name}
          onChange={(e) =>
            setRegisterData({ ...registerData, name: e.target.value })
          }
          required
        />

        <AuthInput
          id="register-email"
          label="البريد الإلكتروني"
          placeholder="example@email.com"
          type="email"
          icon={<Mail />}
          value={registerData.email}
          onChange={(e) =>
            setRegisterData({ ...registerData, email: e.target.value })
          }
          required
        />

        <AuthInput
          id="register-password"
          label="كلمة المرور"
          placeholder="••••••••"
          type={showPassword ? "text" : "password"}
          icon={<Lock />}
          value={registerData.password}
          onChange={(e) =>
            setRegisterData({ ...registerData, password: e.target.value })
          }
          rightAction={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          }
          required
        />

        <AuthInput
          id="confirm-password"
          label="تأكيد كلمة المرور"
          placeholder="••••••••"
          type={showConfirmPassword ? "text" : "password"}
          icon={<CheckCircle2 />}
          value={registerData.password_confirmation}
          onChange={(e) =>
            setRegisterData({
              ...registerData,
              password_confirmation: e.target.value,
            })
          }
          rightAction={
            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? <EyeOff /> : <Eye />}
            </button>
          }
          required
        />

        <AuthButton loading={loading} loadingText="جاري التسجيل...">
          إنشاء حساب
        </AuthButton>
      </form>
    </motion.div>
  );
};

export default RegisterForm;
