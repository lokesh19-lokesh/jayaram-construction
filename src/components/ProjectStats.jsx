import React, { useState, useEffect, useRef } from 'react';
import { BarChart, Activity, PieChart } from 'lucide-react';

const ProjectStats = () => {
  // Data from the provided image
  const yearlySales = [
    { year: '2017-18', sales: 5 },
    { year: '2018-19', sales: 7 },
    { year: '2019-20', sales: 11 },
    { year: '2020-21', sales: 10 },
    { year: '2021-22', sales: 6 },
    { year: '2022-23', sales: 11 },
    { year: '2023-24', sales: 3 },
    { year: '2024-25', sales: 1 },
  ];

  const unitDetails = [
    { type: 'Duplex Villas', total: 18, sold: 18 },
    { type: 'Independent Houses', total: 18, sold: 18 },
    { type: 'Apartment-1', total: 20, sold: 12 },
    { type: 'New Duplex Villas', total: 10, sold: 4 },
    { type: 'New Triplex Villas', total: 8, sold: 1 },
    { type: 'Apartment-2', total: 20, sold: 1 },
  ];

  // Calculate generic stats
  const totalUnits = unitDetails.reduce((acc, item) => acc + item.total, 0);
  const totalSold = unitDetails.reduce((acc, item) => acc + item.sold, 0);
  const totalUnsold = totalUnits - totalSold;

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4 uppercase tracking-wide">
            Project Status & Availability
          </h2>
          <div className="w-24 h-1.5 bg-[#f26624] mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 text-sm">
            Detailed breakdown of sales and availability as of 12-09-2025
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* SALES GROWTH CHART */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 rounded-full text-[#003366]">
                <BarChart size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Year-wise Sales Growth</h3>
            </div>

            <div className="flex items-end justify-between h-64 gap-2 md:gap-4 mt-8">
              {yearlySales.map((item, index) => {
                // Max sales is 11, so we calculate height percentage based on that (approx 12 for headroom)
                const heightPercent = (item.sales / 12) * 100;
                return (
                  <div key={index} className="flex flex-col items-center justify-end h-full w-full group">
                    <div className="mb-2 text-xs font-bold text-[#f26624] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      {item.sales}
                    </div>
                    <div
                      className="w-full bg-[#003366] rounded-t-md hover:bg-[#f26624] transition-all duration-1000 ease-out relative"
                      style={{ height: isVisible ? `${heightPercent}%` : '0%' }}
                    ></div>
                    <div className="mt-3 text-[10px] md:text-xs text-gray-500 font-medium rotate-0 md:-rotate-45 md:origin-top-left whitespace-nowrap">
                      {item.year}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 text-center bg-white py-3 rounded-lg border border-gray-100">
              <span className="text-gray-500 text-sm uppercase tracking-wide">Total Sales Since 2017:</span>
              <span className="ml-2 text-2xl font-bold text-[#f26624]">54 Units</span>
            </div>
          </div>

          {/* UNIT AVAILABILITY */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-orange-100 rounded-full text-[#f26624]">
                <PieChart size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Current Availability (Status)</h3>
            </div>

            <div className="space-y-6">
              {unitDetails.map((unit, index) => {
                const soldPercent = (unit.sold / unit.total) * 100;
                const unsold = unit.total - unit.sold;

                return (
                  <div key={index}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-semibold text-gray-700 text-sm md:text-base">{unit.type}</span>
                      <div className="text-xs font-medium space-x-3">
                        <span className="text-[#f26624]">{unit.sold} Sold</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-green-600">{unsold} Available</span>
                      </div>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#f26624] rounded-full relative transition-all duration-1000 ease-out"
                        style={{ width: isVisible ? `${soldPercent}%` : '0%' }}
                      >
                        {/* Shine effect */}
                        <div className="absolute top-0 left-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary Legend */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <div className="text-center w-1/3">
                <div className="text-2xl font-bold text-gray-800">{totalUnits}</div>
                <div className="text-xs text-gray-500 uppercase">Total Units</div>
              </div>
              <div className="text-center w-1/3 border-l border-r border-gray-200">
                <div className="text-2xl font-bold text-[#f26624]">{totalSold}</div>
                <div className="text-xs text-gray-500 uppercase">Total Sold</div>
              </div>
              <div className="text-center w-1/3">
                <div className="text-2xl font-bold text-green-600">{totalUnsold}</div>
                <div className="text-xs text-gray-500 uppercase">Unsold</div>
              </div>
            </div>
          </div>

        </div>


      </div>
      {/* Land and Construction Area Details */}
      <div className="mt-20 pt-16 border-t border-gray-100">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#003366] mb-4 uppercase tracking-wide">
            Land & Construction Area Details
          </h3>
          <div className="w-20 h-1 bg-[#f26624] mx-auto rounded-full"></div>
          {/* <p className="text-gray-500 mt-4 text-sm">
            Detailed breakdown of area specifications as of 12-09-2025
          </p> */}
        </div>


        {/* Mobile Card View (Visible < md) */}
        <div className="md:hidden space-y-6">
          {[
            { type: 'Old Villas', plot: "40'x50'", sqyd: '222.22', sft: '2280 sft', remarks: '3BHK G+1 Floor' },
            { type: 'Independent Houses', plot: "40'x60'", sqyd: '266.66', sft: '1555 sft', remarks: '3BHK G floor' },
            { type: 'Apartment', plot: "80'x100'", sqyd: '888.88', sft: '1200 sft', remarks: '2BHK' },
            { type: 'New Duplex', plot: "40'x50'", sqyd: '222.22', sft: '3200 sft', remarks: '3BHK + Home Theater G+2' },
            { type: 'Triplex Villas', plot: "40'x50'", sqyd: '222.22', sft: '4100 sft', remarks: '3BHK + Home Theater Stilt+G+2' },
          ].map((row, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3">
              <div className="flex justify-between items-start border-b border-gray-100 pb-3 mb-1">
                <span className="font-bold text-lg text-[#003366]">{row.type}</span>
                <span className="bg-orange-50 text-[#f26624] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{row.sft}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="block text-gray-400 text-xs uppercase tracking-wide mb-1">Plot Size</span>
                  <span className="font-medium text-gray-800">{row.plot}</span>
                </div>
                <div>
                  <span className="block text-gray-400 text-xs uppercase tracking-wide mb-1">Area (Sq.Yd)</span>
                  <span className="font-medium text-gray-800">{row.sqyd}</span>
                </div>
              </div>
              <div className="pt-2">
                <span className="block text-gray-400 text-xs uppercase tracking-wide mb-1">Remarks</span>
                <span className="font-medium text-gray-600 italic">{row.remarks}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View (Visible >= md) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto bg-white text-left border-collapse">
            <thead>
              <tr className="bg-[#003366] text-white">
                <th className="py-4 px-6 font-bold uppercase text-sm tracking-wider rounded-tl-lg">Type of House</th>
                <th className="py-4 px-6 font-bold uppercase text-sm tracking-wider">Plot Size</th>
                <th className="py-4 px-6 font-bold uppercase text-sm tracking-wider">Area (Sq.Yd)</th>
                <th className="py-4 px-6 font-bold uppercase text-sm tracking-wider">Construction Area</th>
                <th className="py-4 px-6 font-bold uppercase text-sm tracking-wider rounded-tr-lg">Structure / Remarks</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                { type: 'Old Villas', plot: "40'x50'", sqyd: '222.22', sft: '2280 sft', remarks: '3BHK G+1 Floor' },
                { type: 'Independent Houses', plot: "40'x60'", sqyd: '266.66', sft: '1555 sft', remarks: '3BHK G floor' },
                { type: 'Apartment', plot: "80'x100'", sqyd: '888.88', sft: '1200 sft', remarks: '2BHK' },
                { type: 'New Duplex', plot: "40'x50'", sqyd: '222.22', sft: '3200 sft', remarks: '3BHK + Home Theater G+2' },
                { type: 'Triplex Villas', plot: "40'x50'", sqyd: '222.22', sft: '4100 sft', remarks: '3BHK + Home Theater Stilt+G+2' },
              ].map((row, index) => (
                <tr key={index} className={`border-b border-gray-100 hover:bg-orange-50 transition-colors ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="py-4 px-6 font-bold text-[#003366]">{row.type}</td>
                  <td className="py-4 px-6 font-medium">{row.plot}</td>
                  <td className="py-4 px-6 font-medium text-gray-600">{row.sqyd}</td>
                  <td className="py-4 px-6 font-bold text-[#f26624]">{row.sft}</td>
                  <td className="py-4 px-6 font-medium text-gray-500">{row.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </div>
      {/* Cost & Details Section */}
      <div className="mt-20 pt-16 border-t border-gray-100 px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#003366] mb-4 uppercase tracking-wide">
            Cost & Details
          </h3>
          <div className="w-20 h-1 bg-[#f26624] mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 text-sm">
            Detailed breakdown of pricing and specifications as of 13-02-2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Flat Cost & Details */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
            <div className="bg-[#003366] p-4 text-center">
              <h4 className="text-white text-xl font-bold uppercase tracking-wider">Flat Cost & Details</h4>
            </div>
            <div className="p-6 flex-grow flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-gray-600 font-medium">Type</span>
                <span className="font-bold text-[#003366]">2BHK Flats</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-gray-600 font-medium">Land Area (UDS)</span>
                <span className="font-bold text-gray-800">44 sq.yds</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm bg-gray-50 p-3 rounded-lg">
                <div className="text-center border-r border-gray-200">
                  <div className="text-xs text-gray-500 uppercase">East Facing</div>
                  <div className="font-bold text-[#f26624]">1200 sft</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500 uppercase">West Facing</div>
                  <div className="font-bold text-[#f26624]">1195 sft</div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost per SFT</span>
                  <span className="font-semibold">₹3500/-</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Amenities</span>
                  <span className="font-semibold">₹3.00 Lakhs</span>
                </div>
                <div className="text-xs text-gray-400 mt-1 italic">
                  (Car parking-1, Lift, Generator, Transformer Charges)
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="flex justify-between items-end">
                  <span className="text-gray-600 font-bold text-sm uppercase">Total Cost</span>
                  <span className="text-2xl font-extrabold text-[#f26624]">₹45.00 <span className="text-sm font-medium text-gray-500">Lakhs</span></span>
                </div>
                <div className="text-xs text-gray-400 text-right mt-1">Excluding Interiors</div>
              </div>
            </div>
          </div>

          {/* Duplex Villa Cost & Details */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
            <div className="bg-[#003366] p-4 text-center">
              <h4 className="text-white text-xl font-bold uppercase tracking-wider">Duplex Villa Cost</h4>
            </div>
            <div className="p-6 flex-grow flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-gray-600 font-medium">Type</span>
                <span className="font-bold text-[#003366]">3BHK Villa</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-gray-600 font-medium">Land Area</span>
                <span className="font-bold text-gray-800">222.22 sq.yds</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-gray-600 font-medium">Construction Area</span>
                <span className="font-bold text-[#f26624]">3200 sft</span>
              </div>

              <div className="mt-2 bg-blue-50 p-3 rounded-lg text-sm text-[#003366] font-medium flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#f26624] rounded-full"></div>
                With Home Theater Room
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-sm text-[#003366] font-medium flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#f26624] rounded-full"></div>
                Lift Provision Available
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="flex justify-between items-end">
                  <span className="text-gray-600 font-bold text-sm uppercase">Total Cost</span>
                  <span className="text-2xl font-extrabold text-[#f26624]">₹150.00 <span className="text-sm font-medium text-gray-500">Lakhs</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Triplex Villa Cost & Details */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
            <div className="bg-[#003366] p-4 text-center">
              <h4 className="text-white text-xl font-bold uppercase tracking-wider">Triplex Villa Cost</h4>
            </div>
            <div className="p-6 flex-grow flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-gray-600 font-medium">Type</span>
                <span className="font-bold text-[#003366]">3BHK Villa</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-gray-600 font-medium">Land Area</span>
                <span className="font-bold text-gray-800">222.22 sq.yds</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-gray-600 font-medium">Construction Area</span>
                <span className="font-bold text-[#f26624]">4100 sft</span>
              </div>

              <div className="mt-2 bg-blue-50 p-3 rounded-lg text-sm text-[#003366] font-medium flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#f26624] rounded-full"></div>
                With Home Theater Room
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-sm text-[#003366] font-medium flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#f26624] rounded-full"></div>
                Lift Provision Available
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-sm text-[#003366] font-medium flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#f26624] rounded-full"></div>
                With Stilt Floor
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="flex justify-between items-end">
                  <span className="text-gray-600 font-bold text-sm uppercase">Total Cost</span>
                  <span className="text-2xl font-extrabold text-[#f26624]">₹175.00 <span className="text-sm font-medium text-gray-500">Lakhs</span></span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Notes */}
        <div className="mt-10 max-w-4xl mx-auto bg-orange-50 border-l-4 border-[#f26624] p-4 rounded-r-lg">
          <h5 className="text-[#003366] font-bold mb-2">Important Notes:</h5>
          <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
            <li>GST 5% Applicable on Sale Agreement value.</li>
            <li>Registration Charges has to be borne by the purchaser.</li>
            <li>Interiors work charges extra as per Customer Requirement.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ProjectStats;
