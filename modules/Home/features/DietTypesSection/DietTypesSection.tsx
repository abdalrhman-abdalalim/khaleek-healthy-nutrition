"use client";
import { Leaf, Flame, Scale, Heart, Sparkles, Check, Zap, Users, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DietTypesSection() {
  const dietTypes = [
    {
      icon: <Flame className="w-12 h-12" />,
      name: "كيتو",
      description: "نظام غذائي منخفض الكربوهيدرات وعالي الدهون",
      benefits: ["حرق دهون سريع", "طاقة مستدامة", "تحكم في الشهية"],
      macros: { carbs: "5%", protein: "25%", fat: "70%" },
      color: "foreground",
      emoji: "🥑"
    },
    {
      icon: <Scale className="w-12 h-12" />,
      name: "قليل الكربوهيدرات",
      description: "تقليل الكربوهيدرات مع توازن البروتين والدهون",
      benefits: ["فقدان وزن ثابت", "سهل الالتزام", "مناسب للمبتدئين"],
      macros: { carbs: "20%", protein: "35%", fat: "45%" },
      color: "secondary",
      emoji: "🍖"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      name: "متوازن",
      description: "توزيع متوازن بين جميع العناصر الغذائية",
      benefits: ["صحي ومستدام", "متنوع ولذيذ", "للصحة العامة"],
      macros: { carbs: "40%", protein: "30%", fat: "30%" },
      color: "foreground",
      emoji: "⚖️"
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      name: "نباتي",
      description: "نظام يعتمد على النباتات بالكامل",
      benefits: ["صديق للبيئة", "غني بالألياف", "خفيف وصحي"],
      macros: { carbs: "50%", protein: "20%", fat: "30%" },
      color: "secondary",
      emoji: "🥗"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "تحليل ذكي",
      description: "AI يحلل احتياجاتك الشخصية"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "دعم متخصصين",
      description: "فريق تغذية متاح للمساعدة"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "تتبع التقدم",
      description: "رؤية نتائجك يومياً"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "نتائج مثبتة",
      description: "آلاف الحالات الناجحة"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-foreground/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/20 border-2 border-foreground rounded-full backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="w-5 h-5 text-foreground" />
            <span className="text-foreground font-bold">اختر ما يناسبك</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-black text-textcolor mb-6">
            أنظمة غذائية
            <span className="block text-secondary mt-2">لكل الأهداف</span>
          </h2>
          
          <p className="text-xl text-textcolor/70 max-w-3xl mx-auto">
            ندعم جميع أنواع الأنظمة الغذائية، اختر النظام الذي يناسب أهدافك وأسلوب حياتك
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {dietTypes.map((diet, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`group relative bg-linear-to-br backdrop-blur-xl rounded-3xl p-8 border-2 transition-all duration-500 hover:shadow-2xl cursor-pointer ${
                diet.color === 'secondary'
                  ? 'bg-secondary/10 border-secondary/30 hover:border-secondary'
                  : 'bg-foreground/10 border-foreground/30 hover:border-foreground'
              }`}
            >
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-40"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  background: diet.color === 'secondary' ? 'rgb(217 233 207)' : 'rgb(249 180 135)'
                }}
              />

              <div className="relative space-y-6">
                <div className="text-center">
                  <motion.div 
                    className="text-6xl mb-4"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {diet.emoji}
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`inline-flex p-3 rounded-2xl mb-4 ${
                      diet.color === 'secondary'
                        ? 'bg-secondary/20 text-secondary'
                        : 'bg-foreground/20 text-foreground'
                    }`}
                  >
                    {diet.icon}
                  </motion.div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-textcolor mb-3">
                    {diet.name}
                  </h3>
                  <p className="text-textcolor/70 text-sm leading-relaxed">
                    {diet.description}
                  </p>
                </div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {diet.benefits.map((benefit, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center gap-2"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Check className={`w-4 h-4 ${
                          diet.color === 'secondary' ? 'text-secondary' : 'text-foreground'
                        }`} />
                      </motion.div>
                      <span className="text-textcolor/80 text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-2xl ${
                    diet.color === 'secondary'
                      ? 'bg-secondary/10 border border-secondary/30'
                      : 'bg-foreground/10 border border-foreground/30'
                  }`}
                >
                  <div className="text-xs text-textcolor/60 mb-3 text-center font-semibold">
                    التوزيع الغذائي
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: "كربوهيدرات", value: diet.macros.carbs },
                      { label: "بروتين", value: diet.macros.protein },
                      { label: "دهون", value: diet.macros.fat }
                    ].map((macro, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex justify-between items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <span className="text-textcolor/70 text-sm">{macro.label}</span>
                        <motion.span
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`font-bold ${
                            diet.color === 'secondary' ? 'text-secondary' : 'text-foreground'
                          }`}
                        >
                          {macro.value}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-linear-to-br from-foreground/20 to-secondary/20 backdrop-blur-xl rounded-3xl p-10 border-2 border-foreground/30 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-black text-textcolor mb-4">
                  مش متأكد من النظام المناسب؟
                </h3>
                <p className="text-textcolor/70 leading-relaxed mb-6">
                  مدربنا الذكي سيساعدك في اختيار النظام الغذائي الأمثل بناءً على أهدافك، نشاطك، وميزانيتك
                </p>
                <Link href={"/Register"}
                  className="px-8 py-3 rounded-xl font-bold bg-linear-to-r from-foreground to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  ابدأ الآن
                </Link>
              </motion.div>

              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-4 bg-background/40 rounded-2xl border border-foreground/20 hover:border-foreground/40 transition-all duration-300 text-center group"
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="text-foreground mb-2 flex justify-center"
                    >
                      {feature.icon}
                    </motion.div>
                    <h4 className="font-bold text-textcolor text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-textcolor/60 text-xs">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div 
              className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {["تحليل شامل", "نتائج مضمونة", "دعم 24/7", "تطبيق ذكي"].map((tag, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-secondary/20 rounded-full text-secondary text-sm font-semibold border border-secondary/30 hover:border-secondary transition-all duration-300"
                >
                  ✓ {tag}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
