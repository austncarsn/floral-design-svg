import { ModernTulipVariant } from "./florals/ModernTulip";
import { COLORS } from "./tokens/florals2026";

export const MODERN_TULIP_VARIANTS: { id: string; title: string; subtitle: string; variant: ModernTulipVariant }[] = [
  // ---------------------------------------------------------------------------
  // SERIES A: ORGANIC MORPHOLOGY
  // Standard explorations of form and color
  // ---------------------------------------------------------------------------
  {
    id: "mt-01",
    title: "Modern Tulip Alpha",
    subtitle: "Standard symmetric",
    variant: {
      palette: [COLORS.green, COLORS.blue, COLORS.yellow],
      curvature: 60,
      width: 50,
      opacity: 0.9,
      scale: 1,
      style: "organic"
    }
  },
  {
    id: "mt-02",
    title: "Modern Tulip Beta",
    subtitle: "Narrow profile",
    variant: {
      palette: [COLORS.lightPink, COLORS.lightBlue, COLORS.lavender],
      curvature: 20,
      width: 30,
      opacity: 0.8,
      scale: 0.9,
      style: "organic"
    }
  },
  {
    id: "mt-03",
    title: "Modern Tulip Gamma",
    subtitle: "Wide aperture",
    variant: {
      palette: [COLORS.yellow, COLORS.red, COLORS.green],
      curvature: 90,
      width: 90,
      opacity: 0.85,
      scale: 1.05,
      style: "organic"
    }
  },
  {
    id: "mt-04",
    title: "Midnight Bloom",
    subtitle: "Nocturnal variant",
    variant: {
      palette: [COLORS.purple, COLORS.charcoal, COLORS.lavender],
      curvature: 55,
      width: 45,
      opacity: 0.85,
      scale: 1,
      style: "organic"
    }
  },
  {
    id: "mt-05",
    title: "Solar Flare",
    subtitle: "Coronal mass",
    variant: {
      palette: [COLORS.bg, COLORS.yellow, COLORS.red],
      curvature: 85,
      width: 85,
      opacity: 0.9,
      scale: 1.1,
      style: "organic"
    }
  },

  // ---------------------------------------------------------------------------
  // SERIES B: MATERIAL STUDIES
  // Focus on texture, opacity, and surface properties
  // ---------------------------------------------------------------------------
  {
    id: "mt-06",
    title: "Glass Menagerie",
    subtitle: "Fragile crystal",
    variant: {
      palette: [COLORS.lightBlue, COLORS.lightPink, COLORS.bg],
      curvature: 80,
      width: 60,
      opacity: 0.4,
      scale: 1,
      style: "organic"
    }
  },
  {
    id: "mt-07",
    title: "Bioluminescent",
    subtitle: "Deep sea organic",
    variant: {
      palette: [COLORS.green, COLORS.lightBlue, COLORS.bg],
      curvature: 70,
      width: 40,
      opacity: 0.8,
      scale: 1,
      style: "organic"
    }
  },
  {
    id: "mt-08",
    title: "Paper Fold",
    subtitle: "Origami study",
    variant: {
      palette: [COLORS.bg, "rgba(0,0,0,0.05)", "rgba(0,0,0,0.1)"],
      curvature: 10,
      width: 30,
      opacity: 1,
      scale: 0.9,
      style: "organic"
    }
  },
  {
    id: "mt-09",
    title: "Liquid Chrome",
    subtitle: "Reflective alloy",
    variant: {
      palette: ["rgba(255,255,255,0.8)", COLORS.charcoal, COLORS.bg],
      curvature: 45,
      width: 55,
      opacity: 0.95,
      scale: 1,
      style: "organic"
    }
  },

  // ---------------------------------------------------------------------------
  // SERIES C: TECHNICAL SCHEMATICS
  // Wireframes and structural analysis
  // ---------------------------------------------------------------------------
  {
    id: "mt-10",
    title: "Blueprint Alpha",
    subtitle: "Standard schematic",
    variant: {
      palette: [COLORS.charcoal, COLORS.charcoal, COLORS.charcoal],
      curvature: 40,
      width: 60,
      opacity: 0.5,
      scale: 0.95,
      wireframe: true,
      style: "organic"
    }
  },
  {
    id: "mt-11",
    title: "Infrared Scan",
    subtitle: "Thermal imaging",
    variant: {
      palette: [COLORS.hotPink, COLORS.red, COLORS.charcoal],
      curvature: 30,
      width: 70,
      opacity: 0.7,
      scale: 0.95,
      wireframe: true,
      style: "organic"
    }
  },

  // ---------------------------------------------------------------------------
  // SERIES D: CONSTRUCTIVIST ABSTRACTIONS
  // Geometric interpretations and avant-garde forms
  // ---------------------------------------------------------------------------
  {
    id: "mt-12",
    title: "Modern Tulip Omega",
    subtitle: "Constructivist Study",
    variant: {
      palette: [COLORS.red, COLORS.bg, COLORS.blue],
      curvature: 75,
      width: 60,
      opacity: 1.0,
      scale: 1.05,
      style: "constructivist"
    }
  },
  {
    id: "mt-13",
    title: "Suprematist Red",
    subtitle: "Pure geometry",
    variant: {
      palette: [COLORS.red, COLORS.charcoal, COLORS.bg],
      curvature: 95,
      width: 20,
      opacity: 1,
      scale: 1.1,
      style: "constructivist"
    }
  },
  {
    id: "mt-14",
    title: "Void Walker",
    subtitle: "Monochrome Construct",
    variant: {
      palette: [COLORS.charcoal, "#333333", COLORS.bg],
      curvature: 50,
      width: 80,
      opacity: 0.9,
      scale: 1,
      style: "constructivist"
    }
  },
  {
    id: "mt-15",
    title: "Rust Belt",
    subtitle: "Industrial decay",
    variant: {
      palette: [COLORS.charcoal, COLORS.lightPink, "#2F4F4F"], // Mapped Brown to Charcoal/Pink
      curvature: 20,
      width: 50,
      opacity: 0.9,
      scale: 1,
      style: "constructivist"
    }
  },
  {
    id: "mt-16",
    title: "Digital Glitch",
    subtitle: "RGB Separation",
    variant: {
      palette: [COLORS.green, COLORS.hotPink, COLORS.blue],
      curvature: 10,
      width: 90,
      opacity: 0.7,
      scale: 1.05,
      style: "constructivist"
    }
  }
];
