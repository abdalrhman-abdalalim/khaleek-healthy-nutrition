import { Calendar, Clock, Flame } from "lucide-react";
import { WeeklyDailyData } from "../models/getweekly/type";

function DailyData({ data }: { data: WeeklyDailyData[] }) {
  return (
    <div className="bg-foreground/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-foreground/30 shadow-xl">
      <h3 className="text-2xl font-bold text-textcolor mb-6 flex items-center gap-3">
        <Calendar className="w-7 h-7 text-foreground" /> البيانات اليومية
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((day) => (
          <div key={day.session_date} className="p-5 bg-background/50 rounded-2xl border-2 border-foreground/30 hover:border-foreground transition-all duration-300 hover:scale-105">
            <div className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-foreground" />
              {new Date(day.session_date).toLocaleDateString("ar-EG", { weekday: "long", day: "numeric", month: "long" })}
            </div>

            <div className="space-y-2 text-textcolor">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1 text-sm opacity-80"><Clock className="w-4 h-4 text-foreground" /> الجلسات</span>
                <span className="font-bold text-lg">{day.daily_sessions}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1 text-sm opacity-80"><Clock className="w-4 h-4 text-foreground" /> المدة</span>
                <span className="font-bold text-lg">{day.daily_duration} د</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1 text-sm opacity-80"><Flame className="w-4 h-4 text-foreground" /> السعرات</span>
                <span className="font-bold text-lg">{day.daily_calories_burned}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DailyData;