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
        </Routes>
      </MainLayout>
 
  );
}

export default App;
