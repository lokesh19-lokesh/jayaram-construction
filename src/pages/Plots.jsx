import React from 'react';
import { Link } from 'react-router-dom';
import PlotsFilter from '../components/PlotsFilter';
import PlotCard from '../components/PlotCard';
import hero from '../assets/plots/hero.avif';
import l1 from '../assets/plots/1.png';
import l2 from '../assets/plots/2.png';

const projects = [
  {
    id: 1,
    name: "Green Valley",
    image: hero,
    status: "New Launch",
    location: "Shadnagar",
    config: "Open Plots",
    size: "150 – 400 Sq. Yds",
    price: "Starts ₹25 Lakhs*"
  },
  {
    id: 2,
    name: "Royal Enclave",
    image: l1,
    status: "Under Construction",
    location: "Vijayawada Highway",
    config: "Gated Community Plots",
    size: "200 – 1000 Sq. Yds",
    price: "Starts ₹40 Lakhs*"
  },
  {
    id: 3,
    name: "Temple Heights",
    image: l2,
    status: "Ready to Move",
    location: "Yadagirigutta",
    config: "Temple View Plots",
    size: "120 – 300 Sq. Yds",
    price: "Starts ₹18 Lakhs*"
  }
];

const Plots = () => {
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
        if (filters.budget === '15L-30L') {
          return priceText.includes('18 Lakhs') || priceText.includes('25 Lakhs'); // Approximating for demo data
        }
        if (filters.budget === '30L-50L') {
          return priceText.includes('40 Lakhs');
        }
        if (filters.budget === '50L+') {
          return false; // No projects in this range in demo data
        }
        return true;
      });
    }

    setFilteredProjects(result);
  }, [filters]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Premium Open Plots in Hyderabad</h1>
          <div className="flex items-center text-sm md:text-base space-x-2">
            <Link to="/" className="hover:text-[#fa6823] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#fa6823] font-semibold">Plots</span>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <PlotsFilter filters={filters} setFilters={setFilters} />

      {/* Project Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <PlotCard key={project.id} project={project} />
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
          <h2 className="text-xl font-bold text-gray-800">Buy Open Plots in Hyderabad's Growth Corridors</h2>
          <p>
            Investing in open plots is one of the best financial decisions you can make. We offer DTCP and HMDA approved plots in prime locations like Shadnagar, Vijayawada Highway, and Yadagirigutta. Whether you are looking for an investment opportunity or want to build your independent house, our plots offer high appreciation potential.
          </p>
          <p>
            All our ventures come with top-notch infrastructure including blacktop roads, electricity, water supply, and compound walls. Secure your future with clear-title plots from Jayaram Construction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plots;
