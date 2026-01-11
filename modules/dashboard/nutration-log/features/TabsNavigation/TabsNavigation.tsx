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
      bgColor: "bg-foreground/15",
      borderColor: "border-foreground/40",
      iconBg: "from-foreground to-secondary",
    },
    {
      id: "daily",
      label: "اليوم",
      description: "تتبع تقدمك اليومي",
      icon: <Clock className="w-5 h-5" />,
      color: "from-secondary to-foreground",
      bgColor: "bg-secondary/15",
      borderColor: "border-secondary/40",
      iconBg: "from-secondary to-foreground",
    },
    {
      id: "weekly",
      label: "أسبوعي",
      description: "نظرة عامة أسبوعية",
      icon: <Calendar className="w-5 h-5" />,
      color: "from-foreground to-secondary",
      bgColor: "bg-foreground/15",
      borderColor: "border-foreground/40",
      iconBg: "from-foreground to-secondary",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-md rounded-2xl p-2 border-2 border-foreground/25 shadow-xl"
    >
      <div className="flex flex-col md:flex-row gap-2">
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveView(tab.id as ViewType)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className={`
              relative flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl
              transition-all duration-300 group overflow-hidden
              ${
                activeView === tab.id
                  ? `${tab.bgColor} ${tab.borderColor} border-2 shadow-lg`
                  : "hover:bg-secondary/10 border-2 border-foreground/15"
              }
            `}
          >
            {/* Active Tab Background Glow */}
            {activeView === tab.id && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 bg-gradient-to-r from-foreground/5 via-secondary/5 to-foreground/5 rounded-xl"
                transition={{ duration: 0.3 }}
              />
            )}

            {/* Icon Container */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              className={`
                relative p-2.5 rounded-lg transition-all duration-300
                ${
                  activeView === tab.id
                    ? `text-textcolor bg-gradient-to-br ${tab.iconBg} shadow-lg`
                    : "text-textcolor/70 bg-background/60 border border-foreground/20"
                }
              `}
            >
              {tab.icon}
            </motion.div>

            {/* Tab Content */}
            <div className="flex-1 text-right">
              <div className="flex items-center justify-between gap-2">
                <motion.span
                  animate={{
                    color: activeView === tab.id ? "#F9B487" : "#EEEEEE",
                    fontWeight: activeView === tab.id ? 700 : 600,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-lg"
                >
                  {tab.label}
                </motion.span>

                {/* Active Indicator Dot */}
                {activeView === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-foreground to-secondary shadow-lg"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>

              {/* Description */}
              <motion.p
                animate={{
                  color: activeView === tab.id ? "#D9E9CF" : "#EEEEEE80",
                  fontSize: activeView === tab.id ? "0.875rem" : "0.8rem",
                }}
                transition={{ duration: 0.3 }}
                className="mt-1 font-medium"
              >
                {tab.description}
              </motion.p>
            </div>

            {/* Active Tab Bottom Line */}
            {activeView === tab.id && (
              <motion.div
                layoutId="activeTabLine"
                className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-foreground to-transparent opacity-70 rounded-t-full"
                transition={{ duration: 0.3 }}
              />
            )}

            {/* Hover Effect Border */}
            {activeView !== tab.id && (
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-foreground/0 group-hover:border-foreground/20 transition-colors duration-300"
                whileHover={{ borderColor: "rgba(249, 180, 135, 0.3)" }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default TabsNavigation;
