import { motion } from "motion/react";
import { Star, Quote, ShieldCheck, Heart } from "lucide-react";
import { TestimonialItem } from "../types";

export default function Testimonials() {
  const reviews: TestimonialItem[] = [
    {
      id: "rev-1",
      name: "Marcus Sterling",
      role: "Procurement Director",
      company: "The Ritz Luxury Lodges",
      quote: "We substituted our previous paper linens with Tissue Lounge's 4-ply Sovereign Dinner and Bath Series last summer. The response from hotel guests was immediate and highly positive — the softness feels genuinely luxurious and does not shed fibers.",
      rating: 5,
      avatarSeed: "marcus",
    },
    {
      id: "rev-2",
      name: "Elena Rostova",
      role: "FMCG Sourcing Head",
      company: "Rostov Premium Supermarkets",
      quote: "As a major retail chain distributor, volume consistency and rapid logistic turnarounds are crucial. Tissue Lounge consistently ships full pallet cases with pristine external shrink-wraps. The yellow unbleached and blue boxes fly off the shelves.",
      rating: 5,
      avatarSeed: "elena",
    },
    {
      id: "rev-3",
      name: "Dr. David Vane",
      role: "Head of Pediatrics",
      company: "Greenfield Clinic Network",
      quote: "We mandate strict chemical safety profiles for skin tissue contact across our newborn wards. Tissue Lounge's double ultraviolet sterilization processes and zero-brightener policy provide our clinical staff and young mothers absolute peace of mind.",
      rating: 5,
      avatarSeed: "david",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-[#FAF9F6] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1 py-1 px-3 bg-[#e05a47]/10 text-[#e05a47] rounded-full text-[10px] font-bold uppercase tracking-widest mx-auto">
            <Heart className="w-3 h-3 fill-current" />
            <span>Customer Praise Logs</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#1A1410]">
            WHAT THE <span className="text-[#0D7A80]">MARKET SAYS</span>
          </h2>

          <p className="text-sm text-[#1A1410]/60 max-w-lg mx-auto">
            Read direct reports from boutique hotel procurement teams, clinical sanitariums, and high-volume grocery chain category specialists who stock our paper.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-[#1A1410]/5 p-8 rounded-3xl shadow-xs hover:border-[#0D7A80]/15 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
            >
              {/* Subtle Quote Symbol accent */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#1a1410]/3 pointer-events-none" />

              <div className="space-y-4">
                
                {/* Visual Stars */}
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-500" />
                  ))}
                  <span className="text-[10px] font-bold uppercase bg-amber-500/10 text-amber-800 px-2 py-0.5 rounded ml-2">
                    5.0 Rated
                  </span>
                </div>

                {/* Testimonial text block */}
                <p className="text-xs sm:text-sm text-[#1A1410]/75 line-clamp-6 leading-relaxed font-serif italic">
                  "{rev.quote}"
                </p>

              </div>

              {/* Reviewer signature block */}
              <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-[#1A1410]/5">
                
                {/* Initial-based circular avatar representing premium luxury */}
                <div className="w-12 h-12 rounded-2xl bg-[#0D7A80]/10 flex items-center justify-center font-display text-[#0D7A80] text-lg font-bold shadow-inner">
                  {rev.name.charAt(0)}
                </div>

                <div>
                  <div className="flex items-center space-x-1.5">
                    <h4 className="font-display uppercase text-sm tracking-wide text-[#1A1410]">
                      {rev.name}
                    </h4>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" title="Verified Professional Buyer" />
                  </div>
                  
                  <p className="text-[10px] font-semibold text-[#1A1410]/50 lowercase leading-none">
                    {rev.role} • <span className="font-bold text-[#1A1410]/70 uppercase text-[9px]">{rev.company}</span>
                  </p>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
