import { motion } from "framer-motion";
import { IconType } from "recharts/types/component/DefaultLegendContent";

interface Iprops {
  percentage: number;
  label: string;
  value: number;
  target: number | null;
  unit: string;
  color?: string;
  //   icon: IconType;
}

const CircularProgress = ({
  percentage,
  label,
  value,
  target,
  unit,
  color = "from-foreground to-secondary",
}: //   icon: Icon,
Iprops) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(percentage, 100);
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Determine color based on progress
  const getProgressColor = () => {
    if (progress >= 90) return "#F9B487"; // foreground
    if (progress >= 70) return "#D9E9CF"; // secondary
    return "#F9B487"; // foreground
  };

  // Determine background circle color
  const getBackgroundColor = () => {
    if (progress >= 90) return "#F9B487"; // foreground
    if (progress >= 70) return "#D9E9CF"; // secondary
    return "#D9E9CF"; // secondary
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center p-4 rounded-xl bg-linear-to-br from-background/40 to-background/20 border border-foreground/20 hover:border-foreground/40 transition-colors"
    >
      {/* SVG Circle Container */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="relative"
      >
        <svg className="w-28 h-28 transform -rotate-90 drop-shadow-lg">
          {/* Background circle */}
          <motion.circle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="transition-all duration-300"
            strokeWidth="6"
            stroke={getBackgroundColor()}
            fill="transparent"
            r={radius}
            cx="56"
            cy="56"
            opacity="0.2"
          />

          {/* Progress circle */}
          <motion.circle
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="transition-all duration-500 drop-shadow-md"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeLinecap="round"
            stroke={getProgressColor()}
            fill="transparent"
            r={radius}
            cx="56"
            cy="56"
            filter="drop-shadow(0 0 8px rgba(249, 180, 135, 0.3))"
          />
        </svg>

        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl font-bold bg-linear-to-r from-foreground to-secondary bg-clip-text text-transparent"
          >
            {progress.toFixed(0)}%
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Label and Value */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="text-center mt-4 w-full"
      >
        {/* Label */}
        <motion.h4
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="font-bold text-textcolor text-base"
        >
          {label}
        </motion.h4>

        {/* Value and Target */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-textcolor/70 mt-2 font-medium"
        >
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-foreground font-bold"
          >
            {value.toFixed(0)}
          </motion.span>
          <span className="text-textcolor/60">{unit}</span>
          <span className="text-textcolor/50"> / </span>
          <span className="text-secondary font-medium">{target}{unit}</span>
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-3 w-full h-2 bg-background/60 rounded-full overflow-hidden border border-foreground/20"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            className={`h-full rounded-full bg-linear-to-r ${color} shadow-lg`}
          />
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-2 mt-3"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-2 h-2 rounded-full ${
              progress >= 90
                ? "bg-foreground"
                : progress >= 70
                ? "bg-secondary"
                : "bg-foreground"
            }`}
          />
          <span className="text-xs text-textcolor/60 font-medium">
            {progress >= 90
              ? "ممتاز"
              : progress >= 70
              ? "جيد"
              : "متوسط"}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CircularProgress;
