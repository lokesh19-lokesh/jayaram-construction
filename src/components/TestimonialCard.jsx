import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 relative">
      <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100 fill-current" />

      <div className="flex items-center gap-4 mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-accent"
        />
        <div>
          <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-primary font-medium">{testimonial.project}</p>
        </div>
      </div>

      <p className="text-gray-600 italic leading-relaxed">
        "{testimonial.text}"
      </p>
    </div>
  );
};

export default TestimonialCard;
