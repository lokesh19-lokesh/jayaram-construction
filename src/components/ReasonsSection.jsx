import React from 'react';
import { Users, FileSearch, ShieldCheck, Lightbulb, Leaf } from 'lucide-react';

const ReasonsSection = () => {
  const reasons = [
    {
      icon: <Users />,
      title: "Customer Focus",
      description: "Our primary focus is on delivering customer-centric homes. We are committed to creating thoughtfully designed living spaces that enhance the quality of life."
    },
    {
      icon: <FileSearch />,
      title: "Transparency",
      description: "Transparency is the foundation of a successful real estate brand. Our goal is to build strong brand value and earn customer trust through honest operations."
    },
    {
      icon: <ShieldCheck />,
      title: "Trust",
      description: "Trust is a cornerstone of the real estate business. We build lasting relationships between our customers and our brand through reliable, end-to-end services."
    },
    {
      icon: <Lightbulb />,
      title: "Innovation",
      description: "Innovation drives our future. For over 18 years, we have evolved by embracing new ideas and modern practices to deliver distinctive projects."
    },
    {
      icon: <Leaf />,
      title: "Sustainability",
      description: "We integrate eco-friendly designs and energy-efficient solutions to create healthier, future-ready homes for our customers."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide mb-4">
            5 Reasons to Choose <span className="text-[#f26624]">Jayaram Construction</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#f26624] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 text-lg">
            Building trust and homes with a legacy of excellence and commitment.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="w-full md:w-[45%] lg:w-[30%] flex flex-col items-center text-center group"
            >
              {/* Icon Circle */}
              <div className="w-24 h-24 rounded-full bg-white border-2 border-[#f26624] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#f26624] group-hover:shadow-lg transition-all duration-300">
                {React.cloneElement(reason.icon, {
                  className: "w-10 h-10 text-[#f26624] group-hover:text-white transition-colors duration-300"
                })}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#003366] mb-3 uppercase tracking-wide group-hover:text-[#f26624] transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base px-2">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
