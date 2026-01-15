import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface IProps {
  consumedMacros:
    | {
        name: string;
        value: number | undefined;
        color: string;
      }[]
    | undefined;
}

const PieChartHeader = ({ consumedMacros }: IProps) => {
  const hasData =
    consumedMacros &&
    consumedMacros.some((item) => item.value && item.value > 0);

  // If no data, show a decorative gradient ring
  if (!hasData) {
    return (
      <div className="h-90 flex flex-col items-center justify-center relative">
        <div className="relative w-64 h-64">
          {/* Gradient ring */}
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-background via-foreground to-secondary animate-pulse-slow" />
          <div className="absolute inset-4 rounded-full bg-white" />

          {/* Center content */}
          <div className="absolute bg-background p-4 rounded-full inset-0 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-foreground/20 to-secondary/20 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold  text-foreground mb-2">
              في انتظار البيانات
            </h3>
            <p className="text-foreground text-center text-sm max-w-xs">
              ستبدو مخططات المغذيات هنا بمجرد إضافة وجباتك اليومية
            </p>
          </div>
        </div>

        {/* Legend placeholder */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {["بروتين", "كارب", "دهون"].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full bg-foreground animate-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              />
              <span className="text-sm text-secondary">{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Original chart with data
  const totalValue = consumedMacros!.reduce(
    (sum, item) => sum + (item.value || 0),
    0
  );

  return (
    <div className="h-90">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={consumedMacros}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) =>
              `${name}: ${(percent ?? 0 * 100).toFixed(0)}%`
            }
          >
            {consumedMacros!.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke="#fff"
                strokeWidth={2}
              />
            ))}
          </Pie>

          {/* Total value in center */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-2xl font-bold fill-primary"
          >
            {totalValue.toFixed(0)}
            <tspan
              x="50%"
              dy="1.2em"
              className="text-xs font-normal fill-muted-foreground block"
            >
              جرام إجمالي
            </tspan>
          </text>

          <Tooltip formatter={(value) => [`${value} جرام`, "الكمية"]} />
          <Legend verticalAlign="bottom" height={36} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartHeader;
