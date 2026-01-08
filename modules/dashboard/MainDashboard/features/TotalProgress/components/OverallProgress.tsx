import { Progress } from "@/components/ui/progress";

interface IProps {
  progress_percentage: number;
}
const OverallProgress = ({ progress_percentage }: IProps) => {
  return (
    <div className="space-y-2 bg-foreground/5 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-secondary">
          التقدم اليومي
        </span>
        <span className="font-bold text-secondary text-lg">
          {progress_percentage}%
        </span>
      </div>
      <Progress value={progress_percentage} className="h-2" />
      <p className="text-xs text-secondary/60 text-center">
        {progress_percentage === 0
          ? "ابدأ بتسجيل وجباتك اليومية"
          : progress_percentage < 50
          ? "استمر، أنت على الطريق الصحيح"
          : "أداء ممتاز! استمر في التقدم"}
      </p>
    </div>
  );
};
export default OverallProgress;
