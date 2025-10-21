import { useState, useEffect } from "react";
import { Menu, X, Download, Palette, Layers } from "lucide-react";
import FloralOne from "./components/floral-design-system/FloralOne";
import FloralTwo from "./components/floral-design-system/FloralTwo";
import FloralThree from "./components/floral-design-system/FloralThree";
import FloralFour from "./components/floral-design-system/FloralFour";
import FloralFive from "./components/floral-design-system/FloralFive";
import FloralSix from "./components/floral-design-system/FloralSix";
import FloralSeven from "./components/floral-design-system/FloralSeven";
import FloralEight from "./components/floral-design-system/FloralEight";
import FloralNine from "./components/floral-design-system/FloralNine";
import FloralTen from "./components/floral-design-system/FloralTen";
import FloralEleven from "./components/floral-design-system/FloralEleven";
import FloralTwelve from "./components/floral-design-system/FloralTwelve";
import FloralThirteen from "./components/floral-design-system/FloralThirteen";
import FloralFourteen from "./components/floral-design-system/FloralFourteen";
import FloralFifteen from "./components/floral-design-system/FloralFifteen";
import FloralSixteen from "./components/floral-design-system/FloralSixteen";
import FloralSeventeen from "./components/floral-design-system/FloralSeventeen";
import FloralEighteen from "./components/floral-design-system/FloralEighteen";
import FloralNineteen from "./components/floral-design-system/FloralNineteen";
import FloralTwenty from "./components/floral-design-system/FloralTwenty";
import FloralTwentyOne from "./components/floral-design-system/FloralTwentyOne";
import FloralTwentyTwo from "./components/floral-design-system/FloralTwentyTwo";
import FloralTwentyThree from "./components/floral-design-system/FloralTwentyThree";
import FloralTwentyFour from "./components/floral-design-system/FloralTwentyFour";
import FloralTwentyFive from "./components/floral-design-system/FloralTwentyFive";
import FloralTwentySix from "./components/floral-design-system/FloralTwentySix";
import FloralTwentySeven from "./components/floral-design-system/FloralTwentySeven";
import FloralTwentyEight from "./components/floral-design-system/FloralTwentyEight";
import FloralTwentyNine from "./components/floral-design-system/FloralTwentyNine";
import FloralThirty from "./components/floral-design-system/FloralThirty";
import FloralThirtyOne from "./components/floral-design-system/FloralThirtyOne";
import FloralThirtyTwo from "./components/floral-design-system/FloralThirtyTwo";
import StemOne from "./components/floral-design-system/StemOne";
import StemTwo from "./components/floral-design-system/StemTwo";
import StemThree from "./components/floral-design-system/StemThree";
import StemFour from "./components/floral-design-system/StemFour";
import StemFive from "./components/floral-design-system/StemFive";
import StemSix from "./components/floral-design-system/StemSix";
import StemSeven from "./components/floral-design-system/StemSeven";
import StemEight from "./components/floral-design-system/StemEight";
import StemNine from "./components/floral-design-system/StemNine";
import StemTen from "./components/floral-design-system/StemTen";
import StemEleven from "./components/floral-design-system/StemEleven";
import StemTwelve from "./components/floral-design-system/StemTwelve";
import TileImageCard from "./components/floral-design-system/TileImageCard";
import VectorCard from "./components/floral-design-system/VectorCard";
import { floralColors } from "./components/floral-design-system/colors";

type Category = "all" | "florals" | "stems";

interface DesignItem {
  Component: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  desc: string;
  colors: string[];
  category: "floral" | "stem";
}

