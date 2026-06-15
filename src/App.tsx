import { useState, useEffect } from "react";
import GourmetHero from "./components/GourmetHero";
import DirectInquiry from "./components/DirectInquiry";
import DomainAcquisition from "./components/DomainAcquisition";
import BackstageSeo from "./components/BackstageSeo";
import { ChefHat, Globe } from "lucide-react";

export default function App() {
  const [activeView, setActiveView] = useState<string>("home");

  useEffect(() => {
    const handleHashAndParams = () => {
      const hash = window.location.hash.replace("#", "");
      const params = new URLSearchParams(window.location.search);
      const viewParam = params.get("view") || params.get("page");
      
      const recognizedViews = [
        "home", 
        "portfolio", 
        "contact", 
        "seo-luxury-gastronomy", 
        "seo-michelin-catering", 
        "seo-epic-brand-strategy", 
        "seo-domain-acquisitions"
      ];
      
      if (viewParam && recognizedViews.includes(viewParam)) {
        setActiveView(viewParam);
        const element = document.getElementById("seo_premium_lander");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else if (hash && recognizedViews.includes(hash)) {
        setActiveView(hash);
        const element = document.getElementById("seo_premium_lander");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else if (hash === "" && !viewParam) {
        setActiveView("home");
      }
    };

    handleHashAndParams();
    window.addEventListener("hashchange", handleHashAndParams);
    return () => window.removeEventListener("hashchange", handleHashAndParams);
  }, []);

  const handleViewChange = (view: string) => {
    setActiveView(view);
    if (view === "home") {
      window.location.hash = "";
    } else {
      window.location.hash = view;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans select-none bg-luxury-cream">
      {/* 
        PREMIUM GLOBAL STICKY HEADER / NAV BAR
        Directly addresses: "when they click button it takes them to new page (contact on nav bar)"
      */}
      <nav className="sticky top-0 z-50 bg-[#121315]/95 backdrop-blur-md border-b border-white/5 text-white py-3 sm:py-4 px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        {/* Brand identity logo */}
        <div 
          onClick={() => handleViewChange("home")}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <div className="w-8 h-8 border border-luxury-gold flex items-center justify-center rounded-full bg-black/40 shrink-0 group-hover:border-white transition-colors">
            <ChefHat className="w-4.5 h-4.5 text-luxury-gold group-hover:text-white transition-colors" />
          </div>
          <span className="text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] font-sans font-medium text-xs md:text-sm select-none break-all sm:break-normal group-hover:text-luxury-gold transition-colors">
            eleganttaste.com
          </span>
        </div>

        {/* Navigation Desk Links */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-[10px] sm:text-xs uppercase tracking-widest font-sans font-semibold">
          <button 
            onClick={() => handleViewChange("home")}
            className={`transition-colors cursor-pointer py-1 ${activeView === "home" ? "text-luxury-gold font-bold border-b border-luxury-gold" : "text-gray-400 hover:text-white"}`}
          >
            Featured Asset
          </button>
          
          <button 
            onClick={() => handleViewChange("portfolio")}
            className={`transition-colors cursor-pointer py-1 ${activeView === "portfolio" ? "text-luxury-gold font-bold border-b border-luxury-gold" : "text-gray-400 hover:text-white"}`}
          >
            Domain Catalog
          </button>
          
          <a 
            href="https://www.godaddy.com/domainsearch/find?domainToCheck=eleganttaste.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-1.5 bg-luxury-gold text-[#121315] hover:bg-white hover:text-[#121315] transition-all cursor-pointer rounded-full flex items-center gap-1.5 text-[9px] sm:text-[11px] font-extrabold border border-luxury-gold animate-pulse-subtle"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>DOMAIN FOR SALE</span>
          </a>
        </div>
      </nav>

      {/* RENDER ACTIVE PAGE / VIEW */}
      {activeView === "home" && (
        <>
          {/* 1. HERO SHIELD */}
          <GourmetHero 
            onViewChange={handleViewChange}
            onScrollToCatalog={() => scrollToSection("domain_merchandising_section")}
          />

          {/* 2. CHOSEN SINGLE-DOMAIN DETAIL ACQUISITION BLOCK */}
          <DomainAcquisition 
            activeView={activeView}
            onViewChange={handleViewChange}
          />
        </>
      )}

      {activeView === "portfolio" && (
        <DomainAcquisition 
          activeView={activeView}
          onViewChange={handleViewChange}
        />
      )}

      {activeView === "contact" && (
        <DirectInquiry />
      )}

      {["seo-luxury-gastronomy", "seo-michelin-catering", "seo-epic-brand-strategy", "seo-domain-acquisitions"].includes(activeView) && (
        <BackstageSeo seoId={activeView} onReturn={() => handleViewChange("portfolio")} />
      )}

      {/* 3. ELEGANT, MINIMALIST & TIDY LIGHT FOOTER */}
      <footer id="main_portfolio_footer" className="bg-white py-12 px-4 border-t border-gray-150 text-center text-neutral-600 font-sans text-sm">
        <div className="max-w-xl mx-auto space-y-6">
          {/* Brand Logo linked to homepage */}
          <div 
            onClick={() => handleViewChange("home")}
            className="inline-flex items-center justify-center space-x-2.5 cursor-pointer group"
          >
            <div className="w-8.5 h-8.5 border border-luxury-gold-dark/40 flex items-center justify-center rounded-full bg-luxury-cream shrink-0 group-hover:border-luxury-gold-dark transition-all">
              <ChefHat className="text-luxury-gold-dark w-4.5 h-4.5" />
            </div>
            <span className="text-neutral-900 uppercase tracking-[0.2em] font-sans font-bold text-sm select-none group-hover:text-luxury-gold-dark transition-colors">
              eleganttaste.com
            </span>
          </div>

          {/* Minimal visual separator */}
          <div className="h-[1px] w-8 bg-gray-200 mx-auto" />

          {/* Tidy clean navigation */}
          <div className="flex justify-center items-center gap-4 text-xs font-semibold text-neutral-500 tracking-wide">
            <button className="hover:text-neutral-900 transition-colors cursor-pointer" onClick={() => handleViewChange("home")}>
              Home
            </button>
            <span className="text-neutral-200 select-none font-light">&bull;</span>
            <button className="hover:text-neutral-900 transition-colors cursor-pointer" onClick={() => handleViewChange("portfolio")}>
              Domains
            </button>
            <span className="text-neutral-200 select-none font-light">&bull;</span>
            <button className="hover:text-neutral-900 transition-colors cursor-pointer" onClick={() => handleViewChange("contact")}>
              Inquire
            </button>
          </div>

          <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm mx-auto">
            &copy; 2026 eleganttaste.com. Exclusive Brand Portfolio. All rights reserved.
          </p>

          {/* Minimal Sitemap & Robots Index */}
          <div className="flex justify-center items-center gap-3 text-[10px] text-neutral-400 font-mono">
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700 transition-colors underline decoration-neutral-250">
              sitemap.xml
            </a>
            <span className="text-neutral-200 select-none">&bull;</span>
            <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700 transition-colors underline decoration-neutral-250">
              robots.txt
            </a>
          </div>

          {/* Big custom Feelize AI Bubble Link at the very bottom */}
          <div className="pt-2 flex justify-center">
            <a 
              href="https://feelize.com/start" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-black hover:scale-[1.03] transition-all text-xs font-semibold tracking-wider shadow-md hover:shadow-lg cursor-pointer border border-neutral-800"
            >
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shrink-0" />
              <span className="opacity-90">Website created with</span>
              <span className="text-luxury-gold font-bold uppercase tracking-widest text-[10px]">Feelize AI</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
