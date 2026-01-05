"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useRegister } from "./module/register/useregister";
import { useLogin } from "./module/login/uselogin";
import AuthLayout from "./features/authLayout/authLayout";
import LoginForm from "./features/login/login";
import RegisterForm from "./features/register/register";
import AuthTabs from "./features/authLayout/AuthTabs";

const AuthPage = () => {
  const router = useRouter();
  const registerMutation = useRegister();
  const loginMutation = useLogin();

  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    loginMutation.mutate(loginData, {
      onSuccess: (res) => {
        toast.success(res.message || "تم تسجيل الدخول بنجاح");
        router.push("/dashboard");
      },
      onError: (err: any) => {
        toast.error(
          err?.response?.data?.message ||
            "خطأ في البريد الإلكتروني أو كلمة المرور"
        );
      },
    });
  };

  return (
    <AuthLayout title=" مرحباً بك" description="  سجل دخولك أو أنشئ حساب جديد">
      <Toaster position="top-center" />

      <AuthTabs activeTab={activeTab} onChange={setActiveTab}/>

      <AnimatePresence mode="wait">
         {activeTab === "login" ? (
                <LoginForm
                loginData={loginData}
                setLoginData={setLoginData}
                showLoginPassword={showLoginPassword}
                setShowLoginPassword={setShowLoginPassword}
                onSubmit={handleLogin}
                loading={loginMutation.isPending}
                />
            ) : (
                <RegisterForm
                registerData={registerData}
                setRegisterData={setRegisterData}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                showConfirmPassword={showConfirmPassword}
                setShowConfirmPassword={setShowConfirmPassword}
                onSubmit={handleRegister}
                loading={registerMutation.isPending}
                />
            )}
      </AnimatePresence>
    </AuthLayout>
  );
};

export default AuthPage;
