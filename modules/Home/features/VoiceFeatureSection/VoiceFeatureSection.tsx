"use client";
import { Mic, Zap, Clock, Globe, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function VoiceFeatureSection() {
  const [isRecording, setIsRecording] = useState(false);

  const steps = [
    { text: "اضغط على الميكروفون", time: "0s" },
    { text: "قل ما أكلت بصوتك", time: "5s" },
    { text: "احصل على التحليل الفوري", time: "10s" }
  ];

  const examples = [
    "أكلت طبق فول بالبيض الصبح",
    "وجبة الغداء: رز بسمتي مع صدر فراخ مشوي وسلطة",
    "تناولت قهوة بالحليب وكرواسون"
  ];

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-foreground/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/20 border-2 border-foreground rounded-full backdrop-blur-sm">
              <Mic className="w-5 h-5 text-foreground" />
              <span className="text-foreground font-bold">التسجيل الصوتي الذكي</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              <span className="text-textcolor">سجل وجباتك</span>
              <br />
              <span className="text-foreground">بصوتك فقط</span>
            </h2>

            <p className="text-xl text-textcolor/80 leading-relaxed">
              لا حاجة للكتابة أو البحث، فقط تحدث بشكل طبيعي ودع الذكاء الاصطناعي يفهمك ويحلل غذائك تلقائياً
            </p>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-secondary/10 backdrop-blur-sm rounded-2xl border border-secondary/30 hover:border-secondary transition-all duration-300">
                  <div className="shrink-0 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <span className="text-background font-bold text-xl">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-textcolor font-semibold">{step.text}</div>
                  </div>
                  <div className="px-3 py-1 bg-foreground/20 rounded-lg">
                    <span className="text-foreground text-sm font-bold">{step.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-foreground/10 backdrop-blur-sm rounded-2xl border border-foreground/30">
                <Zap className="w-8 h-8 text-foreground mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">سريع</div>
                <div className="text-xs text-textcolor/70">10 ثوانٍ فقط</div>
              </div>
              <div className="text-center p-4 bg-secondary/10 backdrop-blur-sm rounded-2xl border border-secondary/30">
                <Clock className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-black text-secondary">دقيق</div>
                <div className="text-xs text-textcolor/70">تحليل شامل</div>
              </div>
              <div className="text-center p-4 bg-foreground/10 backdrop-blur-sm rounded-2xl border border-foreground/30">
                <Globe className="w-8 h-8 text-foreground mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">عربي</div>
                <div className="text-xs text-textcolor/70">يفهم لهجتك</div>
              </div>
              <div className="text-center p-4 bg-secondary/10 backdrop-blur-sm rounded-2xl border border-secondary/30">
                <CheckCircle className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-black text-secondary">سهل</div>
                <div className="text-xs text-textcolor/70">بدون تعقيد</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-secondary/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/30 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/20 rounded-full mb-6">
                    <div className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
                    <span className="text-foreground text-sm font-bold">جاهز للتسجيل</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsRecording(!isRecording)}
                  className={`relative w-full aspect-square max-w-xs mx-auto rounded-full flex items-center justify-center transition-all duration-500 bg-foreground shadow-2xl scale-110
                  `}
                >
                  <div className={`absolute inset-0 rounded-full ${isRecording}`} />
                  <Mic className={`w-24 h-24 text-background relative z-10 ${isRecording}`} />
                </button>

                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-textcolor">
                    {'اضغط للتحدث'}
                  </div>
                  <div className="text-sm text-textcolor/70">
                    {'تحدث بالعربية أو الإنجليزية'}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm text-textcolor/70 font-semibold">أمثلة يمكنك قولها:</div>
                  {examples.map((example, index) => (
                    <div
                      key={index}
                      className="p-4 bg-background/50 rounded-2xl border border-foreground/20 hover:border-foreground/40 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 w-6 h-6 bg-foreground/20 rounded-full flex items-center justify-center group-hover:bg-foreground/40 transition-colors">
                          <Mic className="w-4 h-4 text-foreground" />
                        </div>
                        <div className="text-textcolor/90 text-sm leading-relaxed">{example}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-foreground/10 backdrop-blur-sm rounded-2xl border border-foreground/30">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-foreground shrink-0" />
                    <div className="text-sm text-textcolor/80">
                      <span className="font-bold text-foreground">ملاحظة:</span> النظام يدعم اللهجة المصرية والعامية العربية
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}