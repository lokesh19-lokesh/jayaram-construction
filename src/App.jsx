import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Apartments from './pages/Apartments';
import Plots from './pages/Plots';
import Villas from './pages/Villas';
import About from './pages/About';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import ProjectDetail from './pages/ProjectDetail';

// New Pages
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CSR from './pages/CSR';
import Sitemap from './pages/Sitemap';

function App() {
  return (

    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="/plots" element={<Plots />} />
        <Route path="/villas" element={<Villas />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />

        {/* New Routes */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/csr" element={<CSR />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
    </MainLayout>

  );
}

export default App;
