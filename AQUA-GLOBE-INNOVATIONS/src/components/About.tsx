import React from 'react';

const About: React.FC = () => {
  const values = [
    {
      title: "Quality",
      description: "We prioritize quality in everything we do, from product development to customer service, ensuring that our solutions meet the highest standards of excellence."
    },
    {
      title: "Innovation",
      description: "We embrace innovation as a driving force behind our success, constantly seeking new ways to improve and advance aquaculture healthcare."
    },
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical integrity, fostering trust and confidence among our customers, partners, and stakeholders."
    },
    {
      title: "Sustainability",
      description: "We are committed to promoting sustainable practices that safeguard the long-term health of aquatic ecosystems and support the vitality of aquaculture communities."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of collaboration and partnership, working closely with industry experts, researchers, and stakeholders to develop holistic solutions that address the diverse needs of the aquaculture sector."
    }
  ];

  return (
    <section id="#about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
          AQUA GLOBE INNOVATIONS
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">About Aqua Globe Innovations:</h3>
            <p className="text-gray-700 leading-relaxed">
              Aqua Globe Innovations is a pioneering company dedicated to advancing fish and shrimp healthcare solutions. With a steadfast commitment to excellence, we strive to enhance the well-being and vitality of aquatic life worldwide. Our core focus lies in developing and delivering top-tier products and services tailored to the unique needs of aquaculture.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Certified GMP & ISO Standards:</h3>
            <p className="text-gray-700 leading-relaxed">
              At Aqua Globe Innovations, quality is paramount. We adhere to rigorous Good Manufacturing Practices (GMP) and International Organization for Standardization (ISO) standards to ensure the highest level of quality, safety, and efficacy in all our products and processes. Our adherence to these certifications underscores our unwavering dedication to providing premium solutions that meet global regulatory requirements.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Mission:</h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission at Aqua Globe Innovations is to revolutionize the aquaculture industry by offering innovative, science-backed healthcare solutions that optimize fish and shrimp health, maximize productivity, and promote sustainable practices. Through our commitment to excellence and integrity, we aim to be a trusted partner for aquaculture professionals worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Vision:</h3>
            <p className="text-gray-700 leading-relaxed">
              We envision a future where aquaculture operations thrive, buoyed by cutting-edge healthcare solutions that promote the well-being of aquatic life and safeguard the environment. By pushing the boundaries of innovation and sustainability, we aspire to lead the way in shaping a healthier, more resilient aquaculture industry.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-6">Our Values:</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">{value.title}</h4>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed italic text-center">
            At Aqua Globe Innovations, we are driven by a passion for innovation, a commitment to quality, and a deep respect for the natural world. Join us in our journey to redefine the future of aquaculture healthcare.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;