import { motion } from "framer-motion";
import { List, Clock, Calendar } from "lucide-react";
import { ViewType } from "../../NutrationScreen";

interface IProps {
  setActiveView: (view: ViewType) => void;
  activeView: ViewType;
}

const TabsNavigation = ({ activeView, setActiveView }: IProps) => {
  const tabs = [
    {
      id: "all",
      label: "كل التسجيلات",
      description: "عرض جميع سجلات الطعام",
      icon: <List className="w-5 h-5" />,
      color: "from-foreground to-secondary",
      bgColor: "bg-foreground/10",
      borderColor: "border-foreground/30",
    },
    {
      id: "daily",
      label: "اليوم",
      description: "تتبع تقدمك اليومي",
      icon: <Clock className="w-5 h-5" />,
      color: "from-secondary to-foreground",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30",
    },
    {
      id: "weekly",
      label: "أسبوعي",
      description: "نظرة عامة أسبوعية",
      icon: <Calendar className="w-5 h-5" />,
      color: "from-foreground to-secondary",
      bgColor: "bg-foreground/10",
      borderColor: "border-foreground/30",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background/80 backdrop-blur-sm rounded-2xl p-1 border border-foreground/20 shadow-lg"
    >
      <div className="flex flex-col md:flex-row gap-2">
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveView(tab.id as ViewType)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              relative flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl
              transition-all duration-300 group overflow-hidden
              ${
                activeView === tab.id
                  ? `${tab.bgColor} ${tab.borderColor} border-2 shadow-lg`
                  : "hover:bg-secondary/5 border-2 border-transparent"
              }
            `}
          >
            {activeView === tab.id && (
              <motion.div
                layoutId="activeTabGlow"
                className={`absolute inset-0  `}
                transition={{ duration: 0.3 }}
              />
            )}

            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative p-2 rounded-lg transition-all duration-300
                ${
                  activeView === tab.id
                    ? `text-textcolor bg-linear-to-br ${tab.color}`
                    : "text-textcolor/60 bg-secondary/20"
                }
              `}
            >
              {tab.icon}
            </motion.div>

            <div className="flex-1 text-right">
              <div className="flex items-center justify-between gap-2">
                <motion.span
                  animate={{
                    color: activeView === tab.id ? "#F9B487" : "#EEEEEE",
                  }}
                  transition={{ duration: 0.3 }}
                  className="font-bold text-lg"
                >
                  {tab.label}
                </motion.span>
                {activeView === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="w-2 h-2 rounded-full bg-linear-to-r from-foreground to-secondary"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>
              <motion.p
                animate={{
                  color: activeView === tab.id ? "#D9E9CF" : "#EEEEEE99",
                }}
                transition={{ duration: 0.3 }}
                className="text-sm mt-1"
              >
                {tab.description}
              </motion.p>
            </div>

            {activeView === tab.id && (
              <motion.div
                layoutId="activeTabLine"
                className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-foreground to-transparent opacity-60"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default TabsNavigation;
