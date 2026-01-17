import {
  Fragment,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { toast } from "sonner";
import { Toaster } from "./components/ui/sonner";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import FilterPanel from "./components/FilterPanel";
import DesignGrid from "./components/design-grid";
import ColorPalette from "./components/ColorPalette";
import Florals2026 from "./components/Florals2026";
import {
  allDesigns,
  filterDesigns,
  getFloralCount,
  getStemCount,
  type Category,
  type Edition,
} from "./lib/design-data";

// =============================================================================
// Types
// =============================================================================

const SECTION_IDS = ["2026-florals", "gallery"] as const;
type SectionId = (typeof SECTION_IDS)[number];

interface FilterCounts {
  readonly all: number;
  readonly florals: number;
  readonly stems: number;
}

interface MobileMenuState {
  readonly isOpen: boolean;
  readonly toggle: () => void;
  readonly close: () => void;
}

// =============================================================================
// Constants
// =============================================================================

const SCROLL_THRESHOLD = 20;
const DEFAULT_EDITION: Edition = "all";
const DEFAULT_SECTION: SectionId = "2026-florals";
const DEFAULT_CATEGORY: Category = "all";

const FOOTER_LINKS = [
  { label: "MIT License", ariaLabel: "View MIT License" },
  { label: "GitHub", ariaLabel: "View on GitHub" },
  { label: "Contact", ariaLabel: "Contact us" },
] as const;

const SECTION_CONFIG = {
  gallery: {
    heading: "2025 Archive",
    description:
      "The complete collection of designs from 2025. Preserved for reference and download.",
    iconType: "download" as const,
  },
  "2026-florals": {
    heading: "2026 Florals",
    description: "New collection setup.",
  },
} as const;

// =============================================================================
// Utilities
// =============================================================================

/**
 * Fallback clipboard copy using deprecated execCommand.
 * Used when Clipboard API is unavailable.
 */
function copyWithExecCommand(text: string): boolean {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  Object.assign(textArea.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "2em",
    height: "2em",
    padding: "0",
    border: "none",
    outline: "none",
    boxShadow: "none",
    background: "transparent",
    opacity: "0",
    pointerEvents: "none",
  } satisfies Partial<CSSStyleDeclaration>);

  document.body.appendChild(textArea);

  try {
    textArea.focus();
    textArea.select();
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    document.body.removeChild(textArea);
  }
}

/**
 * Copies text to clipboard with automatic fallback support.
 */
async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.warn(
        "Clipboard API failed, attempting fallback:",
        error,
      );
    }
  }

  return copyWithExecCommand(text);
}

// =============================================================================
// Custom Hooks
// =============================================================================

/**
 * Tracks scroll position and returns whether user has scrolled past threshold.
 */
