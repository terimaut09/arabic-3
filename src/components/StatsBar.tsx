import { motion } from "motion/react";
import { Store, Users, Layers, Award } from "lucide-react";
import { StatItem } from "../types";

export default function StatsBar() {
  const stats: (StatItem & { icon: any })[] = [
    {
      number: "20+",
      label: "Global Distributors",
      icon: Store,
    },
    {
      number: "15k+",
      label: "Satisfied Customers",
      icon: Users,
    },
    {
      number: "78+",
      label: "Soft Paper Products",
      icon: Layers,
    },
  ];

  return (
    <section className="bg-[#FAF9F6] border-y border-[#1A1410]/5 py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Label Title on Left */}
          <div className="max-w-sm flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#e05a47]/5 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-[#e05a47]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-[#1A1410]/40">Brand Impact</p>
              <h3 className="text-sm font-semibold uppercase text-[#1A1410] tracking-wider">Trusted Industry Scale</h3>
            </div>
          </div>

          {/* Stats Bar aligned on Right/Flex */}
          <div className="grid grid-cols-3 gap-4 sm:gap-10 md:gap-16 xl:gap-24">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-start"
                >
                  <div className="flex items-center space-x-2 text-[#0D7A80] mb-1">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 shrink-0 opacity-80" />
                    <span className="font-display text-2xl sm:text-4xl md:text-5xl tracking-tight text-[#1A1410]">
                      {stat.number}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-widest text-[#1A1410]/50">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
