import React from 'react';
import { ShieldCheck, Clock, Leaf, Users, HeartHandshake, BadgeCheck } from 'lucide-react';

const usps = [
  {
    icon: ShieldCheck,
    title: "Quality Construction",
    description: "We use only the finest materials and adhere to strict quality control standards to ensure your home lasts a lifetime."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We value your time. Our track record of delivering projects on schedule is a testament to our commitment."
  },
  {
    icon: Leaf,
    title: "Sustainable Living",
    description: "Our projects are designed with eco-friendly features like rainwater harvesting, solar power, and ample green spaces."
  },
  {
    icon: Users,
    title: "Customer Centric",
    description: "Your satisfaction is our priority. We offer personalized support throughout your home buying journey."
  },
  {
    icon: HeartHandshake,
    title: "Transparency",
    description: "No hidden costs, no surprises. We believe in complete transparency in all our dealings and documentation."
  },
  {
    icon: BadgeCheck,
    title: "Vastu Compliant",
    description: "All our homes are designed according to Vastu Shastra principles to ensure peace, prosperity, and happiness."
  }
];

const WhyChooseUs = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Jayaram Construction?</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We don't just build houses; we build homes. Here are a few reasons why thousands of families have trusted us with their dreams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <usp.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{usp.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
