import StatIcon from "./components/StatIcon";
import StatLabel from "./components/StatLabel";
import StatValue from "./components/StatValue";
import { statsData } from "./data";

const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
      {statsData.map((stat, idx) => (
        <div
          key={idx}
          className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-foreground/10"
        >
          <StatIcon Icon={stat.icon} />
          <StatValue value={stat.value} />
          <StatLabel label={stat.label} />
        </div>
      ))}
    </div>
  );
};
export default Stats;
