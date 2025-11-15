import {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { toast } from "sonner@2.0.3";
import { Toaster } from "./components/ui/sonner";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import FilterPanel from "./components/FilterPanel";
import DesignGrid from "./components/DesignGrid";
import ColorPalette from "./components/ColorPalette";
import {
  allDesigns,
  filterDesigns,
  getFloralCount,
  getStemCount,
  type Category,
  type Edition,
} from "./lib/design-data";

type SectionId = "gallery" | "vectors" | "palette";

export default function App() {
  // State
  const [activeSection, setActiveSection] =
    useState<SectionId>("gallery");
  const [categoryFilter, setCategoryFilter] =
    useState<Category>("all");
  const editionFilter: Edition = "all";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Counts
  const floralCount = getFloralCount();
  const stemCount = getStemCount();
  const totalDesigns = floralCount + stemCount;

  // Filtered designs (memoized)
  const filteredDesigns = useMemo(
    () =>
      filterDesigns(allDesigns, categoryFilter, editionFilter),
    [categoryFilter, editionFilter],
  );

  // Section change
  const handleSectionChange = useCallback(
    (section: SectionId) => {
      setActiveSection(section);
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [],
  );

  // Mobile menu toggle
  const handleMobileMenuToggle = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  // Color copy
  const handleCopyColor = useCallback((color: string) => {
    // Try modern Clipboard API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(color)
        .then(() => {
          toast.success(`Copied ${color} to clipboard`);
        })
        .catch((err) => {
          console.warn('Clipboard API failed, using fallback:', err);
          // Try fallback method
          copyTextFallback(color);
        });
    } else {
      // Use fallback method directly
      copyTextFallback(color);
    }
  }, []);

  // Fallback copy method using textarea + execCommand
  const copyTextFallback = (text: string) => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      
      // Make the textarea invisible but accessible
      textArea.style.position = 'fixed';
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.width = '2em';
      textArea.style.height = '2em';
      textArea.style.padding = '0';
      textArea.style.border = 'none';
      textArea.style.outline = 'none';
      textArea.style.boxShadow = 'none';
      textArea.style.background = 'transparent';
      textArea.style.opacity = '0';
      
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      // Try to copy using execCommand
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
        toast.success(`Copied ${text} to clipboard`);
      } else {
        toast.error('Unable to copy. Please copy manually: ' + text);
      }
    } catch (err) {
      console.error('Fallback copy failed:', err);
      toast.error('Unable to copy. Please copy manually: ' + text);
    }
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () =>
      document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen
      ? "hidden"
      : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="flex min-h-screen flex-col bg-[#faf9f7]">
      <Toaster />

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#1a1817] focus:px-6 focus:py-3 focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        onSectionChange={handleSectionChange}
        onMobileMenuToggle={handleMobileMenuToggle}
      />

      {/* Main */}
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <HeroSection
          totalDesigns={totalDesigns}
          onSectionChange={handleSectionChange}
        />

        {/* Divider, desktop */}
        <div className="container-responsive hidden md:block">
          <hr className="divider mx-auto opacity-50" />
        </div>

        {/* Gallery section */}
        {activeSection === "gallery" && (
          <section
            className="py-[clamp(2rem,8vw,4rem)]"
            aria-labelledby="gallery-heading"
          >
            <div className="container-responsive max-w-[1280px]">
              <div className="mb-8 text-center">
                <h3
                  id="gallery-heading"
                  className="section-heading mb-6"
                >
                  PNG Downloads
                </h3>
                <p className="body-text mx-auto max-w-[800px] leading-relaxed">
                  High resolution PNG files ready for download.
                  Click any design to save to your device.
                </p>
              </div>

              <FilterPanel
                categoryFilter={categoryFilter}
                onCategoryChange={setCategoryFilter}
                counts={{
                  all: allDesigns.length,
                  florals: floralCount,
                  stems: stemCount,
                }}
              />

              <DesignGrid
                designs={filteredDesigns}
                iconType="download"
              />
            </div>
          </section>
        )}

        {/* Divider, desktop */}
        {activeSection === "vectors" && (
          <div className="container-responsive hidden md:block">
            <hr className="divider mx-auto opacity-50" />
          </div>
        )}

        {/* Vectors section */}
        {activeSection === "vectors" && (
          <section
            className="py-[clamp(2rem,8vw,4rem)]"
            aria-labelledby="vectors-heading"
          >
            <div className="container-responsive max-w-[1280px]">
              <div className="mb-8 text-center">
                <h3
                  id="vectors-heading"
                  className="section-heading mb-6"
                >
                  SVG Downloads
                </h3>
                <p className="body-text mx-auto max-w-[800px] leading-relaxed">
                  Download SVG files or copy code directly. All
                  vectors are optimized and production ready.
                </p>
              </div>

              <FilterPanel
                categoryFilter={categoryFilter}
                onCategoryChange={setCategoryFilter}
                counts={{
                  all: allDesigns.length,
                  florals: floralCount,
                  stems: stemCount,
                }}
              />

              <DesignGrid
                designs={filteredDesigns}
                iconType="code"
              />
            </div>
          </section>
        )}

        {/* Divider, desktop */}
        {activeSection === "palette" && (
          <div className="container-responsive hidden md:block">
            <hr className="divider mx-auto opacity-50" />
          </div>
        )}

        {/* Palette section */}
        {activeSection === "palette" && (
          <section
            className="py-[clamp(2rem,8vw,4rem)]"
            aria-labelledby="palette-heading"
          >
            <div className="container-responsive max-w-[1280px]">
              <div className="mb-[clamp(2rem,6vw,4rem)] text-center">
                <h3
                  id="palette-heading"
                  className="section-heading mb-6"
                >
                  Color Palette
                </h3>
                <p className="body-text mx-auto max-w-[800px] leading-relaxed">
                  23 carefully curated mid century modern
                  colors. Click any color to copy its hex value.
                </p>
              </div>

              <ColorPalette onCopyColor={handleCopyColor} />
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#e8e6e3] bg-white py-[clamp(3rem,8vw,5rem)]">
        <div className="container-responsive max-w-[1280px]">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-[14px] leading-relaxed text-[#9b9894]">
              © 2025 Floral Design System. MIT Licensed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-[clamp(1rem,3vw,1.5rem)]">
              <button
                className="min-h-[44px] rounded px-2 py-2 text-sm text-[#5f5d5b] transition-colors duration-200 hover:text-[#1a1817] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1817]"
                aria-label="View MIT License"
              >
                MIT License
              </button>
              <span className="text-[#e8e6e3]">•</span>
              <button
                className="min-h-[44px] rounded px-2 py-2 text-sm text-[#5f5d5b] transition-colors duration-200 hover:text-[#1a1817] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1817]"
                aria-label="View on GitHub"
              >
                GitHub
              </button>
              <span className="text-[#e8e6e3]">•</span>
              <button
                className="min-h-[44px] rounded px-2 py-2 text-sm text-[#5f5d5b] transition-colors duration-200 hover:text-[#1a1817] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1817]"
                aria-label="Contact"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}