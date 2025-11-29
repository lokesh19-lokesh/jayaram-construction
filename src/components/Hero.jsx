import React from 'react';
import Button from './Button';
import heroVideo from '../assets/hero2.mp4';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in-up">
            Premium Gated Communities & <span className="text-accent">Modern Homes</span>
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed max-w-2xl animate-fade-in-up delay-100">
            Experience the perfect blend of luxury, comfort, and sustainability. We build homes that are not just structures, but foundations for a lifetime of happiness.
          </p>
          <div className="flex flex-row gap-4 animate-fade-in-up delay-200">
            <Button variant="primary" size="md" to="/apartments">
              Explore Projects
            </Button>
            <Button variant="white" size="md" to="/contact">
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
