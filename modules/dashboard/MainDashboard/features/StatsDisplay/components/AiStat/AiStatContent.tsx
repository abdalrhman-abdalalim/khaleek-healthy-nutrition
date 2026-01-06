import { CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, TrendingUp } from "lucide-react";

interface IProps {
  ai: {
    total_recommendations: number;
    avg_adherence_score: number | null;
    helpful_count: number | null;
  };
}
const AiStatContent = ({ ai }: IProps) => {
  const aiEngagement =
    ai.total_recommendations > 0
      ? Math.min(ai.total_recommendations * 20, 100)
      : 0;
  return (
    <CardContent className="relative z-10">
      <div className="space-y-4">
        {/* Adherence score */}
        <div className="text-center mb-3">
          <div className="text-3xl font-bold text-secondary mb-1">
            {ai.avg_adherence_score || 0}%
          </div>
          <div className="text-sm text-secondary/60">معدل الإلتزام</div>
        </div>

        <div className="space-y-3">
          {/* Helpful count */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-3 w-3 text-foreground/60" />
              <span className="text-xs text-secondary/70">
                التوصيات المفيدة
              </span>
            </div>
            <span className="font-medium text-secondary">
              {ai.helpful_count || 0}
            </span>
          </div>

          {/* Engagement indicator */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-3 w-3 text-foreground/60" />
              <span className="text-xs text-secondary/70">مستوى التفاعل</span>
            </div>
            <span
              className={`text-xs font-medium ${
                ai.total_recommendations > 5
                  ? "text-green-400"
                  : ai.total_recommendations > 0
                  ? "text-yellow-400"
                  : "text-secondary/60"
              }`}
            >
              {ai.total_recommendations > 5
                ? "عالي"
                : ai.total_recommendations > 0
                ? "متوسط"
                : "منخفض"}
            </span>
          </div>
        </div>

        {/* Engagement progress */}
        <div className="pt-3 border-t border-foreground/10">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-secondary/70">مشاركة الذكاء الاصطناعي</span>
            <span className="text-foreground">{aiEngagement}%</span>
          </div>
          <Progress value={aiEngagement} className="h-1.5 bg-background/50" />
        </div>
      </div>
    </CardContent>
  );
};
export default AiStatContent;
