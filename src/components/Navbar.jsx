import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Button from './Button';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Apartments', path: '/apartments' },
    { name: 'Plots', path: '/plots' },
    { name: 'Villas', path: '/villas' },
    { name: 'About Us', path: '/about' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isTransparent ? 'bg-white py-4' : 'bg-white shadow-md py-2'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Jayaram Construction" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium hover:text-accent transition-colors ${isTransparent ? 'text-primary' : 'text-gray-700'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="secondary" size="sm" to="/contact">
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`w-8 h-8 ${isTransparent ? 'text-primary' : 'text-primary'}`} />
            ) : (
              <Menu className={`w-8 h-8 ${isTransparent ? 'text-primary' : 'text-primary'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-primary">Menu</span>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <div className="flex flex-col gap-4 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-medium text-gray-700 hover:text-primary border-b border-gray-100 pb-2"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto">
            <Button variant="primary" className="w-full mb-4">
              Enquire Now
            </Button>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-5 h-5" />
              <span>+91 80960 44333</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
