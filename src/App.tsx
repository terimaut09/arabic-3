import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, ShoppingCart, ShieldAlert, Sparkles, Wind } from "lucide-react";

// Import modules
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import ProductCarousel from "./components/ProductCarousel";
import DarkFeature from "./components/DarkFeature";
import WhyChooseUs from "./components/WhyChooseUs";
import Categories from "./components/Categories";
import WholesaleB2B from "./components/WholesaleB2B";
import Testimonials from "./components/Testimonials";
import ContactFooter from "./components/ContactFooter";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSaleToast, setActiveSaleToast] = useState<{ company: string; cases: number; city: string } | null>(null);

  // Scroll visibility handler for Back-To-Top button
  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  // Periodic active wholesale order simulation representing live enterprise requests
  useEffect(() => {
    const mockSales = [
      { company: "The Plaza Grand Hotel", cases: 250, city: "New York, NY" },
      { company: "Avenue Bistro Cafe Chain", cases: 140, city: "Boston, MA" },
      { company: "Prime Wellness Clinics", cases: 500, city: "Phoenix, AZ" },
      { company: "Redwood Specialty Grocery", cases: 380, city: "Seattle, WA" },
    ];

    const showRandomToast = () => {
      const idx = Math.floor(Math.random() * mockSales.length);
      setActiveSaleToast(mockSales[idx]);

      // Hide after 5 seconds
      setTimeout(() => {
        setActiveSaleToast(null);
      }, 5000);
    };

    // Show initial after 6 seconds, repeat every 30 seconds
    const initialTimer = setTimeout(showRandomToast, 6000);
    const intervalTimer = setInterval(showRandomToast, 35000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  return (
    <div className="relative selection:bg-[#0D7A80] selection:text-[#f8f6f2] font-sans antialiased text-[#1A1410] bg-[#F8F6F2]">
      
      {/* Top sticky brand announcement bar */}
      <div className="bg-[#1A1410] text-[#f8f6f2]/80 text-[10px] uppercase tracking-[0.25em] py-2 px-6 flex items-center justify-between text-center relative z-55 border-b border-white/5 font-semibold">
        <div className="flex items-center space-x-1.5 mx-auto">
          <Sparkles className="w-3.5 h-3.5 text-[#e05a47] animate-pulse" />
          <span>FSC Certified Virgin Pulp • Free Sourcing Invoices Issued Within 3 Business Hours</span>
        </div>
      </div>

      {/* Main Structural Layout Components */}
      <Navbar />
      
      <main className="relative">
        <Hero />
        <StatsBar />
        <ProductCarousel />
        <DarkFeature />
        <WhyChooseUs />
        <Categories />
        <WholesaleB2B />
        <Testimonials />
      </main>

      <ContactFooter />

      {/* Floating Interactive Live Wholesale Toast Notification */}
      <AnimatePresence>
        {activeSaleToast && (
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -50, y: 50 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="fixed bottom-6 left-6 z-40 bg-[#1A1410]/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/10 max-w-sm flex items-center space-x-4 text-white"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0D7A80] flex items-center justify-center shrink-0">
              <ShoppingCart className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-[#e05a47]">Live Sourcing Order</p>
              <p className="text-xs font-semibold text-white mt-0.5">
                {activeSaleToast.company} verified bulk contract
              </p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-[10px] text-white/50">{activeSaleToast.city}</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span className="text-[10px] font-bold text-[#0D7A80] uppercase">{activeSaleToast.cases} Cases Confirmed</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Floating Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.a
            href="#home"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-[45] w-12 h-12 rounded-full bg-[#1A1410] hover:bg-[#0D7A80] text-white border border-white/5 flex items-center justify-center shadow-xl transition-all hover:scale-110 active:scale-95 group focus:outline-none"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5 text-[#f8f6f2] group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        )}
      </AnimatePresence>

    </div>
  );
}
