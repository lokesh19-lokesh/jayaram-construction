import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import hero from '../assets/plots/hero.avif';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-4 bg-white overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-gray-900">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-600 bg-gray-50 border-t border-gray-100">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      category: "Buying Process",
      items: [
        {
          question: "What is the process of booking a flat/plot?",
          answer: "The process involves selecting a unit, filling out the booking application, and paying the booking amount. Our sales team will guide you through the documentation and agreement process."
        },
        {
          question: "What documents are required for booking?",
          answer: "You will need ID proof (Aadhar/PAN), address proof, and passport-sized photographs. For loan processing, additional financial documents may be required."
        },
        {
          question: "Do you assist with home loans?",
          answer: "Yes, we have tie-ups with major banks and financial institutions to help you get the best home loan rates and quick approval."
        }
      ]
    },
    {
      category: "Payments & Possession",
      items: [
        {
          question: "What are the payment plans available?",
          answer: "We offer construction-linked payment plans and down payment plans. Specific details vary by project and can be discussed with our sales team."
        },
        {
          question: "When will I get possession of my property?",
          answer: "Possession timelines vary by project. We are committed to timely delivery and will provide you with a schedule in the agreement."
        }
      ]
    },
    {
      category: "General",
      items: [
        {
          question: "Are your projects RERA approved?",
          answer: "Yes, all our ongoing projects are registered with RERA and comply with all regulatory norms."
        },
        {
          question: "Can I visit the site before booking?",
          answer: "Absolutely! We encourage site visits. Please contact us to schedule a guided tour of our projects."
        }
      ]
    }
  ];

  return (
    <div className="pb-20 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-cover bg-center mb-16" style={{ backgroundImage: `url(${hero})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Frequently Asked Questions</h1>
          <div className="flex items-center text-sm md:text-base space-x-2">
            <Link to="/" className="hover:text-[#fa6823] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#fa6823] font-semibold">FAQ</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about buying your dream home with Sri Jayarama Constructions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-primary pl-4">
                {section.category}
              </h2>
              <div>
                {section.items.map((item, i) => (
                  <FAQItem key={i} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
