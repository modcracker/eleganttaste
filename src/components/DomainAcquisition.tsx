import { motion } from "motion/react";
import { Sparkles, ArrowUpRight, Shield, Globe, ExternalLink, Mail, Check, Layers, Landmark, ArrowLeft } from "lucide-react";

interface DomainAcquisitionProps {
  activeView: "home" | "portfolio" | "contact";
  onViewChange: (view: "home" | "portfolio" | "contact") => void;
}

const PRIMARY_DOMAIN = {
  name: "eleganttaste.com",
  tagline: "The Crown Jewel Gastronomy & Private Chef Asset",
  description: "An extraordinary domain tailored for luxury hospitality, elite Michelin-star catering, global culinary guides, or AI-powered high-end dining platforms.",
  category: "Food & Luxury",
  highlight: "Premium & Descriptive",
  godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=eleganttaste.com",
  afternicUrl: "https://www.afternic.com/domain/eleganttaste.com",
  features: ["Perfect length & highly descriptive", "Valuable standard premium .com extension", "Zero brand confusion, ultra-stylish feel"]
};

const PORTFOLIO_DOMAINS = [
  {
    name: "ambeth.com",
    tagline: "Prestige Corporate Naming & Fintech Authority",
    description: "An extraordinary premium brand asset tailored for high-tier financial solutions, wellness portfolios, or private advisory corporations.",
    category: "Corporate & Finance",
    highlight: "Highly Liquid Short Name",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=ambeth.com",
    afternicUrl: "https://www.afternic.com/domain/ambeth.com",
    features: ["Perfect 6-letter length", "Exceptional phonetic resonance", "Zero descriptive brand confusion"]
  },
  {
    name: "appliancecraft.com",
    tagline: "The Premium Standard for Custom Installations & Precision Hardware",
    description: "The absolute defining portal namespace for home appliance tech, precision design machinery, and bespoke kitchen hardware.",
    category: "Home & Hardware",
    highlight: "Authoritative Industry Keyword",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=appliancecraft.com",
    afternicUrl: "https://www.afternic.com/domain/appliancecraft.com",
    features: ["High organic keyword value", "Instantly declares product authority", "Establishes long-term brand legacy"]
  },
  {
    name: "aquaves.com",
    tagline: "Prestige Hydration, Fluid Dynamics, and Marine Tech",
    description: "Bespoke clean-energy, high-end water bottle brands, or state-of-the-art oceanic filtration technologies.",
    category: "Wellness & Tech",
    highlight: "Sleek Lifestyle Brand",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=aquaves.com",
    afternicUrl: "https://www.afternic.com/domain/aquaves.com",
    features: ["Elegant aquatic phonetics", "Modern lifestyle & health appeal", "Highly brandable 7-letter extension"]
  },
  {
    name: "arkba.com",
    tagline: "Ultra-Short Name for Digital Banking & Capital Management",
    description: "High-equity naming standard ideal for modern secure ledger networks, venture investing, or next-generation blockchain architectures.",
    category: "Web3 & Capital",
    highlight: "Extremely Rare 5-Letter .Com",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=arkba.com",
    afternicUrl: "https://www.afternic.com/domain/arkba.com",
    features: ["Rare 5-letter brand asset", "Easy global pronunciation", "High sovereign authority feel"]
  },
  {
    name: "armycore.com",
    tagline: "The Authoritative Name for High-Grade Apparel & Tactical Services",
    description: "Powerhouses of technical outerwear, outdoor gears, fitness bootcamps, or secure institutional consulting groups.",
    category: "Apparel & Security",
    highlight: "Bold & Commanding",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=armycore.com",
    afternicUrl: "https://www.afternic.com/domain/armycore.com",
    features: ["Extremely high memorability score", "Clear, bold market posture", "Perfect for direct-to-consumer apparel"]
  },
  {
    name: "arogram.com",
    tagline: "Organic Wellness, Coffee Roasters, and Fine Scent Curation",
    description: "A gorgeous namespace for wellness application hubs, gourmet single-origin roasters, or boutique luxury cosmetics.",
    category: "Gourmet & Cosmetics",
    highlight: "Sensory Brand Magnet",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=arogram.com",
    afternicUrl: "https://www.afternic.com/domain/arogram.com",
    features: ["Evokes premium scents & balance", "Ideal for organic commerce", "Soft, elegant typography pairing"]
  },
  {
    name: "awesomedom.com",
    tagline: "Premium Domain Portfolio Hub & Dynamic Development Authority",
    description: "A category-defining namespace for master registries, domain brokering, or developer application platforms.",
    category: "Domains & Hosting",
    highlight: "Unforgettably Energetic",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=awesomedom.com",
    afternicUrl: "https://www.afternic.com/domain/awesomedom.com",
    features: ["Highly memorable branding", "Excellent for domain directories", "Bold modern consumer appeal"]
  },
  {
    name: "babeport.com",
    tagline: "Trendsetting Beauty, Editorial Fashion, and Lifestyle Hub",
    description: "Vibrant high-fashion portal, cosmetic lines, social media aggregation networks, or premium beauty booking interfaces.",
    category: "Beauty & Fashion",
    highlight: "High-Traffic Aesthetic",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=babeport.com",
    afternicUrl: "https://www.afternic.com/domain/babeport.com",
    features: ["Highly catchy lifestyle name", "Perfect for modern social commerce", "Strong keyword association"]
  },
  {
    name: "bakelet.com",
    tagline: "Artisanal Bakeries, Pastry Tech, and Gourmet Deliveries",
    description: "Charming digital brand for gourmet micro-bakeries, specialized baking kits, dessert applications, or baker talent directories.",
    category: "Culinary & Sweets",
    highlight: "Charming Short Brand",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=bakelet.com",
    afternicUrl: "https://www.afternic.com/domain/bakelet.com",
    features: ["Playful, clear, and sensory-driven", "Ideally suited for high-growth SaaS", "Highly brandable 7-letter domain"]
  },
  {
    name: "battistas.com",
    tagline: "Michelin-级别 Classic Italian Gastronomy & Wine Cellar Legacy",
    description: "The premium absolute naming solution for organic Tuscan imports, high-end trattorias, or handcrafted restaurant properties.",
    category: "Gastronomy & Dining",
    highlight: "Signature Heritage Brand",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=battistas.com",
    afternicUrl: "https://www.afternic.com/domain/battistas.com",
    features: ["Classic romantic Italian branding", "Durable authenticity", "Perfect for restaurants & bistros"]
  },
  {
    name: "beamspread.com",
    tagline: "Precision Architectural Lighting & Advanced Optical Technology",
    description: "Authoritative design portal for state-of-the-art LED manufacturers, custom light planning firms, or laser physics products.",
    category: "Tech & Architecture",
    highlight: "Premium Industry Keyword",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=beamspread.com",
    afternicUrl: "https://www.afternic.com/domain/beamspread.com",
    features: ["Exact lighting industry term", "High authority backlink profile space", "Strictly professional positioning"]
  },
  {
    name: "bluntgasm.com",
    tagline: "Next-Gen Urban Lifestyle, Cannabis Culture, and Streetwear",
    description: "Bold, modern counterculture apparel, organic dispensary networks, or specialized social lifestyle hubs.",
    category: "Lifestyle & Retail",
    highlight: "Edgy & High Contrast",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=bluntgasm.com",
    afternicUrl: "https://www.afternic.com/domain/bluntgasm.com",
    features: ["Maximum consumer retention power", "Tailored for lifestyle creators", "Highly viral naming trend"]
  },
  {
    name: "boobclub.com",
    tagline: "Women's Wellness, Support Networks, and Apparel Initiatives",
    description: "Vibrant high-equity namespace ideal for support societies, curated bra subscription programs, and breast health advocacy.",
    category: "Wellness & Apparel",
    highlight: "Ultra-High Memorability",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=boobclub.com",
    afternicUrl: "https://www.afternic.com/domain/boobclub.com",
    features: ["Instant word-of-mouth branding", "Highly specialized health appeal", "Strong social mission capability"]
  },
  {
    name: "caviz.com",
    tagline: "Prestige Aesthetics, Custom Eyewear, and Immersive Optics",
    description: "Premium visual product storefronts, Virtual Reality architectures, or signature architectural eyewear brands.",
    category: "Design & Optics",
    highlight: "Superb 5-Letter Brand",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=caviz.com",
    afternicUrl: "https://www.afternic.com/domain/caviz.com",
    features: ["Rare, sleek 5-letter brandable name", "Modern Swiss-style typography friendly", "High-tier premium aesthetic"]
  },
  {
    name: "cellbeep.com",
    tagline: "Instant Mobile Telecommunications & Safety Dispatch Systems",
    description: "Brilliant tech namespace for high-availability communication applications, emergency pager tools, or modern secure chat apps.",
    category: "Technology & SaaS",
    highlight: "Interactive Tech Brand",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=cellbeep.com",
    afternicUrl: "https://www.afternic.com/domain/cellbeep.com",
    features: ["Catchy rhythmic sound", "Strong digital-native appeal", "Ideal for real-time mobile apps"]
  },
  {
    name: "chosenspot.com",
    tagline: "The Elite Booking Portal, Geolocator, and Luxury Travel Concierge",
    description: "An unmatched premium directory for high-end boutique hotels, coordinates discovery, or VIP restaurant seating desks.",
    category: "Bespoke Hospitality",
    highlight: "Intuitive & Prestigious",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=chosenspot.com",
    afternicUrl: "https://www.afternic.com/domain/chosenspot.com",
    features: ["Instantly clear value statement", "Perfect for interactive location guides", "Outstanding organic potential"]
  },
  {
    name: "fockstate.com",
    tagline: "Sophisticated Quantum Physics, Advanced Computation, and Engineering",
    description: "A prestigious computational portal named after Fock state science, ideal for aerospace simulations, deep tech, or server clouds.",
    category: "Science & Engineering",
    highlight: "High Academic Authority",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=fockstate.com",
    afternicUrl: "https://www.afternic.com/domain/fockstate.com",
    features: ["Premium scientific nomenclature", "commands absolute professional trust", "Highly unique engineering trademark potential"]
  },
  {
    name: "halfstash.com",
    tagline: "Smart Personal Budgeting Tools & Secured Wealth Safes",
    description: "A highly intelligent, modern brand for financial management tools, modern collector storage, or premium vintage retail.",
    category: "Fintech & Collector",
    highlight: "Clever & Inventive",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=halfstash.com",
    afternicUrl: "https://www.afternic.com/domain/halfstash.com",
    features: ["Unforgettable consumer rhythm", "Perfect for smart-savings apps", "Playful yet robust brandability"]
  },
  {
    name: "houseofterra.com",
    tagline: "Eco-Conscious Architecture, Sustainable Design, and Organic Living",
    description: "An incredibly beautiful brand for zero-emission real estate registries, high-end terracotta imports, or sustainable homewares.",
    category: "Design & Living",
    highlight: "Elegant & Earthy",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=houseofterra.com",
    afternicUrl: "https://www.afternic.com/domain/houseofterra.com",
    features: ["Sophisticated sensory weight", "Commands ecological premium prices", "Aesthetic layout friendly"]
  },
  {
    name: "jalh.com",
    tagline: "Extreme-Value Four-Letter Global Branding Standard",
    description: "One of the absolute rarest commodities in the digital space. A pristine, unhyphenated 4-letter brand with infinite applicability.",
    category: "Prestige Asset",
    highlight: "Ultra-Rare 4-Letter .Com",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=jalh.com",
    afternicUrl: "https://www.afternic.com/domain/jalh.com",
    features: ["Primal investment grade", "Commands immense global market stance", "Infinite pivots: Tech, VC, Fashion"]
  },
  {
    name: "kataf.com",
    tagline: "Sovereign 5-Letter Logistics, Global Supply, and Retail Brand",
    description: "Precision short brand ideal for international shipping APIs, minimalist apparel labels, or state-of-the-art fintech tools.",
    category: "Logistics & Corporate",
    highlight: "Sought-After 5-Letter",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=kataf.com",
    afternicUrl: "https://www.afternic.com/domain/kataf.com",
    features: ["Symmetrical global phonetics", "Extremely neat visual brand signature", "Uncongested search profile potential"]
  },
  {
    name: "linkwhore.com",
    tagline: "Bold Tracking APIs, Smart Bios, and Search Analytics",
    description: "Fierce, highly retention-proven brand name for URL shortening tools, influencer social bio linking systems, or backlink suites.",
    category: "SaaS & Marketing",
    highlight: "High-Growth Viral Brand",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=linkwhore.com",
    afternicUrl: "https://www.afternic.com/domain/linkwhore.com",
    features: ["Extreme word-of-mouth strength", "100% unforgettable consumer recall", "Tailor-made for social distribution tools"]
  },
  {
    name: "medizer.com",
    tagline: "High-Tier Digital Healthcare, Clinical SaaS, and Virtual Clinics",
    description: "A commanding public authority domain designed for custom telehealth, patient registries, or next-generation organic supplements.",
    category: "Healthcare & Biotech",
    highlight: "High Equity Medical",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=medizer.com",
    afternicUrl: "https://www.afternic.com/domain/medizer.com",
    features: ["Clinical credibility", "7-letter premium modern extension", "Ideally structured for consumer trust"]
  },
  {
    name: "omachines.com",
    tagline: "Advanced Industrial Automation & Custom Robotics Portal",
    description: "A highly prestigious namespace for precision machinery, drone operating systems, or heavy automated manufacturing pipelines.",
    category: "Automation & Robotics",
    highlight: "Pioneering Tech Brand",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=omachines.com",
    afternicUrl: "https://www.afternic.com/domain/omachines.com",
    features: ["Asserts engineering class", "Superb organic search positioning", "Memorable industrial trademark"]
  },
  {
    name: "palmheld.com",
    tagline: "Mobile Consumer Wearables, Luxury Accessories, and Tech Gear",
    description: "A beautifully clean namespace designed for ergonomic mobile gear, modern lifestyle controllers, or mobile accessory storefronts.",
    category: "Hardware & Accessories",
    highlight: "Sleek & Tactical",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=palmheld.com",
    afternicUrl: "https://www.afternic.com/domain/palmheld.com",
    features: ["Evokes close tactile quality", "Perfect for high-quality product lines", "Clear brandable focus"]
  },
  {
    name: "releafcanna.com",
    tagline: "Bespoke Botanical Wellness, Organic Oils & Apothecaries",
    description: "An incredibly relevant keyword pairing designed to command trust in medical dispensaries, artisanal cbd lines, and lifestyle wellness hubs.",
    category: "Apparel & Health",
    highlight: "Sought-After Industry Match",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=releafcanna.com",
    afternicUrl: "https://www.afternic.com/domain/releafcanna.com",
    features: ["High immediate organic search value", "Clear medical-natural alignment", "Zero naming spelling friction"]
  },
  {
    name: "snackcore.com",
    tagline: "Modern Curated Treats, Artisan Subscriptions, and Gen-Z Foods",
    description: "Vibrant high-contrast branding tailored for smart treats, organic offices subscription programs, or playful fast-casual hubs.",
    category: "Snacks & FoodTech",
    highlight: "Lively & Engaging",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=snackcore.com",
    afternicUrl: "https://www.afternic.com/domain/snackcore.com",
    features: ["Highly catchy core modifier", "Perfect for retail or e-commerce", "Establishes a casual, social community"]
  },
  {
    name: "subhauler.com",
    tagline: "Maritime Logistics, Commercial Transport and Construction Systems",
    description: "Strong, heavy-duty industrial authority domain for heavy shipping transport, contractor booking platforms, or modern fleet tools.",
    category: "Logistics & Fleet",
    highlight: "Robust Industrial",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=subhauler.com",
    afternicUrl: "https://www.afternic.com/domain/subhauler.com",
    features: ["Commands heavy operational authority", "Clean keyword pairing for global supply", "Clear corporate market trust"]
  },
  {
    name: "surfmatic.com",
    tagline: "Dynamic Surf Analytics, Performance Apparel & Beach Lifestyle",
    description: "Modern oceanside activewear systems, automated custom board shapers, or automated coastal wave forecast services.",
    category: "Sports & Leisure",
    highlight: "Dynamic Athletic Brand",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=surfmatic.com",
    afternicUrl: "https://www.afternic.com/domain/surfmatic.com",
    features: ["Combines classic sport with automated tech", "Strong, crisp phonetic flow", "Uncompromising lifestyle credibility"]
  },
  {
    name: "taijan.com",
    tagline: "Premium Culinary Concepts & International Import/Export Markets",
    description: "Sleek 6-letter name ideally suited for regional Asian food exports, premium craft restaurants, or import commerce desks.",
    category: "Gastronomy & Imports",
    highlight: "Sophisticated 6-Letter",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=taijan.com",
    afternicUrl: "https://www.afternic.com/domain/taijan.com",
    features: ["Extremely rare balanced spelling", "Establishes immediate high-class heritage", "Universal culinary applicability"]
  },
  {
    name: "thrillport.com",
    tagline: "High-Energy Travel Adventures, Extreme Events, and Active Booking",
    description: "Excellent directory standard for adventure flight booking, theme parks travel registries, or extreme action sports calendars.",
    category: "Hospitality & Leisure",
    highlight: "Adventure Leader Name",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=thrillport.com",
    afternicUrl: "https://www.afternic.com/domain/thrillport.com",
    features: ["Evokes high energy & movement", "Strong visual design identity potential", "Excellent travel industry keyword value"]
  },
  {
    name: "vegginess.com",
    tagline: "The Perfect Plant-Based Lifestyle, Organic Health, and Vegan Foods",
    description: "High-equity descriptive domain ideally designed for custom nutrition planners, fresh green delivery portals, or premium organic cosmetics.",
    category: "Organic Foods & Nutrition",
    highlight: "Premium Wellness Asset",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=vegginess.com",
    afternicUrl: "https://www.afternic.com/domain/vegginess.com",
    features: ["Perfect organic category representative", "Instantly searchable root word", "-ness suffix commands reliable trust"]
  },
  {
    name: "vehicraft.com",
    tagline: "Specialized Vehicle Styling, EV Performance, and Custom Rides",
    description: "Premium authority namespace for elite car detailing systems, electric bicycles engineering, or interactive custom garage portals.",
    category: "Automotive & Design",
    highlight: "Engineering Authority",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=vehicraft.com",
    afternicUrl: "https://www.afternic.com/domain/vehicraft.com",
    features: ["Instantly asserts craft & mechanics", "Outstanding modern tech focus", "High corporate branding value"]
  },
  {
    name: "wikisonic.com",
    tagline: "Comprehensive Acoustic Libraries, Spatial Sound & Sonic Authority",
    description: "A wide-reaching database namespace for architectural acoustics engineering, copyright-free sound catalogs, or custom sound system tech.",
    category: "Audio & Acoustics",
    highlight: "Knowledge & Sound Leader",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=wikisonic.com",
    afternicUrl: "https://www.afternic.com/domain/wikisonic.com",
    features: ["Combines information & modern sound", "Highly brandable catalog name", "Zero regional naming barriers"]
  },
  {
    name: "wimsic.com",
    tagline: "Bespoke Creative Studios, Boutique Gifts, and Interactive Dev Studios",
    description: "Modern, unique studio branding ideal for creative agencies, curated baby goods, high-quality decorative crafts, or digital assets.",
    category: "Studio & Aesthetics",
    highlight: "Sleek 6-Letter Creative Brand",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=wimsic.com",
    afternicUrl: "https://www.afternic.com/domain/wimsic.com",
    features: ["Charming, elegant, and playful", "Perfect layout branding friendly", "Easy to register as trademark"]
  },
  {
    name: "zpewand.com",
    tagline: "Interactive Spatial Gaming, Physics Systems, and Creative VR",
    description: "A state-of-the-art gaming asset ideal for haptic controllers development, VR magic games, or kids educational tech toys.",
    category: "Gaming & Virtual Space",
    highlight: "High Tech Innovation",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=zpewand.com",
    afternicUrl: "https://www.afternic.com/domain/zpewand.com",
    features: ["Imaginative tech moniker", "Highly memorable for active developers", "Outstanding trademark potential"]
  },
  {
    name: "neaner.com",
    tagline: "Highly Engaging Short Conversational AI & Social Media App",
    description: "A neat and charming 6-letter namespace designed for conversational bot models, social micro-communities, or family-focused media.",
    category: "Social & AI Applications",
    highlight: "Superior 6-Letter Short",
    godaddyUrl: "https://www.godaddy.com/domainfind/search?domainName=neaner.com",
    afternicUrl: "https://www.afternic.com/domain/neaner.com",
    features: ["Pristine 6-letter luxury layout", "Warm and highly communicative phonetics", "Immediate domain recall standard"]
  }
];

