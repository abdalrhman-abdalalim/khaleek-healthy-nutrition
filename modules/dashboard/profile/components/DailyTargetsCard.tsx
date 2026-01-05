import { DailyTargets } from "../models/get_profile/type";

const DailyTargetsCard = ({ targets }: { targets: DailyTargets }) => (
  <div className="bg-secondary/20 backdrop-blur-xl rounded-3xl p-6 border border-foreground/20 shadow-xl">
    <h2 className="text-2xl font-bold text-textcolor mb-6">الأهداف اليومية</h2>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <Target color="orange" label="السعرات" value={targets.calories} unit="كالوري" />
      <Target color="red" label="البروتين" value={targets.protein} unit="جرام" />
      <Target color="blue" label="الكربوهيدرات" value={targets.carbs} unit="جرام" />
      <Target color="yellow" label="الدهون" value={targets.fat} unit="جرام" />
    </div>
  </div>
);

const Target = ({ color, label, value, unit }: any) => (
  <div className={`bg-linear-to-br from-${color}-500/20 to-${color}-500/10 rounded-2xl p-5 border border-${color}-500/30`}>
    <div className={`text-${color}-200 text-sm mb-2`}>{label}</div>
    <div className={`text-3xl font-bold text-${color}-300`}>{value}</div>
    <div className={`text-${color}-200/70 text-xs mt-1`}>{unit}</div>
  </div>
);

export default DailyTargetsCard;
