import React from 'react';
import { MapPin, Home, Maximize } from 'lucide-react';
import Button from './Button';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col">
      <div className="relative overflow-hidden h-64">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          {project.status}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white text-xl font-bold">{project.name}</h3>
          <div className="flex items-center text-gray-200 text-sm mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            {project.location}
          </div>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <Home className="w-5 h-5 mr-2 text-primary" />
            <div>
              <p className="text-xs text-gray-500">Configuration</p>
              <p className="font-semibold text-sm">{project.config}</p>
            </div>
          </div>
          <div className="flex items-center text-gray-600">
            <Maximize className="w-5 h-5 mr-2 text-primary" />
            <div>
              <p className="text-xs text-gray-500">Unit Size</p>
              <p className="font-semibold text-sm">{project.size}</p>
            </div>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500">Starting Price</p>
            <p className="text-lg font-bold text-primary">{project.price}</p>
          </div>
          <Button variant="outline" size="sm" to={`/projects/${project.id}`}>
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
