import { motion } from "motion/react";
import { Sparkles, HelpCircle, Leaf, ShieldAlert } from "lucide-react";

// Import generated files
import darkCharcoalBox from "../assets/images/dark_charcoal_box_1781968631384.jpg";
import cottonFlowerCloseup from "../assets/images/cotton_flower_closeup_1781968677418.jpg";
import paperTextureCloseup from "../assets/images/paper_texture_closeup_1781968694789.jpg";

export default function DarkFeature() {
  return (
    <section className="bg-[#1A1410] text-[#f8f6f2] py-24 md:py-32 overflow-hidden relative z-20">
      
      {/* Spotlight glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-radial from-[#e05a47]/10 via-[#0D7A80]/0 to-transparent pointer-events-none rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Dramatic Big Overlapping Stacked Statement & Floating box */}
          <div className="lg:col-span-7 relative order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start min-h-[350px] md:min-h-[480px]">
            
            {/* The Cinematic Multiline Text Statement */}
            <div className="absolute inset-0 flex flex-col justify-center select-none pointer-events-none z-0">
              <span className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.8] tracking-tighter uppercase text-white/5 opacity-10">
                100% ORGANIC
              </span>
              <span className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.8] tracking-tighter uppercase text-[#e05a47]/25">
                NATURAL PULP
              </span>
              <span className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.8] tracking-tighter uppercase text-[#FAF9F6]/20">
                ULTRA SOFT
              </span>
              <span className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.8] tracking-tighter uppercase text-white/5 opacity-10">
                MATERIALS ONLY
              </span>
            </div>

            {/* Cotton Badge Floating (Left side of spotlight box) */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                x: [0, 8, 0],
                rotate: [0, -10, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 left-4 md:-left-8 w-16 h-16 rounded-full border-2 border-[#e05a47]/40 shadow-2xl overflow-hidden z-25"
            >
              <img
                src={cottonFlowerCloseup}
                alt="Cotton Flower bud texture circle"
                className="w-full h-full object-cover scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#e05a47]/10" />
            </motion.div>

            {/* Paper Texture Badge Floating (Right side of spotlight box) */}
            <motion.div
              animate={{
                y: [0, 16, 0],
                x: [0, -6, 0],
                rotate: [0, 12, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
              className="absolute bottom-12 right-4 md:right-16 w-14 h-14 rounded-full border-2 border-[#0D7A80]/40 shadow-2xl overflow-hidden z-25"
            >
              <img
                src={paperTextureCloseup}
                alt="Pure paper fiber ripples close up circle"
                className="w-full h-full object-cover scale-115"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0D7A80]/15" />
            </motion.div>

            {/* Primary spotlight box floating over/through text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative z-10 max-w-[340px] md:max-w-[400px] w-full cursor-pointer filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            >
              <img
                src={darkCharcoalBox}
                alt="Luxury Sovereign Dinner Box render"
                className="w-full h-auto rounded-3xl animate-float"
                referrerPolicy="no-referrer"
              />

              {/* Exclusive Feature Floating chip */}
              <div className="absolute -top-4 right-4 bg-[#e05a47] text-[#f8f6f2] px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-extrabold shadow-lg flex items-center space-x-1">
                <Leaf className="w-3.5 h-3.5 animate-pulse" />
                <span>Zero Forest Waste</span>
              </div>
            </motion.div>

            {/* Grounding dark reflection spot */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-6 bg-black/40 rounded-full filter blur-xl pointer-events-none" />

          </div>

          {/* Right Side: Editorial Feature Description & Specifications */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-8 order-1 lg:order-2">
            
            {/* Cinematic subtitle segment */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#e05a47]/10 border border-[#e05a47]/30 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-[#e05a47]" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#e05a47]">
                  The Premium Sovereign Series
                </span>
              </div>

              {/* Bold Headline */}
              <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
                USE PREMIUM NATURAL PULP AND FULLY SOFT MATERIALS
              </h3>
            </div>

            <p className="text-sm text-[#f8f6f2]/70 leading-relaxed font-sans">
              Our Sovereign Dinner Pack redefines standard paper wipes. Each ply is bonded using high-pressure steam instead of aggressive chemical glues, creating deep air cushions that enhance liquid absorption up to 400% while keeping skin perfectly calm and healthy.
            </p>

            {/* Spec grid list */}
            <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-[#f8f6f2]/10">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-[10px] text-[#e05a47] uppercase tracking-wider font-extrabold font-mono">01/ Forest Cultivated</p>
                <h4 className="text-sm font-bold text-white uppercase mt-1">FSC Certified Pulp</h4>
                <p className="text-xs text-[#f8f6f2]/50 mt-0.5">Every tree farmed triggers three fresh replants.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-[10px] text-[#0D7A80] uppercase tracking-wider font-extrabold font-mono">02/ Dermatological</p>
                <h4 className="text-sm font-bold text-white uppercase mt-1">Hypoallergenic</h4>
                <p className="text-xs text-[#f8f6f2]/50 mt-0.5">Odorless formulation tested for sensitive pediatric use.</p>
              </div>
            </div>

            {/* Mini action button */}
            <a
              href="#contact"
              className="px-6 py-3 bg-[#e05a47] hover:bg-[#c84d3b] text-white rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Order Sample Pack
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
