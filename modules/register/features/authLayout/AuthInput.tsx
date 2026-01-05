import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  rightAction?: ReactNode; 
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, icon, rightAction, className = "", id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label
          htmlFor={id}
          className="text-sm font-bold text-(--textcolor) "
        >
          {label}
        </label>

        <div className="relative">
          {icon && (
            <span className="absolute right-3 top-3 h-5 w-5 text-gray-400">
              {icon}
            </span>
          )}

          <input
            ref={ref}
            id={id}
            className={`h-12 w-full bg-white border-2 border-gray-200
              focus:border-(--foreground) rounded-xl text-right
              pr-10 pl-10 focus:outline-none ${className}`}
            {...props}
          />

          {rightAction && (
            <span className="absolute left-3 top-3">
              {rightAction}
            </span>
          )}
        </div>
      </div>
    );
  }
);

AuthInput.displayName = "AuthInput";

export default AuthInput;
