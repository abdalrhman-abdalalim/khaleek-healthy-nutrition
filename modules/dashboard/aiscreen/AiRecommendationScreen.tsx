"use client";
import { Brain, Calendar, TrendingUp, Utensils, Dumbbell, Target, Sparkles, Star, AlertCircle, Loader2, CheckCircle } from "lucide-react";
import { useWeeklyAIRecommendation } from "./models/use_ai";

const AiRecommendationScreen = () => {
  const { data, isLoading, isError, error } = useWeeklyAIRecommendation();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-16 h-16 text-foreground animate-spin" />
          <p className="text-textcolor text-2xl font-bold">جاري تحليل بياناتك...</p>
          <p className="text-textcolor/70">الذكاء الاصطناعي يحضر توصياتك المخصصة</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-md bg-foreground/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-foreground/30 text-center">
          <AlertCircle className="w-16 h-16 text-foreground mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-textcolor mb-2">حدث خطأ</h3>
          <p className="text-textcolor/70">{error?.message || "لم نتمكن من تحميل التوصيات"}</p>
        </div>
      </div>
    );
  }

  const recommendation = data?.data;
  if (!recommendation) return null;

  const adherencePercentage = recommendation.adherence_score * 10;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-4 bg-linear-to-br from-foreground to-secondary rounded-3xl shadow-2xl animate-pulse">
              <Brain className="w-12 h-12 text-background" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-center text-secondary mb-4">
            توصياتك الأسبوعية
          </h1>
          <p className="text-center text-textcolor/70 text-xl">
            تحليل شامل وتوصيات مخصصة من مدربك الذكي
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-linear-to-br from-secondary/20 to-secondary/5 backdrop-blur-xl rounded-3xl p-6 border-2 border-secondary/30 shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-6 h-6 text-secondary" />
              <span className="text-textcolor/70 font-semibold">الفترة</span>
            </div>
            <div className="text-2xl font-bold text-secondary">{recommendation.period.label}</div>
            <div className="text-sm text-textcolor/60 mt-1">
              {new Date(recommendation.period.start).toLocaleDateString("ar-EG")} - {new Date(recommendation.period.end).toLocaleDateString("ar-EG")}
            </div>
          </div>

          <div className="bg-linear-to-br from-foreground/20 to-foreground/5 backdrop-blur-xl rounded-3xl p-6 border-2 border-foreground/30 shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-foreground" />
              <span className="text-textcolor/70 font-semibold">نسبة الالتزام</span>
            </div>
            <div className="text-4xl font-black text-foreground mb-2">{adherencePercentage}%</div>
            <div className="h-3 bg-background/50 rounded-full overflow-hidden">
              <div 
                className="h-full bg-linear-to-r from-foreground to-secondary rounded-full transition-all duration-1000"
                style={{ width: `${adherencePercentage}%` }}
              />
            </div>
          </div>

          <div className="bg-linear-to-br from-secondary/20 to-secondary/5 backdrop-blur-xl rounded-3xl p-6 border-2 border-secondary/30 shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <Star className="w-6 h-6 text-secondary" />
              <span className="text-textcolor/70 font-semibold">التقييم العام</span>
            </div>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-8 h-8 ${i < (recommendation.overall_rating || 0) ? 'text-secondary fill-secondary' : 'text-textcolor/30'}`}
                />
              ))}
            </div>
            <div className="text-sm text-textcolor/60 mt-2">
              {recommendation.overall_rating || 0}/5 نجوم
            </div>
          </div>
        </div>

        <div className="bg-linear-to-br from-foreground/10 to-secondary/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-foreground/30 shadow-2xl mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-foreground" />
            <h2 className="text-3xl font-bold text-textcolor">الملخص الأسبوعي</h2>
          </div>
          <p className="text-lg text-textcolor/90 leading-relaxed">
            {recommendation.summary}
          </p>
          <div className="mt-6 flex items-center gap-3 p-4 bg-foreground/10 rounded-2xl border border-foreground/30">
            <Brain className="w-6 h-6 text-foreground shrink-0" />
            <div className="text-sm text-textcolor/80">
              <span className="font-bold text-foreground">محلل بواسطة:</span> {recommendation.ai_model}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-linear-to-br from-secondary/10 to-transparent backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/30 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Utensils className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold text-textcolor">التغذية</h3>
            </div>
            <div className="space-y-3">
              {recommendation.recommendations.nutrition.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background/50 rounded-2xl border border-secondary/20">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-textcolor/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-br from-foreground/10 to-transparent backdrop-blur-xl rounded-3xl p-8 border-2 border-foreground/30 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Dumbbell className="w-8 h-8 text-foreground" />
              <h3 className="text-2xl font-bold text-textcolor">التمارين</h3>
            </div>
            <div className="space-y-3">
              {recommendation.recommendations.training.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background/50 rounded-2xl border border-foreground/20">
                  <CheckCircle className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                  <span className="text-textcolor/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-br from-secondary/10 to-transparent backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/30 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold text-textcolor">الأهداف</h3>
            </div>
            <div className="space-y-3">
              {recommendation.recommendations.goals.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background/50 rounded-2xl border border-secondary/20">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-textcolor/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-linear-to-br from-foreground/10 to-secondary/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-foreground/30 shadow-2xl mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Utensils className="w-8 h-8 text-foreground" />
            <h2 className="text-3xl font-bold text-textcolor">اقتراحات الوجبات</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-secondary/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-secondary/30">
              <div className="text-xl font-bold text-secondary mb-3">🌅 الإفطار</div>
              <p className="text-textcolor/90 leading-relaxed">{recommendation.meal_suggestions.breakfast}</p>
            </div>
            
            <div className="bg-foreground/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-foreground/30">
              <div className="text-xl font-bold text-foreground mb-3">☀️ الغداء</div>
              <p className="text-textcolor/90 leading-relaxed">{recommendation.meal_suggestions.lunch}</p>
            </div>
            
            <div className="bg-secondary/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-secondary/30">
              <div className="text-xl font-bold text-secondary mb-3">🌙 العشاء</div>
              <p className="text-textcolor/90 leading-relaxed">{recommendation.meal_suggestions.dinner}</p>
            </div>
          </div>

          {recommendation.meal_suggestions.snacks && recommendation.meal_suggestions.snacks.length > 0 && (
            <div className="mt-6 bg-foreground/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-foreground/30">
              <div className="text-xl font-bold text-foreground mb-4">🍎 وجبات خفيفة</div>
              <div className="grid md:grid-cols-2 gap-3">
                {recommendation.meal_suggestions.snacks.map((snack, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-background/50 rounded-xl">
                    <div className="w-2 h-2 bg-foreground rounded-full" />
                    <span className="text-textcolor/90">{snack}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {recommendation.training_suggestions && recommendation.training_suggestions.length > 0 && (
          <div className="bg-linear-to-br from-foreground/10 to-transparent backdrop-blur-xl rounded-3xl p-8 border-2 border-foreground/30 shadow-xl mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Dumbbell className="w-8 h-8 text-foreground" />
              <h2 className="text-3xl font-bold text-textcolor">خطة التمارين المقترحة</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {recommendation.training_suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start gap-3 p-5 bg-background/50 rounded-2xl border border-foreground/20">
                  <div className="shrink-0 w-8 h-8 bg-foreground/20 rounded-full flex items-center justify-center">
                    <span className="text-foreground font-bold">{index + 1}</span>
                  </div>
                  <span className="text-textcolor/90 leading-relaxed">{suggestion}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {recommendation.nutrition_analysis && (
          <div className="bg-linear-to-br from-secondary/10 to-transparent backdrop-blur-xl rounded-3xl p-8 border-2 border-secondary/30 shadow-xl mb-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl font-bold text-textcolor">التحليل الغذائي</h2>
            </div>
            <p className="text-lg text-textcolor/90 leading-relaxed">
              {recommendation.nutrition_analysis}
            </p>
          </div>
        )}

        {recommendation.improvement_areas && recommendation.improvement_areas.length > 0 && (
          <div className="bg-linear-to-br from-foreground/10 to-secondary/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-foreground/30 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-foreground" />
              <h2 className="text-3xl font-bold text-textcolor">مجالات التحسين</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {recommendation.improvement_areas.map((area, index) => (
                <div key={index} className="flex items-start gap-3 p-5 bg-background/50 rounded-2xl border border-foreground/20 hover:border-foreground/40 transition-all duration-300">
                  <AlertCircle className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                  <span className="text-textcolor/90">{area}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiRecommendationScreen;