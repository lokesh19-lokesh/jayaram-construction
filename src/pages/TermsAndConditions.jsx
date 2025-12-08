import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/terms&conditions.png';

const TermsAndConditions = () => {
  return (
    <div className="pb-20 bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-cover bg-center mb-16" style={{ backgroundImage: `url(${hero})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Terms & Conditions</h1>
          <div className="flex items-center text-sm md:text-base space-x-2">
            <Link to="/" className="hover:text-[#fa6823] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#fa6823] font-semibold">Terms & Conditions</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">

        <div className="prose prose-lg text-gray-600">
          <p className="mb-6">
            Welcome to Sri Jayarama Constructions. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Use of Website</h2>
          <p className="mb-4">
            The content on this website is for general information and use only. It is subject to change without notice. Your use of any information or materials on this website is entirely at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Intellectual Property</h2>
          <p className="mb-4">
            This website contains material which is owned by or licensed to us, including the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Project Information</h2>
          <p className="mb-4">
            All plans, specifications, artistic renderings, and images on this website are indicative and subject to change as decided by the developer or competent authority. They do not form part of any offer or contract.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Limitation of Liability</h2>
          <p className="mb-4">
            In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, arising from the use of this website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. External Links</h2>
          <p className="mb-4">
            From time to time, this website may include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Governing Law</h2>
          <p className="mb-4">
            Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
