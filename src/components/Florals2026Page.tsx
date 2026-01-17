import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { Layers, Filter, ArrowUpDown, Droplets, FlaskConical, Sun, Aperture, Zap } from "lucide-react";
import { COLORS } from "./tokens/florals2026";
import { FLORAL_CARDS, type FloralTag } from "./Florals2026.data";
import { GLASS_ORCHID_VARIANTS } from "./GlassOrchid.variants";
import { MODERN_TULIP_VARIANTS } from "./ModernTulip.variants";
import { DAISY_VARIANTS } from "./AnimatedDaisy.variants";
import { GlassOrchid } from "./florals/GlassOrchid";
import { ModernTulip } from "./florals/ModernTulip";
import { AnimatedDaisy } from "./florals/AnimatedDaisy";
import ColorPalette from "./ColorPalette";
import { BentoCard } from "./BentoCard";
import { useState, useMemo } from "react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Florals2026Page() {
  const shouldReduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<FloralTag | "All">("All");
  const [sort, setSort] = useState<"Featured" | "Newest" | "Most Motion" | "Least Motion">("Featured");

  const filteredAndSortedCards = useMemo(() => {
    let result = [...FLORAL_CARDS];

    // Filter
    if (filter !== "All") {
      result = result.filter(card => card.tags.includes(filter));
    }

    // Sort
    result.sort((a, b) => {
      switch (sort) {
        case "Featured":
          return (a.featured === b.featured) ? 0 : a.featured ? -1 : 1;
        case "Newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "Most Motion":
          return b.motionIntensity - a.motionIntensity;
        case "Least Motion":
          return a.motionIntensity - b.motionIntensity;
        default:
          return 0;
      }
    });

    return result;
  }, [filter, sort]);

  return (
    <section
      className="py-[clamp(3rem,8vw,6rem)]"
      aria-labelledby="florals-2026-heading"
      style={{ backgroundColor: COLORS.bg }}
    >
      <div className="container-responsive max-w-[1440px]">
        {/* Header Section */}
        <motion.div 
          className="mb-16 md:mb-24 text-center"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-4 inline-block rounded-full border border-[#e8e6e3] bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#5f5d5b]">
            Experimental Lab
          </span>
          <h2
            id="florals-2026-heading"
            className="font-display text-[clamp(4rem,15vw,12rem)] leading-[0.85] text-[#1a1817]"
          >
            2026
          </h2>
          <p className="font-display text-[clamp(1.5rem,4vw,3rem)] text-[#5f5d5b] mt-4">
            New Concepts
          </p>
          <p className="mx-auto mt-8 max-w-[600px] text-lg leading-relaxed text-[#5f5d5b]">
            Experimenting with form, color, and mathematical precision using our new 2026 palette.
          </p>
        </motion.div>

        {/* Palette Section */}
        <motion.div
            className="mb-24 rounded-[2.5rem] bg-white p-8 md:p-12 shadow-sm border border-[#e8e6e3] relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="flex flex-col xl:flex-row gap-12">
                <div className="flex-shrink-0 xl:w-64">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#faf9f7] border border-[#e8e6e3]">
                            <Zap className="h-6 w-6 text-[#1a1817]" fill="currentColor" />
                        </div>
                        <div>
                            <h3 className="font-display text-2xl text-[#1a1817]">2026 Palette</h3>
                            <p className="text-[#5f5d5b]">Vibrant & Modern</p>
                        </div>
                    </div>
                    <p className="mt-6 text-sm text-[#9b9894] leading-relaxed">
                        A curated collection of high-energy neons, deep voids, and soft pastels designed for the next generation of floral interfaces. Click any color to copy.
                    </p>
                </div>
                
                <div className="flex-grow">
                     <ColorPalette />
                </div>
            </div>
        </motion.div>

        {/* Controls */}
        <div className="mb-8 flex flex-col gap-6 border-y border-[#e8e6e3] py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 flex items-center gap-2 text-sm font-medium text-[#9b9894]">
              <Filter className="h-4 w-4" /> Filter:
            </span>
            {(["All", "Geometry", "Neon", "Data", "Soft", "Void"] as const).map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`filter-chip ${filter === tag ? "active" : ""}`}
                aria-pressed={filter === tag}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-2 text-sm font-medium text-[#9b9894]">
              <ArrowUpDown className="h-4 w-4" /> Sort:
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {(["Featured", "Newest", "Most Motion", "Least Motion"] as const).map((option) => (
                <button
                  key={option}
                  onClick={() => setSort(option)}
                  className={`text-sm font-medium transition-colors hover:text-[#1a1817] ${
                    sort === option ? "text-[#1a1817] underline decoration-2 underline-offset-4" : "text-[#5f5d5b]"
                  }`}
                  aria-pressed={sort === option}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Bento Grid Layout */}
        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-12 auto-rows-[400px] grid-flow-dense mb-32"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {filteredAndSortedCards.map((card) => (
              <BentoCard 
                key={card.key}
                className={card.className}
                title={card.title}
                subtitle={card.subtitle}
                icon={card.icon}
                layout={!shouldReduceMotion}
              >
                {card.render}
              </BentoCard>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Glass Orchid Studies Subheader Section */}
        <div className="relative border-t border-[#e8e6e3] pt-24 mb-24">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#faf9f7] px-6">
                <div className="flex items-center gap-3 rounded-full border border-[#e8e6e3] bg-white px-4 py-2 shadow-sm">
                    <FlaskConical className="h-4 w-4 text-[#446CCF]" />
                    <span className="text-sm font-medium uppercase tracking-widest text-[#1a1817]">Study Series 01</span>
                </div>
            </div>

            <motion.div
                className="mb-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h3 className="font-display text-4xl text-[#1a1817] mb-3">Glass Orchid</h3>
                <p className="text-[#5f5d5b] text-lg max-w-xl mx-auto">
                    A parameter-driven exploration of transparency, refractive layers, and rotational motion.
                </p>
            </motion.div>
            
            {/* Optimized Grid for Glass Orchid Studies */}
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {GLASS_ORCHID_VARIANTS.map((study) => (
                <div 
                    key={study.id}
                    className="group relative flex flex-col rounded-xl border border-[#e8e6e3] bg-white p-3 transition-all duration-300 hover:border-[#446CCF]/40 hover:shadow-md hover:-translate-y-1"
                >
                    <div className="aspect-square w-full mb-3 bg-[#faf9f7] rounded-lg overflow-hidden flex items-center justify-center p-8">
                        <GlassOrchid variant={study.variant} className="transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="px-1 pb-1">
                        <h4 className="text-sm font-medium text-[#1a1817] truncate">{study.title.replace('Glass Orchid ', '')}</h4>
                        <p className="text-xs text-[#9b9894] mt-0.5 truncate">{study.subtitle}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>

        {/* Modern Tulip Studies Subheader Section */}
        <div className="relative border-t border-[#e8e6e3] pt-24 mb-24">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#faf9f7] px-6">
                <div className="flex items-center gap-3 rounded-full border border-[#e8e6e3] bg-white px-4 py-2 shadow-sm">
                    <Sun className="h-4 w-4 text-[#FF9F1C]" />
                    <span className="text-sm font-medium uppercase tracking-widest text-[#1a1817]">Study Series 02</span>
                </div>
            </div>

            <motion.div
                className="mb-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h3 className="font-display text-4xl text-[#1a1817] mb-3">Modern Tulip</h3>
                <p className="text-[#5f5d5b] text-lg max-w-xl mx-auto">
                    Investigating symmetry, border curvature, and color overlay blending modes.
                </p>
            </motion.div>
            
            {/* Optimized Grid for Modern Tulip Studies */}
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {MODERN_TULIP_VARIANTS.map((study) => (
                <div 
                    key={study.id}
                    className="group relative flex flex-col rounded-xl border border-[#e8e6e3] bg-white p-3 transition-all duration-300 hover:border-[#FF9F1C]/40 hover:shadow-md hover:-translate-y-1"
                >
                    <div className="aspect-square w-full mb-3 bg-[#faf9f7] rounded-lg overflow-hidden flex items-center justify-center p-8">
                        <ModernTulip variant={study.variant} className="transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="px-1 pb-1">
                        <h4 className="text-sm font-medium text-[#1a1817] truncate">{study.title.replace('Modern Tulip ', '')}</h4>
                        <p className="text-xs text-[#9b9894] mt-0.5 truncate">{study.subtitle}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>

         {/* Abstract Daisy Studies Subheader Section */}
         <div className="relative border-t border-[#e8e6e3] pt-24">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#faf9f7] px-6">
                <div className="flex items-center gap-3 rounded-full border border-[#e8e6e3] bg-white px-4 py-2 shadow-sm">
                    <Aperture className="h-4 w-4 text-[#F2D379]" />
                    <span className="text-sm font-medium uppercase tracking-widest text-[#1a1817]">Study Series 03</span>
                </div>
            </div>

            <motion.div
                className="mb-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h3 className="font-display text-4xl text-[#1a1817] mb-3">Radial Construct</h3>
                <p className="text-[#5f5d5b] text-lg max-w-xl mx-auto">
                    Abstracting the daisy form into mechanical turbines, radar sweeps, and geometric rosettes.
                </p>
            </motion.div>
            
            {/* Optimized Grid for Abstract Daisy Studies */}
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {DAISY_VARIANTS.map((study) => (
                <div 
                    key={study.id}
                    className="group relative flex flex-col rounded-xl border border-[#e8e6e3] bg-white p-3 transition-all duration-300 hover:border-[#F2D379]/40 hover:shadow-md hover:-translate-y-1"
                >
                    <div className="aspect-square w-full mb-3 bg-[#faf9f7] rounded-lg overflow-hidden flex items-center justify-center p-8">
                        <AnimatedDaisy variant={study.variant} className="transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="px-1 pb-1">
                        <h4 className="text-sm font-medium text-[#1a1817] truncate">{study.title.replace('Daisy ', '')}</h4>
                        <p className="text-xs text-[#9b9894] mt-0.5 truncate">{study.subtitle}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>

        {/* Newsletter / Signup Section */}
        <motion.div 
          className="mt-32 rounded-[2rem] bg-white border border-[#e8e6e3] p-8 md:p-16 text-center shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Layers className="mx-auto h-12 w-12 text-[#446CCF] mb-6" />
          <h3 className="font-display text-3xl md:text-4xl text-[#1a1817] mb-4">
            Critique the Collection
          </h3>
          <p className="text-[#5f5d5b] max-w-md mx-auto mb-8">
            These designs are currently in the experimental phase. Join the beta to provide feedback.
          </p>
          <form 
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="email-signup" className="sr-only">Email address</label>
            <input 
              id="email-signup"
              type="email" 
              name="email"
              autoComplete="email"
              placeholder="Enter your email" 
              className="flex-1 rounded-full border border-[#e8e6e3] bg-[#faf9f7] px-6 py-3 text-[#1a1817] focus:outline-none focus:ring-2 focus:ring-[#446CCF]"
              required
            />
            <button 
              type="submit"
              className="rounded-full bg-[#1a1817] px-8 py-3 font-medium text-white transition-transform hover:scale-105 active:scale-95"
            >
              Join Beta
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