const allDesigns: DesignItem[] = [
  // Florals
  { Component: FloralOne, name: "FloralOne", desc: "Coral red 6-petal daisy", colors: ["#E64A2E", "#1A1A1A"], category: "floral" },
  { Component: FloralTwo, name: "FloralTwo", desc: "Teal blue 8-petal sunburst", colors: ["#4A7C8C", "#F5EFE0"], category: "floral" },
  { Component: FloralThree, name: "FloralThree", desc: "Black & coral layered", colors: ["#1A1A1A", "#E64A2E", "#F5EFE0"], category: "floral" },
  { Component: FloralFour, name: "FloralFour", desc: "Cream clover with diamond", colors: ["#F5EFE0", "#4A7C8C"], category: "floral" },
  { Component: FloralFive, name: "FloralFive", desc: "Coral & black alternating", colors: ["#E64A2E", "#1A1A1A", "#F5EFE0"], category: "floral" },
  { Component: FloralSix, name: "FloralSix", desc: "Black with coral accent", colors: ["#1A1A1A", "#E64A2E", "#F5EFE0"], category: "floral" },
  { Component: FloralSeven, name: "FloralSeven", desc: "Teal & cream double", colors: ["#4A7C8C", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralEight, name: "FloralEight", desc: "Coral tulip", colors: ["#E64A2E", "#E8663F", "#1A1A1A"], category: "floral" },
  { Component: FloralNine, name: "FloralNine", desc: "Geometric striped", colors: ["#1A1A1A", "#F5EFE0"], category: "floral" },
  { Component: FloralTen, name: "FloralTen", desc: "Teal & coral pair", colors: ["#4A7C8C", "#E64A2E", "#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralEleven, name: "FloralEleven", desc: "Cream starburst", colors: ["#F5EFE0", "#1A1A1A"], category: "floral" },
  { Component: FloralTwelve, name: "FloralTwelve", desc: "Multi-color abstract", colors: ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A", "#E8663F"], category: "floral" },
  { Component: FloralThirteen, name: "FloralThirteen", desc: "Terracotta & sage layered", colors: ["#C9604A", "#9CAF88", "#F5EFE0"], category: "floral" },
  { Component: FloralFourteen, name: "FloralFourteen", desc: "Mustard sunburst", colors: ["#D4A62A", "#7A8450"], category: "floral" },
  { Component: FloralFifteen, name: "FloralFifteen", desc: "Lavender & rose daisy", colors: ["#B8A9C9", "#C9858D"], category: "floral" },
  { Component: FloralSixteen, name: "FloralSixteen", desc: "Mint green clover", colors: ["#A8C9B8", "#2F5B6B"], category: "floral" },
  { Component: FloralSeventeen, name: "FloralSeventeen", desc: "Coral & orange abstract", colors: ["#F08080", "#D47647", "#FAF7F2"], category: "floral" },
  { Component: FloralEighteen, name: "FloralEighteen", desc: "Olive & gold geometric", colors: ["#F2A818", "#7A8450", "#1A1A1A"], category: "floral" },
  { Component: FloralNineteen, name: "FloralNineteen", desc: "Rose striped modern", colors: ["#C9858D", "#F5EFE0", "#2D2D2D"], category: "floral" },
  { Component: FloralTwenty, name: "FloralTwenty", desc: "Teal & terracotta tulip", colors: ["#2F5B6B", "#C9604A"], category: "floral" },
  { Component: FloralTwentyOne, name: "FloralTwentyOne", desc: "Sage & mustard alternating", colors: ["#9CAF88", "#D4A62A", "#1A1A1A"], category: "floral" },
  { Component: FloralTwentyTwo, name: "FloralTwentyTwo", desc: "Lavender double ring", colors: ["#B8A9C9", "#E8DCC8"], category: "floral" },
  { Component: FloralTwentyThree, name: "FloralTwentyThree", desc: "Orange & mint bloom", colors: ["#D47647", "#A8C9B8", "#FAF7F2"], category: "floral" },
  { Component: FloralTwentyFour, name: "FloralTwentyFour", desc: "Soft coral star", colors: ["#F08080", "#E8DCC8", "#2D2D2D"], category: "floral" },
  { Component: FloralTwentyFive, name: "FloralTwentyFive", desc: "Triple bloom cluster", colors: ["#C9604A", "#7A8450", "#F5EFE0"], category: "floral" },
  { Component: FloralTwentySix, name: "FloralTwentySix", desc: "Mustard & teal pinwheel", colors: ["#D4A62A", "#2F5B6B", "#F5EFE0"], category: "floral" },
  { Component: FloralTwentySeven, name: "FloralTwentySeven", desc: "Rose & lavender dahlia", colors: ["#C9858D", "#B8A9C9", "#F5EFE0"], category: "floral" },
  { Component: FloralTwentyEight, name: "FloralTwentyEight", desc: "Mint & coral simple", colors: ["#A8C9B8", "#F08080", "#FAF7F2"], category: "floral" },
  { Component: FloralTwentyNine, name: "FloralTwentyNine", desc: "Sage geometric square", colors: ["#9CAF88", "#D47647", "#E8DCC8", "#1A1A1A"], category: "floral" },
  { Component: FloralThirty, name: "FloralThirty", desc: "Terracotta layered circles", colors: ["#C9604A", "#B8A9C9", "#F5EFE0"], category: "floral" },
  { Component: FloralThirtyOne, name: "FloralThirtyOne", desc: "Teal & gold bold daisy", colors: ["#2F5B6B", "#F2A818", "#1A1A1A"], category: "floral" },
  { Component: FloralThirtyTwo, name: "FloralThirtyTwo", desc: "Rainbow celebration", colors: ["#E64A2E", "#4A7C8C", "#F2A818", "#9CAF88", "#B8A9C9", "#C9858D", "#D4A62A", "#F08080", "#7A8450", "#D47647"], category: "floral" },
  
  // Stems
  { Component: StemOne, name: "StemOne", desc: "Simple two-leaf stem", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemTwo, name: "StemTwo", desc: "Four-leaf classic stem", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemThree, name: "StemThree", desc: "Curved alternating leaves", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemFour, name: "StemFour", desc: "Branching with buds", colors: ["#7A8450", "#9CAF88", "#E64A2E"], category: "stem" },
  { Component: StemFive, name: "StemFive", desc: "Tall six-leaf stem", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemSix, name: "StemSix", desc: "Single large leaf", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemSeven, name: "StemSeven", desc: "Heart-shaped leaves", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemEight, name: "StemEight", desc: "Double curved stems", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemNine, name: "StemNine", desc: "Fern-like multi-leaf", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemTen, name: "StemTen", desc: "Bamboo segmented", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemEleven, name: "StemEleven", desc: "Willow drooping style", colors: ["#7A8450", "#9CAF88"], category: "stem" },
  { Component: StemTwelve, name: "StemTwelve", desc: "Vine spiral stem", colors: ["#7A8450", "#9CAF88"], category: "stem" },
];

export default function App() {
  const [categoryFilter, setCategoryFilter] = useState<Category>("all");
  const [activeSection, setActiveSection] = useState<string>("gallery");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const filteredDesigns = allDesigns.filter(design => {
    if (categoryFilter === "all") return true;
    if (categoryFilter === "florals") return design.category === "floral";
    if (categoryFilter === "stems") return design.category === "stem";
    return true;
  });

  const floralCount = allDesigns.filter(d => d.category === "floral").length;
  const stemCount = allDesigns.filter(d => d.category === "stem").length;

  // Close mobile menu when section changes
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  // Detect scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Luxury Header with Scroll Detection */}
      <header className={`luxury-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="luxury-title">
                Floral Design System
              </h1>
              <p className="meta-label mt-1">{floralCount + stemCount} geometric designs</p>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setActiveSection("gallery")}
                className={`capsule-btn capsule-btn-peach ${
                  activeSection === "gallery" ? "capsule-btn-active" : ""
                }`}
              >
                Gallery
              </button>
              <button
                onClick={() => setActiveSection("vectors")}
                className={`capsule-btn capsule-btn-mint ${
                  activeSection === "vectors" ? "capsule-btn-active" : ""
                }`}
              >
                <Download className="inline-block w-4 h-4 mr-2" />
                Vectors
              </button>
              <button
                onClick={() => setActiveSection("variations")}
                className={`capsule-btn capsule-btn-lavender ${
                  activeSection === "variations" ? "capsule-btn-active" : ""
                }`}
              >
                <Palette className="inline-block w-4 h-4 mr-2" />
                Variations
              </button>
              <button
                onClick={() => setActiveSection("palette")}
                className={`capsule-btn capsule-btn-cream ${
                  activeSection === "palette" ? "capsule-btn-active" : ""
                }`}
              >
                Colors
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-2 border-t border-[#E6E3DE]/40 pt-4">
              <button
                onClick={() => handleSectionChange("gallery")}
                className={`capsule-btn-mobile ${
                  activeSection === "gallery" ? "capsule-btn-mobile-active" : ""
                }`}
              >
                <Layers className="inline-block w-5 h-5 mr-3" />
                Gallery
              </button>
              <button
                onClick={() => handleSectionChange("vectors")}
                className={`capsule-btn-mobile ${
                  activeSection === "vectors" ? "capsule-btn-mobile-active" : ""
                }`}
              >
                <Download className="inline-block w-5 h-5 mr-3" />
                Vectors
              </button>
              <button
                onClick={() => handleSectionChange("variations")}
                className={`capsule-btn-mobile ${
                  activeSection === "variations" ? "capsule-btn-mobile-active" : ""
                }`}
              >
                <Palette className="inline-block w-5 h-5 mr-3" />
                Color Variations
              </button>
              <button
                onClick={() => handleSectionChange("palette")}
                className={`capsule-btn-mobile ${
                  activeSection === "palette" ? "capsule-btn-mobile-active" : ""
                }`}
              >
                <Layers className="inline-block w-5 h-5 mr-3" />
                Colors
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-8">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Gallery Section */}
          {activeSection === "gallery" && (
            <div className="space-y-12">
              {/* Filter Pills */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setCategoryFilter("all")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    categoryFilter === "all"
                      ? "bg-black text-white shadow-lg shadow-black/20"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  All <span className="ml-2 text-xs opacity-70">{allDesigns.length}</span>
                </button>
                <button
                  onClick={() => setCategoryFilter("florals")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    categoryFilter === "florals"
                      ? "bg-black text-white shadow-lg shadow-black/20"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Florals <span className="ml-2 text-xs opacity-70">{floralCount}</span>
                </button>
                <button
                  onClick={() => setCategoryFilter("stems")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    categoryFilter === "stems"
                      ? "bg-black text-white shadow-lg shadow-black/20"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Stems <span className="ml-2 text-xs opacity-70">{stemCount}</span>
                </button>
              </div>

              {/* Design Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                {filteredDesigns.map(({ Component, name, desc, colors }) => (
                  <TileImageCard
                    key={name}
                    id={`floral-${name.toLowerCase()}`}
                    Component={Component}
                    name={name}
                    desc={desc}
                    colors={colors}
                    size={140}
                    onDownload={(name) => console.log(`Downloaded ${name}`)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Vectors Section */}
          {activeSection === "vectors" && (
            <div className="space-y-12">
              {/* Section Header */}
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="heading-xl text-balance mb-6">
                  Vector Downloads
                </h2>
                <p className="body-text text-pretty measure mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Download SVG files or copy code directly. All vectors include embedded metadata for easy organization.
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setCategoryFilter("all")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    categoryFilter === "all"
                      ? "bg-black text-white shadow-lg shadow-black/20"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  All <span className="ml-2 text-xs opacity-70">{allDesigns.length}</span>
                </button>
                <button
                  onClick={() => setCategoryFilter("florals")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    categoryFilter === "florals"
                      ? "bg-black text-white shadow-lg shadow-black/20"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Florals <span className="ml-2 text-xs opacity-70">{floralCount}</span>
                </button>
                <button
                  onClick={() => setCategoryFilter("stems")}
                  className={`px-8 py-3 rounded-full text-sm transition-all ${
                    categoryFilter === "stems"
                      ? "bg-black text-white shadow-lg shadow-black/20"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Stems <span className="ml-2 text-xs opacity-70">{stemCount}</span>
                </button>
              </div>

              {/* Design Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                {filteredDesigns.map(({ Component, name, desc }) => (
                  <div
                    key={name}
                    className="group relative aspect-square bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <Component size={140} />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white space-y-1">
                        <p className="text-xs opacity-90">{desc}</p>
                        <p className="text-[10px] opacity-70">Click to download SVG or copy code</p>
                      </div>
                    </div>

                    {/* Vector Download/Copy Buttons */}
                    <VectorCard 
                      Component={Component} 
                      name={name} 
                      desc={desc}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Variations Section */}
          {activeSection === "variations" && (
            <div className="space-y-20">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 
                  className="text-balance mb-6"
                  style={{
                    fontSize: 'var(--text-3xl)',
                    lineHeight: 'var(--leading-snug)',
                    letterSpacing: 'var(--tracking-tight)',
                    fontWeight: '700'
                  }}
                >
                  Color Variations
                </h2>
                <p 
                  className="text-pretty measure mx-auto"
                  style={{
                    fontSize: 'var(--text-lg)',
                    lineHeight: 'var(--leading-relaxed)',
                    color: 'rgb(107 114 128)',
                    fontWeight: '400'
                  }}
                >
                  All stems support custom color palettes for endless design possibilities
                </p>
              </div>

              {/* Featured Variations */}
              {[
                { stem: StemOne, name: "StemOne", title: "Simple Two-Leaf" },
                { stem: StemFour, name: "StemFour", title: "Branching Stems" },
                { stem: StemSix, name: "StemSix", title: "Large Leaf" },
                { stem: StemNine, name: "StemNine", title: "Fern-Like" }
              ].map(({ stem: Stem, name, title }) => (
                <div key={name} className="space-y-8">
                  <h3 className="text-xl text-gray-900">{title}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {[
                      { stem: floralColors.oliveGreen, leaf: floralColors.sageGreen, label: "Forest" },
                      { stem: floralColors.deepTeal, leaf: floralColors.mintGreen, label: "Ocean" },
                      { stem: floralColors.terracotta, leaf: floralColors.burntOrange, label: "Autumn" },
                      { stem: floralColors.charcoal, leaf: floralColors.dustyRose, label: "Vintage" },
                      { stem: floralColors.mustardGold, leaf: floralColors.goldenYellow, label: "Golden" }
                    ].map((colors, i) => (
                      <div key={i} className="aspect-square bg-gray-50 rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                        <Stem size={140} stemColor={colors.stem} leafColor={colors.leaf} budColor={name === "StemFour" ? floralColors.coralRed : undefined} />
                        <p className="text-xs text-gray-500 mt-4">{colors.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* All Stems Themes */}
              <div className="space-y-16 pt-8">
                {[
                  { theme: "Forest", stem: floralColors.oliveGreen, leaf: floralColors.sageGreen },
                  { theme: "Ocean", stem: floralColors.deepTeal, leaf: floralColors.tealBlue },
                  { theme: "Autumn", stem: floralColors.terracotta, leaf: floralColors.burntOrange }
                ].map(({ theme, stem, leaf }) => (
                  <div key={theme} className="space-y-8">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl text-gray-900">{theme} Collection</h3>
                      <div className="h-px flex-1 bg-gray-200" />
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4">
                      {[StemOne, StemTwo, StemThree, StemFour, StemFive, StemSix, StemSeven, StemEight, StemNine, StemTen, StemEleven, StemTwelve].map((Stem, i) => (
                        <div key={i} className="aspect-square bg-gray-50 rounded-xl p-3 hover:shadow-lg transition-shadow">
                          <Stem size={80} stemColor={stem} leafColor={leaf} budColor={i === 3 ? floralColors.coralRed : undefined} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Palette Section */}
          {activeSection === "palette" && (
            <div className="space-y-16">
              <div className="text-center max-w-2xl mx-auto">
                <h2 
                  className="text-balance mb-6"
                  style={{
                    fontSize: 'var(--text-3xl)',
                    lineHeight: 'var(--leading-snug)',
                    letterSpacing: 'var(--tracking-tight)',
                    fontWeight: '700'
                  }}
                >
                  Color Palette
                </h2>
                <p 
                  className="text-pretty measure mx-auto"
                  style={{
                    fontSize: 'var(--text-lg)',
                    lineHeight: 'var(--leading-relaxed)',
                    color: 'rgb(107 114 128)',
                    fontWeight: '400'
                  }}
                >
                  23 carefully curated mid-century modern colors
                </p>
              </div>

              <div className="space-y-12">
                {/* Primary Colors */}
                <div className="space-y-6">
                  <h3 className="text-sm uppercase tracking-wider text-gray-400">Primary</h3>
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    {[
                      { color: floralColors.coralRed, name: "Coral Red" },
                      { color: floralColors.warmOrange, name: "Warm Orange" },
                      { color: floralColors.tealBlue, name: "Teal Blue" }
                    ].map(({ color, name }) => (
                      <div key={name} className="group space-y-3">
                        <div 
                          className="aspect-square rounded-2xl shadow-lg transition-transform hover:scale-105"
                          style={{ backgroundColor: color }}
                        />
                        <div className="space-y-1">
                          <p className="text-sm">{name}</p>
                          <p className="text-xs text-gray-400 font-mono">{color}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Extended Palette */}
                <div className="space-y-6">
                  <h3 className="text-sm uppercase tracking-wider text-gray-400">Extended</h3>
                  <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-4">
                    {[
                      { color: floralColors.terracotta, name: "Terracotta" },
                      { color: floralColors.burntOrange, name: "Burnt Orange" },
                      { color: floralColors.mustardGold, name: "Mustard" },
                      { color: floralColors.goldenYellow, name: "Golden" },
                      { color: floralColors.oliveGreen, name: "Olive" },
                      { color: floralColors.sageGreen, name: "Sage" },
                      { color: floralColors.mintGreen, name: "Mint" },
                      { color: floralColors.deepTeal, name: "Deep Teal" },
                      { color: floralColors.lavenderGray, name: "Lavender" },
                      { color: floralColors.dustyRose, name: "Dusty Rose" }
                    ].map(({ color, name }) => (
                      <div key={name} className="group space-y-3">
                        <div 
                          className="aspect-square rounded-xl shadow-md transition-transform hover:scale-105"
                          style={{ backgroundColor: color }}
                        />
                        <div className="space-y-1">
                          <p className="text-xs">{name}</p>
                          <p className="text-[10px] text-gray-400 font-mono">{color}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Neutrals */}
                <div className="space-y-6">
                  <h3 className="text-sm uppercase tracking-wider text-gray-400">Neutrals</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      { color: floralColors.richBlack, name: "Rich Black" },
                      { color: floralColors.charcoal, name: "Charcoal" },
                      { color: floralColors.cream, name: "Cream" },
                      { color: floralColors.lightBeige, name: "Light Beige" },
                      { color: floralColors.warmWhite, name: "Warm White" }
                    ].map(({ color, name }) => (
                      <div key={name} className="group space-y-3">
                        <div 
                          className="aspect-square rounded-2xl shadow-md border border-gray-100 transition-transform hover:scale-105"
                          style={{ backgroundColor: color }}
                        />
                        <div className="space-y-1">
                          <p className="text-sm">{name}</p>
                          <p className="text-xs text-gray-400 font-mono">{color}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 sm:py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>Floral Design System · 2025</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4" />
                44 Components
              </span>
              <span className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                23 Colors
              </span>
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Downloadable PNGs
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}