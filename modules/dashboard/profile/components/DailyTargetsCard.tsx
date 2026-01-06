import React from 'react';
import { DailyTargets } from '../models/type';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Flame, Beef, Wheat, Droplet, Apple } from 'lucide-react';

interface DailyTargetsCardProps {
  targets: DailyTargets;
}

const DailyTargetsCard = ({ targets }: DailyTargetsCardProps) => {
  const { calories, protein, carbs, fat } = targets;

  const data = [
    { name: 'السعرات', value: calories, color: '#FB923C', icon: Flame, unit: 'كالوري' },
    { name: 'البروتين', value: protein, color: '#F87171', icon: Beef, unit: 'جرام' },
    { name: 'الكربوهيدرات', value: carbs, color: '#60A5FA', icon: Wheat, unit: 'جرام' },
    { name: 'الدهون', value: fat, color: '#FACC15', icon: Droplet, unit: 'جرام' },
  ];

  return (
    <div className="bg-secondary/20 backdrop-blur-xl rounded-3xl p-8 border border-foreground/20 shadow-xl">
      <h2 className="text-2xl font-bold text-textcolor mb-8 text-center">الأهداف اليومية</h2>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="relative w-80 h-80 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
                animationBegin={0}
                animationDuration={1500}
                animationEasing="ease-out"
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color}
                    style={{
                      filter: `drop-shadow(0 0 12px ${entry.color}80)`,
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className=" rounded-full px-6 py-2 ">
              <Apple className="w-8 h-8 text-foreground mb-2" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
          {data.map((item, index) => {
            const Icon = item.icon;
            const colorClass = item.color.replace('#', '');
            
            return (
              <div 
                key={index}
                className="rounded-2xl p-5 border transition-all cursor-pointer group hover:scale-105 transform"
                style={{
                  background: `linear-gradient(to bottom right, ${item.color}33, ${item.color}1a)`,
                  borderColor: `${item.color}66`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${item.color}b3`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${item.color}66`;
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${item.color}4d` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: `${item.color}` }} />
                  </div>
                  <span className="text-base font-medium" style={{ color: `${item.color}` }}>
                    {item.name}
                  </span>
                </div>
                <div className="text-4xl font-bold mb-1" style={{ color: `${item.color}` }}>
                  {item.value}
                </div>
                <div className="text-sm opacity-70" style={{ color: `${item.color}` }}>
                  {item.unit}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DailyTargetsCard;