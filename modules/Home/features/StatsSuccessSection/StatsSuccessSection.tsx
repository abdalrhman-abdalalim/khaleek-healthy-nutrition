"use client";
import { Users, Award, TrendingUp, Target, Clock, Heart, Zap, Star } from "lucide-react";
import Link from "next/link";

export default function StatsSuccessSection() {
  const mainStats = [
    {
      icon: <Award className="w-12 h-12" />,
      number: "95%",
      label: "نسبة النجاح",
      description: "في تحقيق الأهداف",
      color: "foreground"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      number: "12 كجم",
      label: "متوسط الفقدان",
      description: "في 3 أشهر",
      color: "secondary"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      number: "10 ثوانٍ",
      label: "لتسجيل الوجبة",
      description: "سريع وسهل",
      color: "foreground"
    }
  ];

  const detailedStats = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "التزام عالي",
      stat: "7/7 أيام",
      description: "متوسط تسجيل الوجبات أسبوعياً"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "رضا المستخدمين",
      stat: "4.9/5",
      description: "تقييم على متاجر التطبيقات"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "سرعة الاستجابة",
      stat: "< 500ms",
      description: "وقت تحليل الطعام"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "توصيات دقيقة",
      stat: "98%",
      description: "دقة التحليل الغذائي"
    }
  ];



  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-secondary/5 via-transparent to-foreground/5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-foreground/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border-2 border-secondary rounded-full backdrop-blur-sm mb-6">
            <TrendingUp className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-bold">نتائج حقيقية</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-textcolor mb-6">
            أرقام تتحدث
            <span className="block text-foreground mt-2">عن نفسها</span>
          </h2>
          
          <p className="text-xl text-textcolor/70 max-w-3xl mx-auto">
            آلاف المستخدمين حققوا أهدافهم معنا، والأرقام تثبت ذلك
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainStats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-linear-to-br backdrop-blur-xl rounded-3xl p-8 border-2 transition-all duration-500 hover:scale-110 shadow-2xl ${
                stat.color === 'secondary'
                  ? 'from-secondary/20 to-secondary/5 border-secondary/30 hover:border-secondary'
                  : 'from-foreground/20 to-foreground/5 border-foreground/30 hover:border-foreground'
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"
                style={{
                  background: stat.color === 'secondary' ? 'rgb(217 233 207)' : 'rgb(249 180 135)'
                }}
              />

              <div className="relative text-center space-y-4">
                <div className={`inline-flex p-4 rounded-2xl ${
                  stat.color === 'secondary' ? 'bg-secondary/20 text-secondary' : 'bg-foreground/20 text-foreground'
                } group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>

                <div className={`text-5xl font-black ${
                  stat.color === 'secondary' ? 'text-secondary' : 'text-foreground'
                }`}>
                  {stat.number}
                </div>

                <div>
                  <div className="text-xl font-bold text-textcolor mb-1">{stat.label}</div>
                  <div className="text-sm text-textcolor/60">{stat.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detailedStats.map((item, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-textcolor/5 to-transparent backdrop-blur-xl rounded-2xl p-6 border-2 border-textcolor/20 hover:border-foreground/40 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-foreground/20 rounded-xl text-foreground">
                    {item.icon}
                  </div>
                </div>
                <div className="text-3xl font-black text-foreground mb-2">{item.stat}</div>
                <div className="text-lg font-bold text-textcolor mb-1">{item.title}</div>
                <div className="text-sm text-textcolor/60">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-linear-to-br from-secondary/10 to-transparent backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/30 shadow-xl">
            <div className="text-2xl font-black text-secondary mb-3">أهداف واقعية</div>
            <p className="text-textcolor/70 leading-relaxed">
              نساعدك تضع أهداف قابلة للتحقيق وخطة واضحة للوصول إليها
            </p>
          </div>

          <div className="bg-linear-to-br from-foreground/10 to-transparent backdrop-blur-xl rounded-3xl p-8 border-2 border-foreground/30 shadow-xl">
            <div className="text-2xl font-black text-foreground mb-3">تتبع دقيق</div>
            <p className="text-textcolor/70 leading-relaxed">
              رصد شامل لتقدمك اليومي والأسبوعي مع رسوم بيانية واضحة
            </p>
          </div>

          <div className="bg-linear-to-br from-secondary/10 to-transparent backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/30 shadow-xl">
            <div className="text-2xl font-black text-secondary mb-3">دعم مستمر</div>
            <p className="text-textcolor/70 leading-relaxed">
              مدربك الذكي معك في كل خطوة، بنصائح وتوجيهات مخصصة
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 p-10 bg-linear-to-br from-secondary/20 to-foreground/20 backdrop-blur-xl rounded-3xl border-2 border-secondary/30 shadow-2xl">
            <div className="text-3xl font-black text-textcolor">
              جاهز للبدء؟
            </div>
            <div className="text-textcolor/70 text-lg max-w-md">
              انضم لآلاف المستخدمين الذين حققوا أهدافهم الصحية معنا
            </div>
            <Link href={"/Register"} className="px-10 py-5 bg-foreground hover:bg-foreground/90 text-background font-bold text-xl rounded-2xl transition-all duration-300 hover:scale-110 shadow-xl">
              ابدأ رحلتك الآن
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}