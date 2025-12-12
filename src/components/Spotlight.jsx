import React, { useState } from 'react';
import l1 from '../assets/apartments/1.png';
import l2 from '../assets/apartments/2.png';
import l3 from '../assets/apartments/3.png';
import l4 from '../assets/plots/1.png';
import l5 from '../assets/plots/2.png';
import l6 from '../assets/plots/3.png';
import l7 from '../assets/Bungalows/1.png';
import l8 from '../assets/Bungalows/2.png';
import l9 from '../assets/Bungalows/3.png';

const projectData = {
  Apartments: [
    {
      id: 1,
      name: 'Jayaram Heights',
      status: 'New Launch',
      config: '3 & 4 BHK',
      location: 'Madhapur, Hyderabad',
      size: '2200 - 4500 sft',
      price: '₹ 2.5 Cr Onwards',
      image: l1
    },
    {
      id: 2,
      name: 'Lakeview Towers',
      status: 'Under Construction',
      config: '2 & 3 BHK',
      location: 'Gachibowli, Hyderabad',
      size: '1200 - 1800 sft',
      price: '₹ 1.2 Cr Onwards',
      image: l2
    },
    {
      id: 3,
      name: 'Serene park',
      status: 'Ready to Move',
      config: '3 BHK',
      location: 'Kondapur, Hyderabad',
      size: '1800 sft',
      price: '₹ 1.8 Cr Onwards',
      image: l3
    }
  ],
  Plots: [
    {
      id: 4,
      name: 'Green Acres',
      status: 'New Launch',
      config: 'Open Plots',
      location: 'Shadnagar',
      size: '200 - 500 Sq. Yds',
      price: '₹ 15,000 / Sq. Yd',
      image: l4
    },
    {
      id: 5,
      name: 'Green Acres',
      status: 'New Launch',
      config: 'Open Plots',
      location: 'Sr Nagar',
      size: '200 - 500 Sq. Yds',
      price: '₹ 20,000 / Sq. Yd',
      image: l5
    },
    {
      id: 6,
      name: 'Green Acres',
      status: 'New Launch',
      config: 'Open Plots',
      location: 'Sr Nagar',
      size: '200 - 500 Sq. Yds',
      price: '₹ 20,000 / Sq. Yd',
      image: l6
    }

  ],
  Bungalows: [
    {
      id: 5,
      name: 'Royal Villas',
      status: 'Under Construction',
      config: '4 & 5 BHK',
      location: 'Mokila',
      size: '3500 sft',
      price: '₹ 4.5 Cr Onwards',
      image: l7
    },
    {
      id: 6,
      name: 'Emerald Heights',
      status: 'Ready to Move',
      config: '3 & 4 BHK',
      location: 'Narsingi',
      size: '2800 sft',
      price: '₹ 3.2 Cr Onwards',
      image: l8
    },
    {
      id: 7,
      name: 'Golden Crest Villas',
      status: 'Under Construction',
      config: '4 BHK',
      location: 'Kokapet',
      size: '3200 sft',
      price: '₹ 4.0 Cr Onwards',
      image: l9
    }

  ]
};

const Spotlight = () => {
  const [activeTab, setActiveTab] = useState('Apartments');

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-playfair">
            In The <span className="text-[#fa6823]">Spotlight</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium projects that redefine luxury living and smart investments.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-200">
            {Object.keys(projectData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-200 ${activeTab === tab
                  ? 'bg-[#fa6823] text-white shadow-md'
                  : 'text-gray-500 hover:text-[#fa6823] hover:bg-orange-50'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData[activeTab].map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col"
            >
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
                {project.config !== 'Open Plots' && (
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded shadow-sm">
                    <p className="text-xs font-bold text-gray-800">{project.config}</p>
                  </div>
                )}
              </div>

              {/* details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#fa6823] transition-colors">{project.name}</h3>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
