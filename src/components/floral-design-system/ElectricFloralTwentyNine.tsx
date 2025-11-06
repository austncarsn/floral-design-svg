interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTwentyNine({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Monochrome light gold concentric bloom */}
      
      {/* Concentric petal layers */}
      {[
        { radius: 75, count: 12, size: 11 },
        { radius: 55, count: 8, size: 13 },
        { radius: 35, count: 6, size: 10 }
      ].map((ring, ringIndex) => (
        <g key={ringIndex}>
          {[...Array(ring.count)].map((_, i) => {
            const angle = (i * (360 / ring.count) * Math.PI) / 180;
            const x = 100 + Math.cos(angle) * ring.radius;
            const y = 100 + Math.sin(angle) * ring.radius;
            
            return (
              <g key={i}>
                <circle cx={x} cy={y} r={ring.size} fill="#C4A582" opacity="0.85" />
                <circle cx={x} cy={y} r={ring.size * 0.6} fill="#E8DCC8" opacity="0.95" />
                <circle cx={x} cy={y} r={ring.size * 0.3} fill="#1A1614" opacity="0.3" />
              </g>
            );
          })}
        </g>
      ))}
      
      {/* Center */}
      <circle cx="100" cy="100" r="26" fill="#C4A582" opacity="0.85" />
      <circle cx="100" cy="100" r="18" fill="#1A1614" opacity="0.35" />
      <circle cx="100" cy="100" r="12" fill="#C4A582" opacity="0.9" />
      <circle cx="100" cy="100" r="6" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="3" fill="#C4A582" />
    </svg>
  );
}
