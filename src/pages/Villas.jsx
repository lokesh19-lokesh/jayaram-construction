import React from 'react';
import { Link } from 'react-router-dom';
import VillasFilter from '../components/VillasFilter';
import VillaCard from '../components/VillaCard';

const projects = [
  {
    id: 1,
    name: "Serene Villas",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "Under Construction",
    location: "Kompally",
    config: "4 BHK Triplex",
    size: "3500 – 4500 sq. ft.",
    price: "Starts ₹3.5 Cr*"
  },
  {
    id: 2,
    name: "Palm Retreat",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "New Launch",
    location: "Sarjapur",
    config: "3 & 4 BHK Villas",
    size: "2800 – 3500 sq. ft.",
    price: "Starts ₹2.8 Cr*"
  },
  {
    id: 3,
    name: "Golden Meadows",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "Ready to Move",
    location: "Mokila",
    config: "4 BHK Luxury",
    size: "3000 – 4000 sq. ft.",
    price: "Starts ₹4.5 Cr*"
  }
];

const Villas = () => {
  const [filters, setFilters] = React.useState({
    status: 'All',
    location: 'All',
    budget: 'All'
  });

  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  // Auto-filter when filters change
  React.useEffect(() => {
    let result = projects;

    if (filters.status !== 'All') {
      result = result.filter(project => project.status === filters.status);
    }

    if (filters.location !== 'All') {
      result = result.filter(project => project.location === filters.location);
    }

    if (filters.budget !== 'All') {
      result = result.filter(project => {
        const priceText = project.price;
        // Simple parsing logic
        if (filters.budget === '2Cr-4Cr') {
          return priceText.includes('2.8 Cr') || priceText.includes('3.5 Cr');
        }
        if (filters.budget === '4Cr-6Cr') {
          return priceText.includes('4.5 Cr');
        }
        if (filters.budget === '6Cr+') {
          return false;
        }
        return true;
      });
    }

    setFilteredProjects(result);
  }, [filters]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Luxury Villas in Hyderabad</h1>
          <div className="flex items-center text-sm md:text-base space-x-2">
            <Link to="/" className="hover:text-[#fa6823] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#fa6823] font-semibold">Villas</span>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <VillasFilter filters={filters} setFilters={setFilters} />

      {/* Project Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <VillaCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-xl text-gray-500">No projects found matching your criteria.</p>
              <button
                onClick={() => {
                  setFilters({ status: 'All', location: 'All', budget: 'All' });
                  setFilteredProjects(projects);
                }}
                className="mt-4 text-[#fa6823] font-semibold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* SEO Text Section */}
      <div className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 text-gray-600 text-sm leading-relaxed space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Exclusive Gated Community Villas in Hyderabad</h2>
          <p>
            Experience the pinnacle of luxury with our premium villas in Hyderabad. Designed for those who seek privacy, comfort, and a high-quality lifestyle, our villas offer spacious layouts, private gardens, and world-class amenities. Located in serene neighborhoods like Mokila and Kompally, these homes provide a peaceful retreat from the city buzz.
          </p>
          <p>
            Whether you prefer a 3 BHK or a 4 BHK triplex villa, our projects are crafted with attention to detail and superior craftsmanship. Live the life you deserve with Jayaram Construction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Villas;
