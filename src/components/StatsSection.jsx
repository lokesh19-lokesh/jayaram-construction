import React from 'react';
import { Building2, Users, Trophy, Home } from 'lucide-react';

const stats = [
  {
    id: 1,
    label: "Sq. Ft. Delivered",
    value: "10M+",
    icon: Building2,
  },
  {
    id: 2,
    label: "Happy Families",
    value: "5000+",
    icon: Users,
  },
  {
    id: 3,
    label: "Years of Experience",
    value: "25+",
    icon: Trophy,
  },
  {
    id: 4,
    label: "Ongoing Projects",
    value: "12",
    icon: Home,
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Building Dreams Since 1996</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">{stat.value}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
