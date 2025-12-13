interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralSeventeen({ size = 240, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco chevron wave pattern - Museum quality */}
      
      {/* Ethereal background glow */}
      <circle cx="120" cy="120" r="110" fill="#D4A574" opacity="0.06" />
      <circle cx="120" cy="120" r="100" fill="#7A9299" opacity="0.06" />
      
      {/* Concentric chevron rings with exquisite depth */}
      {[
        { radius: 90, color: "#D4A574", glowColor: "#E8C8A8", width: 14 },
        { radius: 72, color: "#7A9299", glowColor: "#A8C8D4", width: 12 },
        { radius: 54, color: "#8FA396", glowColor: "#C8D4C8", width: 9.5 },
        { radius: 36, color: "#C4A582", glowColor: "#D4C8A8", width: 7 }
      ].map((ring, ringIndex) => (
        <g key={ringIndex}>
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const nextAngle = ((i + 1) * 45 * Math.PI) / 180;
            
            const x1 = 120 + Math.cos(angle) * ring.radius;
            const y1 = 120 + Math.sin(angle) * ring.radius;
            const x2 = 120 + Math.cos(nextAngle) * ring.radius;
            const y2 = 120 + Math.sin(nextAngle) * ring.radius;
            
            const midAngle = ((i + 0.5) * 45 * Math.PI) / 180;
            const peakRadius = ring.radius + ring.width;
            const xPeak = 120 + Math.cos(midAngle) * peakRadius;
            const yPeak = 120 + Math.sin(midAngle) * peakRadius;
            
            return (
              <g key={i}>
                {/* Outer glow layer */}
                <path
                  d={`M ${x1},${y1} L ${xPeak},${yPeak} L ${x2},${y2}`}
                  fill="none"
                  stroke={ring.glowColor}
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                  opacity="0.15"
                />
                
                {/* Shadow layer */}
                <path
                  d={`M ${x1 + 1},${y1 + 1} L ${xPeak + 1},${yPeak + 1} L ${x2 + 1},${y2 + 1}`}
                  fill="none"
                  stroke="#1A1614"
                  strokeWidth="7.5"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                  opacity="0.08"
                />
                
                {/* Main chevron line */}
                <path
                  d={`M ${x1},${y1} L ${xPeak},${yPeak} L ${x2},${y2}`}
                  fill="none"
                  stroke={ring.color}
                  strokeWidth="7.5"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                  opacity="0.88"
                />
                
                {/* Highlight overlay */}
                <path
                  d={`M ${x1},${y1} L ${xPeak},${yPeak} L ${x2},${y2}`}
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                  opacity="0.15"
                />
              </g>
            );
          })}
        </g>
      ))}
      
      {/* Center medallion with museum quality layers */}
      {/* Outer glow halos */}
      <circle cx="120" cy="120" r="34" fill="#A89080" opacity="0.12" />
      <circle cx="120" cy="120" r="31" fill="#A89080" opacity="0.15" />
      
      {/* Shadow base */}
      <circle cx="121.2" cy="121.2" r="27" fill="#1A1614" opacity="0.15" />
      
      {/* Dark outer ring */}
      <circle cx="120" cy="120" r="27" fill="#1A1614" opacity="0.3" />
      
      {/* Gradient layer */}
      <circle cx="120" cy="120" r="23" fill="#FFFFFF" opacity="0.12" />
      
      {/* Mid layer */}
      <circle cx="120" cy="120" r="19" fill="#A89080" opacity="0.88" />
      
      {/* Shadow ring */}
      <circle cx="120" cy="120" r="15" fill="#1A1614" opacity="0.15" />
      
      {/* Inner light */}
      <circle cx="120" cy="120" r="12" fill="#E8DCC8" opacity="0.95" />
      
      {/* Inner shadow */}
      <circle cx="120" cy="120" r="7" fill="#1A1614" opacity="0.2" />
      
      {/* Core */}
      <circle cx="120" cy="120" r="6" fill="#8B7355" />
      
      {/* Highlight */}
      <circle cx="118.5" cy="118.5" r="2" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}
