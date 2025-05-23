import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              SEAWEL FORMULATIONS
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
            <div className="md:w-1/2 order-first md:order-none mt-8 md:mt-0">
            <img
              src="../../public/banner.png"
              alt="Hero Image"
              className="w-full h-auto rounded-lg shadow-lg opacity-40  transition-opacity duration-300"
            />
            <br/>
            </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;