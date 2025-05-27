import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Footer from './components/Footer';
import About from './components/About';
import CallToAction from './components/CallToAction';
import Certifications from './components/Certifications';
import CustomerTestimonials from './components/Customers';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.title = 'Seawel Formulations';
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Products />
                <Features />
              </>
            }
          />

          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path='/buy-now' element={<CallToAction />} />
          <Route path='/customers' element={<CustomerTestimonials />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path="/product/:categoryName" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;