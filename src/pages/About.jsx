import React from 'react';
import { Award, Users, History, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About SriRamaJayarama Group</h1>
          <div className="text-lg text-gray-600 leading-relaxed text-justify space-y-6">
            <p>
              SriRamaJayarama group is well known establishment in the erstwhile Mahabubnagar district which deals with Mahindra Tractors, Maruti Suzuki Cars, TVS Two Wheelers, Total ELF Lubricants, Mahindra Construction Equipment, Shaktiman Agri Implements, SriRama Trailers and Agri Implements and are pioneers in the automobile industry with remarkable achievements across all the segments its associated with. Established in 1974, the journey has been through many milestones along with the great customer satisfaction. The group’s philosophy of Customer First approach has always been the primary moto in whichever segment it stepped into.
            </p>
            <p>
              With this journey of 40+ years, the group has stepped into real estate industry through their construction establishment Sri Jayarama Constructions Pvt Ltd, established in 2016 with the aim to provide to luxury housing to the people of Mahbubnagar at an affordable & justified prices. With this motto, SriRama Landmark has been initiated with the approach to build Duplex, Independent and Apartments in the town of Mahbubnagar with the outlook and amenities provided are no less than what is offered in the nearest capital, Hyderabad. We as a construction company and with roots to our principles from automobile industry, we always wanted the quality and customer satisfaction first. The same has helped us where we have sold the duplexes, independent houses without any public marketing campaigns. That is the testimony of the trust that people of Mahbubnagar have on the brand SriRama – Jayarama. With the phase 2 being worked out with an additional 50 acres of land adjacent to Phase 1, we are sure to take these standards to next level and mark a benchmark in the industry of real estate in the district of erstwhile Mahbubnagar.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="container mx-auto px-4 md:px-6 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${item === 1 ? '1560250097-0b93528c311a' : item === 2 ? '1573496359142-b8d87734a5a2' : '1519085360753-af0119f7cbe7'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                  alt="Leader"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
              <p className="text-primary font-medium mb-2">Director</p>
              <p className="text-gray-500 text-sm">
                With over 20 years of experience in civil engineering and project management.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Awards & Recognition</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex flex-col items-center">
                <Award className="w-16 h-16 text-accent mb-4" />
                <h3 className="font-bold text-lg">Best Developer 202{item}</h3>
                <p className="text-gray-300 text-sm">Real Estate Awards</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
