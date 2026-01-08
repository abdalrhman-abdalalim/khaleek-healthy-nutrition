import { UserProfile } from "../models/type";
import { Activity, Utensils, Wallet, Target } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ItemProps {
  label: string;
  value: string | number | null | undefined;
  icon: React.ReactNode;
}

const Lifestyle = ({ profile }: { profile: UserProfile }) => {
  const missingData =
    !profile.activity_level &&
    !profile.diet_type &&
    !profile.goal;

  if (missingData) {
    return (
      <div className="bg-linear-to-br from-secondary/30 to-secondary/10 backdrop-blur-xl rounded-3xl p-6 border border-foreground/20 shadow-2xl text-center space-y-6">
        <p className="text-lg font-semibold text-secondary">
          الرجاء إكمال بياناتك أولاً
        </p>
        <Button asChild className="px-6 py-2 rounded-xl bg-secondary text-background font-semibold shadow-lg hover:scale-105 transition-all">
          <Link href="/dashboard/profile/edit">إكمال البيانات</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-linear-to-br from-secondary/30 to-secondary/10 backdrop-blur-xl rounded-3xl p-6 border border-foreground/20 shadow-2xl space-y-4">
      <h2 className="text-2xl font-bold text-textcolor mb-6 flex items-center gap-3">
        <div className="p-2 bg-primary/20 rounded-xl">
          <Activity className="w-6 h-6 text-primary" />
        </div>
        نمط الحياة
      </h2>

      <div className="space-y-3">
        <Item 
          label="مستوى النشاط" 
          value={profile.activity_level ?? "-"} 
          icon={<Activity className="w-5 h-5 text-primary" />} 
        />
        <Item 
          label="نوع النظام" 
          value={profile.diet_type ?? "-"} 
          icon={<Utensils className="w-5 h-5 text-green-500" />} 
        />
        <Item 
          label="الميزانية" 
          value={profile.budget_level ?? "-"} 
          icon={<Wallet className="w-5 h-5 text-yellow-500" />} 
        />
        <Item 
          label="الهدف" 
          value={profile.goal ?? "-"} 
          icon={<Target className="w-5 h-5 text-red-500" />} 
        />
      </div>
    </div>
  );
};

const Item: React.FC<ItemProps> = ({ label, value, icon }) => (
  <div className="flex items-center justify-between p-4 bg-background/50 rounded-2xl border border-foreground/10 hover:border-foreground/20 hover:bg-background/60 transition-all duration-300 group">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-background/80 rounded-xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <span className="text-textcolor/70 font-medium">{label}</span>
    </div>
    <span className="text-foreground font-bold text-lg">{value}</span>
  </div>
);

export default Lifestyle;
