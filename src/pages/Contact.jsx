import React, { useState } from 'react';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    type: 'Apartment',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question? Want to visit a site? Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            {submitted ? (
              <div className="bg-green-100 text-green-700 p-4 rounded-lg text-center">
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                  <select
                    name="type"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    onChange={handleChange}
                  >
                    <option>Apartment</option>
                    <option>Plot</option>
                    <option>Villa</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" className="w-full">
                  Submit Enquiry
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div>
            <div className="bg-gray-50 p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Corporate Office</p>
                    <p className="text-gray-600">SriRama Landmark, Behind JPNES College, Hasnapur Road, Mahabubnagar – 509001.</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 80960 44333</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Email</p>
                    <p className="text-gray-600">constructions@srijayarama.com</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Working Hours</p>
                    <p className="text-gray-600">Mon - Sat: 10:00 AM - 7:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>Google Map Embed Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