export default function DomainAcquisition({ activeView, onViewChange }: DomainAcquisitionProps) {
  const primaryDomain = PRIMARY_DOMAIN;

  if (activeView === "portfolio") {
    return (
      <div className="bg-luxury-charcoal text-white min-h-screen py-16 px-6 md:px-12">
        <main className="max-w-6xl mx-auto w-full space-y-16">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-8 border-b border-white/10">
            <button
              onClick={() => {
                onViewChange("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors cursor-pointer py-2 text-xs font-semibold uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4 text-luxury-gold" />
              <span>Return to Showcase</span>
            </button>

            <div className="flex items-center space-x-2">
              <Landmark className="w-4.5 h-4.5 text-luxury-gold" />
              <span className="text-xs font-semibold uppercase text-luxury-gold tracking-widest select-none">
                Private Domain Assets Inventory
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 border border-luxury-gold/30 px-4 py-1.5 rounded-full bg-white/5 font-mono text-[10px] uppercase tracking-widest text-luxury-gold">
              <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
              <span>Exclusive Broker-Free Liquidations</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
              Portfolio Showcase & <span className="italic text-luxury-gold">Acquisition Desk</span>
            </h1>
            <div className="w-16 h-[1px] bg-luxury-gold/50 mx-auto mt-4" />
            <p className="font-sans font-light text-gray-300 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
              Avoid 15% middle-man brokerage fees. Acquire any of these pre-registered premium assets securely via GoDaddy, Afternic, or direct contract arrangement.
            </p>
          </div>

          {/* Grid of All Portfolio Domains */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PORTFOLIO_DOMAINS.map((domain) => (
              <motion.div
                key={domain.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#1a1c1e] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-luxury-gold/35 hover:bg-[#212327] transition-all group"
              >
                <div className="space-y-4">
                  {/* Tags */}
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono uppercase bg-white/5 text-gray-400 px-2.5 py-0.5 rounded-sm">
                      {domain.category}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-luxury-gold font-semibold tracking-wider">
                      {domain.highlight}
                    </span>
                  </div>

                  {/* Name */}
                  <div className="space-y-1">
                    <a
                      href={`http://${domain.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-xl xs:text-2xl text-white font-bold hover:text-luxury-gold transition-colors inline-flex flex-wrap items-center gap-1.5 group/title cursor-pointer break-all sm:break-normal"
                    >
                      <span>{domain.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-gray-500 group-hover/title:text-luxury-gold transition-colors shrink-0" />
                    </a>
                    <p className="text-[11px] font-sans text-luxury-gold/80 italic font-medium leading-tight">
                      {domain.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-400 font-light font-sans leading-relaxed">
                    {domain.description}
                  </p>

                  {/* Features */}
                  <div className="pt-2 border-t border-white/5 space-y-2">
                    {domain.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-[11px] text-gray-300">
                        <span className="text-luxury-gold font-mono shrink-0 mt-0.5">&bull;</span>
                        <span className="font-light">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Checkout CTA */}
                <div className="pt-6 mt-6 border-t border-white/5">
                  <a
                    href={`http://${domain.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#10b981] hover:bg-emerald-600 text-white font-sans font-bold text-xs tracking-widest uppercase rounded flex items-center justify-center space-x-1.5 transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Visit & Acquire Domain</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Secure escrows overview banner */}
          <div className="bg-neutral-950 p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="font-serif text-lg text-white font-semibold">Interested in immediate Direct Acquisition?</h4>
              <p className="text-xs text-gray-400 font-sans font-light max-w-xl">
                Purchase instantly via GoDaddy Escrow, or solve our encryption verification puzzle to contact our administrators directly for custom contract arrangements.
              </p>
            </div>

            <div className="shrink-0 flex gap-4 w-full md:w-auto">
              <button
                onClick={() => {
                  onViewChange("contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full md:w-auto px-6 py-3 bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-charcoal font-sans font-semibold text-xs tracking-widest uppercase rounded transition-colors cursor-pointer flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Domain Desk</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // DEFAULT (HOME) VIEW SHOWCASE
  return (
    <div className="w-full">
      {/* 2. EXCLUSIVE SINGLE-DOMAIN SHOWCASE ON HOME */}
      <section id="domain_merchandising_section" className="py-20 px-4 md:px-12 bg-white text-luxury-charcoal border-b border-luxury-linen">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Heading */}
          <div className="text-center space-y-4">
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-semibold font-sans block">
              Direct GoDaddy / Afternic Protected Transaction
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-luxury-charcoal font-light">
              Acquire This <span className="italic text-luxury-gold-dark text-4xl md:text-6xl font-serif">Premium Namespace</span>
            </h2>
            <div className="w-16 h-[1px] bg-luxury-gold/50 mx-auto" />
            <p className="font-sans text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
              We present <strong className="text-luxury-charcoal">eleganttaste.com</strong>, an unmatched title for prestige gastronomy, secured by instant automated GoDaddy Premium checkout.
            </p>
          </div>

          {/* Secure Escrow Badging */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto bg-luxury-cream/40 p-4 rounded-xl border border-luxury-linen/65 text-center">
            <div className="flex items-center justify-center space-x-2 text-xs font-medium text-gray-600">
              <Shield className="w-4 h-4 text-luxury-gold" />
              <span>Escrow Protected Checkout</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-xs font-medium text-gray-600 border-y sm:border-y-0 sm:border-x border-lucky-linen border-luxury-linen py-2 sm:py-0">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span>Instant Registrar Push Transfer</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-xs font-medium text-gray-600">
              <Check className="w-4 h-4 text-blue-600" />
              <span>Buyout Verified via GoDaddy</span>
            </div>
          </div>

          {/* Active Domain Details Board */}
          <div className="bg-luxury-cream p-6 md:p-10 rounded-2xl border border-luxury-linen/70 shadow-xs max-w-4xl mx-auto relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Profile Side */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-sans uppercase bg-luxury-gold/15 text-luxury-gold-dark px-2.5 py-0.5 rounded-sm font-semibold tracking-wider">
                      {primaryDomain.category}
                    </span>
                    <span className="text-[10px] font-sans uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-sm font-semibold">
                      {primaryDomain.highlight}
                    </span>
                  </div>
                  <a
                    href={`http://${primaryDomain.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-2xl xs:text-3xl md:text-5xl text-luxury-charcoal font-bold tracking-tight hover:text-luxury-gold transition-colors inline-flex flex-wrap items-center gap-1.5 sm:gap-2 group/title cursor-pointer break-all sm:break-normal"
                  >
                    <span>{primaryDomain.name}</span>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover/title:text-luxury-gold transition-colors shrink-0" />
                  </a>
                  <p className="font-sans text-xs text-luxury-gold-dark uppercase tracking-widest font-semibold italic">
                    {primaryDomain.tagline}
                  </p>
                </div>

                <p className="font-sans text-sm text-gray-600 leading-relaxed font-light">
                  {primaryDomain.description}
                </p>

                {/* Bullets */}
                <div className="space-y-3">
                  <span className="text-xs uppercase font-sans tracking-wide font-semibold text-luxury-charcoal block">
                    Domain Stature Checklist
                  </span>
                  {primaryDomain.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-gray-650 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      onViewChange("portfolio");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="inline-flex items-center space-x-2 text-luxury-gold-dark hover:text-luxury-charcoal font-semibold text-xs uppercase tracking-wider py-1.5 border-b border-luxury-gold/45 hover:border-luxury-charcoal transition-all cursor-pointer"
                  >
                    <span>Browse boutique domain list</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action checkout block */}
              <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-luxury-linen shadow-xs flex flex-col justify-between space-y-6 h-full">
                <div className="space-y-2 text-center">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400 block font-bold">
                    Safe Purchase Marketplace
                  </span>
                  <div className="w-full h-[1px] bg-luxury-linen" />
                </div>

                <div className="space-y-3">
                  {/* GoDaddy Primary Option */}
                  <a
                    href={primaryDomain.afternicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-[#10b981] hover:bg-emerald-600 text-white font-sans text-xs font-bold tracking-widest uppercase rounded shadow-xs transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Instant GoDaddy checkout</span>
                    <ArrowUpRight className="w-4.5 h-4.5" />
                  </a>

                  {/* Direct Website / Lander */}
                  <a
                    href={`http://${primaryDomain.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 border border-gray-200 hover:border-luxury-gold hover:bg-luxury-cream text-gray-700 font-sans text-xs font-semibold tracking-wide rounded transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Preview Live Domain</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Direct Inquiry Option */}
                  <button
                    onClick={() => {
                      onViewChange("contact");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="w-full py-3 border border-dashed border-luxury-gold-dark/40 hover:border-luxury-gold-dark text-luxury-gold-dark hover:bg-luxury-cream/30 font-sans text-xs font-semibold tracking-wide rounded transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Reveal Contact Email</span>
                  </button>
                </div>

                <div className="text-[10px] text-gray-400 font-sans text-center leading-normal italic select-none">
                  *Payments are locked in escrow to guarantee complete security.
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
