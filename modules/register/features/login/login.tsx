"use client";

import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import AuthInput from "../authLayout/components/AuthInput";
import AuthButton from "../authLayout/components/AuthButton";
import { useLogin } from "../../model/login/uselogin";

const LoginForm = () => {
  const router = useRouter();
  const loginMutation = useLogin();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    loginMutation.mutate(loginData, {
      onSuccess: (res) => {
        toast.success(res.message || "تم تسجيل الدخول بنجاح");
        router.push("/dashboard");
      },
      onError: (err: {
        response: {
          data: {
            message: string;
          };
        };
      }) => {
        toast.error(
          err?.response?.data?.message ||
            "خطأ في البريد الإلكتروني أو كلمة المرور"
        );
      },
    });
  };

  return (
    <motion.div
      key="login"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
    >
      <form onSubmit={handleLogin} className="space-y-5">
        <AuthInput
          label="البريد الإلكتروني"
          type="email"
          icon={<Mail />}
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          required
        />

        <AuthInput
          label="كلمة المرور"
          type={showPassword ? "text" : "password"}
          icon={<Lock />}
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
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

        <AuthButton
          loading={loginMutation.isPending}
          loadingText="جاري تسجيل الدخول..."
        >
          تسجيل الدخول
        </AuthButton>
      </form>
    </motion.div>
  );
};

export default LoginForm;
