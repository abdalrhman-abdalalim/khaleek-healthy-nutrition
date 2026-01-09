import { motion } from "framer-motion";

const TipsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="p-5 rounded-2xl bg-linear-to-br from-blue-50/50 to-cyan-50/50 dark:from-foreground/20 dark:to-foreground/30 border border-blue-100 dark:border-blue-800/30"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-linear-to-r from-blue-500/10 to-cyan-500/10">
          <svg
            className="w-5 h-5 text-textcolor"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13 16h-2v-6h2v6zm-1-8.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S10.75 6.06 10.75 6.75 11.31 8 12 8z" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </div>
        <div>
          <h4 className="font-bold text-textcolor dark:text-textcolor">
            نصائح للتسجيل الدقيق
          </h4>
          <ul className="mt-2 space-y-2 text-sm text-textcolor dark:text-textcolor">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-textcolor rounded-full"></div>
              اذكر الكميات بوضوح (2 بيضة، 150جم دجاج، كوب حليب)
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-textcolor rounded-full"></div>
              حدد طريقة الطبخ (مسلوق، مشوي، مقلي)
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-textcolor rounded-full"></div>
              استخدم اللغة العربية أو الإنجليزية أو المزيج بينهما
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
export default TipsSection;
