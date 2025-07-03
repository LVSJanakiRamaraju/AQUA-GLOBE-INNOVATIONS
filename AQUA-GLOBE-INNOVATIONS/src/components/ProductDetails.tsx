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
  AdvancedinFeed?: string;
  usageDirection?: string;
  netVolume?: string;
  netWt?: string;
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
        name: 'Seawel Sea pearl',
        description: 'Liquid Minerals',
        composition: 'Calcium, Magnesium, Zinc, Potash, Copper and other Micro Nutrients',
        image: '/seaPearl.JPG',
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
        name: "Seawel CP Ratio",
        description: "Liquid minerals for shrimp health.",
        composition: " Calcium, Phosphorus, Sodium, Copper, Manganese, Zinc, Magnesium, Cobalt.",
        image: "/cpRatio.JPG",
        benefits: [
            "Helps prevent loose shell and reduce mortality.",
            "Increases survival rate and reduces stress on shrimp.",
            "Reduces white muscle problem and cramping in shrimp.",
            "Balances the calcium and phosphorus levels in shrimp.",
            "Helps proper development of external skeleton."
        ],
        dosageWater: "2 to 3 litres/acre or as advised by aqua culture consultant.",
        dosageFeed: "10 to 20 ml/kg feed.",
        usageDirection: "Take required quantity of liquid and apply evenly in the pond.",
        netVolume: "5 Ltr."
        },

        {
        name: "Seawel Mg-PEARL",
        description: "Magnesium in chelated form",
        composition: "Chelated Magnesium enriched with amino acids and growth promoters.",
        image: "/mgPearl.JPG",
        benefits: [
            "Improves activeness of the shrimp.",
            "Maintains magnesium level in the shrimp.",
            "Reduces running mortality, cramping, and loose shell problems.",
            "Improves water quality and stabilizes water pH.",
            "Increases survival rate in the pond and improves shrimp health."
        ],
        dosageWater: "2 to 3 litres/acre/week or as advised by aqua culture consultant.",
        dosageFeed: "10 to 20 ml/kg feed.",
        usageDirection: "Apply in the pond evening time between 6 to 8 pm, mix with pond water and apply evenly all over pond area, keep the aerators running.",
        netVolume: "5 Ltr."
        },

        {
        name: "Seawel K-Pearl",
        description: "Potassium in chelated form",
        composition: "Chelated Potassium enriched with amino acids and growth promoters.",
        image: "/kPearl.JPG",
        benefits: [
            "Improves metabolic activity in shrimp and fish.",
            "Improves water quality and stabilizes water pH.",
            "Maintains the potassium level in the shrimp and fish.",
            "Reduces running mortality and increases the growth rate.",
            "Increases survival rate in the pond and reduces mineral problems in shrimp."
        ],
        dosageWater: "2 to 3 litres/acre/week or as advised by aqua culture consultant.",
        dosageFeed: "10 to 20 ml/kg feed.",
        usageDirection: "Apply in the pond evening time between 6 to 8 pm, mix with pond water and apply evenly all over pond area, keep the aerators running.",
        netVolume: "5 Ltr."
        },

        {
        name: "Seawel Pearl-Mix",
        description: "Micro and Macro Minerals",
        composition: "Calcium, Magnesium, Sodium, Phosphorus, Potassium, Manganese, Zinc, Silicates.",
        image: "/pearlMix.png",
        benefits: [
            "Helps in better muscle formation in shrimp.",
            "Helps in prevention of soft shell problems.",
            "Helps better growth and increases body weight.",
            "Minimizes stress and helps to moulting.",
            "Improves survival rate and reduces running mortality."
        ],
        dosageWater: "10 to 20 kg/acre/week or as advised by aqua culture consultant.",
        dosageFeed: "10 to 20 grams/kg feed.",
        usageDirection: "Mix with pond water and apply evenly all over pond area, keep the aerators running.",
        netWt: "10 kg"
        }

    ]
  },
  {
    name: 'FEED SUPPLEMENTS',
    size: 'medium',
    products: [
        {
        name: "Seawel Gut Wel",
        description: "Advanced formula for white gut and white faeces",
        composition: "Prebiotics, Probiotics, Phospholipids, Vitamins, Enzymes and liver enhancers.",
        image: "/gutWel.JPG",
        benefits: [
            "Modulates immunity.",
            "Helps prevent white gut & active hepatopancreas.",
            "Improves feed intake.",
            "Improves intestinal health.",
            "Helps increase growth and weight of the shrimp."
        ],
        dosageWater: "Not applicable.",
        AdvancedinFeed: "3 to 5 grams/kg feed, 2 meals/day, twice every 10 days.",
        usageDirection: "8 to 10 grams/kg feed, 2 meals/day. Mix with a good binding agent.",
        netWt: "1 kg"
        },

        {
        name: "Seawel Kick Start",
        description: "Multi Vitamins, Enzymes & Growth Promoters",
        composition: "High concentration of multi vitamins, essential amino acids, chelated minerals and growth promoters.",
        image: "/kickStart.JPG",
        benefits: [
            "Increases the survival rate in the pond.",
            "Improves feed conversion ratio.",
            "Enhances immunity system.",
            "Stabilizes the gut pH and improves shrimp digestion system.",
            "Improves feed intake and increases the animal's energy."
        ],
        dosageWater: "3 to 5kg/acre/week or as advised by aqua culture consultant.",
        dosageFeed: "10 to 20g/kg feed/2 meals/twice in a week.",
        usageDirection: "10 to 20g/kg feed/2 meals/twice in a week mix with good binding agent.",
        netWt: "500g & 1kg"
        },

        {
        name: "Seawel Immortal",
        description: "Reduce RMS Problem",
        composition: "Probiotics, Prebiotics, Vitamins and Growth promoters and natural ingredients.",
        image: "/immortal.JPG",
        benefits: [
            "Reduces running mortality and increases survival rate.",
            "Helps active functioning of hepatopancreas.",
            "Improves digestion and F.C.R.",
            "Helps for fast growth and increases shrimp weight.",
            "Enhances immunity in the shrimp and reduces harmful bacteria like (vibrio) in the shrimp gut and hepatopancreas."
        ],
        dosageWater: "Not applicable.",
        dosageFeed: "8 to 10 grams/kg feed/2 meals/day twice in every 10 days.",
        usageDirection: "8 to 10 grams/kg feed/2 meals/day mix with a good binding agent.",
        netWt: "500g"
        },

        {
        name: "Seawel 20 Count",
        description: "Quick Harvest with 20 Count",
        composition: "Combination of Multi vitamins, Chelated Multi minerals, bacillus, lacto bacillus spp., amino acids and growth promoters.",
        image: "/20Count.JPG",
        benefits: [
            "Helps enhance immunity in shrimp.",
            "Increases growth and improves shrimp digestive system.",
            "Relieves stress and helps reduce cramps in shrimp.",
            "Improves digestion and weight gain of the shrimp.",
            "Enhances shrimp energy and supports moulting."
        ],
        dosageWater: "Not applicable.",
        dosageFeed: "5 to 10 grams/kg feed/2 meals/day twice in every 10 days or moulting period or as advised by aqua culture consultant.",
        usageDirection: "Mix with a good binding agent 2 meals/day.",
        netWt: "500g"
        },
      {
        name: 'Seawel Vanna Hep',
        description: 'Liver health enhancer',
        composition: 'Probiotics, Amino Acids, Peptides, Vitamins, Enzymes, Growth promotes and Natural ingredients',
        image: '/vannaHep.JPG',
        benefits: [
          'Helps in maintaining healthy HP',
          'Increases the growth and weight gain of the shrimp.',
          'Prevents white faeces, running mortality and other diseases.',
          'Helps to intake and with better FCR',
          'Enhances the immunity of the shrimp.'
        ],
        dosageWater: 'Not applicable.',
        dosageFeed: '3 to 5 gr/kg feed /2 months.day twice in every 10 days.',
        usageDirection: '3 to 5 gr/kg feed /2 meals/day mix with a good binding agent.',
        netWt: '500 g.'
      },
      {
        name: "Seawel Gel",
        description: "Liver Care Supplement",
        composition: `
          Each 1000ml Contains:
          - Vitamin A: 7500 IU
          - Vitamin D3: 600 IU
          - Vitamin E: 200 MG
          - Vitamin B12: 600 MCG
          - Folic Acid: 60 MG
          - Vitamin B1: 80 MG
          - Vitamin B6: 60 MG
          - Biotin: 1200 MCG
          - L-Lysine: 2000 MG
          - DL-Methionine: 3000 MG
          - Niacinamide: 3000 MG
          - MG Citric Acid: 2000 MG
          - Calcium: 20000 MG
          - Flavour: Pineapple
        `,
        image: "/seawelGel.JPG",
        benefits: [
          "Improves feed conversion ratio.",
          "Increases the survival rate in the pond.",
          "Enhances the immunity system.",
          "Improves gut health in the shrimp.",
          "Improves feed intake and increases the animal's energy."
        ],
        dosageWater: "Not applicable.",
        dosageFeed: "20 to 30 ml/kg feed, 2 meals/day every 10 days.",
        usageDirection: "20 to 30 ml/kg feed, 2 meals/day twice every 10 days.",
        netVolume: "20 Ltr."
      }


    ]
  },
  {
    name: 'GROWTH PROMOTER',
    size: 'small',
    products: [
        {
        name: "Seawel 20 Count",
        description: "Quick Harvest with 20 Count",
        composition: "Combination of Multi vitamins, Chelated Multi minerals, bacillus, lacto bacillus spp., amino acids and growth promoters.",
        image: "/20Count.JPG",
        benefits: [
            "Helps enhance immunity in shrimp.",
            "Increases growth and improves shrimp digestive system.",
            "Relieves stress and helps reduce cramps in shrimp.",
            "Improves digestion and weight gain of the shrimp.",
            "Enhances shrimp energy and supports moulting."
        ],
        dosageWater: "Not applicable.",
        dosageFeed: "5 to 10 grams/kg feed/2 meals/day twice in every 10 days or moulting period or as advised by aqua culture consultant.",
        usageDirection: "Mix with a good binding agent 2 meals/day.",
        netWt: "500g"
        }
    ]
  },
  {
    name: 'WHITE GUT',
    size: 'small',
    products: [
        {
        name: "Seawel Gut Wel",
        description: "Advanced formula for white gut and white faeces",
        composition: "Prebiotics, Probiotics, Phospholipids, Vitamins, Enzymes and liver enhancers.",
        image: "/gutWel.JPG",
        benefits: [
            "Modulates immunity.",
            "Helps prevent white gut & active hepatopancreas.",
            "Improves feed intake.",
            "Improves intestinal health.",
            "Helps increase growth and weight of the shrimp."
        ],
        dosageWater: "Not applicable.",
        dosageFeed: "8 to 10 grams/kg feed, 2 meals/day, twice every 10 days.",
        usageDirection: "8 to 10 grams/kg feed, 2 meals/day. Mix with a good binding agent.",
        netWt: "1 kg"
        },
    ]
  },
  {
    name: 'PROBIOTICS',
    size: 'medium',
    products: [
        {
        name: "Seawel No Loads-V",
        description: "Fights with Vibrio Bacteria",
        composition: "Bacillus subtilis, Bacillus polymyxa, Bacillus licheniformis, Bacillus coagulans, Bacillus megaterium, Bacillus amyloliquefaciens 12 billion CFU/gram.",
        image: "/noLoads.jpg",
        benefits: [
            "Increases the survival in the pond.",
            "Reduces stress on shrimp.",
            "Reduces vibrio loads in the pond.",
            "Regulates growth and improves immunity.",
            "Reduces water exchange in pond.",
            "Reduces the usage quantity of probiotics.",
            "Improves water quality and stabilizes the water pH in the pond.",
            "Improves gut health and digestion in shrimp.",
            "Helps to control the harmful bacteria such as vibrio."
        ],
        dosageWater: "500 grams/acre/week; better results if mixed with jaggery or molasses or as advised by aqua culture consultant.",
        dosageFeed: "5 to 10 grams/kg feed/ twice in 15 days.",
        usageDirection: "Mix with fresh or bore water and apply evenly all over pond area, keep the aerators running.",
        netWt: "500g"
        },

        {
        name: "Seawel Bact",
        description: "Water Probiotic",
        composition: "Combination of bacillus strains, enzymes and vitamins. 10 billion CFU/gram.",
        image: "/seawelBact.JPG",
        benefits: [
            "Improves water quality.",
            "Improves DO level in the pond.",
            "Improves gut health.",
            "Stabilizes water pH and alkalinity.",
            "Reduces water exchange in pond.",
            "Reduces the water coarse.",
            "Increases survival rate.",
            "Reduces harmful loads like vibrio.",
            "Protects pond bottom from organic loads."
        ],
        dosageWater: "500 grams/acre/week; better results when mixed with jaggery or molasses or as advised by aqua culture consultant.",
        dosageFeed: "5 to 10 grams/kg feed/ twice in 15 days.",
        usageDirection: "Mix with fresh or bore water and apply evenly all over pond area, keep the aerators running.",
        netWt: "500g"
        },
        {
        name: "Seawel Bottom 365",
        description: "Soil Probiotic",
        composition: "Combination of thiobacillus sp. along with high concentrate with enzymes and soil related bacillus.",
        image: "/bottom365.JPG",
        benefits: [
            "Reduces water exchange to the pond.",
            "Maintains the water quality and pH in the pond.",
            "Reduces organic loads COD and BOD.",
            "Increases the DO level and reduces loads like Vibrio.",
            "Protects pond bottom from organic loads.",
            "Increases survival rate.",
            "Stabilizes the water colour.",
            "Relieves stress in animals.",
            "Increases DO level in the pond."
        ],
        dosageWater: "500 grams/acre/week; better results mix with jaggery or molasses or as advised by aqua culture consultant.",
        dosageFeed: "5 to 10 grams/kg feed/ twice in 15 days.",
        usageDirection: "Mix with fresh or bore water and apply evenly all over pond area, keep the aerators running.",
        netWt: "500g"
        }

    ]
  },
    {
    name: 'Ammonia Nitrite Controller',
    size: 'small',
    products: [
    {
    name: "Seawel AN-X",
    description: "Ammonia and Nitrite Controller",
    composition: "Nitrobacter, Nitrosomonas, high concentrate liquid yucca with probiotics.",
    image: "/ANX.JPG",
    benefits: [
        "Animals feel fresh and active.",
        "Reduces ammonia and nitrite.",
        "Reduces H2S gases in the pond.",
        "Reduces stress on shrimp.",
        "Improves water quality and reduces organic loads.",
        "Reduces usage of probiotics in the pond."
    ],
    dosageWater: "2 litres/acre/once in every 15 days; better results mix with jaggery or molasses or advised by aqua culture consultant.",
    dosageFeed: "10 to 20 ml/kg feed/twice in 15 days.",
    usageDirection: "Mix with fresh or bore water and apply evenly all over pond area, keep the aerators running.",
    netVolume: "1 Ltr & 5 Ltr"
    }

    ]
  },
    {
        name: 'BOTTOM TREATMENT',
        size: 'medium',
        products: [
        {
        name: "Seawel Pond-Wel",
        description: "Detoxify the Pond Soil",
        composition: "Yucca, Buffer, Filler, Vit-C, Ferrous, Bentonite and natural pond bottom related ingredients.",
        image: "/pondWel.JPG",
        benefits: [
            "Absorbs toxic gases like H2S.",
            "Reduces COD and BOD in the pond.",
            "Helps to increase the dissolved oxygen in the pond.",
            "Makes the animals fresh by relieving stress caused due to toxic gases and other pollutants.",
            "Improves water quality and stabilizes the water pH."
        ],
        dosageWater: "2 to 3 kg/acre/once in every 10 days or as advised by aqua culture consultant.",
        dosageFeed: "5 to 10 grams/kg feed.",
        usageDirection: "Take required quantity and through in the center of the pond; apply between 9 am to 4 pm.",
        netWt: "5 kg"
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
                  <div className="w-50 h-50 overflow-hidden rounded-md border shadow-sm flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-[160%] h-[100%] object-cover transform scale-125 max-w-[250px] max-h-[250px]"
                    />
                  </div>

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
                    {
                    product.AdvancedinFeed && (
                    <p className="text-sm text-gray-800 mb-1">
                        <strong>Advanced in feed:</strong> {product.AdvancedinFeed}
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
                    {product.netWt && (
                    <p className="text-sm text-gray-800">
                        <strong>Net Wt.:</strong> {product.netWt}
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
