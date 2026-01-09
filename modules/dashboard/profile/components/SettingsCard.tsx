import { User } from "../models/type";
import { Volume2, VolumeX, Sparkles, Bell, Sliders } from "lucide-react";
import { ReactNode } from "react";

type ToggleProps = { label: string; enabled: boolean; icon: ReactNode; color: string };

const Settings = ({ user }: { user: User }) => (
  <div className="relative bg-linear-to-br from-secondary/30 to-secondary/10 backdrop-blur-xl rounded-3xl p-4 sm:p-6 lg:p-8 border border-foreground/30 shadow-2xl overflow-hidden">
    <div className="relative z-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 mb-6 sm:mb-8">
        <div className="p-3 sm:p-4 bg-linear-to-br from-background to-background/50 rounded-2xl shadow-lg shrink-0">
          <Sliders className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-background">الإعدادات</h2>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        <Toggle label="الصوت" enabled={user.settings.voice_enabled} icon={user.settings.voice_enabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />} color="from-green-500 to-emerald-500" />
        <Toggle label="توصيات AI" enabled={user.settings.ai_recommendations_enabled} icon={<Sparkles className="w-5 h-5" />} color="from-purple-500 to-pink-500" />
        <div className="group flex items-center justify-between p-4 sm:p-5 bg-linear-to-r from-background/60 to-background/40 rounded-2xl border border-foreground/20 hover:border-foreground/40 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-2 sm:p-3 bg-linear-to-br from-orange-500/20 to-yellow-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Bell className="w-4 sm:w-5 h-4 sm:h-5 text-orange-500" />
            </div>
            <span className="text-sm sm:text-lg text-textcolor/80 font-medium">الإشعارات</span>
          </div>
          <div className="px-3 sm:px-4 py-1 sm:py-2 bg-linear-to-r from-orange-500/20 to-yellow-500/20 rounded-xl">
            <span className="text-foreground font-bold text-sm sm:text-lg">{user.settings.notification_frequency}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Toggle = ({ label, enabled, icon, color }: ToggleProps) => (
  <div className="group flex items-center justify-between p-4 sm:p-5 bg-linear-to-r from-background/60 to-background/40 rounded-2xl border border-foreground/20 hover:border-foreground/40 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
    <div className="flex items-center gap-2 sm:gap-3">
      <div className={`p-2 sm:p-3 bg-linear-to-br ${enabled ? color : "from-gray-500/20 to-gray-600/20"} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
        <div className={enabled ? "text-white" : "text-gray-400"}>{icon}</div>
      </div>
      <span className="text-sm sm:text-lg text-textcolor/80 font-medium">{label}</span>
    </div>

    <div className="relative">
      <div className={`w-14 sm:w-16 h-7 sm:h-8 rounded-full transition-all duration-500 shadow-lg ${enabled ? `bg-linear-to-r ${color} shadow-lg` : "bg-linear-to-r from-gray-600/40 to-gray-700/40"}`}>
        <div className={`absolute top-1 ${enabled ? "right-1" : "left-1"} w-6 h-6 rounded-full bg-white shadow-xl transition-all duration-500 transform ${enabled ? "scale-110" : "scale-100"}`}>
          {enabled && <div className="absolute inset-0 rounded-full bg-linear-to-r from-green-400/50 to-emerald-400/50 animate-pulse" />}
        </div>
      </div>
      {enabled && <div className={`absolute inset-0 rounded-full bg-linear-to-r ${color} opacity-30 blur-xl animate-pulse`} />}
    </div>
  </div>
);

export default Settings;
