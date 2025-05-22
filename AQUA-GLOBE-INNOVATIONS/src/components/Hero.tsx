import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              AQUA GLOBE INNOVATIONS
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Aquaculture supplements are essential for maintaining the health and welfare of aquatic organisms in aquaculture systems. These supplements support the prevention of, designed to prevent any diseases and infections. That can affect fish, shrimp, and other culture species.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#products" 
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium flex items-center justify-center group"
              >
                View Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a 
                href="#footer" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-all duration-300 font-medium flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="relative z-10">
              <img 
                src="/aqua-globe-logo.png" 
                alt="Aqua Globe Innovations Logo" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;