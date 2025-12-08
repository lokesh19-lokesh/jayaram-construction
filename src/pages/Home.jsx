import React, { useState } from 'react';
import { Building, Film, Pill, ShoppingBag, X } from 'lucide-react';
import ReasonsSection from '../components/ReasonsSection';
import Hero from '../components/Hero';
import TestimonialCard from '../components/TestimonialCard';

import StatsSection from '../components/StatsSection';
import Button from '../components/Button';
import Spotlight from '../components/Spotlight';




import masterplan from '../assets/plans/masterplan.png';
import floorplan from '../assets/plans/floorplan.png';
import specification from '../assets/plans/specification.png';
import alluring from '../assets/alluring.jpg';

const testimonials = [
  {
    id: 1,
    name: "Rajesh & Priya",
    project: "Jayaram Heights",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Buying our dream home with Jayaram Construction was the best decision. The quality of construction and attention to detail is unmatched."
  },
  {
    id: 2,
    name: "Suresh Kumar",
    project: "Golden Meadows",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Excellent location and world-class amenities. The team was very transparent throughout the process. Highly recommended!"
  },
  {
    id: 3,
    name: "Anita Desai",
    project: "Serene Villas",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Living here feels like a resort. The landscaping and maintenance are top-notch. Truly a premium experience."
  }
];

const groupCompanies = [
  { name: "JC Homes", icon: Building, type: "Real Estate" },
  { name: "JC Cinemas", icon: Film, type: "Entertainment" },
  { name: "JC Pharma", icon: Pill, type: "Healthcare" },
  { name: "JC Retail", icon: ShoppingBag, type: "Retail" },
];

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);



  return (
    <div className="flex flex-col w-full">
      <Hero />


      {/* Featured Projects - Horizontal Scroll */}
      {/* Spotlight Section */}
      <Spotlight />

      <ReasonsSection />

      {/* Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Plans</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore our meticulously designed layouts that maximize space, utility, and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Master Plan */}
            <div
              className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              onClick={() => setSelectedImage(masterplan)}
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={masterplan}
                  alt="Master Plan"
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center">Master Plan</h3>
            </div>

            {/* Floor Plan */}
            <div
              className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              onClick={() => setSelectedImage(floorplan)}
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={floorplan}
                  alt="Floor Plan"
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center">Floor Plan</h3>
            </div>

            {/* Specifications */}
            <div
              className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              onClick={() => setSelectedImage(specification)}
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={specification}
                  alt="Specifications"
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center">Specifications</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none bg-black/50 rounded-full p-2 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Plan Preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Alluring Image Section */}
      <section className="w-full">
        <img
          src={alluring}
          alt="Alluring View"
          className="w-full h-auto object-cover"
        />
      </section>
      {/* Company Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Construction Site"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Building the Future, <br /><span className="text-primary">Restoring the Past</span></h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Jayaram Construction, we believe that a home is more than just bricks and mortar. It is a sanctuary where memories are made and dreams are realized. With over two decades of experience, we have established ourselves as a leader in the real estate industry, known for our commitment to quality, transparency, and customer satisfaction.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our philosophy is simple: build with integrity and deliver with pride. From selecting prime locations to using the finest materials, every aspect of our projects is carefully curated to ensure the highest standards of living for our residents.
              </p>
              <Button variant="primary" to="/about">
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Group Companies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Group Companies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {groupCompanies.map((company, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <company.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">{company.name}</h3>
                <p className="text-sm text-gray-500">{company.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Homeowners Are Saying</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-12 bg-primary-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            <div className="text-xl font-bold text-accent uppercase tracking-wider">Cities We Serve</div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-lg font-medium">Hyderabad</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-lg font-medium">Bengaluru</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-lg font-medium">Visakhapatnam</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-lg font-medium">Vijayawada</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
