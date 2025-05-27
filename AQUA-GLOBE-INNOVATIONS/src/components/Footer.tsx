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
              <p>Flat No. 1-8, Main Road, Somasundarapalem, Tenali, Guntur, Andhra Pradesh - 522202</p>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Phone size={18} className="text-blue-400" />
              <p>
                <a href="tel:+919652162667" className="hover:text-white">
                  9652162667
                </a>
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Mail size={18} className="text-blue-400" />
              <p>
                <a href="mailto:seawelformulations@gmail.com" className="hover:text-white">
                  seawelformulations@gmail.com
                </a>
              </p>
            </div>
          </div>
          {/* Copyright */}
          <div className="mt-8 text-center text-xs text-gray-500 select-none">
            &copy; {new Date().getFullYear()} SEAWEL FORMULATIONS. All rights reserved.
          </div>
          {/* Certification Images */}
          <div className="mt-10 flex justify-center items-center space-x-6">
            <img src="/ISO_certification.jpeg" alt="ISO Certified" className="h-14 w-auto object-contain rounded-full" />
            <img src="/GMP_certification.jpeg" alt="GMP Certified" className="h-14 w-auto object-contain rounded-full" />
            <img src="/CAA_certification.jpeg" alt="CAA Certified" className="h-14 w-auto object-contain rounded" />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
