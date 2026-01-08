import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface IProps {
  progress_percentage: number;
}

const OverallProgress = ({ progress_percentage }: IProps) => {
  return (
    <div className="space-y-4 bg-foreground/5 rounded-lg p-4">
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

      <div className="pt-2 flex justify-center">
        <Button
          asChild
          size="sm"
         className="h-14 px-10 text-lg font-bold rounded-2xl bg-foreground text-background hover:bg-foreground/90 shadow-xl hover:shadow-2xl transition-all"
        >
          <Link href="/dashboard/profile/edit">
            اكمال بياناتك
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OverallProgress;
