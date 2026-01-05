"use client";

import { useGetProfile } from "./models/get_profile/use_get_profile";
import ProfileLoader from "./components/ProfileLoader";
import ProfileError from "./components/ProfileError";
import ProfileHeader from "./components/ProfileHeader";
import BodyMeasurements from "./components/BodyMeasurements";
import DailyTargetsCard from "./components/DailyTargetsCard";
import Lifestyle from "./components/LifestyleCard";
import Settings from "./components/SettingsCard";

const Profile_Screen = () => {
  const { data, isLoading, isError, error } = useGetProfile();

  if (isLoading) return <ProfileLoader />;
  if (isError || !data?.success) return <ProfileError message={error?.message} />;

  const user = data.data;

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ProfileHeader user={user} profile={user.profile} goalMap={{ lose: "فقدان الوزن", maintain: "الحفاظ", gain: "زيادة" }} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <BodyMeasurements profile={user.profile} />
            <DailyTargetsCard targets={user.daily_targets} />
          </div>

          <div className="space-y-6">
            <Lifestyle
              profile={user.profile}
              activityLevelMap={{ sedentary: "قليل الحركة", light: "خفيف", moderate: "متوسط", active: "نشط", very_active: "نشط جداً" }}
              budgetMap={{ low: "محدود", medium: "متوسط", high: "مرتفع" }}
            />
            <Settings user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_Screen;
