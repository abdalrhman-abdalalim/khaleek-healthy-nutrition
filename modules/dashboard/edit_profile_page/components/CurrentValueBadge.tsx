interface CurrentValueBadgeProps {
  label?: string;
  value: React.ReactNode;
  className?: string;
}

const CurrentValueBadge = ({
  label = "القيمة الحالية",
  value,
  className = "",
}: CurrentValueBadgeProps) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full
      bg-foreground/10 text-foreground text-xs sm:text-sm font-medium
      ${className}`}
    >
      <span className="opacity-70 whitespace-nowrap">
        {label}
      </span>
      <span className="font-bold truncate">
        {value}
      </span>
    </div>
  );
};

export default CurrentValueBadge;
