import { motion } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";

// @ts-expect-error - Vite resolves and bundles image assets perfectly at build time
import heroImage from "../assets/images/dining_hero_1780722274282.png";

interface GourmetHeroProps {
  onViewChange: (view: "home" | "portfolio" | "contact") => void;
  onScrollToCatalog: () => void;
}

export default function GourmetHero({ onViewChange, onScrollToCatalog }: GourmetHeroProps) {

  return (
    <div id="gourmet_hero_section" className="relative h-[85vh] flex flex-col justify-between overflow-hidden">
      {/* Hero Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury private dining by Elegant Taste"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-cream via-transparent to-black/30" />
      </div>

      {/* Main Narrative Elements */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center px-4 md:px-12 text-center max-w-5xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block border-y border-luxury-gold/50 py-1.5 px-4 sm:px-6 mb-2">
            <span className="text-luxury-gold tracking-[0.2em] sm:tracking-[0.4em] uppercase text-[10px] sm:text-xs font-sans font-semibold">
              PREMIUM DOMAIN ASSET FOR SALE
            </span>
          </div>

          <h1 className="font-serif text-[28px] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight break-all sm:break-normal">
            eleganttaste.com <br />
            <span className="italic text-luxury-gold text-xl sm:text-3xl md:text-5xl block mt-2 font-serif">Brand Showcase & Portal</span>
          </h1>

          <p className="font-sans font-light text-gray-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Acquire this stunning brand legacy. A premier, category-defining namespace designed to command absolute authority in fine dining, bespoke private hospitality, or ultra-premium culinary media.
          </p>

          <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto sm:max-w-none">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onViewChange("portfolio")}
              className="w-full sm:w-auto px-8 py-3.5 bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal font-sans font-semibold text-xs tracking-[0.15em] uppercase rounded shadow-lg transition-colors cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Explore Portfolio</span>
              <Sparkles className="w-4 h-4 shrink-0" />
            </motion.button>

            <button
              onClick={() => onViewChange("contact")}
              className="w-full sm:w-auto px-8 py-3.5 border border-white/30 hover:border-white text-white font-sans font-semibold text-xs tracking-[0.15em] uppercase rounded transition-colors cursor-pointer flex items-center justify-center"
            >
              Secure Direct Offer Buyout
            </button>
          </div>
        </motion.div>
      </div>

      {/* Foot of Hero */}
      <div className="relative z-10 pb-6 flex flex-col items-center justify-center">
        <span className="text-luxury-gold/75 font-mono text-[10px] uppercase tracking-[0.25em] mb-2 leading-none">
          Custom Culinary Showcases & Fine Dining
        </span>
        <motion.button
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          onClick={onScrollToCatalog}
          className="text-luxury-gold hover:text-white p-2 cursor-pointer focus:outline-none"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}
