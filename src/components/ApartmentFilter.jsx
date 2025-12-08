import React from 'react';
import { ChevronDown } from 'lucide-react';

const ApartmentFilter = ({ filters, setFilters, onSearch }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-[#FFFAF0] py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col md:flex-row gap-4 items-center justify-between">

          {/* Status */}
          <div className="w-full md:w-1/4 relative">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Status</label>
            <div className="relative z-20">
              <select
                name="status"
                value={filters.status}
                onChange={handleChange}
                className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-semibold cursor-pointer relative z-10"
              >
                <option value="All">All Status</option>
                <option value="New Launch">New Launch</option>
                <option value="Under Construction">Under Construction</option>
                <option value="Ready to Move">Ready to Move</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="w-full md:w-1/4 relative">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Location</label>
            <div className="relative z-20">
              <select
                name="location"
                value={filters.location}
                onChange={handleChange}
                className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-semibold cursor-pointer relative z-10"
              >
                <option value="All">All Locations</option>
                <option value="Gachibowli">Gachibowli</option>
                <option value="Madhapur">Madhapur</option>
                <option value="Kondapur">Kondapur</option>
                <option value="Shadnagar">Shadnagar</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="w-full md:w-1/4 relative">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Budget</label>
            <div className="relative z-20">
              <select
                name="budget"
                value={filters.budget}
                onChange={handleChange}
                className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-semibold cursor-pointer relative z-10"
              >
                <option value="All">Any Budget</option>
                <option value="50L-1Cr">₹ 50L - ₹ 1 Cr</option>
                <option value="1Cr-2Cr">₹ 1 Cr - ₹ 2 Cr</option>
                <option value="2Cr+">₹ 2 Cr +</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default ApartmentFilter;
