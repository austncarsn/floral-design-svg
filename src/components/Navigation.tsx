import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "gallery", label: "Gallery" },
  { id: "vectors", label: "SVG Downloads" },
  { id: "palette", label: "Colors" },
] as const;

type SectionId = (typeof NAV_ITEMS)[number]["id"];

interface NavigationProps {
  activeSection: SectionId;
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  onSectionChange: (section: SectionId) => void;
  onMobileMenuToggle: () => void;
}

export default function Navigation({
  activeSection,
  isScrolled,
  mobileMenuOpen,
  onSectionChange,
  onMobileMenuToggle,
}: NavigationProps) {
  const handleNavClick = (id: SectionId) => {
    onSectionChange(id);
    // Close mobile menu after selection
    if (mobileMenuOpen) onMobileMenuToggle();
  };

  return (
    <nav
      className={`nav-bar ${isScrolled ? "scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-responsive">
        <div className="flex h-20 items-center justify-center">
          {/* Desktop navigation - centered */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`relative transition-colors duration-200 ${ 
                    isActive
                      ? "text-[#1a1817]"
                      : "text-[#5f5d5b] hover:text-[#1a1817]"
                  }`}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-nav)',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    minHeight: '44px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    textTransform: 'uppercase',
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#1a1817]"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={onMobileMenuToggle}
            className="absolute right-4 p-2 text-[#1a1817] md:hidden"
            aria-label={
              mobileMenuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="main-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          id="main-mobile-menu"
          className="bg-[#fde6f0] border-t border-[#f5d4e3] md:hidden"
        >
          <div className="container-responsive flex flex-col gap-2 py-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-3 px-4 rounded-lg transition-colors uppercase tracking-wide ${
                    isActive
                      ? "bg-[#1a1817] text-white"
                      : "text-[#5f5d5b] hover:bg-[#fcc9de] hover:text-[#1a1817]"
                  }`}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '16px',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}