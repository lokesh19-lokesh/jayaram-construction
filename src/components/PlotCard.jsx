import React from 'react';

const PlotCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#fa6823] text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider">
            {project.status}
          </span>
        </div>
        {project.config && (
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded shadow-sm">
            <p className="text-xs font-bold text-gray-800">{project.config}</p>
          </div>
        )}
      </div>

      {/* details */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#fa6823] transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-500 text-sm mb-5 flex items-center font-medium">
          <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {project.location}
        </p>

        <div className="border-t border-gray-100 py-4 grid grid-cols-2 gap-4 mt-auto">
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Size</p>
            <p className="font-bold text-gray-700 text-sm">{project.size}</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Price</p>
            <p className="font-bold text-[#fa6823] text-sm">{project.price}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-dashed border-gray-200">
          <a href="#" className="flex items-center text-[#fa6823] font-bold text-sm hover:text-orange-700 transition-colors group/link">
            View Details
            <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlotCard;
