import { UserProfile } from "../models/get_profile/type";

const Lifestyle = ({ profile, activityLevelMap, budgetMap }: any) => (
  <div className="bg-secondary/20 backdrop-blur-xl rounded-3xl p-6 border border-foreground/20 shadow-xl">
    <h2 className="text-2xl font-bold text-textcolor mb-6">نمط الحياة</h2>

    <Item label="مستوى النشاط" value={activityLevelMap[profile.activity_level]} />
    <Item label="نوع النظام" value={profile.diet_type} />
    <Item label="الميزانية" value={budgetMap[profile.budget_level]} />
  </div>
);

const Item = ({ label, value }: any) => (
  <div className="flex items-center justify-between p-4 bg-background/40 rounded-xl border border-foreground/10">
    <span className="text-textcolor/70">{label}</span>
    <span className="text-foreground font-bold">{value}</span>
  </div>
);

export default Lifestyle;
