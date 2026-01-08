"use client";
import { UserPlus, Mic, BarChart3, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: <UserPlus className="w-10 h-10" />,
      title: "أنشئ حسابك",
      description: "سجل بياناتك الأساسية: العمر، الوزن، الطول، مستوى النشاط، وهدفك الصحي",
      details: ["تسجيل سريع في دقيقة واحدة", "بيانات آمنة ومشفرة", "لا حاجة لبطاقة ائتمان"],
      color: "secondary"
    },
    {
      number: "02",
      icon: <Mic className="w-10 h-10" />,
      title: "سجل وجباتك",
      description: "استخدم الصوت أو النص لتسجيل ما تأكله، النظام يفهمك ويحلل غذائك تلقائياً",
      details: ["تسجيل صوتي بالعربية", "تحليل غذائي فوري", "حساب دقيق للسعرات"],
      color: "foreground"
    },
    {
      number: "03",
      icon: <BarChart3 className="w-10 h-10" />,
      title: "تتبع تقدمك",
      description: "شاهد إحصائيات يومية وأسبوعية عن تقدمك، رسوم بيانية واضحة ومفصلة",
      details: ["تقارير يومية وأسبوعية", "رسوم بيانية تفاعلية", "مقارنة بالأهداف"],
      color: "secondary"
    },
    {
      number: "04",
      icon: <Sparkles className="w-10 h-10" />,
      title: "احصل على توصيات AI",
      description: "مدربك الشخصي يقدم لك نصائح مخصصة بناءً على أدائك وتقدمك المستمر",
      details: ["نصائح مخصصة لك", "بدائل غذائية ذكية", "خطط تتكيف معك"],
      color: "foreground"
    }
  ];

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border-2 border-secondary rounded-full backdrop-blur-sm mb-6">
            <BarChart3 className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-bold">الطريقة بسيطة</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-textcolor mb-6">
            كيف يعمل
            <span className="block text-foreground mt-2">خليك صحي؟</span>
          </h2>
          
          <p className="text-xl text-textcolor/70 max-w-3xl mx-auto">
            أربع خطوات بسيطة تفصلك عن تحقيق أهدافك الصحية
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`flex-1 relative bg-linear-to-br backdrop-blur-xl rounded-3xl p-8 border-2 hover:scale-105 transition-all duration-500 shadow-xl ${
                  step.color === 'secondary' 
                    ? 'bg-secondary/10 border-secondary/30 hover:border-secondary' 
                    : 'bg-foreground/10 border-foreground/30 hover:border-foreground'
                }`}>
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20"
                    style={{
                      background: step.color === 'secondary' ? 'rgb(217 233 207)' : 'rgb(249 180 135)'
                    }}
                  />

                  <div className="relative space-y-4">
                    <div className={`inline-flex p-4 rounded-2xl ${
                      step.color === 'secondary' 
                        ? 'bg-secondary/20 text-secondary' 
                        : 'bg-foreground/20 text-foreground'
                    }`}>
                      {step.icon}
                    </div>

                    <h3 className="text-3xl font-bold text-textcolor">
                      {step.title}
                    </h3>

                    <p className="text-lg text-textcolor/80 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-3 pt-4">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            step.color === 'secondary' ? 'bg-secondary' : 'bg-foreground'
                          }`} />
                          <span className="text-textcolor/70">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative shrink-0">
                  <div className={`w-32 h-32 rounded-full flex items-center justify-center border-4 backdrop-blur-xl ${
                    step.color === 'secondary'
                      ? 'bg-secondary/20 border-secondary'
                      : 'bg-foreground/20 border-foreground'
                  }`}>
                    <span className={`text-5xl font-black ${
                      step.color === 'secondary' ? 'text-secondary' : 'text-foreground'
                    }`}>
                      {step.number}
                    </span>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 mt-8">
                      <ArrowLeft className={`w-8 h-8 rotate-90 ${
                        step.color === 'secondary' ? 'text-secondary' : 'text-foreground'
                      } animate-bounce`} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}