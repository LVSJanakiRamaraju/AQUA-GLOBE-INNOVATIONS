import React from 'react';
import { Droplets, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <section id="footer">
          <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Logo and Company Name */}
        <div className="flex items-center justify-center mb-6 space-x-3">
          <Droplets size={24} className="text-blue-400" />
          <span className="text-lg font-semibold tracking-wide">SEAWEL FORMULATIONS</span>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-16 space-y-4 md:space-y-0 text-center md:text-left text-sm">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <MapPin size={18} className="text-blue-400" />
            <p>#300A, Auto Nagar Y Junction, Mangalagiri, Guntur, Andhra Pradesh, 522502</p>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Phone size={18} className="text-blue-400" />
            <p>
              <a href="tel:+919291207999" className="hover:text-white">
                9291 207 999
              </a>
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Mail size={18} className="text-blue-400" />
            <p>
              <a href="mailto:aquaglobeinnovations@gmail.com" className="hover:text-white">
                aquaglobeinnovations@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-gray-500 select-none">
          &copy; {new Date().getFullYear()} SEAWEL FORMULATIONS. All rights reserved.
        </div>
      </div>
    </footer>
      </section>
  );
};

export default Footer;
