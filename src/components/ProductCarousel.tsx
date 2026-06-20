import { motion } from "motion/react";
import { Sparkles, Eye, BadgeCheck, Flame } from "lucide-react";
import { Product } from "../types";

// Import generated files
import blueFacialBox from "../assets/images/blue_facial_box_1781968645621.jpg";
import yellowTissueBox from "../assets/images/yellow_tissue_box_1781968753261.jpg";
import darkCharcoalBox from "../assets/images/dark_charcoal_box_1781968631384.jpg";
import orangeKitchenRoll from "../assets/images/orange_kitchen_roll_1781968661288.jpg";

export default function ProductCarousel() {
  const products: Product[] = [
    {
      id: "blue-facial",
      name: "Ocean Mist Facial Box",
      category: "Facial Tissues",
      image: blueFacialBox,
      price: "$2.45",
      originalPrice: "$2.99",
      packSize: "180 Sheets • Standard Pac",
      ply: 3,
      accentBg: "bg-sky-50 text-sky-700 border-sky-100",
      badge: "Dermatological Best",
      description: "Ultra-silk soft layers enriched with natural cotton fibers.",
    },
    {
      id: "yellow-organic",
      name: "Pure Sunshine Organic",
      category: "Facial Tissues",
      image: yellowTissueBox,
      price: "$2.85",
      packSize: "200 Sheets • Ecobox Pack",
      ply: "3-Ply",
      accentBg: "bg-amber-50 text-amber-800 border-amber-100",
      badge: "100% Unbleached Virgin",
      description: "Crafted directly from organic botanical cellulose fibers.",
    },
    {
      id: "black-premium",
      name: "Bespoke Noir Dinner Pack",
      category: "Table Napkins",
      image: darkCharcoalBox,
      price: "$4.20",
      originalPrice: "$4.95",
      packSize: "120 Sheets • Sovereign Box",
      ply: 4,
      accentBg: "bg-zinc-100 text-zinc-900 border-zinc-200",
      badge: "Luxe Standard Hotellerie",
      description: "Sovereign absorbent napkins designed for modern fine dining.",
    },
    {
      id: "orange-kitchen",
      name: "Citrus Absorb Towel Roll",
      category: "Kitchen Towels",
      image: orangeKitchenRoll,
      price: "$3.10",
      packSize: "2 Rolls • High Absorbency",
      ply: "2-Ply Extra-Core",
      accentBg: "bg-orange-50 text-orange-800 border-orange-100",
      badge: "3D Pocket Spill-Stop",
      description: "Heavy spill performance grid layout engineered for grease.",
    },
  ];

  // We duplicate the items array so the marquee row has enough width to slide continuously without empty gaps
  const doubledProducts = [...products, ...products, ...products, ...products];

  return (
    <section id="products" className="py-24 bg-[#FAF9F6] overflow-hidden relative z-20">
      
      {/* Dynamic Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-[#e05a47] mb-2">
            <Flame className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Featured Innovation Reel</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#1A1410]">
            The Carousel <span className="text-[#0D7A80]">Showcase</span>
          </h2>
          <p className="text-sm text-[#1A1410]/60 max-w-lg mt-2">
            Slide and explore our premium clinical tissue box models. Hover anywhere over the reel to freeze rotation and inspect catalog sheets.
          </p>
        </div>

        {/* Swipe tooltip badge */}
        <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#1A1410]/50 py-2 px-4 rounded-full border border-[#1A1410]/10 bg-[#f8f6f2]">
          <span className="w-1.5 h-1.5 bg-[#e05a47] rounded-full animate-ping" />
          <span>Continuous Loop • Hover Blocked</span>
        </div>
      </div>

      {/* Marquee Continuous Slider Component */}
      <div className="relative w-full py-4 border-y border-[#1A1410]/5 bg-[#fbfaf8] cursor-grab active:cursor-grabbing">
        {/* Shadow overlays on sides representing premium fade effects */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee py-6 space-x-8">
            {doubledProducts.map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                className="w-[280px] sm:w-[320px] shrink-0 bg-white rounded-3xl border border-[#1A1410]/5 p-5 shadow-xs hover:shadow-xl hover:border-[#0D7A80]/15 transition-all duration-500 group select-none relative"
              >
                {/* 3D Render Image Framed with soft drop shadow */}
                <div className="w-full h-48 rounded-2xl bg-[#F8F6F2] overflow-hidden flex items-center justify-center relative shadow-inner mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2 filter drop-shadow-[0_12px_24px_rgba(26,20,16,0.1)]"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category overlay label */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-xs text-[9px] uppercase tracking-wider font-bold text-[#1A1410]/70 rounded-full border border-[#1A1410]/5 shadow-sm">
                    {product.category}
                  </span>

                  {/* Plush Ply Indicator */}
                  <span className="absolute top-3 right-3 text-[10px] font-semibold bg-[#0D7A80] text-white px-2.5 py-0.5 rounded-full shadow-xs">
                    {product.ply}
                  </span>

                  {/* Interactive Quick View Tag on Hover */}
                  <div className="absolute inset-0 bg-[#1A1410]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/95 text-[#1A1410] font-bold text-[10px] uppercase tracking-widest px-4 py-2 rounded-full inline-flex items-center space-x-1.5 shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Signature Product</span>
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="space-y-2">
                  {/* Product Tag Badge optionally if set */}
                  {product.badge && (
                    <span className="text-[8px] tracking-widest uppercase font-bold text-[#e05a47] block">
                      ✦ {product.badge}
                    </span>
                  )}

                  <h3 className="font-display uppercase text-lg sm:text-xl tracking-wide text-[#1A1410] leading-tight group-hover:text-[#0D7A80] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#1A1410]/50 font-medium line-clamp-1">
                    {product.description}
                  </p>

                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#1A1410]/40">
                    {product.packSize}
                  </p>

                  {/* Price Row & Divider */}
                  <div className="pt-3 border-t border-[#1A1410]/5 flex items-center justify-between">
                    <div>
                      {product.originalPrice && (
                        <span className="text-[10px] line-through text-[#1A1410]/40 mr-1.5">
                          {product.originalPrice}
                        </span>
                      )}
                      <span className="text-base font-bold text-[#e05a47]">
                        {product.price}
                      </span>
                      <span className="text-[9px] text-[#1A1410]/40 lowercase ml-0.5 font-medium">/ bulk pack</span>
                    </div>

                    <span className="text-[9px] uppercase tracking-widest font-bold text-[#0D7A80] inline-flex items-center space-x-1">
                      <BadgeCheck className="w-3 h-3" />
                      <span>In Stock</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
