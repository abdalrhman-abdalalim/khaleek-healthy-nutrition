"use client";
import { Mic, Brain, Wallet, BarChart3, Zap, Clock } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Mic className="w-10 h-10" />,
      title: "تسجيل صوتي ذكي",
      description: "سجل وجباتك بصوتك في ثوانٍ، دون الحاجة للكتابة أو البحث المعقد",
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "مدرب AI شخصي",
      description: "توصيات مخصصة تتكيف مع تقدمك وأهدافك وتفضيلاتك الغذائية",
      color: "foreground",
      gradient: "from-foreground/20 to-foreground/5"
    },
    {
      icon: <Wallet className="w-10 h-10" />,
      title: "خطط مناسبة للميزانية",
      description: "اقتراحات وجبات تناسب ميزانيتك دون التضحية بالقيمة الغذائية",
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "تتبع شامل",
      description: "راقب السعرات، البروتينات، الكربوهيدرات، والدهون بدقة عالية",
      color: "foreground",
      gradient: "from-foreground/20 to-foreground/5"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "تحليل فوري",
      description: "احصل على تحليل غذائي كامل لوجباتك في أقل من ثانية",
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "مرونة كاملة",
      description: "لا توجد خطط صارمة، نظام يتكيف مع نمط حياتك اليومي",
      color: "foreground",
      gradient: "from-foreground/20 to-foreground/5"
    }
  ];

  return (
    <section className="relative min-h-screen bg-background py-10 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-foreground/20 border-2 border-foreground rounded-full mb-6">
            <Zap className="w-5 h-5 text-foreground" />
            <span className="text-foreground font-bold">مميزات قوية</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-textcolor mb-6">
           رحلتك الصحية
            <br />
            <span className="text-secondary">تصبح أكثر ذكاءً</span>
          </h2>
          
          <p className="text-xl text-textcolor/70 max-w-2xl mx-auto">
            أدوات متقدمة وذكاء اصطناعي لمساعدتك في تحقيق أهدافك الصحية بسهولة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className={`relative h-full bg-linear-to-br ${feature.gradient} backdrop-blur-xl rounded-3xl p-8 border-2 border-${feature.color}/30 hover:border-${feature.color} transition-all duration-300 hover:scale-105 shadow-xl`}>
                <div className={`inline-flex p-4 bg-${feature.color}/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-${feature.color}`}>
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-textcolor mb-4">
                  {feature.title}
                </h3>

                <p className="text-textcolor/70 leading-relaxed">
                  {feature.description}
                </p>

                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-${feature.color}/10 rounded-full blur-2xl`} />
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
}