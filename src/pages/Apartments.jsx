import React from 'react';
import { Link } from 'react-router-dom';
import ApartmentFilter from '../components/ApartmentFilter';
import ApartmentCard from '../components/ApartmentCard';

const projects = [
  {
    id: 1,
    name: 'Jayaram Heights',
    status: 'New Launch',
    config: '3 & 4 BHK',
    location: 'Madhapur, Hyderabad',
    size: '2200 - 4500 sft',
    price: '₹ 2.5 Cr Onwards',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fHww'
  },
  {
    id: 2,
    name: 'Lakeview Towers',
    status: 'Under Construction',
    config: '2 & 3 BHK',
    location: 'Gachibowli, Hyderabad',
    size: '1200 - 1800 sft',
    price: '₹ 1.2 Cr Onwards',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww'
  },
  {
    id: 3,
    name: 'Serene park',
    status: 'Ready to Move',
    config: '3 BHK',
    location: 'Kondapur, Hyderabad',
    size: '1800 sft',
    price: '₹ 1.8 Cr Onwards',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 6,
    name: 'Skyline Avenue',
    status: 'Under Construction',
    config: '3 & 4 BHK',
    location: 'Madhapur, Hyderabad',
    size: '2000 - 3000 sq. ft.',
    price: 'Starts ₹1.5 Cr*',
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    name: 'Green Acres',
    status: 'New Launch',
    config: '2 & 3 BHK',
    location: 'Shadnagar',
    size: '1200 - 1500 Sq. ft',
    price: '₹ 45 Lakhs Onwards',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=60'
  }
];

const Apartments = () => {
  const [filters, setFilters] = React.useState({
    status: 'All',
    location: 'All',
    budget: 'All'
  });

  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  const handleSearch = () => {
    let result = projects;

    if (filters.status !== 'All') {
      result = result.filter(project => project.status === filters.status);
    }

    if (filters.location !== 'All') {
      result = result.filter(project => project.location.includes(filters.location));
    }

    if (filters.budget !== 'All') {
      result = result.filter(project => {
        const priceText = project.price;
        if (filters.budget === '50L-1Cr') {
          return priceText.includes('Lakhs') || (priceText.includes('Cr') && parseFloat(priceText.split(' ')[1]) <= 1.0);
        }
        if (filters.budget === '1Cr-2Cr') {
          return priceText.includes('Cr') && parseFloat(priceText.split(' ')[1]) > 1.0 && parseFloat(priceText.split(' ')[1]) <= 2.0;
        }
        if (filters.budget === '2Cr+') {
          return priceText.includes('Cr') && parseFloat(priceText.split(' ')[1]) > 2.0;
        }
        return true;
      });
    }

    setFilteredProjects(result);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Luxury Apartments for Sale in Hyderabad</h1>
          <div className="flex items-center text-sm md:text-base space-x-2">
            <Link to="/" className="hover:text-[#fa6823] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#fa6823] font-semibold">Apartments</span>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <ApartmentFilter filters={filters} setFilters={setFilters} onSearch={handleSearch} />

      {/* Project Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ApartmentCard key={project.id} project={project} />
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
          <h2 className="text-xl font-bold text-gray-800">Premium Gated Community Apartments in Hyderabad</h2>
          <p>
            Hyderabad, a city of pearls and now a thriving IT hub, offers a diverse range of living options. Our luxury apartments in Hyderabad are designed to provide the perfect blend of comfort, style, and convenience. Located in prime areas like Gachibowli, Madhapur, and Kondapur, these gated communities offer world-class amenities and excellent connectivity.
          </p>
          <p>
            Whether you are looking for a 2 BHK for a small family or a spacious 4 BHK for a luxurious lifestyle, we have the right home for you. Explore our new launch and ready-to-move projects today.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Apartments;
