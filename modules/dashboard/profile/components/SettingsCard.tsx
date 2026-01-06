import { User } from "../models/type";

const Settings = ({ user }: { user: User }) => (
  <div className="bg-secondary/20 backdrop-blur-xl rounded-3xl p-6 border border-foreground/20 shadow-xl">
    <h2 className="text-2xl font-bold text-textcolor mb-6">الإعدادات</h2>

    <Toggle label="الصوت" enabled={user.settings.voice_enabled} />
    <Toggle label="توصيات AI" enabled={user.settings.ai_recommendations_enabled} />

    <div className="flex items-center justify-between p-4 bg-background/40 rounded-xl border border-foreground/10">
      <span className="text-textcolor/70">الإشعارات</span>
      <span className="text-foreground font-bold">
        {user.settings.notification_frequency}
      </span>
    </div>
  </div>
);

const Toggle = ({ label, enabled }: any) => (
  <div className="flex items-center justify-between p-4 bg-background/40 rounded-xl border border-foreground/10">
    <span className="text-textcolor/70">{label}</span>
    <div className={`w-12 h-6 rounded-full ${enabled ? "bg-green-500" : "bg-textcolor/20"} relative`}>
      <div className={`absolute top-1 ${enabled ? "right-1" : "left-1"} w-4 h-4 bg-white rounded-full`} />
    </div>
  </div>
);

export default Settings;
