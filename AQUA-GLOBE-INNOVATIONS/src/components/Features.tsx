import React from 'react';
import { Shield, Syringe, TrendingUp } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="objectives" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
          THE MAIN OBJECTIVES OF AQUACULTURE SUPPLEMENTS ARE TO
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg text-blue-600 mb-4">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">HELP PREVENT AND CONTROL DISEASES</h3>
            <p className="text-gray-600">
              Supplements help prevent the outbreak and spread of diseases within aquaculture facilities, reducing the risk of economic losses associated with disease outbreaks.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg text-blue-600 mb-4">
              <Syringe size={24} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">TREAT INFECTIONS</h3>
            <p className="text-gray-600">
              When diseases occur, aquaculture supplements are used to treat infected animals, minimizing mortality and improving overall health.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg text-blue-600 mb-4">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">ENHANCE GROWTH AND PRODUCTIVITY</h3>
            <p className="text-gray-600">
              Some supplements can also promote growth and improve feed conversion efficiency, increasing aquaculture operations' productivity and profitability.
            </p>
          </div>
        </div>
      </div>

      <br className="my-16" />
      <br />
      <br />
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
          AQUA GLOBE MISSION
        </h2>
        <div className="grid gap-2">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <p className="text-gray-600">
              Our mission is to provide the highest quality AQUA GLOBE INNOVATIONS healthcare products to our customers. AQUA GLOBE INNOVATIONS healthcare products aim to improve the well-being and quality of life of individuals by developing innovative healthcare products that harness the power of water We are committed to providing safe, effective, and sustainable solutions that enhance aquaculture care promote growth, and support the aquaculture industry AQUA GLOBE INNOVATIONS aim to revolutionize the field of aquaculture by delivering products that optimize positive outcomes, ensure hygienic practices, and enable superior aquatics supplements.
            </p>
          </div>
        </div>
      </div>

      <br className="my-16" />
      <br />
      <br />
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
          AQUA GLOBE VISION
        </h2>
        <div className="grid gap-2">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <p className="text-gray-600">
              The vision of AQUA GLOBE INNOVATIONS healthcare products is to provide innovative and sustainable solutions that promote health and well- being of shrimp, fish and other aquatic species.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;