function useScrollDetection(
  threshold = SCROLL_THRESHOLD,
): boolean {
  const [isScrolled, setIsScrolled] = useState(() => {
    // Initialize with current scroll position (for SSR safety)
    return (
      typeof window !== "undefined" &&
      window.scrollY > threshold
    );
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}

/**
 * Manages mobile menu state with escape key dismissal and body scroll lock.
 */
function useMobileMenu(): MobileMenuState {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(
    () => setIsOpen((prev) => !prev),
    [],
  );

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () =>
      document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  // Body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight =
      document.body.style.paddingRight;

    // Prevent layout shift from scrollbar removal
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  return useMemo(
    () => ({ isOpen, toggle, close }),
    [isOpen, toggle, close],
  );
}

/**
 * Computes and memoizes design counts.
 */
function useDesignCounts(): FilterCounts & { total: number } {
  return useMemo(() => {
    const florals = getFloralCount();
    const stems = getStemCount();
    return {
      all: allDesigns.length,
      florals,
      stems,
      total: florals + stems,
    };
  }, []);
}

// =============================================================================
// Subcomponents
// =============================================================================

interface SectionDividerProps {
  readonly visible: boolean;
}

const SectionDivider = memo(function SectionDivider({
  visible,
}: SectionDividerProps) {
  if (!visible) return null;

  return (
    <div className="container-responsive hidden md:block">
      <hr className="divider mx-auto opacity-50" />
    </div>
  );
});

interface SectionHeaderProps {
  readonly id: string;
  readonly heading: string;
  readonly description: string;
}

const SectionHeader = memo(function SectionHeader({
  id,
  heading,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 text-center">
      <h2 id={id} className="section-heading mb-6">
        {heading}
      </h2>
      <p className="body-text mx-auto max-w-[800px] leading-relaxed">
        {description}
      </p>
    </div>
  );
});

interface DesignSectionProps {
  readonly sectionId: "gallery" | "vectors";
  readonly categoryFilter: Category;
  readonly onCategoryChange: (category: Category) => void;
  readonly filterCounts: FilterCounts;
  readonly designs: typeof allDesigns;
}

const DesignSection = memo(function DesignSection({
  sectionId,
  categoryFilter,
  onCategoryChange,
  filterCounts,
  designs,
}: DesignSectionProps) {
  const config = SECTION_CONFIG[sectionId];
  const headingId = `${sectionId}-heading`;

  return (
    <section
      className="py-[clamp(2rem,8vw,4rem)]"
      aria-labelledby={headingId}
    >
      <div className="container-responsive max-w-[1280px]">
        <SectionHeader
          id={headingId}
          heading={config.heading}
          description={config.description}
        />

        <FilterPanel
          categoryFilter={categoryFilter}
          onCategoryChange={onCategoryChange}
          counts={filterCounts}
        />

        <DesignGrid
          designs={designs as any}
          iconType={config.iconType}
        />
      </div>
    </section>
  );
});

interface PaletteSectionProps {
  readonly onCopyColor: (color: string) => void;
}

const PaletteSection = memo(function PaletteSection({
  onCopyColor,
}: PaletteSectionProps) {
  const config = SECTION_CONFIG.palette;

  return (
    <section
      className="py-[clamp(2rem,8vw,4rem)]"
      aria-labelledby="palette-heading"
    >
      <div className="container-responsive max-w-[1280px]">
        <div className="mb-[clamp(2rem,6vw,4rem)] text-center">
          <h2
            id="palette-heading"
            className="section-heading mb-6"
          >
            {config.heading}
          </h2>
          <p className="body-text mx-auto max-w-[800px] leading-relaxed">
            {config.description}
          </p>
        </div>

        <ColorPalette onCopyColor={onCopyColor} />
      </div>
    </section>
  );
});

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[#e8e6e3] bg-white py-[clamp(3rem,8vw,5rem)]">
      <div className="container-responsive max-w-[1280px]">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-[14px] leading-relaxed text-[#9b9894]">
            © {currentYear} Floral Design System. MIT Licensed.
          </p>

          <nav
            className="flex flex-wrap items-center justify-center gap-[clamp(1rem,3vw,1.5rem)]"
            aria-label="Footer"
          >
            {FOOTER_LINKS.map(({ label, ariaLabel }, index) => (
              <Fragment key={label}>
                {index > 0 && (
                  <span
                    className="text-[#e8e6e3]"
                    aria-hidden="true"
                  >
                    •
                  </span>
                )}
                <button
                  type="button"
                  className="min-h-[44px] rounded px-2 py-2 text-sm text-[#5f5d5b] transition-colors duration-200 hover:text-[#1a1817] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1817]"
                  aria-label={ariaLabel}
                >
                  {label}
                </button>
              </Fragment>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
});

// =============================================================================
// Main Component
// =============================================================================

export default function App() {
  // State
  const [activeSection, setActiveSection] =
    useState<SectionId>(DEFAULT_SECTION);
  const [categoryFilter, setCategoryFilter] =
    useState<Category>(DEFAULT_CATEGORY);

  // Custom hooks
  const isScrolled = useScrollDetection();
  const mobileMenu = useMobileMenu();
  const counts = useDesignCounts();

  // Derived state
  const filteredDesigns = useMemo(
    () =>
      filterDesigns(
        allDesigns,
        categoryFilter,
        DEFAULT_EDITION,
      ),
    [categoryFilter],
  );

  const filterCounts = useMemo<FilterCounts>(
    () => ({
      all: counts.all,
      florals: counts.florals,
      stems: counts.stems,
    }),
    [counts],
  );

  // Handlers
  const handleSectionChange = useCallback(
    (section: SectionId) => {
      setActiveSection(section);
      mobileMenu.close();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [mobileMenu],
  );

  const handleCopyColor = useCallback(async (color: string) => {
    const success = await copyToClipboard(color);

    if (success) {
      toast.success(`Copied ${color} to clipboard`);
    } else {
      toast.error(
        `Unable to copy. Please copy manually: ${color}`,
      );
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#faf9f7]">
      <Toaster />

      {/* Accessibility: Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#1a1817] focus:px-6 focus:py-3 focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navigation
        activeSection={activeSection}
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenu.isOpen}
        onSectionChange={handleSectionChange}
        onMobileMenuToggle={mobileMenu.toggle}
      />

      <main id="main-content" className="flex-1">
        {activeSection === "gallery" && (
          <>
            <HeroSection
              totalDesigns={counts.total}
              onSectionChange={handleSectionChange}
            />
            <SectionDivider visible />
            <DesignSection
              sectionId="gallery"
              categoryFilter={categoryFilter}
              onCategoryChange={setCategoryFilter}
              filterCounts={filterCounts}
              designs={filteredDesigns}
            />
          </>
        )}

        {activeSection === "2026-florals" && <Florals2026 />}
      </main>

      <Footer />
    </div>
  );
}