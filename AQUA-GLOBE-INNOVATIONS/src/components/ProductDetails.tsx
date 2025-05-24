import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const ProductDetails: React.FC = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const decodedCategoryName = decodeURIComponent(categoryName || '');
  const category = categories.find(
    (cat) => cat.name.toLowerCase() === decodedCategoryName.toLowerCase()
  );

  return (
    <section className="min-h-screen bg-[#F5F7FA] px-4 py-12">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
      <div className="max-w-6xl mx-auto">

        {category ? (
          <>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md"
                >
                  <h4 className="text-xl font-semibold text-blue-800 mb-2">
                    {product.name}
                  </h4>
                  <p className="text-gray-700">{product.description}</p>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center text-gray-600 text-xl mt-20">
            Category <strong>{decodedCategoryName}</strong> not found.
          </div>
        )}
      </div>


        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-blue-100 text-blue-900 rounded hover:bg-blue-200 transition"
        >
          ← Back
        </button>
    </section>
  );
};

export default ProductDetails;
