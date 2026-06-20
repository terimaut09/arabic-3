import { motion } from "motion/react";
import { Sparkles, ArrowRight, CornerDownRight, Tag } from "lucide-react";
import { CategoryCard } from "../types";

// Import generated files for high fidelity mockups
import blueFacialBox from "../assets/images/blue_facial_box_1781968645621.jpg";
import yellowTissueBox from "../assets/images/yellow_tissue_box_1781968753261.jpg";
import darkCharcoalBox from "../assets/images/dark_charcoal_box_1781968631384.jpg";
import orangeKitchenRoll from "../assets/images/orange_kitchen_roll_1781968661288.jpg";
import heroCreamBox from "../assets/images/hero_cream_box_1781968613591.jpg";

export default function Categories() {
  const categories: CategoryCard[] = [
    {
      id: "facial-tissue",
      name: "Facial Tissues",
      tagline: "Ultra soft, premium touch for sensitive facial hygiene.",
      packSizeInfo: "180/200 sheet boxes • Cases of 24 boxes",
      image: blueFacialBox,
      startingPrice: "$2.45",
    },
    {
      id: "table-napkins",
      name: "Table Napkins",
      tagline: "Elegant custom ply folds for cafes, banquets, and dining tables.",
      packSizeInfo: "120 sheet packs • Cases of 30 packs",
      image: darkCharcoalBox,
      startingPrice: "$4.20",
    },
    {
      id: "kitchen-towels",
      name: "Kitchen Towels",
      tagline: "High absorbency 3D pockets for heavy oil and water spills.",
      packSizeInfo: "2/4 roll bundles • Pallet wholesales available",
      image: orangeKitchenRoll,
      startingPrice: "$3.10",
    },
    {
      id: "wet-wipes",
      name: "Anti-Bacterial Wipes",
      tagline: "Organic, alcohol-free damp sheets for rapid hand disinfection.",
      packSizeInfo: "85 sheet cases • 48 packs per carton",
      image: yellowTissueBox,
      startingPrice: "$1.95",
    },
    {
      id: "bath-toilet",
      name: "Luxury Bath Rolls",
      tagline: "4-ply sovereign core rolls with embossed clouds and leaf pattern.",
      packSizeInfo: "12/24 roll packs • High frequency retail packs",
      image: heroCreamBox,
      startingPrice: "$5.80",
    },
  ];

  return (
    <section id="categories" className="py-24 bg-[#FAF9F6] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-1.5 text-[#e05a47] text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
              <Tag className="w-3.5 h-3.5" />
              <span>Full Portfolio Catalog</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#1A1410]">
              PRODUCT <span className="text-[#0D7A80]">CATEGORIES</span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-sm text-[#1A1410]/60 font-medium">
            Explore our meticulously engineered collections. We process only pure raw fibers to build tissues that offer strength, high elasticity, and exquisite tactile feedback.
          </div>
        </div>

        {/* Categories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const isLargeCard = idx === 0 || idx === 1;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group bg-white border border-[#1A1410]/5 rounded-3xl overflow-hidden hover:border-[#0D7A80]/15 hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  isLargeCard ? "md:col-span-1 lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Category Image Cover with hover zoom zoom zoom */}
                  <div className="relative h-64 bg-[#F8F6F2] overflow-hidden flex items-center justify-center">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 duration-700 transition-transform select-none filter drop-shadow-[0_10px_20px_rgba(26,20,16,0.08)]"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Floating mini badge on image */}
                    <span className="absolute bottom-4 left-4 bg-white/95 px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold text-[#1A1410]/80 shadow-md">
                      Interactive Render
                    </span>

                    <span className="absolute top-4 right-4 bg-[#0D7A80] text-white px-2.5 py-1 text-[10px] font-bold rounded-full shadow-sm uppercase tracking-wider">
                      From {cat.startingPrice}
                    </span>
                  </div>

                  {/* Body textual content */}
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-display uppercase text-xl sm:text-2xl tracking-wide text-[#1A1410]">
                        {cat.name}
                      </h3>
                      <Sparkles className="w-4 h-4 text-[#e05a47] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <p className="text-xs text-[#1A1410]/60 font-medium">
                      {cat.tagline}
                    </p>

                    <div className="flex items-start space-x-1 text-[10px] text-[#1A1410]/40 font-bold uppercase tracking-wider pt-2 border-t border-[#1A1410]/5">
                      <CornerDownRight className="w-3.5 h-3.5 text-[#0D7A80] shrink-0" />
                      <span>{cat.packSizeInfo}</span>
                    </div>
                  </div>
                </div>

                {/* Card Button footer */}
                <div className="p-6 pt-0">
                  <a
                    href="#wholesale"
                    className="w-full py-3 border border-[#1A1410]/10 group-hover:bg-[#0D7A80] group-hover:border-transparent group-hover:text-white rounded-xl text-center text-xs font-semibold uppercase tracking-widest text-[#1A1410] flex items-center justify-center space-x-2 transition-all duration-300"
                  >
                    <span>Request Catalog Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
