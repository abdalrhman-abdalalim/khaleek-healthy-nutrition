"use client";

interface AuthTabsProps {
  activeTab: "login" | "register";
  onChange: (tab: "login" | "register") => void;
}

const AuthTabs = ({ activeTab, onChange }: AuthTabsProps) => {
  const tabClass = (active: boolean) =>
    `w-1/2 rounded-xl px-3 py-2.5 text-base font-bold transition-all ${
      active ? "bg-foreground text-white shadow-lg" : "hover:bg-gray-200/50"
    }`;

  return (
    <div className="inline-flex h-14 w-full items-center justify-center rounded-2xl bg-background text-textcolor p-1 mb-8">
      <button
        onClick={() => onChange("login")}
        className={tabClass(activeTab === "login")}
      >
        تسجيل الدخول
      </button>

      <button
        onClick={() => onChange("register")}
        className={tabClass(activeTab === "register")}
      >
        حساب جديد
      </button>
    </div>
  );
};

export default AuthTabs;
