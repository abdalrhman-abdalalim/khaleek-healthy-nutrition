import { UserProfile } from "../models/type";

interface ItemProps {
  label: string;
  value: string | number | null | undefined;
}

const Lifestyle = ({ profile }:{profile:UserProfile} ) => (
  <div className="bg-secondary/20 backdrop-blur-xl rounded-3xl p-6 border border-foreground/20 shadow-xl space-y-1">
    <h2 className="text-2xl font-bold text-textcolor mb-6">نمط الحياة</h2>

    <Item label="مستوى النشاط" value={profile.activity_level} />
    <Item label="نوع النظام" value={profile.diet_type} />
    <Item label="الميزانية" value={profile.budget_level} />
    <Item label="الهدف" value={profile.goal} />
  </div>
);

const Item: React.FC<ItemProps> = ({ label, value }) => (
  <div className="flex items-center justify-between p-4 bg-background/40 rounded-xl border border-foreground/10">
    <span className="text-textcolor/70">{label}</span>
    <span className="text-foreground font-bold">{value ?? "-"}</span>
  </div>
);


export default Lifestyle;
