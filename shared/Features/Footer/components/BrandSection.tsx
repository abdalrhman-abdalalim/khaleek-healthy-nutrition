import { Brain, Heart } from "lucide-react";

const BrandSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-foreground via-foreground/80 to-background shadow-xl">
            <Brain className="h-8 w-8 text-secondary" />
          </div>
          <div className="absolute -inset-3 rounded-2xl bg-linear-to-br from-foreground/20 to-transparent blur-xl opacity-60" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-background mb-1">خليك هيلثي</h2>
        </div>
      </div>

      <p className="text-secondar/80 text-lg leading-relaxed max-w-xl">
        منصة ذكية تعتمد على الذكاء الاصطناعي لتحليل تغذيتك، تتبع نشاطك البدني،
        وتقديم توصيات شخصية تساعدك على تحقيق أهدافك الصحية بكل كفاءة وذكاء.
      </p>
    </div>
  );
};
export default BrandSection;
