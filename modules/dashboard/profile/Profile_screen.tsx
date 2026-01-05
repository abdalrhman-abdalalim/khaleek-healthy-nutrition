"use client"
import { useState } from 'react';
import { User, Mail, Activity, Target, TrendingDown, Flame, Scale, Ruler, Calendar, Dumbbell, Apple, Heart, CheckCircle, AlertCircle, Trophy, Zap, Eye } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { useGetProfile } from './models/get_profile/use_get_profile';


const Profile_Screen = () => {
  const { data: user, isLoading, error } = useGetProfile();
  const [activeTab, setActiveTab] = useState('overview');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-20 w-20 border-4 border-foreground border-t-transparent"></div>
          <Zap className="w-8 h-8 text-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="bg-red-500/10 border-2 border-red-500 rounded-3xl p-8 max-w-md backdrop-blur-sm">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4 animate-bounce" />
          <p className="text-textcolor text-center text-xl font-bold">حدث خطأ في تحميل البيانات</p>
          <p className="text-textcolor/60 text-center mt-2">يرجى المحاولة مرة أخرى</p>
        </div>
      </div>
    );
  }

  // بيانات الماكروز للرسم البياني
  const macrosData = [
    { name: 'بروتين', value: user?.daily_protein_target || 0, color: 'var(--color-foreground)' },
    { name: 'كربوهيدرات', value: user?.daily_carbs_target || 0, color: 'var(--color-secondary)' },
    { name: 'دهون', value: user?.daily_fat_target || 0, color: 'var(--color-textcolor)' }
  ];

  // بيانات الوزن للرسم البياني
  const weightData = [
    { month: 'يناير', weight: (user?.weight || 85) + 5 },
    { month: 'فبراير', weight: (user?.weight || 85) + 3 },
    { month: 'مارس', weight: (user?.weight || 85) + 1 },
    { month: 'أبريل', weight: user?.weight || 85 },
    { month: 'الهدف', weight: user?.target_weight || 75 }
  ];

  // بيانات Radar للياقة
  const fitnessData = [
    { subject: 'القوة', value: 85, fullMark: 100 },
    { subject: 'المرونة', value: 70, fullMark: 100 },
    { subject: 'التحمل', value: 90, fullMark: 100 },
    { subject: 'التوازن', value: 75, fullMark: 100 },
    { subject: 'السرعة', value: 65, fullMark: 100 }
  ];

  // حساب BMI
  const bmi = user?.height && user?.weight 
    ? (user.weight / ((user.height / 100) ** 2)).toFixed(1)
    : null;

  const getBMICategory = (bmi:any) => {
    if (!bmi) return '';
    if (bmi < 18.5) return 'نحيف';
    if (bmi < 25) return 'طبيعي';
    if (bmi < 30) return 'زيادة وزن';
    return 'سمنة';
  };

  const getBMIColor = (bmi:any) => {
    if (!bmi) return 'var(--color-textcolor)';
    if (bmi < 18.5) return '#60A5FA';
    if (bmi < 25) return 'var(--color-foreground)';
    if (bmi < 30) return '#FBBF24';
    return '#EF4444';
  };

  // حساب نسبة التقدم نحو الهدف
  const progressPercentage = user?.weight && user?.target_weight 
    ? Math.max(0, Math.min(100, ((user.weight - user.target_weight) / user.weight) * 100))
    : 0;

  return (
    <div className="min-h-screen bg-background text-textcolor p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header Section */}
        <div className="relative bg-linear-to-br from-secondary via-secondary/90 to-background rounded-[2rem] p-8 md:p-12 mb-8 shadow-2xl overflow-hidden border border-foreground/20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-foreground rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-foreground rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            {/* Avatar with ring animation */}
            <div className="relative group">
              <div className="absolute inset-0 bg-foreground rounded-full animate-pulse blur-xl"></div>
              <div className="relative w-32 h-32 bg-linear-to-br from-foreground to-foreground/70 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-foreground/30 group-hover:ring-8 transition-all duration-300">
                <User className="w-16 h-16 text-background" strokeWidth={2.5} />
              </div>
              {user?.email_verified_at && (
                <div className="absolute -bottom-2 -right-2 bg-foreground rounded-full p-2 shadow-lg animate-bounce">
                  <CheckCircle className="w-6 h-6 text-background" />
                </div>
              )}
            </div>

            <div className="flex-1 text-center md:text-right space-y-3">
              <h1 className="text-5xl md:text-6xl font-black text-textcolor mb-2 drop-shadow-lg bg-linear-to-r from-foreground to-textcolor bg-clip-text text-transparent">
                {user?.name}
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-3 text-textcolor/90">
                <Mail className="w-6 h-6 text-foreground" />
                <span className="text-xl font-medium">{user?.email}</span>
              </div>
              {user?.email_verified_at && (
                <div className="inline-flex items-center gap-2 bg-foreground/20 px-4 py-2 rounded-full backdrop-blur-sm border border-foreground/30">
                  <Eye className="w-4 h-4 text-foreground" />
                  <span className="text-sm font-bold text-foreground">حساب موثق</span>
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <div className="bg-background/40 backdrop-blur-md rounded-2xl p-6 text-center border-2 border-foreground/30 hover:border-foreground transition-all hover:scale-105 shadow-xl">
                <Calendar className="w-8 h-8 mx-auto mb-3 text-foreground" />
                <p className="text-sm text-textcolor/70 font-semibold">العمر</p>
                <p className="text-3xl font-black text-foreground">{user?.age}</p>
              </div>
              <div className="bg-background/40 backdrop-blur-md rounded-2xl p-6 text-center border-2 border-foreground/30 hover:border-foreground transition-all hover:scale-105 shadow-xl">
                <Heart className="w-8 h-8 mx-auto mb-3 text-foreground" />
                <p className="text-sm text-textcolor/70 font-semibold">الجنس</p>
                <p className="text-2xl font-black text-foreground">{user?.gender === 'male' ? 'ذكر' : 'أنثى'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fancy Tabs */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {[
            { id: 'overview', label: 'نظرة عامة', icon: Eye },
            { id: 'nutrition', label: 'التغذية', icon: Apple },
            { id: 'progress', label: 'التقدم', icon: Trophy }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`group relative px-8 py-4 rounded-2xl font-black text-lg transition-all whitespace-nowrap ${
                activeTab === id
                  ? 'bg-foreground text-background shadow-2xl scale-105'
                  : 'bg-secondary/30 text-textcolor/70 hover:bg-secondary/50 border-2 border-secondary/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-6 h-6 ${activeTab === id ? 'animate-pulse' : ''}`} />
                <span>{label}</span>
              </div>
              {activeTab === id && (
                <div className="absolute inset-0 bg-foreground rounded-2xl blur-xl opacity-50 -z-10"></div>
              )}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stats Cards with animations */}
              <div className="group bg-linear-to-br from-secondary/40 to-background/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/40 hover:border-foreground transition-all hover:scale-105 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <Scale className="w-12 h-12 text-foreground group-hover:rotate-12 transition-transform" />
                  <span className="text-sm text-textcolor/70 font-bold">الوزن الحالي</span>
                </div>
                <p className="text-5xl font-black text-foreground mb-2">{user?.weight}</p>
                <p className="text-sm text-textcolor/60">كجم</p>
                <div className="mt-4 pt-4 border-t border-textcolor/10">
                  <p className="text-xs text-textcolor/50">الهدف: <span className="text-foreground font-bold">{user?.target_weight} كجم</span></p>
                </div>
              </div>

              <div className="group bg-linear-to-br from-secondary/40 to-background/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/40 hover:border-foreground transition-all hover:scale-105 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <Ruler className="w-12 h-12 text-foreground group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-textcolor/70 font-bold">الطول</span>
                </div>
                <p className="text-5xl font-black text-foreground mb-2">{user?.height}</p>
                <p className="text-sm text-textcolor/60">سم</p>
                <div className="mt-4 pt-4 border-t border-textcolor/10">
                  <p className="text-xs text-textcolor/50">BMI: <span className="font-bold" style={{ color: getBMIColor(bmi) }}>{bmi} ({getBMICategory(bmi)})</span></p>
                </div>
              </div>

              <div className="group bg-linear-to-br from-secondary/40 to-background/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/40 hover:border-foreground transition-all hover:scale-105 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <Flame className="w-12 h-12 text-foreground group-hover:animate-bounce transition-transform" />
                  <span className="text-sm text-textcolor/70 font-bold">BMR</span>
                </div>
                <p className="text-5xl font-black text-foreground mb-2">{user?.bmr}</p>
                <p className="text-sm text-textcolor/60">سعرة</p>
                <div className="mt-4 pt-4 border-t border-textcolor/10">
                  <p className="text-xs text-textcolor/50">السعرات الأساسية</p>
                </div>
              </div>

              <div className="group bg-linear-to-br from-secondary/40 to-background/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/40 hover:border-foreground transition-all hover:scale-105 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <Activity className="w-12 h-12 text-foreground group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-textcolor/70 font-bold">TDEE</span>
                </div>
                <p className="text-5xl font-black text-foreground mb-2">{user?.tdee}</p>
                <p className="text-sm text-textcolor/60">سعرة</p>
                <div className="mt-4 pt-4 border-t border-textcolor/10">
                  <p className="text-xs text-textcolor/50">السعرات الكلية</p>
                </div>
              </div>
            </div>

            {/* Fitness Radar Chart */}
            <div className="bg-linear-to-br from-secondary/40 to-background/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/40 shadow-xl">
              <h3 className="text-3xl font-black mb-8 text-foreground flex items-center gap-3">
                <Trophy className="w-8 h-8 animate-pulse" />
                مؤشرات الأداء
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={fitnessData}>
                  <PolarGrid stroke="var(--color-textcolor)" strokeOpacity={0.2} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--color-textcolor)', fontSize: 14, fontWeight: 'bold' }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: 'var(--color-textcolor)' }} />
                  <Radar name="الأداء" dataKey="value" stroke="var(--color-foreground)" fill="var(--color-foreground)" fillOpacity={0.6} strokeWidth={3} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Nutrition Tab */}
        {activeTab === 'nutrition' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Macros Pie Chart */}
            <div className="bg-linear-to-br from-secondary/40 to-background/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/40 shadow-xl">
              <h3 className="text-3xl font-black mb-8 text-foreground flex items-center gap-3">
                <Apple className="w-8 h-8 animate-pulse" />
                توزيع الماكروز اليومي
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={macrosData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}جم`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="var(--color-background)"
                    strokeWidth={3}
                  >
                    {macrosData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--color-background)', 
                      border: '2px solid var(--color-foreground)', 
                      borderRadius: '1rem',
                      color: 'var(--color-textcolor)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Daily Targets */}
            <div className="bg-linear-to-br from-secondary/40 to-background/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/40 shadow-xl">
              <h3 className="text-3xl font-black mb-8 text-foreground flex items-center gap-3">
                <Target className="w-8 h-8 animate-pulse" />
                الأهداف اليومية
              </h3>
              <div className="space-y-6">
                {[
                  { label: 'السعرات الحرارية', value: user?.daily_calorie_target, unit: 'سعرة', progress: 75 },
                  { label: 'البروتين', value: user?.daily_protein_target, unit: 'جم', progress: 80 },
                  { label: 'الكربوهيدرات', value: user?.daily_carbs_target, unit: 'جم', progress: 65 },
                  { label: 'الدهون', value: user?.daily_fat_target, unit: 'جم', progress: 60 }
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between mb-3">
                      <span className="text-textcolor font-bold text-lg">{item.label}</span>
                      <span className="font-black text-foreground text-xl">{item.value} {item.unit}</span>
                    </div>
                    <div className="relative h-4 bg-background/60 rounded-full overflow-hidden border border-secondary/50">
                      <div 
                        className="h-full bg-linear-to-r from-foreground to-foreground/70 rounded-full transition-all duration-1000 ease-out shadow-lg"
                        style={{ width: `${item.progress}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Progress Tab */}
        {activeTab === 'progress' && (
          <div className="space-y-8">
            <div className="bg-linear-to-br from-secondary/40 to-background/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/40 shadow-xl">
              <h3 className="text-3xl font-black mb-8 text-foreground flex items-center gap-3">
                <TrendingDown className="w-8 h-8 animate-pulse" />
                تطور الوزن
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={weightData}>
                  <CartesianGrid strokeDasharray="5 5" stroke="var(--color-textcolor)" strokeOpacity={0.1} />
                  <XAxis 
                    dataKey="month" 
                    stroke="var(--color-textcolor)" 
                    style={{ fontSize: '14px', fontWeight: 'bold' }}
                  />
                  <YAxis 
                    stroke="var(--color-textcolor)"
                    style={{ fontSize: '14px', fontWeight: 'bold' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--color-background)', 
                      border: '2px solid var(--color-foreground)', 
                      borderRadius: '1rem',
                      color: 'var(--color-textcolor)',
                      fontWeight: 'bold'
                    }}
                    labelStyle={{ color: 'var(--color-foreground)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="weight" 
                    stroke="var(--color-foreground)" 
                    strokeWidth={4} 
                    dot={{ fill: 'var(--color-foreground)', r: 8, strokeWidth: 3, stroke: 'var(--color-background)' }}
                    activeDot={{ r: 10 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-linear-to-br from-secondary/40 to-background/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/40 hover:border-foreground transition-all hover:scale-105 shadow-xl">
                <h4 className="text-xl font-black mb-4 text-foreground flex items-center gap-2">
                  <Target className="w-6 h-6" />
                  الهدف
                </h4>
                <p className="text-textcolor text-2xl font-bold">{user?.goal}</p>
              </div>

              <div className="bg-linear-to-br from-secondary/40 to-background/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/40 hover:border-foreground transition-all hover:scale-105 shadow-xl">
                <h4 className="text-xl font-black mb-4 text-foreground flex items-center gap-2">
                  <Dumbbell className="w-6 h-6" />
                  مستوى النشاط
                </h4>
                <p className="text-textcolor text-2xl font-bold">{user?.activity_level}</p>
              </div>

              <div className="bg-linear-to-br from-secondary/40 to-background/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/40 hover:border-foreground transition-all hover:scale-105 shadow-xl">
                <h4 className="text-xl font-black mb-4 text-foreground flex items-center gap-2">
                  <Apple className="w-6 h-6" />
                  نوع النظام
                </h4>
                <p className="text-textcolor text-2xl font-bold">{user?.diet_type}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile_Screen;