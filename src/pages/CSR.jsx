import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, BookOpen, TreePine, Droplets } from 'lucide-react';
import hero from '../assets/plots/hero.avif';

const CSR = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-cover bg-center mb-16" style={{ backgroundImage: `url(${hero})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">CSR Initiatives</h1>
          <div className="flex items-center text-sm md:text-base space-x-2">
            <Link to="/" className="hover:text-[#fa6823] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#fa6823] font-semibold">CSR</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CSR Initiatives</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Sri Jayarama Constructions, we believe in giving back to the society that has given us so much. Our Corporate Social Responsibility initiatives focus on sustainable development and community welfare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education Support</h3>
            <p className="text-gray-600">
              We actively support local schools by providing infrastructure, learning materials, and scholarships to underprivileged students. We believe education is the foundation of a strong community.
            </p>
          </div>

          {/* Environment */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
              <TreePine className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Green Cover</h3>
            <p className="text-gray-600">
              Our 'Green City' initiative involves regular tree plantation drives in and around Mahabubnagar. We ensure all our projects have ample green spaces and promote eco-friendly living.
            </p>
          </div>

          {/* Health */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-500 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare Camps</h3>
            <p className="text-gray-600">
              We organize free medical camps for construction workers and local communities, focusing on general health checkups, eye care, and distribution of essential medicines.
            </p>
          </div>

          {/* Water Conservation */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-cyan-500 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 mb-6">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Water Conservation</h3>
            <p className="text-gray-600">
              Implementing rainwater harvesting systems in all our projects and supporting local water body rejuvenation efforts to ensure sustainable water resources for the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSR;
