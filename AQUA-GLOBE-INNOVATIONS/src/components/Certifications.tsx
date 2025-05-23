import React from 'react';

const Certifications: React.FC = () => {
  const certs = [
    {
      title: "GMP Certified Company",
      image: "../../public/GMP_Certification.png", 
      description: `
        Aqua Globe Innovations is proud to announce that we have achieved GMP (Good Manufacturing Practices) certification, a significant milestone in our commitment to quality, safety, and excellence.
        
        GMP certification is a rigorous process that involves thorough assessment of our manufacturing processes, facilities, and quality management systems by accredited third-party bodies. 

        It assures our customers and partners that our products are manufactured in a controlled environment with strict adherence to protocols.

        Our GMP certification reflects our commitment to innovation, safety, and product integrity in the aquaculture and aquatic research industries.
      `,
    },
    {
      title: "ISO Certified Company",
      image: "../../public/ISO_Certification.png", 
      description: `
        Aqua Globe Innovations has achieved ISO 9001:2015 certification, a testament to our dedication to quality management and customer satisfaction.
        
        ISO certification signifies our adherence to stringent quality management principles and standards. This includes risk management, operational efficiency, and continual improvement.

        It demonstrates our commitment to delivering products and services that consistently meet customer expectations while enhancing satisfaction and trust.

        Our ISO 9001:2015 certification serves as a cornerstone of our operational excellence across all facets of our business.
      `,
    },
  ];

  return (
    <section className="py-12 px-4 md:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Our Certifications
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {certs.map((cert, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full md:w-1/2 rounded-md border"
            />
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                {cert.title}
              </h3>
              <p className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">
                {cert.description.trim()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
