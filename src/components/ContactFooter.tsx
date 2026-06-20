import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Clock, Instagram, Send, Twitter, CheckCircle2, Sparkles, Wind } from "lucide-react";

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter both your name and phone number so we can consult your account.");
      return;
    }
    setIsSent(true);
  };

  const handleReset = () => {
    setIsSent(false);
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <footer id="contact" className="bg-[#1A1410] text-[#f8f6f2] pt-24 pb-8 border-t border-[#FAF9F6]/10 relative z-20 overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0D7A80]/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Grid: Form on left, brand info on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-[#FAF9F6]/10">
          
          {/* Left Column (8/12 wide on lg): Contact form */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center space-x-1.5 text-[#e05a47] text-[10px] font-bold uppercase tracking-widest mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get In touch immediately</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider">
                WRITE TO <span className="text-[#0D7A80]">THE LOUNGE</span>
              </h3>
              <p className="text-xs text-[#f8f6f2]/60 mt-1 max-w-md">
                Have custom order questions, retail slot requests, or special shipping demands? Deliver a direct memo to our customer happiness squad.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 max-w-xl"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] uppercase tracking-widest font-bold text-[#f8f6f2]/50 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Connor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:border-[#0D7A80] transition-colors placeholder-[#f8f6f2]/30"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-widest font-bold text-[#f8f6f2]/50 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +1 (312) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:border-[#0D7A80] transition-colors placeholder-[#f8f6f2]/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-widest font-bold text-[#f8f6f2]/50 mb-1.5">
                      Your Message or Custom Request
                    </label>
                    <textarea
                      rows={4}
                      placeholder="e.g. Interested in custom-embossed cocktail table napkins for our rooftop restaurant..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:border-[#0D7A80] transition-colors placeholder-[#f8f6f2]/30 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#0D7A80] hover:bg-[#e05a47] text-white rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 shadow-md inline-flex items-center space-x-2"
                  >
                    <span>Send Secure Memo</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl max-w-xl text-left space-y-4"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <div>
                      <h4 className="font-display text-lg uppercase tracking-wide">Memo Dispatched</h4>
                      <p className="text-[10px] text-emerald-500 uppercase tracking-wider font-semibold">Our happiness crew is reviewing details</p>
                    </div>
                  </div>
                  
                  <p className="text-xs text-[#f8f6f2]/70">
                    Thank you <strong>{formData.name}</strong>! We've generated client ticket <strong>#MSG-{Math.floor(10000 + Math.random() * 90000)}</strong> and routed it directly to the customer experience queue associated under phone lookup <strong>{formData.phone}</strong>.
                  </p>

                  <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white text-[10px] uppercase tracking-widest font-bold rounded-lg transition-colors"
                  >
                    Write another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column (4/12 wide): Locations, corporate info, opening hours */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              <h4 className="font-display uppercase text-[#0D7A80] text-sm tracking-widest">
                CORPORATE OFFICE INFO
              </h4>

              {/* Physical Address */}
              <div className="flex items-start space-x-3 text-xs">
                <MapPin className="w-5 h-5 text-[#e05a47] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white uppercase tracking-wider transition-colors duration-300">Tissue Lounge Headquarters</p>
                  <p className="text-[#f8f6f2]/60 mt-0.5">
                    400 Pure Cellulose Blvd, Suite 250<br />
                    Chicago, IL 60611, United States
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-3 text-xs">
                <Clock className="w-5 h-5 text-[#0D7A80] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white uppercase tracking-wider">Business Operational Hours</p>
                  <p className="text-[#f8f6f2]/60 mt-0.5">
                    Monday &ndash; Friday: 8:00 AM &ndash; 6:00 PM CST<br />
                    Saturday &ndash; Sunday: Closed (Pallet Dispatch Offline)
                  </p>
                </div>
              </div>

              {/* Customer Voice support */}
              <div className="flex items-start space-x-3 text-xs">
                <Phone className="w-5 h-5 text-[#e05a47] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white uppercase tracking-wider">Direct Reception Phone</p>
                  <p className="text-[#f8f6f2]/60 mt-0.5">
                    +1 (800) 450-PURE / (312) 555-0155
                  </p>
                </div>
              </div>
            </div>

            {/* Social Connection Channels */}
            <div className="space-y-3 pt-6 border-t border-[#FAF9F6]/5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#f8f6f2]/40">Social Channels</p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-[#e05a47]/20 hover:text-[#e05a47] rounded-xl flex items-center justify-center transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-[#0D7A80]/20 hover:text-[#0D7A80] rounded-xl flex items-center justify-center transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <Send className="w-4 h-4 rotate-45" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-white/15 rounded-xl flex items-center justify-center transition-all duration-300"
                  aria-label="Twitter X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-widest text-[#f8f6f2]/40">
          <div className="flex items-center space-x-2">
            <div className="bg-[#0D7A80] p-1.5 rounded-md text-white">
              <Wind className="w-3.5 h-3.5" />
            </div>
            <span>© 2026 Tissue Lounge Inc. Virgin Forest Eco Pulp. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#home" className="hover:text-white transition-colors">Back to Top</a>
            <a href="#why-us" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#wholesale" className="hover:text-white transition-colors font-bold text-[#e05a47]">Sourcing Catalog C-X-740</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
