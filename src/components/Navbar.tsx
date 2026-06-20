import { useState, useEffect } from "react";
import { Menu, X, Wind, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Why Us", href: "#why-us" },
    { name: "Categories", href: "#categories" },
    { name: "Wholesale / B2B", href: "#wholesale" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-[#F8F6F2]/95 backdrop-blur-md border-b border-[#1A1410]/5 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 bg-[#0D7A80] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[#e05a47] shadow-sm">
            <Wind className="w-5 h-5 text-[#f8f6f2]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#e05a47] rounded-full animate-ping" />
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-display text-xl tracking-wider text-[#1A1410] uppercase">
                Tissue Lounge
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#e05a47] opacity-80" />
            </div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#1A1410]/60 font-medium -mt-1">
              Pure Pulp Luxury
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-semibold text-[#1A1410]/70 hover:text-[#0D7A80] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0D7A80] after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#wholesale"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1A1410] hover:bg-[#0D7A80] text-[#f8f6f2] text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 hover:shadow-lg shadow-sm transform hover:-translate-y-0.5"
          >
            Get Free Catalog
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-[#1A1410] hover:text-[#0D7A80] transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[72px] bg-[#F8F6F2] z-40 transition-transform duration-500 lg:hidden shadow-inner border-t border-[#1A1410]/5 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg uppercase tracking-wider font-semibold text-[#1A1410] hover:text-[#0D7A80] transition-colors border-b border-[#1A1410]/5 pb-3"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#wholesale"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center w-full py-4 bg-[#0D7A80] hover:bg-[#e05a47] text-white text-sm uppercase tracking-widest font-semibold rounded-xl transition-colors"
          >
            Get Free Catalog
          </a>
        </div>
      </div>
    </header>
  );
}
