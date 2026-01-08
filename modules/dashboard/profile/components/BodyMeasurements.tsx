import React from 'react';
import { UserProfile } from '../models/type';
import { Ruler, Scale, Target } from 'lucide-react';
import Link from 'next/link';

interface BodyMeasurementsProps {
  profile: UserProfile;
}

const BodyMeasurements = ({ profile }: BodyMeasurementsProps) => {
  const measurements = [
    {
      title: 'الطول',
      value: profile.height,
      unit: 'سم',
      icon: Ruler,
      color: '#60A5FA',
      bgGradient: 'from-blue-500/20 to-blue-500/10',
      borderColor: 'border-blue-500/40',
      hoverBorder: 'hover:border-blue-500/70',
    },
    {
      title: 'الوزن الحالي',
      value: profile.weight,
      unit: 'كجم',
      icon: Scale,
      color: '#F87171',
      bgGradient: 'from-red-500/20 to-red-500/10',
      borderColor: 'border-red-500/40',
      hoverBorder: 'hover:border-red-500/70',
    },
    {
      title: 'الوزن المستهدف',
      value: profile.target_weight ,
      unit: 'كجم',
      icon: Target,
      color: '#34D399',
      bgGradient: 'from-green-500/20 to-green-500/10',
      borderColor: 'border-green-500/40',
      hoverBorder: 'hover:border-green-500/70',
    },
  ];

  return (
    <div className="bg-secondary/20 backdrop-blur-xl rounded-3xl p-6 border border-foreground/20 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-foreground/20 rounded-xl flex items-center justify-center">
          <Ruler className="w-5 h-5 text-foreground" />
        </div>
        <h2 className="text-2xl font-bold text-textcolor">القياسات الجسدية</h2>
      </div>

     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {measurements.map((item, index) => {
          const Icon = item.icon;
          const missing =
            item.value === null ||
            item.value === undefined ||
            (typeof item.value === "number" && item.value === 0) ||
            (typeof item.value === "string" && item.value.trim() === "");

          return (
            <div
              key={index}
              className={`bg-linear-to-br ${item.bgGradient} rounded-2xl p-5 border ${item.borderColor} ${item.hoverBorder} transition-all cursor-pointer group hover:scale-105 transform hover:shadow-xl`}
              style={{
                boxShadow: `0 4px 20px ${item.color}20`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-medium" style={{ color: item.color }}>
                  {item.title}
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${item.color}33` }}
                >
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
              </div>

              {missing ? (
                <div className="flex flex-col items-center justify-center text-center gap-3 py-6">
                  <p className="text-sm font-semibold text-secondary">
                    كمّل بياناتك أولاً
                  </p>

                  <Link
                    href="/dashboard/profile/edit"
                    className="px-4 py-2 rounded-xl bg-secondary text-background text-sm font-semibold shadow-md hover:scale-105 transition-all"
                  >
                    تعديل البيانات
                  </Link>
                </div>
              ) : (
                <>
                  <div className="flex items-end gap-2">
                    <div className="text-4xl font-bold" style={{ color: item.color }}>
                      {item.value}
                    </div>
                    <div
                      className="text-base mb-1 opacity-70"
                      style={{ color: item.color }}
                    >
                      {item.unit}
                    </div>
                  </div>

                  <div className="mt-4 h-1.5 bg-background/40 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        backgroundColor: item.color,
                        width: "75%",
                        animation: `slideIn 1.5s ease-out ${index * 0.2}s forwards`,
                        transformOrigin: "right",
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          );
        })}

        </div>


      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
};

export default BodyMeasurements;