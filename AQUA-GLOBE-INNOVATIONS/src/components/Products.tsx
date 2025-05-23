import React from 'react';

interface Product {
  name: string;
  subtitle: string;
  image: string;
}

const Products: React.FC = () => {
  const products: Product[] = [
    {
      name: "20 COUNT",
      subtitle: "WATER AND SOIL PROBIOTIC",
      image: "/20Count.png"
    },
    {
      name: "BOTTOM 365",
      subtitle: "PROBIOTIC FOR VIBRIO CONTROLLER",
      image: "/bottom365.png"
    },
    {
      name: "CP RATION",
      subtitle: "CONTROL FOR RUNNING MORTALITY",
      image: "/cpRatio.png"
    },
    {
      name: "GUT WEL",
      subtitle: "WHITE FAECES PREVENTION AND CONTROL",
      image: "/gutWel.png"
    },
    {
      name: "IMMORTAL",
      subtitle: "PROBIOTIC SOLUTION FOR AMMONIA AND NITRATE",
      image: "/immortal.png"
    },
    {
      name: "KICK START",
      subtitle: "MICRO AND MACRO MINERALS",
      image: "/kickStart.png"
    },
    {
      name: "K PEARL",
      subtitle: "PROBIOTIC FOR VIBRIO CONTROLLER",
      image: "/kPearl.png"
    },
    {
      name: "MG PEARL",
      subtitle: "PROBIOTIC FOR VIBRIO CONTROLLER",
      image: "/mgPearl.png"
    },
    {
      name: "NO LOADS",
      subtitle: "PROBIOTIC FOR VIBRIO CONTROLLER",
      image: "/noLoads.png"
    },
    {
      name: "PEARL MIX",
      subtitle: "PROBIOTIC FOR VIBRIO CONTROLLER",
      image: "/pearlMix.png"
    },
    {
      name: "POND WEL",
      subtitle: "PROBIOTIC FOR VIBRIO CONTROLLER",
      image: "/pondWel.png"
    },
    {
      name: "SEA PEARL",
      subtitle: "PROBIOTIC FOR VIBRIO CONTROLLER",
      image: "/seaPearl.png"
    },
    {
      name: "SEAWEL BACT",
      subtitle: "PROBIOTIC FOR VIBRIO CONTROLLER",
      image: "/seawelBact.png"
    },
    {
      name: "SEAWEL GEL",
      subtitle: "PROBIOTIC FOR VIBRIO CONTROLLER",
      image: "/seawelGel.png"
    },
    {
      name: "VANNA HEP",
      subtitle: "PROBIOTIC FOR VIBRIO CONTROLLER",
      image: "/vannaHep.png"
    }
  ];

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Our Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square  rounded-lg mb-4">
                <h3 className="text-xl font-bold text-blue-600">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.subtitle}</p>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;