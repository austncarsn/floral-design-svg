import { motion } from "motion/react";

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  color: string;
}

const PETAL_COLORS = [
  "#fcc9de", // darker pink
  "#f5a7c4", // vibrant pink
  "#e8c4d8", // dusty rose
  "#fdb3d5", // bright pink
  "#f0b3d0", // medium pink
];

export default function FallingPetals() {
  // Generate 30 petals with random properties
  const petals: Petal[] = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100, // Random horizontal position (%)
    delay: Math.random() * 10, // Stagger the start (0-10s)
    duration: 8 + Math.random() * 8, // Fall duration (8-16s)
    size: 12 + Math.random() * 16, // Size (12-28px)
    rotation: Math.random() * 360, // Initial rotation
    color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: "-30px",
            width: `${petal.size}px`,
            height: `${petal.size}px`,
          }}
          animate={{
            y: ["0vh", "120vh"],
            x: [0, (Math.random() - 0.5) * 150],
            rotate: [petal.rotation, petal.rotation + 720],
            opacity: [0, 0.85, 0.85, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
            opacity: {
              times: [0, 0.15, 0.85, 1],
            },
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cherry blossom petal shape - more defined */}
            <path
              d="M12 3C12 3 8 7 8 12C8 14.5 9.5 16.5 12 16.5C14.5 16.5 16 14.5 16 12C16 7 12 3 12 3Z"
              fill={petal.color}
              fillOpacity="0.9"
            />
            <ellipse
              cx="12"
              cy="11"
              rx="3.5"
              ry="5"
              fill={petal.color}
              fillOpacity="0.7"
            />
            {/* Highlight for depth */}
            <ellipse
              cx="12"
              cy="9"
              rx="1.5"
              ry="2"
              fill="#ffffff"
              fillOpacity="0.4"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
