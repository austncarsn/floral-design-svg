import { Download, Palette } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import type { CSSProperties } from "react";
import { useRef } from "react";

type SectionId = "gallery" | "palette";

interface HeroSectionProps {
  totalDesigns: number;
  onSectionChange: (section: SectionId) => void;
}

// Constants
const ANIMATION_DURATION = 0.45;
const ANIMATION_EASING = [0.25, 0.1, 0.25, 1] as const;
const TITLE_STAGGER_DELAY = 0.15;
const CTA_DELAY = 0.3;
const BUTTON_MIN_HEIGHT = 44;

// Parallax constants
const PARALLAX_SPEED = 0.5; // Content moves at 50% scroll speed
const ORB_PARALLAX_SPEED = 0.3; // Orbs move even slower for depth

// Animation variants
const titleLineVariants = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: ANIMATION_DURATION,
      ease: ANIMATION_EASING,
    },
  },
};

const ctaVariants = {
  hidden: {
    opacity: 0,
    y: 6,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION,
      ease: ANIMATION_EASING,
      delay: CTA_DELAY,
    },
  },
};

// Style objects - Cohesive gradient from nav pink into warm hero tones
const heroBackgroundStyle: CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(253, 230, 240, 1) 0%, rgba(253, 230, 240, 0.6) 15%, rgba(253, 230, 240, 0.2) 30%, rgba(250, 249, 247, 0) 60%)",
};

const decorativeOrb1Style: CSSProperties = {
  background:
    "radial-gradient(circle, rgba(212, 165, 116, 0.2) 0%, transparent 70%)",
};

const decorativeOrb2Style: CSSProperties = {
  background:
    "radial-gradient(circle, rgba(184, 153, 104, 0.15) 0%, transparent 70%)",
};

const titleStyle: CSSProperties = {
  fontSize: "clamp(56px, 12vw, 120px)",
  lineHeight: "0.95",
  fontWeight: 400,
  letterSpacing: "0.15em",
  color: "#1a1a1a",
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textTransform: "uppercase",
};

export default function HeroSection({
  totalDesigns,
  onSectionChange,
}: HeroSectionProps) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  
  // Parallax transforms for different layers
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="pt-[clamp(11rem,18vw,15rem)] pb-16 md:pb-24 lg:pb-32 relative overflow-hidden"
      style={{
        ...heroBackgroundStyle,
        marginTop: '50px', // Account for scallop extension from nav
      }}
    >
      {/* Decorative Gradient Orbs - Parallax */}
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ ...decorativeOrb1Style, y: orb1Y }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-20 right-1/4 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ ...decorativeOrb2Style, y: orb2Y }}
        aria-hidden="true"
      />

      {/* Content Container - Parallax */}
      <motion.div 
        className="container-responsive relative z-10"
        style={{ y: contentY, opacity }}
      >
        <div className="mx-auto max-w-[800px] py-6 text-center">
          {/* Hero Title */}
          <h1
            id="hero-title"
            className="hero-title mt-6 mb-6"
            style={titleStyle}
          >
            <motion.span
              className="block"
              initial="hidden"
              animate="visible"
              variants={titleLineVariants}
            >
              FLORAL DESIGN
            </motion.span>
            <motion.span
              className="block"
              initial="hidden"
              animate="visible"
              variants={titleLineVariants}
              transition={{
                duration: ANIMATION_DURATION,
                ease: ANIMATION_EASING,
                delay: TITLE_STAGGER_DELAY,
              }}
            >
              SYSTEM
            </motion.span>
          </h1>

          {/* Subheading */}
          <motion.p
            className="hero-subheading mb-8"
            initial="hidden"
            animate="visible"
            variants={ctaVariants}
            transition={{
              duration: ANIMATION_DURATION,
              ease: ANIMATION_EASING,
              delay: 0.2,
            }}
          >
            <strong>{totalDesigns}</strong> geometric florals,
            vector perfect and PNG ready
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mb-5 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial="hidden"
            animate="visible"
            variants={ctaVariants}
          >
            <button
              type="button"
              onClick={() => onSectionChange("gallery")}
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center px-6"
              style={{ minHeight: `${BUTTON_MIN_HEIGHT}px` }}
              aria-label="Explore floral designs"
            >
              Explore Designs
              <Download
                className="ml-2 h-4 w-4"
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              onClick={() => onSectionChange("palette")}
              className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center px-6"
              style={{ minHeight: `${BUTTON_MIN_HEIGHT}px` }}
              aria-label="Download color palette"
            >
              <Palette
                className="mr-2 h-4 w-4"
                aria-hidden="true"
              />
              Download Colors
            </button>
          </motion.div>

          {/* Meta Information */}
          <p className="meta-text text-sm opacity-70">
            MIT License • Free for commercial use
          </p>
        </div>
      </motion.div>
    </section>
  );
}