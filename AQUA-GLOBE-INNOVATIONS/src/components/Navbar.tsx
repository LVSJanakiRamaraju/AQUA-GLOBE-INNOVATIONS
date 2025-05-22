import React, { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Droplets size={32} className="text-blue-600 mr-2" />
            <span className="text-xl font-semibold text-blue-900">Aqua Globe Innovations</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-blue-900 hover:text-blue-600 transition-colors font-medium">
              Home
            </a>
            <a href="/products" className="text-blue-900 hover:text-blue-600 transition-colors font-medium">
              Products
            </a>
            <a href="/about" className="text-blue-900 hover:text-blue-600 transition-colors font-medium">
              About Us
            </a>
            <a href="/customers" className="text-blue-900 hover:text-blue-600 transition-colors font-medium">
              Customers
            </a>
            <a href="/certifications" className="text-blue-900 hover:text-blue-600 transition-colors font-medium">
              Certifications
            </a>
            <a 
              href="/buy-now" 
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Buy Now
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="text-blue-900" /> : <Menu className="text-blue-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen bg-white' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <a 
            href="/" 
            className="block text-blue-900 hover:text-blue-600 transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a 
            href="/products" 
            className="block text-blue-900 hover:text-blue-600 transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Products
          </a>
          <a 
            href="/about" 
            className="block text-blue-900 hover:text-blue-600 transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>
          <a 
            href="/customers" 
            className="block text-blue-900 hover:text-blue-600 transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Customers
          </a>
          <a 
            href="/certifications" 
            className="block text-blue-900 hover:text-blue-600 transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Certifications
          </a>
          <a 
            href="/buy-now" 
            className="block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            Buy Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;