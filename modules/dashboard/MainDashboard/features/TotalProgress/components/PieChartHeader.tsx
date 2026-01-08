import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface IProps {
  consumedMacros: {
    name: string;
    value: number;
    color: string;
  }[];
}
const PieChartHeader = ({ consumedMacros }: IProps) => {
  return (
    <div className="h-90">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={
              consumedMacros.length > 0
                ? consumedMacros
                : [
                    {
                      name: "لا توجد بيانات",
                      value: 1,
                      color: "#9ca3af",
                    },
                  ]
            }
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
            {(consumedMacros.length > 0
              ? consumedMacros
              : [{ color: "#9ca3af" }]
            ).map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value} جرام`, "الكمية"]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default PieChartHeader;
