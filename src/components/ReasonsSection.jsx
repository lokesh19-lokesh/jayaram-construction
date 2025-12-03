import React from 'react';
import { Users, FileSearch, ShieldCheck, Lightbulb, Leaf } from 'lucide-react';

const ReasonsSection = () => {
  const reasons = [
    {
      icon: <Users className="w-12 h-12 text-red-500" />,
      title: "Customer Focus",
      description: "Our primary focus is on delivering customer-centric homes. We are committed to creating thoughtfully designed living spaces that enhance the quality of life for individuals and families by maintaining the highest standards in design, construction quality, safety, and customer satisfaction."
    },
    {
      icon: <FileSearch className="w-12 h-12 text-red-500" />,
      title: "Transparency",
      description: "Transparency is the foundation of a successful real estate brand. Our goal is to build strong brand value and earn customer trust and loyalty through clear, honest, and ethical operations."
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-red-500" />,
      title: "Trust",
      description: "Trust is a cornerstone of the real estate business. We build lasting relationships between our customers and our brand through reliable, end-to-end services."
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-red-500" />,
      title: "Innovation",
      description: "Innovation is the driving force behind a brighter future in real estate. For over 18 years, we have continuously evolved by embracing new ideas and modern practices to deliver distinctive projects and exceptional experiences to our customers."
    },
    {
      icon: <Leaf className="w-12 h-12 text-red-500" />,
      title: "Sustainability",
      description: "We recognize the growing importance of environmental sustainability and actively integrate eco-friendly designs and energy-efficient solutions to create healthier, future-ready homes for our customers."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">
            5 Reasons to Choose Jayaram Construction
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-6 items-start ${index === reasons.length - 1 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
            >
              <div className="flex-shrink-0 p-3 bg-red-50 rounded-full">
                {reason.icon}
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
