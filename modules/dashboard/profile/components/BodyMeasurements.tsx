import { UserProfile } from "../models/get_profile/type";

const BodyMeasurements = ({ profile }: { profile: UserProfile }) => (
  <div className="bg-secondary/20 backdrop-blur-xl rounded-3xl p-6 border border-foreground/20 shadow-xl">
    <h2 className="text-2xl font-bold text-textcolor mb-6">القياسات الجسدية</h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Item title="الطول" value={profile.height} unit="سم" />
      <Item title="الوزن الحالي" value={profile.weight} unit="كجم" />
      <Item title="الوزن المستهدف" value={profile.target_weight} unit="كجم" />
    </div>
  </div>
);

const Item = ({ title, value, unit }: any) => (
  <div className="bg-background/40 rounded-2xl p-5 border border-foreground/10">
    <div className="text-textcolor/60 text-sm mb-2">{title}</div>
    <div className="text-3xl font-bold text-foreground">{value}</div>
    <div className="text-textcolor/50 text-xs mt-1">{unit}</div>
  </div>
);

export default BodyMeasurements;
