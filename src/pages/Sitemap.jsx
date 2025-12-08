import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const links = [
    {
      category: "Main",
      items: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Why Choose Us", path: "/why-choose-us" },
        { name: "Contact Us", path: "/contact" },
        { name: "Careers", path: "/careers" }
      ]
    },
    {
      category: "Projects",
      items: [
        { name: "Apartments", path: "/apartments" },
        { name: "Plots", path: "/plots" },
        { name: "Villas", path: "/villas" }
      ]
    },
    {
      category: "Information",
      items: [
        { name: "FAQs", path: "/faq" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms & Conditions", path: "/terms" },
        { name: "CSR Initiatives", path: "/csr" }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Sitemap</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {links.map((section, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold text-primary mb-6 border-b pb-2">{section.category}</h2>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.path}
                      className="text-gray-600 hover:text-primary hover:translate-x-1 transition-all inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
