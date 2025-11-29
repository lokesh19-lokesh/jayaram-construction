import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { Filter } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "Jayaram Heights",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "New Launch",
    location: "Gachibowli, Hyderabad",
    city: "Hyderabad",
    config: "2, 3 & 4 BHK",
    size: "1200 – 2500 sq. ft.",
    price: "Starts ₹85 Lakhs*"
  },
  {
    id: 4,
    name: "Urban Towers",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "New Launch",
    location: "Hitech City, Hyderabad",
    city: "Hyderabad",
    config: "3 BHK Premium",
    size: "1800 – 2200 sq. ft.",
    price: "Starts ₹1.2 Cr*"
  },
  {
    id: 5,
    name: "Lakeside Residency",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "Ready to Move",
    location: "Whitefield, Bengaluru",
    city: "Bengaluru",
    config: "2 & 3 BHK",
    size: "1100 – 1600 sq. ft.",
    price: "Starts ₹75 Lakhs*"
  },
  {
    id: 6,
    name: "Skyline Avenue",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "Under Construction",
    location: "Madhapur, Hyderabad",
    city: "Hyderabad",
    config: "3 & 4 BHK",
    size: "2000 – 3000 sq. ft.",
    price: "Starts ₹1.5 Cr*"
  }
];

const Apartments = () => {
  const [filter, setFilter] = useState('All');
  const cities = ['All', 'Hyderabad', 'Bengaluru', 'Visakhapatnam'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.city === filter);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Apartments</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of luxury apartments designed for modern living. From compact 2 BHKs to spacious 4 BHKs, we have something for everyone.
          </p>
        </div>

        {/* Filter Bar */}
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

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No projects found in this location.
          </div>
        )}
      </div>
    </div>
  );
};

export default Apartments;
