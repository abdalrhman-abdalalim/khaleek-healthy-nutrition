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
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      id: "daily",
      label: "اليوم",
      description: "تتبع تقدمك اليومي",
      icon: <Clock className="w-5 h-5" />,
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      borderColor: "border-emerald-200 dark:border-emerald-800",
    },
    {
      id: "weekly",
      label: "أسبوعي",
      description: "نظرة عامة أسبوعية",
      icon: <Calendar className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-background/80 backdrop-blur-sm rounded-2xl p-1 border border-gray-100 dark:border-gray-800 shadow-lg"
    >
      <div className="flex flex-col md:flex-row gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveView(tab.id as ViewType)}
            className={`
                relative flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl
                transition-all duration-300 group overflow-hidden
                ${
                  activeView === tab.id
                    ? `${tab.bgColor} ${tab.borderColor} border shadow-lg`
                    : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                }
              `}
          >
            {/* Background glow for active tab */}
            {activeView === tab.id && (
              <div
                className={`absolute inset-0 bg-linear-to-br ${tab.color} opacity-10`}
              />
            )}

            {/* Icon */}
            <div
              className={`
                  relative p-2 rounded-lg transition-all duration-300
                  ${
                    activeView === tab.id
                      ? "text-white bg-linear-to-br"
                      : "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800"
                  }
                  ${activeView === tab.id ? tab.color : ""}
                `}
            >
              {tab.icon}
            </div>

            {/* Text content */}
            <div className="flex-1 text-right">
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`
                      font-bold text-lg transition-colors duration-300
                      ${
                        activeView === tab.id
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                      }
                    `}
                >
                  {tab.label}
                </span>
                {activeView === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="w-2 h-2 rounded-full bg-linear-to-r from-primary to-primary/60"
                  />
                )}
              </div>
              <p
                className={`
                    text-sm mt-1 transition-colors duration-300
                    ${
                      activeView === tab.id
                        ? "text-gray-600 dark:text-gray-300"
                        : "text-gray-500 dark:text-gray-400"
                    }
                  `}
              >
                {tab.description}
              </p>
            </div>

            {/* Active indicator */}
            {activeView === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-current to-transparent opacity-30"></div>
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
};
export default TabsNavigation;
