"use client";
import React from 'react';
import { useGetProfile } from './models/get_profile/use_get_profile';
import { DailyTargets, User, UserProfile } from './models/get_profile/type';


const Profile_Screen: React.FC = () => {
  const { data, isLoading, isError, error } = useGetProfile();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-foreground/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-foreground border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (isError || !data?.success || !data?.data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="bg-secondary/20 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full border border-foreground/20">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-textcolor mb-2">حدث خطأ</h2>
            <p className="text-textcolor/70">
              {error instanceof Error ? error.message : 'فشل تحميل البيانات'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const user: User = data.data;
  const profile: UserProfile = user.profile;
  const targets: DailyTargets = user.daily_targets;

  const activityLevelMap: Record<string, string> = {
    sedentary: 'قليل الحركة',
    light: 'نشاط خفيف',
    moderate: 'نشاط متوسط',
    active: 'نشط',
    very_active: 'نشط جداً'
  };

  const goalMap: Record<string, string> = {
    lose: 'فقدان الوزن',
    maintain: 'الحفاظ على الوزن',
    gain: 'زيادة الوزن'
  };

  const budgetMap: Record<string, string> = {
    low: 'محدود',
    medium: 'متوسط',
    high: 'مرتفع'
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Card */}
        <div className="bg-linear-to-br from-secondary/40 to-secondary/20 backdrop-blur-xl rounded-3xl p-8 mb-6 border border-foreground/20 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-28 h-28 bg-linear-to-br from-foreground to-foreground/70 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-5xl font-bold text-background">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex-1 text-center sm:text-right">
              <h1 className="text-4xl font-bold text-textcolor mb-2">{user.name}</h1>
              <p className="text-textcolor/70 text-lg mb-3">{user.email}</p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="px-4 py-1.5 bg-foreground/20 rounded-full text-foreground text-sm font-medium">
                  {profile.gender === 'male' ? 'ذكر' : 'أنثى'}
                </span>
                <span className="px-4 py-1.5 bg-foreground/20 rounded-full text-foreground text-sm font-medium">
                  {profile.age} سنة
                </span>
                <span className="px-4 py-1.5 bg-foreground/20 rounded-full text-foreground text-sm font-medium">
                  {goalMap[profile.goal] || profile.goal}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Body Measurements */}
            <div className="bg-secondary/20 backdrop-blur-xl rounded-3xl p-6 border border-foreground/20 shadow-xl">
              <h2 className="text-2xl font-bold text-textcolor mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-foreground/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                القياسات الجسدية
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-background/40 rounded-2xl p-5 border border-foreground/10">
                  <div className="text-textcolor/60 text-sm mb-2">الطول</div>
                  <div className="text-3xl font-bold text-foreground">{profile.height}</div>
                  <div className="text-textcolor/50 text-xs mt-1">سم</div>
                </div>
                <div className="bg-background/40 rounded-2xl p-5 border border-foreground/10">
                  <div className="text-textcolor/60 text-sm mb-2">الوزن الحالي</div>
                  <div className="text-3xl font-bold text-foreground">{profile.weight}</div>
                  <div className="text-textcolor/50 text-xs mt-1">كجم</div>
                </div>
                <div className="bg-background/40 rounded-2xl p-5 border border-foreground/10">
                  <div className="text-textcolor/60 text-sm mb-2">الوزن المستهدف</div>
                  <div className="text-3xl font-bold text-foreground">{profile.target_weight}</div>
                  <div className="text-textcolor/50 text-xs mt-1">كجم</div>
                </div>
              </div>
            </div>

            {/* Daily Targets */}
            <div className="bg-secondary/20 backdrop-blur-xl rounded-3xl p-6 border border-foreground/20 shadow-xl">
              <h2 className="text-2xl font-bold text-textcolor mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-foreground/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                الأهداف اليومية
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-linear-to-br from-orange-500/20 to-orange-500/10 rounded-2xl p-5 border border-orange-500/30">
                  <div className="text-orange-200 text-sm mb-2">السعرات</div>
                  <div className="text-3xl font-bold text-orange-300">{targets.calories}</div>
                  <div className="text-orange-200/70 text-xs mt-1">كالوري</div>
                </div>
                <div className="bg-linear-to-br from-red-500/20 to-red-500/10 rounded-2xl p-5 border border-red-500/30">
                  <div className="text-red-200 text-sm mb-2">البروتين</div>
                  <div className="text-3xl font-bold text-red-300">{targets.protein}</div>
                  <div className="text-red-200/70 text-xs mt-1">جرام</div>
                </div>
                <div className="bg-linear-to-br from-blue-500/20 to-blue-500/10 rounded-2xl p-5 border border-blue-500/30">
                  <div className="text-blue-200 text-sm mb-2">الكربوهيدرات</div>
                  <div className="text-3xl font-bold text-blue-300">{targets.carbs}</div>
                  <div className="text-blue-200/70 text-xs mt-1">جرام</div>
                </div>
                <div className="bg-linear-to-br from-yellow-500/20 to-yellow-500/10 rounded-2xl p-5 border border-yellow-500/30">
                  <div className="text-yellow-200 text-sm mb-2">الدهون</div>
                  <div className="text-3xl font-bold text-yellow-300">{targets.fat}</div>
                  <div className="text-yellow-200/70 text-xs mt-1">جرام</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Details */}
          <div className="space-y-6">
            {/* Lifestyle Info */}
            <div className="bg-secondary/20 backdrop-blur-xl rounded-3xl p-6 border border-foreground/20 shadow-xl">
              <h2 className="text-2xl font-bold text-textcolor mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-foreground/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                نمط الحياة
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background/40 rounded-xl border border-foreground/10">
                  <span className="text-textcolor/70">مستوى النشاط</span>
                  <span className="text-foreground font-bold">{activityLevelMap[profile.activity_level] || profile.activity_level}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/40 rounded-xl border border-foreground/10">
                  <span className="text-textcolor/70">نوع النظام</span>
                  <span className="text-foreground font-bold">{profile.diet_type}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/40 rounded-xl border border-foreground/10">
                  <span className="text-textcolor/70">الميزانية</span>
                  <span className="text-foreground font-bold">{budgetMap[profile.budget_level] || profile.budget_level}</span>
                </div>
              </div>
            </div>

            {/* Settings */}
            <div className="bg-secondary/20 backdrop-blur-xl rounded-3xl p-6 border border-foreground/20 shadow-xl">
              <h2 className="text-2xl font-bold text-textcolor mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-foreground/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                الإعدادات
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background/40 rounded-xl border border-foreground/10">
                  <span className="text-textcolor/70">الصوت</span>
                  <div className={`w-12 h-6 rounded-full transition-colors ${user.settings.voice_enabled ? 'bg-green-500' : 'bg-textcolor/20'} relative`}>
                    <div className={`absolute top-1 ${user.settings.voice_enabled ? 'right-1' : 'left-1'} w-4 h-4 bg-white rounded-full transition-all`}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/40 rounded-xl border border-foreground/10">
                  <span className="text-textcolor/70">توصيات AI</span>
                  <div className={`w-12 h-6 rounded-full transition-colors ${user.settings.ai_recommendations_enabled ? 'bg-green-500' : 'bg-textcolor/20'} relative`}>
                    <div className={`absolute top-1 ${user.settings.ai_recommendations_enabled ? 'right-1' : 'left-1'} w-4 h-4 bg-white rounded-full transition-all`}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/40 rounded-xl border border-foreground/10">
                  <span className="text-textcolor/70">الإشعارات</span>
                  <span className="text-foreground font-bold">
                    {user.settings.notification_frequency === 'daily' ? 'يومي' : 
                     user.settings.notification_frequency === 'weekly' ? 'أسبوعي' : 'شهري'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_Screen;