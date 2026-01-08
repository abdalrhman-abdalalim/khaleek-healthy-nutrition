import { Activity, Clock, Flame, MapPin, Repeat, Weight, Zap } from "lucide-react";
import { WeeklyActivityBreakdown } from "../models/getweekly/type";


function ActivityBreakdown({ data, activityColors }: { data: WeeklyActivityBreakdown[]; activityColors: Record<string, string> }) {
  return (
    <div className="bg-secondary/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/30 shadow-xl">
      <h3 className="text-2xl font-bold text-textcolor mb-6 flex items-center gap-3">
        <Activity className="w-7 h-7 text-foreground" /> التوزيع حسب نوع النشاط
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((activity) => (
          <div key={activity.activity_type} className={`p-5 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${activityColors[activity.activity_type]}`}>
            <div className="flex items-center gap-2 mb-3 text-xl font-bold">
              {activity.activity_type === "cardio" && <Flame className="w-5 h-5 text-foreground" />}
              {activity.activity_type === "strength" && <Weight className="w-5 h-5 text-foreground" />}
              {activity.activity_type === "flexibility" && <Activity className="w-5 h-5 text-foreground" />}
              {activity.activity_type === "sports" && <MapPin className="w-5 h-5 text-foreground" />}
              {activity.activity_type === "hiit" && <Zap className="w-5 h-5 text-foreground" />}
              {activity.activity_type === "other" && <Activity className="w-5 h-5 text-foreground" />}
              <span>
                {activity.activity_type === "cardio"
                  ? "كارديو"
                  : activity.activity_type === "strength"
                  ? "قوة"
                  : activity.activity_type === "flexibility"
                  ? "مرونة"
                  : activity.activity_type === "sports"
                  ? "رياضات"
                  : activity.activity_type === "hiit"
                  ? "HIIT"
                  : "أخرى"}
              </span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1 opacity-80"><Repeat className="w-4 h-4 text-foreground" /> الجلسات</span>
                <span className="font-bold">{activity.session_count}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1 opacity-80"><Clock className="w-4 h-4 text-foreground" /> المدة</span>
                <span className="font-bold">{activity.total_duration} د</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1 opacity-80"><Flame className="w-4 h-4 text-foreground" /> السعرات</span>
                <span className="font-bold">{activity.total_calories}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ActivityBreakdown;