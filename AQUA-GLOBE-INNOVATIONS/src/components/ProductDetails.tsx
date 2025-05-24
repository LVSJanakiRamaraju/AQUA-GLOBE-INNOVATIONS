import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Product {
  name: string;
  description: string;
  image?: string;
  composition?: string;
  benefits?: string[];
  dosageWater?: string;
  dosageFeed?: string;
  usageDirection?: string;
  netVolume?: string;
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
      {
        name: 'Sea pearl',
        description: 'Premium mineral supplement',
        composition: 'Calcium, Magnesium, Zinc, Potash, Copper and other Micro Nutrients',
        image: '/seaPearl.png',
        benefits: [
          'Stabilizes the availability of minerals in pond water.',
          'Reduces white muscle problem and loose shell problem.',
          'Reduces running mortality in shrimp.',
          'Reduces stress on shrimp and helps growth performance.',
          'Increases survival rate and helps improves shrimp health.'
        ],
        dosageWater: '2 to 3 litres/acre/week or as advised by aqua culture consultant.',
        dosageFeed: '10 to 20 ml/kg feed.',
        usageDirection: 'Apply in the pond evening time between 6 to 8 pm mix with pond water and apply evenly all over pond area, keep the aerators running.',
        netVolume: '5 Ltr.'
      },
      {
        name: 'Cp ratio',
        description: 'Balanced mineral formula',
        composition: 'Minerals, Trace Elements',
        image: '/cpRatio.png',
        benefits: [
          'Balances mineral profile in pond water.',
          'Improves feed conversion ratio.',
          'Supports metabolic activities and improves shrimp health.'
        ],
        dosageWater: '2 litres/acre or as advised by aqua consultant.',
        dosageFeed: '10 ml/kg feed.',
        usageDirection: 'Mix with pond water and broadcast evenly.',
        netVolume: '5 Ltr.'
      },
      {
        name: 'Mg pearl',
        description: 'Magnesium-rich supplement',
        composition: 'Magnesium, Trace Minerals',
        image: '/mgPearl.png',
        benefits: [
          'Corrects magnesium deficiency in pond water.',
          'Promotes healthy molting and muscle growth.',
          'Improves osmoregulation in shrimp.'
        ],
        dosageWater: '2 to 3 litres/acre.',
        dosageFeed: 'Not applicable.',
        usageDirection: 'Dilute with pond water and apply evenly.',
        netVolume: '5 Ltr.'
      },
      {
        name: 'K pearl',
        description: 'Potassium-enriched formula',
        composition: 'Potassium, Micro Nutrients',
        image: '/kPearl.png',
        benefits: [
          'Improves osmoregulation and energy metabolism.',
          'Enhances molting and growth.',
          'Reduces stress during culture period.'
        ],
        dosageWater: '2 to 3 litres/acre.',
        dosageFeed: 'Not applicable.',
        usageDirection: 'Mix with pond water and apply uniformly.',
        netVolume: '5 Ltr.'
      },
      {
        name: 'Pearl mix',
        description: 'Complete mineral blend',
        composition: 'Macro and Micro Mineral Mix',
        image: '/pearlMix.png',
        benefits: [
          'Provides all essential minerals for shrimp health.',
          'Boosts immunity and stress resistance.',
          'Improves feed utilization and growth performance.'
        ],
        dosageWater: '3 litres/acre.',
        dosageFeed: '10 ml/kg feed.',
        usageDirection: 'Apply in the evening with running aerators.',
        netVolume: '5 Ltr.'
      }
    ]
  },
  {
    name: 'FEED SUPPLEMENTS',
    size: 'medium',
    products: [
      {
        name: 'Gut wel',
        description: 'Digestive health support',
        composition: 'Herbal Extracts, Enzymes, Organic Acids',
        image: '/gutWel.png',
        benefits: [
          'Improves digestion and gut health.',
          'Enhances nutrient absorption.',
          'Reduces white gut and vibrio-related problems.'
        ],
        dosageWater: 'Not applicable.',
        dosageFeed: '5 to 10 ml/kg feed.',
        usageDirection: 'Mix with feed using binder before feeding.',
        netVolume: '1 Ltr.'
      },
      {
        name: 'Kick start',
        description: 'Growth initiator',
        composition: 'Amino Acids, Vitamins, Trace Minerals',
        image: '/kickStart.png',
        benefits: [
          'Enhances feed intake and growth.',
          'Boosts metabolism and energy levels.',
          'Promotes better health and performance.'
        ],
        dosageWater: 'Not applicable.',
        dosageFeed: '5 ml/kg feed.',
        usageDirection: 'Use daily in feed for first 30 days of culture.',
        netVolume: '1 Ltr.'
      },
      {
        name: 'Immortal',
        description: 'Immunity booster',
        composition: 'Beta Glucans, Herbal Immunostimulants',
        image: '/immortal.png',
        benefits: [
          'Strengthens immune system.',
          'Prevents bacterial and viral infections.',
          'Improves survival rate and resistance to stress.'
        ],
        dosageWater: 'Not applicable.',
        dosageFeed: '5 ml/kg feed.',
        usageDirection: 'Mix thoroughly with feed and feed during critical stages.',
        netVolume: '1 Ltr.'
      },
      {
        name: '20 count',
        description: 'Premium feed supplement',
        composition: 'Enzymes, Probiotics, Vitamins',
        image: '/20Count.png',
        benefits: [
          'Improves digestion and immunity.',
          'Enhances growth and reduces FCR.',
          'Prevents early mortality syndrome.'
        ],
        dosageWater: 'Not applicable.',
        dosageFeed: '5 ml/kg feed.',
        usageDirection: 'Use regularly in feed during culture period.',
        netVolume: '1 Ltr.'
      }
    ]
  },
  {
    name: 'GROWTH PROMOTER',
    size: 'small',
    products: [
      {
        name: '20 count',
        description: 'Enhanced growth formula',
        composition: 'Digestive Enzymes, Growth Factors, Vitamins',
        image: '/20Count.png',
        benefits: [
          'Promotes faster growth in shrimp.',
          'Improves feed conversion and health.',
          'Supports healthy gut flora and immune defense.'
        ],
        dosageWater: 'Not applicable.',
        dosageFeed: '5 ml/kg feed.',
        usageDirection: 'Apply with feed once daily for 15-20 days in mid-cycle.',
        netVolume: '1 Ltr.'
      }
    ]
  },
  {
    name: 'WHITE GUT',
    size: 'small',
    products: [
      {
        name: 'Gut wel',
        description: 'Specialized gut health solution',
        composition: 'Herbal Extracts, Organic Compounds',
        image: '/gutWel.png',
        benefits: [
          'Targets white gut and related disorders.',
          'Strengthens gut lining and digestion.',
          'Reduces gut pathogens effectively.'
        ],
        dosageWater: 'Not applicable.',
        dosageFeed: '10 ml/kg feed.',
        usageDirection: 'Mix with feed using a binder and apply for 5–7 days.',
        netVolume: '1 Ltr.'
      }
    ]
  },
  {
    name: 'PROBIOTICS',
    size: 'medium',
    products: [
      {
        name: 'No loads v',
        description: 'Advanced probiotic formula',
        composition: 'Bacillus spp., Nitrosomonas, Nitrifiers',
        image: '/noLoads.png',
        benefits: [
          'Controls sludge and waste accumulation.',
          'Maintains water quality and reduces toxic gases.',
          'Improves pond bottom conditions.'
        ],
        dosageWater: '1 kg/acre.',
        dosageFeed: 'Not applicable.',
        usageDirection: 'Apply directly to pond after mixing with water.',
        netVolume: '1 kg.'
      },
      {
        name: 'Seawell bact',
        description: 'Marine probiotic blend',
        composition: 'Live beneficial bacteria strains',
        image: '/seawelBact.png',
        benefits: [
          'Maintains pond ecosystem balance.',
          'Decomposes organic waste and sludge.',
          'Improves water clarity and shrimp health.'
        ],
        dosageWater: '500 g to 1 kg/acre.',
        dosageFeed: 'Not applicable.',
        usageDirection: 'Broadcast after mixing in pond water during calm hours.',
        netVolume: '1 kg.'
      },
      {
        name: 'Bottom 365',
        description: 'Long-lasting probiotic solution',
        composition: 'Bottom-degrading bacteria',
        image: '/bottom365.png',
        benefits: [
          'Degrades organic sludge and harmful substances.',
          'Improves bottom soil and prevents black soil formation.',
          'Reduces pathogenic bacteria in pond bottom.'
        ],
        dosageWater: '1 kg/acre/week.',
        dosageFeed: 'Not applicable.',
        usageDirection: 'Mix with pond water and apply during evening.',
        netVolume: '1 kg.'
      }
    ]
  }
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
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
              {category.products.map((product, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl shadow-md flex flex-col sm: flex-row-reverse lg:flex-row lg:items-center gap-6"
                >
                {/* Content first on sm/md; image first on lg using flex-col-reverse and flex-row */}
                {product.image && (
                    <img
                    src={product.image}
                    alt={product.name}
                    className="w-50 h-50 object-cover rounded-md border shadow-sm mx-auto lg:mx-0"
                    />
                )}
                <div className="flex-1">
                    <h4 className="text-xl font-semibold text-blue-800 mb-2">
                    {product.name}
                    </h4>
                    <p className="text-gray-700 mb-2">{product.description}</p>

                    {product.composition && (
                    <p className="text-sm text-gray-800 mb-2">
                        <strong>Composition:</strong> {product.composition}
                    </p>
                    )}

                    {product.benefits && product.benefits.length > 0 && (
                    <div className="mb-2">
                        <strong className="block text-gray-800">Benefits:</strong>
                        <ul className="list-disc list-inside text-sm text-gray-700">
                        {product.benefits.map((benefit, i) => (
                            <li key={i}>{benefit}</li>
                        ))}
                        </ul>
                    </div>
                    )}

                    {product.dosageWater && (
                    <p className="text-sm text-gray-800 mb-1">
                        <strong>Dosage in water:</strong> {product.dosageWater}
                    </p>
                    )}
                    {product.dosageFeed && (
                    <p className="text-sm text-gray-800 mb-1">
                        <strong>Dosage in feed:</strong> {product.dosageFeed}
                    </p>
                    )}
                    {product.usageDirection && (
                    <p className="text-sm text-gray-800 mb-1">
                        <strong>Direction of use:</strong> {product.usageDirection}
                    </p>
                    )}
                    {product.netVolume && (
                    <p className="text-sm text-gray-800">
                        <strong>Net Vol.:</strong> {product.netVolume}
                    </p>
                    )}
                </div>


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
