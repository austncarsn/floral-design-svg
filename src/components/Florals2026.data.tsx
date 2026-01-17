import { 
  Sparkles, 
  Cpu, 
  Aperture, 
  Network, 
  Orbit, 
  Scan,
  Zap,
  Droplets,
  Sun,
  Hexagon
} from "lucide-react";
import { GlassOrchid } from "./florals/GlassOrchid";
import { ModernTulip } from "./florals/ModernTulip";
import { AnimatedDaisy } from "./florals/AnimatedDaisy";
import { NeonRose } from "./florals/NeonRose";
import { CyberLotus } from "./florals/CyberLotus";
import { QuantumLily } from "./florals/QuantumLily";
import { ReactNode } from "react";
import { COLORS } from "./tokens/florals2026";

export type FloralTag = "Geometry" | "Neon" | "Data" | "Soft" | "Void";

export interface FloralCardData {
  key: string;
  render: ReactNode;
  title: string;
  subtitle: string;
  className: string;
  icon?: ReactNode;
  tags: FloralTag[];
  featured: boolean;
  motionIntensity: number; // 1-5
  date: string;
}

export const FLORAL_CARDS: FloralCardData[] = [
  // 1. NEON ROSE - High Energy / Vibrant
  {
    key: "neon-rose",
    render: <NeonRose />,
    title: "Neon Rose",
    subtitle: "Cyber-Organic Spiral",
    className: "lg:col-span-6 bg-[#1a1817] !border-[#2a2827] text-white overflow-hidden",
    icon: <Zap className="h-5 w-5 text-[#D500F9]" />,
    tags: ["Neon", "Geometry"],
    featured: true,
    motionIntensity: 4,
    date: "2026-02-01"
  },
  
  // 2. GLASS ORCHID - Soft / Refractive
  {
    key: "glass-orchid",
    render: <GlassOrchid />,
    title: "Glass Orchid",
    subtitle: "Refractive Layering",
    className: "lg:col-span-6 bg-white",
    icon: <Droplets className="h-5 w-5 text-[#2962FF]" />,
    tags: ["Soft", "Geometry"],
    featured: true,
    motionIntensity: 2,
    date: "2026-01-20"
  },

  // 3. CYBER LOTUS - Tech / Metallic / Deep
  {
    key: "cyber-lotus",
    render: <CyberLotus />,
    title: "Cyber Lotus",
    subtitle: "Titanium Construct",
    className: "lg:col-span-4 bg-[#102027] text-white !border-[#37474F]",
    icon: <Hexagon className="h-5 w-5 text-[#00E5FF]" />,
    tags: ["Geometry", "Data"],
    featured: true,
    motionIntensity: 3,
    date: "2026-02-02"
  },

  // 4. MODERN TULIP - Bauhaus / Analytic
  {
    key: "modern-tulip",
    render: <ModernTulip />,
    title: "Modern Tulip",
    subtitle: "Structural Analysis",
    className: "lg:col-span-4 bg-white",
    icon: <Sun className="h-5 w-5 text-[#FFD600]" />,
    tags: ["Geometry", "Soft"],
    featured: false,
    motionIntensity: 2,
    date: "2025-12-05"
  },

  // 5. ANIMATED DAISY - Data / Grid
  {
    key: "animated-daisy",
    render: <AnimatedDaisy />,
    title: "Radial Daisy",
    subtitle: "Turbine Systems",
    className: "lg:col-span-4 bg-[#faf9f7]",
    icon: <Aperture className="h-5 w-5 text-[#FF1744]" />,
    tags: ["Data", "Geometry"],
    featured: false,
    motionIntensity: 4,
    date: "2025-12-10"
  },

  // 6. QUANTUM LILY - Ethereal / Pastel
  {
    key: "quantum-lily",
    render: <QuantumLily />,
    title: "Quantum Lily",
    subtitle: "Particle Suspension",
    className: "lg:col-span-8 bg-gradient-to-br from-[#F3F4F6] to-[#E1BEE7]/30",
    icon: <Sparkles className="h-5 w-5 text-[#6200EA]" />,
    tags: ["Soft", "Neon"],
    featured: true,
    motionIntensity: 5,
    date: "2026-02-03"
  }
];
