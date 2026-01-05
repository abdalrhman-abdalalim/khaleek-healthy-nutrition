"use client";

import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import AuthInput from "../authLayout/components/AuthInput";
import AuthButton from "../authLayout/components/AuthButton";
import { useRegister } from "../../model/register/useregister";

const RegisterForm = () => {
  const router = useRouter();
  const registerMutation = useRegister();

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (registerData.password !== registerData.password_confirmation) {
      toast.error("كلمات المرور غير متطابقة");
      return;
    }

    registerMutation.mutate(registerData, {
      onSuccess: (res) => {
        toast.success(res.message || "تم التسجيل بنجاح");
        router.push("/dashboard");
      },
      onError: (err: any) => {
        toast.error(err?.response?.data?.message || "حدث خطأ في التسجيل");
      },
    });
  };

  return (
    <motion.div
      key="register"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <form onSubmit={handleRegister} className="space-y-5">
        <AuthInput
          label="الاسم الكامل"
          icon={<User />}
          value={registerData.name}
          onChange={(e) =>
            setRegisterData({ ...registerData, name: e.target.value })
          }
          required
        />

        <AuthInput
          label="البريد الإلكتروني"
          type="email"
          icon={<Mail />}
          value={registerData.email}
          onChange={(e) =>
            setRegisterData({ ...registerData, email: e.target.value })
          }
          required
        />

        <AuthInput
          label="كلمة المرور"
          type={showPassword ? "text" : "password"}
          icon={<Lock />}
          value={registerData.password}
          onChange={(e) =>
            setRegisterData({ ...registerData, password: e.target.value })
          }
          rightAction={
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          }
          required
        />

        <AuthInput
          label="تأكيد كلمة المرور"
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

        <AuthButton
          loading={registerMutation.isPending}
          loadingText="جاري التسجيل..."
        >
          إنشاء حساب
        </AuthButton>
      </form>
    </motion.div>
  );
};

export default RegisterForm;
