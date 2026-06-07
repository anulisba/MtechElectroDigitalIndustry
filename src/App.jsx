// src/App.jsx
import React from 'react';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetailPage from './components/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';
import ContactLandingSection from './components/ContactLanding';
import AboutUs from './components/AboutUs';
const App = () => {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/contact-us' element={<ContactLandingSection />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </Router>
  )
};

export default App;
