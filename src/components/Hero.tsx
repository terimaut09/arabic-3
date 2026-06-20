import { motion } from "motion/react";
import { ArrowUpRight, Sparkles, ShieldCheck, HeartPulse } from "lucide-react";

// Import generated premium assets
import heroCreamBox from "../assets/images/hero_cream_box_1781968613591.jpg";
import cottonFlowerCloseup from "../assets/images/cotton_flower_closeup_1781968677418.jpg";
import paperTextureCloseup from "../assets/images/paper_texture_closeup_1781968694789.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-16 bg-[#F8F6F2] overflow-hidden flex items-center"
    >
      {/* Cinematic subtle spotlight background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#0D7A80]/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column - Headline & Badges */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 px-4 py-1.5 bg-[#FAF9F6] border border-[#1A1410]/10 rounded-full shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#e05a47] shrink-0" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1A1410]/80">
              100% Virgin Pulp • Pure Luxury
            </span>
          </motion.div>

          {/* Majestic Hero Typography & floating thumbnail badge coin */}
          <div className="relative">
            {/* Absolute badge circle floating near the headline */}
            <motion.div
              animate={{ 
                y: [0, -6, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-12 -left-6 md:-left-12 w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#1A1410]/15 shadow-md overflow-hidden z-20"
              title="Organic Raw Materials Closup"
            >
              <img
                src={cottonFlowerCloseup}
                alt="Organic cotton closeup"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Another organic texture badge near top-right of heading */}
            <motion.div
              animate={{ 
                y: [0, 8, 0],
                rotate: [0, -4, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2
              }}
              className="absolute top-1/2 -right-8 w-12 h-12 rounded-full border border-[#1A1410]/15 shadow-md overflow-hidden z-20 hidden md:block"
              title="Soft Paper Close-up Texture"
            >
              <img
                src={paperTextureCloseup}
                alt="Pure paper texture"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Giant Bold Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-7xl sm:text-8xl md:text-9xl leading-[0.85] tracking-tight uppercase text-[#1A1410]"
            >
              Tissue <br />
              <span className="text-[#0D7A80] relative">
                Lounge
                <svg className="absolute left-0 bottom-1 w-full h-3 text-[#e05a47]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="6" fill="transparent" />
                </svg>
              </span>
            </motion.h1>
          </div>

          {/* Subtitle & Secondary Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl space-y-4"
          >
            <p className="text-xl sm:text-2xl font-serif text-[#1A1410]/80 italic">
              Soft &amp; Pure Quality Tissues
            </p>
            <p className="text-sm text-[#1A1410]/60 leading-relaxed font-sans font-medium">
              We design paper hygiene products with zero impurities and unmatched cloud-like premium softness. Derived from sustainable forest cultivation, certified and clinically approved.
            </p>
          </motion.div>

          {/* Call To Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#products"
              className="px-8 py-4 bg-[#0D7A80] hover:bg-[#085357] text-[#f8f6f2] font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 text-center flex items-center justify-center space-x-2 group hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Shop Now</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            
            <a
              href="#wholesale"
              className="px-8 py-4 bg-[#1A1410] hover:bg-[#e05a47] text-white font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 text-center flex items-center justify-center space-x-2 hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Request Quote / Catalog</span>
            </a>
          </motion.div>

          {/* Small Feature Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap gap-6 pt-4 text-xs font-semibold text-[#1A1410]/50 uppercase tracking-widest border-t border-[#1A1410]/5 w-full"
          >
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#0D7A80]" />
              <span>Dermatologically Tested</span>
            </div>
            <div className="flex items-center space-x-2">
              <HeartPulse className="w-4 h-4 text-[#e05a47]" />
              <span>100% Natural Fibers</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column - Premium 3D Floating Product Render */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Subtle spinning soft circle background badge */}
          <motion.div
            className="absolute w-[80%] h-[80%] border-2 border-dashed border-[#1A1410]/5 rounded-full pointer-events-none animate-slow-spin"
            aria-hidden="true"
          />

          {/* Product image with mouse hover tilt transition effect and realistic shadow below */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative z-10 w-full max-w-[360px] md:max-w-[420px] filter drop-shadow-[0_25px_40px_rgba(26,20,16,0.18)]"
          >
            <img
              src={heroCreamBox}
              alt="Premium Cream Tissue Box 3D Mockup Model"
              className="w-full h-auto rounded-3xl object-contain animate-float"
              referrerPolicy="no-referrer"
            />
            
            {/* Soft decorative Floating Label */}
            <motion.div
              animate={{ 
                x: [0, 4, 0],
                y: [0, -4, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-xs border border-[#1A1410]/10 px-4 py-2.5 rounded-xl shadow-md z-30"
            >
              <p className="text-[9px] uppercase tracking-wider font-semibold text-[#1A1410]/40">Active Product</p>
              <p className="font-display tracking-tight text-xs uppercase text-[#1A1410]">Signature Cloud Pack</p>
              <div className="flex items-center space-x-1.5 mt-0.5">
                <span className="w-2 h-2 bg-[#0D7A80] rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-[#0D7A80]">Best Seller 3-Ply</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Elegant grounding shadow representation */}
          <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/5 rounded-full filter blur-xl pointer-events-none" />

        </div>

      </div>
    </section>
  );
}
