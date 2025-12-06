import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Building, Film, Pill, ShoppingBag } from 'lucide-react';
import ReasonsSection from '../components/ReasonsSection';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import StatsSection from '../components/StatsSection';
import Button from '../components/Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/style.css"

const featuredProjects = [
  {
    id: 1,
    name: "Jayaram Heights",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "New Launch",
    location: "Gachibowli, Hyderabad",
    config: "2, 3 & 4 BHK",
    size: "1200 – 2500 sq. ft.",
    price: "Starts ₹85 Lakhs*"
  },
  {
    id: 2,
    name: "Golden Meadows",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "Ready to Move",
    location: "Whitefield, Bengaluru",
    config: "Villa Plots",
    size: "200 – 500 Sq. Yds",
    price: "Starts ₹60 Lakhs*"
  },
  {
    id: 3,
    name: "Serene Villas",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "Under Construction",
    location: "Kompally, Hyderabad",
    config: "4 BHK Triplex",
    size: "3500 – 4500 sq. ft.",
    price: "Price on Request"
  },
  {
    id: 4,
    name: "Urban Towers",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "New Launch",
    location: "Hitech City, Hyderabad",
    config: "3 BHK Premium",
    size: "1800 – 2200 sq. ft.",
    price: "Starts ₹1.2 Cr*"
  }
];

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
  const [active, setActive] = useState("apartments");
// Custom Arrow Buttons
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-primary hover:text-white transition"
    onClick={onClick}
  >
    <ChevronRight size={22} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-primary hover:text-white transition"
    onClick={onClick}
  >
    <ChevronLeft size={22} />
  </button>
);

// SETTINGS FOR SLICK
const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,   // set true only if you want center styling
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ]
};


  return (
    <div className="flex flex-col w-full">
      <Hero />
    

      {/* Featured Projects - Horizontal Scroll */}
     <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-6">
      
    <div className="flex justify-between items-end mb-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          In The Spotlight
        </h2>
        <div className="w-20 h-1 bg-accent"></div>
      </div>
    </div>

<div className="tabs-container">
      <Link to="/apartments"
        className={`tab-item ${active === "apartments" ? "active" : ""}`}
        onClick={() => setActive("apartments")}
      >
        APARTMENTS
      </Link>

      <Link to="/villas"
        className={`tab-item ${active === "plots" ? "active" : ""}`}
        onClick={() => setActive("plots")}
      >
        PLOTS
      </Link>

      <Link to="/plots"
        className={`tab-item ${active === "bungalows" ? "active" : ""}`}
        onClick={() => setActive("bungalows")}
      >
        BUNGALOWS
      </Link>
    </div>

    {/* ⭐ SLICK CAROUSEL ⭐ */}
    <Slider {...settings}>
  {featuredProjects.map((project) => (
    <div key={project.id} className="px-3">
      <ProjectCard project={project} />
    </div>
  ))}
</Slider>


  </div>
</section>

  <ReasonsSection />
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
