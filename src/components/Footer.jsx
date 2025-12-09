import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Jayaram Construction" className="h-12 w-auto bg-white rounded-lg p-1" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building dreams since 1996. We are committed to delivering premium gated communities and modern homes with world-class amenities.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/srijayarama/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/sri_jayarama/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/sri_jayarama/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-accent inline-block pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/apartments" className="text-gray-300 hover:text-accent transition-colors">Apartments</Link></li>
              <li><Link to="/plots" className="text-gray-300 hover:text-accent transition-colors">Plots</Link></li>
              <li><Link to="/villas" className="text-gray-300 hover:text-accent transition-colors">Villas</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-accent transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-accent inline-block pb-2">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-gray-300 hover:text-accent transition-colors">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-accent transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/csr" className="text-gray-300 hover:text-accent transition-colors">CSR Initiatives</Link></li>
              <li><Link to="/sitemap" className="text-gray-300 hover:text-accent transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-accent inline-block pb-2">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span>SriRama Landmark, Behind JPNES College, Hasnapur Road, Mahabubnagar – 509001.</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span>+91 80960 44333</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span>constructions@srijayarama.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-gray-400 text-sm">
          <p>&copy; 2025 SRI JAYARAMA CONSTRUCTION PVT.LTD. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            design by <a href="https://thepatternscompany.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">The Patterns Company</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
