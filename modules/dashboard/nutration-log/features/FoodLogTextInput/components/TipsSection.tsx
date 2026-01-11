import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const TipsSection = () => {
  const tips = [
    "اذكر الكميات بوضوح (2 بيضة، 150جم دجاج، كوب حليب)",
    "حدد طريقة الطبخ (مسلوق، مشوي، مقلي)",
    "استخدم اللغة العربية أو الإنجليزية أو المزيج بينهما",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="p-6 rounded-2xl bg-linear-to-br from-secondary/20 to-foreground/10 border-2 border-foreground/30 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 10 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="p-3 rounded-lg bg-linear-to-br from-foreground to-secondary shadow-lg shrink-0"
        >
          <Lightbulb className="w-6 h-6 text-textcolor" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex-1"
        >
          <motion.h4
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="font-bold text-lg text-textcolor mb-4"
          >
            💡 نصائح للتسجيل الدقيق
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-3"
          >
            {tips.map((tip, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-background/40 border border-foreground/20 hover:border-foreground/40 hover:bg-background/60 transition-all duration-300"
              >
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="w-2 h-2 bg-foreground rounded-full shrink-0 mt-2"
                />

                <span className="text-sm text-textcolor/80 leading-relaxed font-medium">
                  {tip}
                </span>
              </motion.li>
            ))}
          </motion.ul>


        </motion.div>
      </div>
    </motion.div>
  );
};

export default TipsSection;
