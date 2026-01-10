import { IconType } from "recharts/types/component/DefaultLegendContent";

interface Iprops {
  percentage: number;
  label: string;
  value: number;
  target: number | null;
  unit: string;
  //   icon: IconType;
}
const CircularProgress = ({
  percentage,
  label,
  value,
  target,
  unit,
}: //   icon: Icon,
Iprops) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(percentage, 100);
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative">
        <svg className="w-24 h-24 transform -rotate-90">
          {/* Background circle */}
          <circle
            className="text-[#D9E9CF] dark:text-[#174143]"
            strokeWidth="6"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="48"
            cy="48"
          />
          {/* Progress circle */}
          <circle
            className={` transition-all duration-500`}
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="48"
            cy="48"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* {Icon && <Icon className="w-6 h-6 text-foreground mb-1" />} */}
          <span className="text-lg font-bold text-[#174143] dark:text-[#EEEEEE]">
            {progress.toFixed(0)}%
          </span>
        </div>
      </div>
      <div className="text-center mt-3">
        <h4 className="font-medium text-[#174143] dark:text-[#EEEEEE]">
          {label}
        </h4>
        <p className="text-sm text-[#174143]/70 dark:text-[#EEEEEE]/70">
          {value}
          {unit} / {target}
          {unit}
        </p>
      </div>
    </div>
  );
};

export default CircularProgress;
