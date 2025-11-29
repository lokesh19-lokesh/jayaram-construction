import React from 'react';
import { Award, Users, History, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Building Legacies, One Home at a Time</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Jayaram Construction has been a trusted name in real estate for over 25 years. We are driven by a passion for quality and a commitment to delivering homes that stand the test of time.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the most preferred real estate developer in the region, known for creating sustainable, high-quality living spaces that enhance the quality of life for our customers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To deliver world-class projects on time, every time. To maintain the highest standards of transparency and integrity in all our dealings. To constantly innovate and adopt the latest technologies in construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="container mx-auto px-4 md:px-6 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${item === 1 ? '1560250097-0b93528c311a' : item === 2 ? '1573496359142-b8d87734a5a2' : '1519085360753-af0119f7cbe7'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                  alt="Leader"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
              <p className="text-primary font-medium mb-2">Director</p>
              <p className="text-gray-500 text-sm">
                With over 20 years of experience in civil engineering and project management.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Awards & Recognition</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex flex-col items-center">
                <Award className="w-16 h-16 text-accent mb-4" />
                <h3 className="font-bold text-lg">Best Developer 202{item}</h3>
                <p className="text-gray-300 text-sm">Real Estate Awards</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
