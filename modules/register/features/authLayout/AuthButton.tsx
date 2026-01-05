import { ButtonHTMLAttributes, ReactNode } from "react";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;
  children: ReactNode;
}

const AuthButton = ({
  loading = false,
  loadingText = "جاري التنفيذ...",
  children,
  disabled,
  ...props
}: AuthButtonProps) => {
  return (
    <button
      type="submit"
      disabled={loading || disabled}
      className="
        w-full h-12
        bg-linear-to-r from-(--foreground) to-orange-400
        hover:opacity-90
        text-white font-bold text-lg
        rounded-xl shadow-lg
        transition-all
        disabled:opacity-70
      "
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          {loadingText}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default AuthButton;
