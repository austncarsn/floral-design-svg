import { AnimatedDaisyVariant } from "./florals/AnimatedDaisy";
import { COLORS } from "./tokens/florals2026";

export const DAISY_VARIANTS: { id: string; title: string; subtitle: string; variant: AnimatedDaisyVariant }[] = [
  {
    id: "daisy-01",
    title: "Primary Evolved",
    subtitle: "Geometric Essence",
    variant: {
      palette: [COLORS.yellow, COLORS.blue, COLORS.green, COLORS.charcoal],
      segmentCount: 4,
      coreSize: 40,
      reach: 60, 
      width: 0, 
      style: 'turbine',
      speed: 1.0,
      scale: 1,
    }
  },
  {
    id: "daisy-02",
    title: "Vibrant Pulse",
    subtitle: "Neon Translucency",
    variant: {
      // Replaced Amber/Cream with Vibrant Yellow/HotPink
      palette: [COLORS.yellow, "rgba(245, 0, 87, 0.6)", COLORS.bg, COLORS.yellow],
      segmentCount: 4,
      coreSize: 25,
      reach: 55,
      width: 0,
      style: 'iris',
      speed: 0.5, 
      scale: 1.05,
    }
  },
  {
    id: "daisy-03",
    title: "Rhythmic Rings",
    subtitle: "Concentric Expansion",
    variant: {
      // High contrast Blue/Green gradient
      palette: [COLORS.blue, COLORS.lightBlue, COLORS.green, COLORS.bg], 
      segmentCount: 5,
      coreSize: 15,
      reach: 20, 
      width: 15, 
      style: 'concentric',
      speed: 1.2,
      scale: 1.0,
    }
  },
  {
    id: "daisy-04",
    title: "Data Dandelion",
    subtitle: "Radial Visualization",
    variant: {
      // Electric Blue and White
      palette: [COLORS.blue, COLORS.lightBlue, COLORS.bg, "#E3F2FD"],
      segmentCount: 24, 
      coreSize: 10,
      reach: 70,
      width: 3, 
      style: 'radar',
      speed: 1.5,
      scale: 1.1,
    }
  },
  {
    id: "daisy-05",
    title: "Geo Morph",
    subtitle: "Shape Transition",
    variant: {
      // Red/HotPink/Yellow energetic mix
      palette: [COLORS.red, COLORS.hotPink, COLORS.yellow, COLORS.bg],
      segmentCount: 8,
      coreSize: 30,
      reach: 50,
      width: 15,
      style: 'morph',
      speed: 0.8,
      scale: 1.0,
    }
  },
  // III. Premium/Featured Animations
  {
    id: "daisy-07",
    title: "Scattered Assembly",
    subtitle: "Geometric Convergence",
    variant: {
      // Yellow/Purple/HotPink/Blue - Maximum vibrancy
      palette: [COLORS.yellow, COLORS.purple, COLORS.hotPink, COLORS.blue],
      segmentCount: 12,
      coreSize: 20,
      reach: 60,
      width: 12, 
      style: 'assembly',
      speed: 1, 
      scale: 1.0,
    }
  },
  {
    id: "daisy-08",
    title: "Layered Rosette",
    subtitle: "Depth Rotation",
    variant: {
      // Solar/Heat Palette
      palette: ["rgba(255, 23, 68, 0.8)", COLORS.yellow, "rgba(255, 214, 0, 0.6)", COLORS.hotPink],
      segmentCount: 4, 
      coreSize: 25,
      reach: 30, 
      width: 20, 
      style: 'rosette',
      speed: 2, 
      scale: 1.0,
    }
  },
  {
    id: "daisy-09",
    title: "Reactive Ripple",
    subtitle: "Organic Expansion",
    variant: {
      // Cool/Neon Palette: Purple -> Lavender -> Green -> BG
      palette: [COLORS.purple, COLORS.lavender, COLORS.green, COLORS.bg],
      segmentCount: 6,
      coreSize: 15,
      reach: 15,
      width: 15,
      style: 'ripple',
      speed: 1,
      scale: 1.0,
    }
  }
];
