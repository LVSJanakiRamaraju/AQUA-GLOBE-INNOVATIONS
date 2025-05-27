import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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
    {
      name: 'AMMONIA NITRITE CONTROLLER',
      size: 'small',
      products: [
        { name: 'AN-X', description: 'Specialized gut health solution' }
      ]
    },
    {
      name: 'BOTTOM TREATMENT',
      size: 'medium',
      products: [
        { name: 'Pond wel', description: 'Comprehensive bottom treatment' },
      ]
    }
  ];

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'small':
        return 'w-32 h-32';
      case 'medium':
        return 'w-36 h-36';
      case 'large':
        return 'w-44 h-44';
      default:
        return 'w-36 h-36';
    }
  };

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/product/${encodeURIComponent(categoryName)}`);
  };

  return (
    <section className="py-16 bg-[#F5F7FA] relative overflow-hidden center" id='products'>
      <div className="container mx-auto px-4 md:px-8 relative z-10 mt-20">
        <div className="flex flex-wrap justify-center gap-12">
          {categories.map((category) => {
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
                onClick={() => handleCategoryClick(category.name)}
                className={`${getSizeClass(category.size)} relative cursor-pointer group`}
              >
                {/* Main bubble */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/90 via-blue-50/80 to-blue-100/70 backdrop-blur-sm shadow center" />

                {/* Top highlight */}
                <div className="absolute inset-[10%] top-[5%] rounded-full bg-white/60 opacity-70 center" />

                {/* Bottom shadow */}
                <div className="absolute inset-0 rounded-full shadow-lg blur-sm bg-blue-100/20 center" />

                {/* Text content */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <p className="text-blue-900 font-medium text-center text-sm md:text-base">
                    {category.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
