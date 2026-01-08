"use client";
import { Wallet, TrendingDown, ShoppingBag, Lightbulb, Check, ArrowRight } from "lucide-react";

export default function BudgetAwareSection() {

  const smartSwaps = [
    {
      from: "صدر فراخ مستورد",
      to: "صدر فراخ بلدي",
      savings: "توفير 40%",
      protein: "نفس البروتين"
    },
    {
      from: "سلمون طازج",
      to: "تونة معلبة",
      savings: "توفير 60%",
      protein: "بروتين عالي"
    },
    {
      from: "لوز محمص",
      to: "فول سوداني",
      savings: "توفير 70%",
      protein: "دهون صحية"
    }
  ];

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-foreground/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/20 border-2 border-foreground rounded-full backdrop-blur-sm mb-6">
            <Wallet className="w-5 h-5 text-foreground" />
            <span className="text-foreground font-bold">صحة بأسعار معقولة</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-textcolor mb-6">
            تغذية سليمة
            <span className="block text-secondary mt-2">تناسب ميزانيتك</span>
          </h2>
          
          <p className="text-xl text-textcolor/70 max-w-3xl mx-auto">
            الأكل الصحي مش لازم يكون غالي، نساعدك تحقق أهدافك بميزانية تناسبك
          </p>
        </div>



        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-linear-to-br from-foreground/10 to-secondary/10 backdrop-blur-xl rounded-3xl p-10 border-2 border-foreground/30 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-foreground/20 rounded-2xl">
                <TrendingDown className="w-8 h-8 text-foreground" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-textcolor">بدائل ذكية توفر مالك</h3>
                <p className="text-textcolor/70">نفس القيمة الغذائية بسعر أقل</p>
              </div>
            </div>

            <div className="space-y-4">
              {smartSwaps.map((swap, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-4 p-6 bg-background/50 rounded-2xl border border-textcolor/20 hover:border-foreground/40 transition-all duration-300 group"
                >
                  <div className="flex-1 text-center md:text-right">
                    <div className="text-textcolor/60 text-sm mb-1">بدلاً من</div>
                    <div className="text-xl font-bold text-textcolor">{swap.from}</div>
                  </div>

                  <div className="flex items-center gap-3 px-6 py-3 bg-foreground/20 rounded-2xl">
                    <ArrowRight className="w-6 h-6 text-foreground group-hover:translate-x-2 transition-transform" />
                    <div className="text-center">
                      <div className="text-2xl font-black text-foreground">{swap.savings}</div>
                      <div className="text-xs text-foreground/70">{swap.protein}</div>
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="text-textcolor/60 text-sm mb-1">استخدم</div>
                    <div className="text-xl font-bold text-secondary">{swap.to}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-linear-to-br from-secondary/10 to-transparent backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/30 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-secondary/20 rounded-2xl">
                <ShoppingBag className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-textcolor mb-2">قائمة تسوق ذكية</h3>
                <p className="text-textcolor/70">نساعدك تتسوق بذكاء وتوفر مالك</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-background/50 rounded-xl">
                <Check className="w-5 h-5 text-secondary" />
                <span className="text-textcolor/80">شراء بالجملة للمواد الأساسية</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background/50 rounded-xl">
                <Check className="w-5 h-5 text-secondary" />
                <span className="text-textcolor/80">اختيار الخضار الموسمية</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background/50 rounded-xl">
                <Check className="w-5 h-5 text-secondary" />
                <span className="text-textcolor/80">البروتين النباتي الاقتصادي</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background/50 rounded-xl">
                <Check className="w-5 h-5 text-secondary" />
                <span className="text-textcolor/80">تجميد الوجبات مسبقاً</span>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-foreground/10 to-transparent backdrop-blur-xl rounded-3xl p-8 border-2 border-foreground/30 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-foreground/20 rounded-2xl">
                <Lightbulb className="w-8 h-8 text-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-textcolor mb-2">نصائح توفير</h3>
                <p className="text-textcolor/70">حيل بسيطة لتقليل التكاليف</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-background/50 rounded-xl">
                <Check className="w-5 h-5 text-foreground" />
                <span className="text-textcolor/80">تحضير الطعام في المنزل</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background/50 rounded-xl">
                <Check className="w-5 h-5 text-foreground" />
                <span className="text-textcolor/80">استخدام كل أجزاء الطعام</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background/50 rounded-xl">
                <Check className="w-5 h-5 text-foreground" />
                <span className="text-textcolor/80">شراء المنتجات المحلية</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background/50 rounded-xl">
                <Check className="w-5 h-5 text-foreground" />
                <span className="text-textcolor/80">تخطيط الوجبات الأسبوعي</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}