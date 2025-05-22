import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Footer from './components/Footer';
import About from './components/About';
import CallToAction from './components/CallToAction';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.title = 'Aqua Globe Innovations | Aquaculture Supplements';
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
                <Features />
                <Products />
              </>
            }
          />

          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path='/buy-now' element={<CallToAction />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;