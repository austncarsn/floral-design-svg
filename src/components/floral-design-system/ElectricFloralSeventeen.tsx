interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralSeventeen({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco chevron wave pattern */}
      
      {/* Concentric chevron rings */}
      {[
        { radius: 75, color: "#D4A574", width: 12 },
        { radius: 60, color: "#7A9299", width: 10 },
        { radius: 45, color: "#8FA396", width: 8 },
        { radius: 30, color: "#C4A582", width: 6 }
      ].map((ring, ringIndex) => (
        <g key={ringIndex}>
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const nextAngle = ((i + 1) * 45 * Math.PI) / 180;
            
            const x1 = 100 + Math.cos(angle) * ring.radius;
            const y1 = 100 + Math.sin(angle) * ring.radius;
            const x2 = 100 + Math.cos(nextAngle) * ring.radius;
            const y2 = 100 + Math.sin(nextAngle) * ring.radius;
            
            const midAngle = ((i + 0.5) * 45 * Math.PI) / 180;
            const peakRadius = ring.radius + ring.width;
            const xPeak = 100 + Math.cos(midAngle) * peakRadius;
            const yPeak = 100 + Math.sin(midAngle) * peakRadius;
            
            return (
              <path
                key={i}
                d={`M ${x1},${y1} L ${xPeak},${yPeak} L ${x2},${y2}`}
                fill="none"
                stroke={ring.color}
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="miter"
                opacity="0.85"
              />
            );
          })}
        </g>
      ))}
      
      {/* Center medallion */}
      <circle cx="100" cy="100" r="22" fill="#1A1614" opacity="0.3" />
      <circle cx="100" cy="100" r="16" fill="#A89080" opacity="0.85" />
      <circle cx="100" cy="100" r="10" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="5" fill="#8B7355" />
    </svg>
  );
}
