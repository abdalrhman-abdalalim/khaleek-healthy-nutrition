"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import AuthLayout from "./features/authLayout/authLayout";
import LoginForm from "./features/login/login";
import RegisterForm from "./features/register/register";
import AuthTabs from "./features/authLayout/components/AuthTabs";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <AuthLayout title="مرحباً بك" description="سجل دخولك أو أنشئ حساب جديد">
      <Toaster position="top-center" />

      <AuthTabs activeTab={activeTab} onChange={setActiveTab} />

      <AnimatePresence mode="wait">
        {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
      </AnimatePresence>
    </AuthLayout>
  );
};

export default AuthPage;
