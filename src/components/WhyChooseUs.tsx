import { motion } from "motion/react";
import { Feather, Leaf, ShieldCheck, Truck, Droplet, Sparkles } from "lucide-react";
import { FeatureItem } from "../types";

export default function WhyChooseUs() {
  const features: (FeatureItem & { icon: any; color: string; bg: string })[] = [
    {
      id: "softness",
      title: "Superior Softness",
      description: "Infused with organic silk-fibers and micro-pressed with high temperature steam to form fluffy air-filled tissue pockets. Feels like a cloud on sensitive skin.",
      icon: Feather,
      color: "text-[#e05a47]",
      bg: "bg-[#e05a47]/5",
    },
    {
      id: "natural",
      title: "100% Natural Materials",
      description: "Made entirely from virgin forest cellulose under FSC supervision. Absolutely zero plastic residues, chemical brighteners, high-chlorines, or toxic perfumes.",
      icon: Leaf,
      color: "text-emerald-700",
      bg: "bg-emerald-500/5",
    },
    {
      id: "hygienic",
      title: "Certified & Hygienic",
      description: "Sterilized through double ultraviolet light and 450°C sanitization tunnels. Dermatologically rated 'Excellent' for high-sensibility skincare routines.",
      icon: ShieldCheck,
      color: "text-[#0D7A80]",
      bg: "bg-[#0D7A80]/5",
    },
    {
      id: "delivery",
      title: "Fast Delivery Nationwide",
      description: "An integrated network of 20+ national packaging warehouses means bulk orders reach corporate sites, hospitals, and chain stores within 24–48 hours.",
      icon: Truck,
      color: "text-amber-700",
      bg: "bg-amber-500/5",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#F8F6F2] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#0D7A80]/10 rounded-full text-[#0D7A80] text-[10px] font-bold uppercase tracking-widest mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pure Tissue Architecture</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#1A1410]">
            WHY CHOOSE <span className="text-[#0D7A80]">TISSUE LOUNGE</span>
          </h2>
          
          <p className="text-sm text-[#1A1410]/60 max-w-xl mx-auto">
            We don't cut corners on personal hygiene. Discover the biological design features that sets our luxury cellulose apart from cheap generic blends.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white border border-[#1A1410]/5 p-8 rounded-3xl shadow-xs hover:shadow-xl hover:border-[#0D7A80]/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon wrap with custom background color */}
                  <div className={`w-12 h-12 rounded-2xl ${feat.bg} flex items-center justify-center mb-6`}>
                    <Icon className={`w-6 h-6 ${feat.color}`} />
                  </div>

                  <h3 className="font-display uppercase text-lg sm:text-xl tracking-tight text-[#1A1410] mb-3">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-[#1A1410]/60 leading-relaxed font-sans">
                    {feat.description}
                  </p>
                </div>

                {/* Micro decorative indicator */}
                <div className="pt-6 mt-6 border-t border-[#1A1410]/5 flex items-center justify-between text-[10px] font-bold uppercase text-[#1A1410]/30 tracking-widest">
                  <span>Guaranteed Standards</span>
                  <Droplet className="w-3 h-3 text-[#0D7A80] opacity-50" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight trust claim block at bottom of features */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-2xl bg-[#0D7A80]/5 border border-[#0D7A80]/10 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="flex items-center space-x-3">
            <span className="p-3 bg-white rounded-xl text-[#0D7A80] shadow-sm font-bold text-xs shrink-0 font-mono">100%</span>
            <p className="text-xs text-[#1A1410]/80 font-sans font-semibold">
              Certified biodegradable. Our standard pure tissue formulations naturally breakdown in standard water systems within 26 seconds.
            </p>
          </div>
          <a
            href="#categories"
            className="text-xs font-bold text-[#0D7A80] hover:text-[#e05a47] uppercase tracking-widest shrink-0 transition-colors"
          >
            Explore Standards &rsaquo;
          </a>
        </motion.div>

      </div>
    </section>
  );
}
