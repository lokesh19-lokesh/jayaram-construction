import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 3,
    name: "Serene Villas",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "Under Construction",
    location: "Kompally, Hyderabad",
    city: "Hyderabad",
    config: "4 BHK Triplex",
    size: "3500 – 4500 sq. ft.",
    price: "Price on Request"
  },
  {
    id: 9,
    name: "Palm Retreat",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "New Launch",
    location: "Sarjapur, Bengaluru",
    city: "Bengaluru",
    config: "3 & 4 BHK Villas",
    size: "2800 – 3500 sq. ft.",
    price: "Starts ₹3.5 Cr*"
  }
];

const Villas = () => {
  const [filter, setFilter] = useState('All');
  const cities = ['All', 'Hyderabad', 'Bengaluru'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.city === filter);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Luxury Villas & Bungalows</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the epitome of luxury living with our exclusive collection of villas and bungalows.
            Designed for those who appreciate the finer things in life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setFilter(city)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${filter === city
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Villas;
