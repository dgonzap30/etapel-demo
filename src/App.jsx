import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import ProductShowcase from './components/ProductShowcase';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="etapel-app">
      <Navbar />
      <Hero />
      <BrandMarquee />
      <ProductShowcase />
      <ContactFooter />
    </div>
  );
}

export default App;
