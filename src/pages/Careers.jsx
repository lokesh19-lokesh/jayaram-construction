import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import hero from '../assets/plots/hero.avif';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: "Senior Civil Engineer",
    location: "Hyderabad",
    type: "Full Time",
    experience: "5-8 Years",
    department: "Engineering"
  },
  {
    id: 2,
    title: "Sales Executive",
    location: "Bengaluru",
    type: "Full Time",
    experience: "2-4 Years",
    department: "Sales"
  },
  {
    id: 3,
    title: "Architect",
    location: "Hyderabad",
    type: "Full Time",
    experience: "3-6 Years",
    department: "Design"
  },
  {
    id: 4,
    title: "Digital Marketing Manager",
    location: "Remote / Hyderabad",
    type: "Full Time",
    experience: "4-7 Years",
    department: "Marketing"
  }
];

const Careers = () => {
  return (
    <div className="pb-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-cover bg-center mb-16" style={{ backgroundImage: `url(${hero})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Careers</h1>
          <div className="flex items-center text-sm md:text-base space-x-2">
            <Link to="/" className="hover:text-[#fa6823] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#fa6823] font-semibold">Careers</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Jayaram Construction, we are always looking for talented individuals who share our passion for excellence. Build your career with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" /> {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {job.experience}
                    </span>
                  </div>
                </div>
                <Button variant="outline">Apply Now</Button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary text-white p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Don't see a suitable opening?</h3>
            <p className="mb-6 text-gray-200">
              We are always open to meeting great talent. Send your resume to careers@jayaramconstructions.com
            </p>
            <Button variant="secondary">Send Resume</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
