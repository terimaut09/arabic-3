import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, CheckCircle2, ChevronRight, Truck, Store, Calculator, Building, HelpCircle } from "lucide-react";

export default function WholesaleB2B() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    category: "Facial Tissues",
    volume: "100-500 cases",
    deliveryCity: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.email) {
      alert("Please fill out your company name and email.");
      return;
    }
    // Simulate API storage / notification trigger
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      companyName: "",
      email: "",
      phone: "",
      category: "Facial Tissues",
      volume: "100-500 cases",
      deliveryCity: "",
    });
  };

  return (
    <section id="wholesale" className="py-24 bg-[#F8F6F2] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Background Decorative Pattern Frame */}
        <div className="bg-[#1A1410] rounded-3xl border border-[#FAF9F6]/10 p-8 md:p-14 text-[#f8f6f2] overflow-hidden relative shadow-2xl">
          {/* Subtle light bubble */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#0D7A80]/15 rounded-full filter blur-[100px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
            
            {/* Left Hand: Corporate Information copy */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <Store className="w-4 h-4 text-[#e05a47]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#f8f6f2]/80">
                  Resellers &amp; Distributor Program
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-tight">
                FOR STORES &amp; <br />
                <span className="text-[#0D7A80]">WHOLESALE</span> BUYERS
              </h2>

              <p className="text-sm text-[#f8f6f2]/70 leading-relaxed font-sans max-w-lg">
                Are you sourcing for a retail supermarket chain, healthcare institute, custom dining lounge, or high-volume wholesale hub? We offer optimized container load pricing, white-label OEM custom embossments, and high-frequency dispatch schedules.
              </p>

              {/* Core wholesale features list */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#e05a47] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">Tiered Bulk Quotations</h4>
                    <p className="text-xs text-[#f8f6f2]/50">Unmatched discount formulas for full pallet purchases and combined custom product container grids.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Truck className="w-5 h-5 text-[#0D7A80] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">FOB &amp; DDP Logistics Covered</h4>
                    <p className="text-xs text-[#f8f6f2]/50">Custom clearance handling, door-to-door delivery with priority fleet tracking nationwide.</p>
                  </div>
                </div>
              </div>

              {/* Help Line placeholder */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 inline-flex items-center space-x-4 max-w-sm mt-4">
                <Building className="w-8 h-8 text-[#0D7A80] shrink-0" />
                <div>
                  <p className="text-[9px] uppercase font-bold text-[#f8f6f2]/40">Corporate Hotline</p>
                  <p className="text-xs font-bold text-white">+1 (800) 450-PURE</p>
                  <p className="text-[10px] text-[#f8f6f2]/50 font-medium">wholesale@tissuelounge.com</p>
                </div>
              </div>

            </div>

            {/* Right Hand: Interactive Quote calculator form */}
            <div className="lg:col-span-6 bg-white text-[#1A1410] p-6 sm:p-8 rounded-3xl shadow-2xl border border-[#1A1410]/5 relative">
              
              <AnimatePresence mode="wait">
                
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 pb-4 border-b border-[#1A1410]/5">
                      <Calculator className="w-5 h-5 text-[#0D7A80]" />
                      <h3 className="font-display uppercase text-lg sm:text-xl tracking-wide text-[#1A1410]">
                        Quote &amp; Catalog Request
                      </h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-[#1A1410]/50 tracking-wider mb-1.5">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Pure Supermarkets Co."
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            className="w-full text-xs px-4 py-3 rounded-xl border border-[#1A1410]/15 bg-[#F8F6F2]/30 focus:outline-none focus:border-[#0D7A80] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-[#1A1410]/50 tracking-wider mb-1.5">
                            Contact Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="procurement@brand.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full text-xs px-4 py-3 rounded-xl border border-[#1A1410]/15 bg-[#F8F6F2]/30 focus:outline-none focus:border-[#0D7A80] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-[#1A1410]/50 tracking-wider mb-1.5">
                            Phone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full text-xs px-4 py-3 rounded-xl border border-[#1A1410]/15 bg-[#F8F6F2]/30 focus:outline-none focus:border-[#0D7A80] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-[#1A1410]/50 tracking-wider mb-1.5">
                            Target Category
                          </label>
                          <select
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full text-xs px-4 py-3 rounded-xl border border-[#1A1410]/15 bg-[#F8F6F2]/30 focus:outline-none focus:border-[#0D7A80] transition-colors"
                          >
                            <option value="Facial Tissues">Facial Tissues</option>
                            <option value="Table Napkins">Table Napkins</option>
                            <option value="Kitchen Towels">Kitchen Towels</option>
                            <option value="Wet Wipes">Wet Wipes / Wet Tissues</option>
                            <option value="Bath rolls">Premium Bath Rolls</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-[#1A1410]/50 tracking-wider mb-1.5">
                            Estimated Monthly Volume
                          </label>
                          <select
                            value={formData.volume}
                            onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                            className="w-full text-xs px-4 py-3 rounded-xl border border-[#1A1410]/15 bg-[#F8F6F2]/30 focus:outline-none focus:border-[#0D7A80] transition-colors"
                          >
                            <option value="100-500 cases">100 - 500 cases</option>
                            <option value="500-1000 cases">500 - 1,000 cases</option>
                            <option value="1000+ cases">1,000+ cases (Container Load)</option>
                            <option value="OEM Retail White-label">OEM / Private Brand labeling</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-[#1A1410]/50 tracking-wider mb-1.5">
                            Delivery City &amp; State
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Chicago, IL"
                            value={formData.deliveryCity}
                            onChange={(e) => setFormData({ ...formData, deliveryCity: e.target.value })}
                            className="w-full text-xs px-4 py-3 rounded-xl border border-[#1A1410]/15 bg-[#F8F6F2]/30 focus:outline-none focus:border-[#0D7A80] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-4 bg-[#1A1410] hover:bg-[#e05a47] text-white rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center space-x-2 group"
                        >
                          <span>Submit Request Quote</span>
                          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>

                      <p className="text-[10px] text-[#1A1410]/40 font-medium text-center">
                        Our bulk distribution directors reply with a full digital catalog and custom spreadsheet prices within 3 business hours.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  // Success feedback modal
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-8 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 animate-bounce" />
                    </div>

                    <div className="space-y-2">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-emerald-600">Ticket #TL-{Math.floor(1000 + Math.random() * 9000)}-Q</p>
                      <h3 className="font-display text-2xl uppercase tracking-wide text-[#1A1410]">
                        Request Lodged Successfully
                      </h3>
                      <p className="text-sm font-serif italic text-[#1A1410]/60">
                        Thank you, team {formData.companyName}!
                      </p>
                    </div>

                    <div className="bg-[#F8F6F2]/50 p-5 rounded-2xl border border-[#1A1410]/5 max-w-sm w-full text-left space-y-2">
                      <p className="text-[11px] font-bold uppercase text-[#1A1410]/40 tracking-wider">Summary Receipt</p>
                      <p className="text-xs text-[#1A1410]/70 font-sans">
                        <strong>Procurement Target:</strong> {formData.category}
                      </p>
                      <p className="text-xs text-[#1A1410]/70 font-sans">
                        <strong>Expected Volume:</strong> {formData.volume}
                      </p>
                      <p className="text-xs text-[#1A1410]/70 font-sans">
                        <strong>Sent To:</strong> {formData.email}
                      </p>
                      <p className="text-xs text-[#1A1410]/70 font-sans">
                        <strong>Destination Hub:</strong> {formData.deliveryCity || "Standard Hub"}
                      </p>
                    </div>

                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-[#1a1410]/10 hover:bg-[#1a1410]/20 text-[#1a1410] rounded-xl text-xs font-semibold uppercase tracking-widest transition-colors"
                    >
                      Fill New Query
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
