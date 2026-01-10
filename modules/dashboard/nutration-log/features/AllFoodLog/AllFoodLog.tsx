import { Clock, List } from "lucide-react";
import FoodLogsList from "./components/FoodLogsList";
import { FoodLog } from "../../models/useFoodLogs";

interface IProps {
  Foodlength: number | undefined;
  Logs: FoodLog[] | undefined;
  logsLoading: boolean;
  logsError: boolean;
}
const AllFoodLog = ({ Foodlength, Logs, logsLoading, logsError }: IProps) => {
  return (
    <div className="space-y-6">
      {/* All Food Logs Content */}
      <div className="bg-linear-to-br from-white to-secondary dark:from-background dark:to-[#1a4a4d] rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-linear-to-r from-foreground/10 to-foreground/5 rounded-xl">
              <List className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-background dark:text-textcolor">
                جميع سجلات الطعام
              </h2>
              <p className="text-background/70 dark:text-textcolor/70 text-sm">
                عرض وتصفية جميع سجلات الطعام السابقة
              </p>
            </div>
          </div>
          <div className="px-4 py-2 bg-linear-to-r from-foreground/10 to-foreground/5 rounded-full border border-foreground/30 dark:border-foreground/50">
            <span className="text-foreground font-semibold text-sm flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {Foodlength || 0} سجلات
            </span>
          </div>
        </div>

        <FoodLogsList
          logs={Logs || []}
          isLoading={logsLoading}
          isError={logsError}
        />
      </div>
    </div>
  );
};
export default AllFoodLog;
