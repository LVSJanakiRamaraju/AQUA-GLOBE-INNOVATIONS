import React, { useState } from 'react';
import { motion } from 'framer-motion';


interface Product {
  name: string;
  description: string;
  image?: string;
}

interface Category {
  name: string;
  size: 'small' | 'medium' | 'large';
  products: Product[];
}

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories: Category[] = [
    {
      name: 'MINERALS',
      size: 'large',
      products: [
        { name: 'Sea pearl', description: 'Premium mineral supplement' },
        { name: 'Cp ratio', description: 'Balanced mineral formula' },
        { name: 'Mg pearl', description: 'Magnesium-rich supplement' },
        { name: 'K pearl', description: 'Potassium-enriched formula' },
        { name: 'Pearl mix', description: 'Complete mineral blend' }
      ]
    },
    {
      name: 'FEED SUPPLEMENTS',
      size: 'medium',
      products: [
        { name: 'Gut well', description: 'Digestive health support' },
        { name: 'Kick start', description: 'Growth initiator' },
        { name: 'Immortal', description: 'Immunity booster' },
        { name: '20 count', description: 'Premium feed supplement' }
      ]
    },
    {
      name: 'GROWTH PROMOTER',
      size: 'small',
      products: [
        { name: '20 count', description: 'Enhanced growth formula' }
      ]
    },
    {
      name: 'WHITE GUT',
      size: 'small',
      products: [
        { name: 'Gut well', description: 'Specialized gut health solution' }
      ]
    },
    {
      name: 'PROBIOTICS',
      size: 'medium',
      products: [
        { name: 'No loads v', description: 'Advanced probiotic formula' },
        { name: 'Seawell bact', description: 'Marine probiotic blend' },
        { name: 'Bottom 365', description: 'Long-lasting probiotic solution' }
      ]
    },
  ];

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'small':
        return 'w-24 h-24';
      case 'medium':
        return 'w-28 h-28';
      case 'large':
        return 'w-44 h-44';
      default:
        return 'w-36 h-36';
    }
  };

  return (
    <section className="py-16 min-h-screen bg-[#F5F7FA] relative overflow-hidden center">

      <div className="container mx-auto px-4 md:px-8 relative z-10 mt-20">
        <div className="flex flex-wrap justify-center gap-12">
          {categories.map((category, index) => {
            const delay = Math.random() * 2;
            const duration = 4 + Math.random() * 2;
            const distance = 15 + Math.random() * 10;

            return (
              <motion.div
                key={category.name}
                animate={{ y: [0, -distance, 0] }}
                transition={{
                  duration,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                  delay
                }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`${getSizeClass(category.size)} relative cursor-pointer group`}
              >
                {/* Main bubble with gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/90 via-blue-50/80 to-blue-100/70 backdrop-blur-sm shadow center" />

                {/* Top highlight */}
                <div className="absolute inset-[10%] top-[5%] rounded-full bg-white/60 opacity-70 center" />

                {/* Bottom shadow */}
                <div className="absolute inset-0 rounded-full shadow-lg blur-sm bg-blue-100/20 center" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <p className="text-blue-900 font-medium text-center text-sm md:text-base">
                    {category.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Product popup card */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-6">{selectedCategory}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.find(c => c.name === selectedCategory)?.products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 shadow-md"
                >
                  <h4 className="text-xl font-semibold text-blue-800 mb-2">{product.name}</h4>
                  <p className="text-gray-600">{product.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Products;
