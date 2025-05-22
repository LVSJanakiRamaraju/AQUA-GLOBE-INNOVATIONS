import React from 'react';

interface Product {
  name: string;
  subtitle: string;
  image: string;
}

const Products: React.FC = () => {
  const products: Product[] = [
    {
      name: "Pro-Globe",
      subtitle: "WATER AND SOIL PROBIOTIC",
      image: "/products/pro-globe.png"
    },
    {
      name: "VB-X",
      subtitle: "PROBIOTIC FOR VIBRIO CONTROLLER",
      image: "/products/vb-x.png"
    },
    {
      name: "RUN OUT",
      subtitle: "CONTROL FOR RUNNING MORTALITY",
      image: "/products/run-out.png"
    },
    {
      name: "WHITE SHIELD-L",
      subtitle: "WHITE FAECES PREVENTION AND CONTROL",
      image: "/products/white-shield.png"
    },
    {
      name: "GLOBE NB",
      subtitle: "PROBIOTIC SOLUTION FOR AMMONIA AND NITRATE",
      image: "/products/globe-nb.png"
    },
    {
      name: "GLOBE MIN",
      subtitle: "MICRO AND MACRO MINERALS",
      image: "/products/globe-min.png"
    }
  ];

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Our Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-600">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;