"use client";
import { Utensils, Dumbbell, Target} from "lucide-react";
import { useWeeklyAIRecommendation } from "./models/use_ai";
import RecommendationStats from "./components/RecommendationStats";
import WeeklySummary from "./components/WeeklySummary";
import RecommendationCategory from "./components/RecommendationCategory";
import MealSuggestions from "./components/MealSuggestions";
import AiRecommendationHeader from "./components/AiRecommendationHeader";
import AiRecommendationError from "./components/AiRecommendationError";
import AiRecommendationLoading from "./components/AiRecommendationLoading";
import TrainingSuggestionsSection from "./components/TrainingSuggestionsSection";
import NutritionAnalysisSection from "./components/NutritionAnalysisSection";
import ImprovementAreasSection from "./components/ImprovementAreasSection";

const AiRecommendationScreen = () => {
  const { data, isLoading, isError, error } = useWeeklyAIRecommendation();

  if (isLoading) { return <AiRecommendationLoading />;}

  if (isError) { return <AiRecommendationError message={error?.message} />;}

  const recommendation = data?.data;
  if (!recommendation) return null;
  const adherencePercentage = recommendation.adherence_score * 10;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-7xl">

         <AiRecommendationHeader />

          <RecommendationStats
            period={recommendation.period}
            adherencePercentage={adherencePercentage}
            overallRating={recommendation.overall_rating}
          />

          <WeeklySummary
            summary={recommendation.summary}
            aiModel={recommendation.ai_model}
          />

       <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <RecommendationCategory
              title="التغذية"
              icon={<Utensils className="w-8 h-8" />}
              items={recommendation.recommendations.nutrition}
              variant="secondary"
            />

            <RecommendationCategory
              title="التمارين"
              icon={<Dumbbell className="w-8 h-8" />}
              items={recommendation.recommendations.training}
              variant="foreground"
            />

            <RecommendationCategory
              title="الأهداف"
              icon={<Target className="w-8 h-8" />}
              items={recommendation.recommendations.goals}
              variant="secondary"
            />
          </div>

          <MealSuggestions
            breakfast={recommendation.meal_suggestions.breakfast}
            lunch={recommendation.meal_suggestions.lunch}
            dinner={recommendation.meal_suggestions.dinner}
            snacks={recommendation.meal_suggestions.snacks}
          />


            <TrainingSuggestionsSection suggestions={recommendation.training_suggestions} />
            <NutritionAnalysisSection analysis={recommendation.nutrition_analysis} />
            <ImprovementAreasSection areas={recommendation.improvement_areas} />
      </div>
    </div>
  );
};

export default AiRecommendationScreen;