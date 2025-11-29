import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 2,
    name: "Golden Meadows",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "Ready to Move",
    location: "Whitefield, Bengaluru",
    city: "Bengaluru",
    config: "Villa Plots",
    size: "200 – 500 Sq. Yds",
    price: "Starts ₹60 Lakhs*"
  },
  {
    id: 7,
    name: "Green Valley",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "New Launch",
    location: "Shadnagar, Hyderabad",
    city: "Hyderabad",
    config: "Open Plots",
    size: "150 – 400 Sq. Yds",
    price: "Starts ₹25 Lakhs*"
  },
  {
    id: 8,
    name: "Royal Enclave",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "Under Construction",
    location: "Vijayawada Highway",
    city: "Vijayawada",
    config: "Gated Community Plots",
    size: "200 – 1000 Sq. Yds",
    price: "Starts ₹40 Lakhs*"
  }
];

const Plots = () => {
  const [filter, setFilter] = useState('All');
  const cities = ['All', 'Hyderabad', 'Bengaluru', 'Vijayawada'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.city === filter);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Plots</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Build your dream home on our premium plots located in fast-growing corridors.
            All plots are clear title, Vastu compliant, and come with top-notch infrastructure.
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

export default Plots;
