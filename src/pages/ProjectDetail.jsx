import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Home, Maximize, CheckCircle, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

// Mock data - in a real app this would come from an API or centralized store
const projects = [
  {
    id: 1,
    name: "Jayaram Heights",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    status: "New Launch",
    location: "Gachibowli, Hyderabad",
    config: "2, 3 & 4 BHK",
    size: "1200 – 2500 sq. ft.",
    price: "Starts ₹85 Lakhs*",
    description: "Jayaram Heights is a premium residential community designed for those who aspire for a higher standard of living. Located in the heart of Gachibowli, it offers excellent connectivity to IT hubs, schools, and hospitals.",
    amenities: ["Clubhouse", "Swimming Pool", "Gym", "Children's Play Area", "24/7 Security", "Power Backup"]
  },
  // ... other projects would be here. For demo, we'll just show this one or fallback.
];

const ProjectDetail = () => {
  const { id } = useParams();
  // Simple lookup or fallback to first project for demo
  const project = projects.find(p => p.id === parseInt(id)) || projects[0];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/apartments" className="inline-flex items-center text-gray-600 hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
        </Link>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          {/* Hero Image */}
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 bg-accent text-white px-4 py-2 rounded-full font-bold uppercase tracking-wide">
              {project.status}
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{project.name}</h1>
                <div className="flex items-center text-gray-600 text-lg">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  {project.location}
                </div>
              </div>
              <div className="text-left md:text-right">
                <p className="text-sm text-gray-500 mb-1">Starting Price</p>
                <p className="text-3xl font-bold text-primary">{project.price}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Home className="w-6 h-6 text-primary" />
                  <span className="font-bold text-gray-700">Configuration</span>
                </div>
                <p className="text-xl">{project.config}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Maximize className="w-6 h-6 text-primary" />
                  <span className="font-bold text-gray-700">Unit Size</span>
                </div>
                <p className="text-xl">{project.size}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="font-bold text-gray-700">RERA Status</span>
                </div>
                <p className="text-xl">Approved</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Project</h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {project.description}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-xl h-fit">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Interested?</h3>
                <p className="text-gray-600 mb-6">
                  Download the brochure or schedule a site visit today.
                </p>
                <div className="flex flex-col gap-4">
                  <Button variant="primary" to="/contact">Enquire Now</Button>
                  <Button variant="outline">Download Brochure</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
