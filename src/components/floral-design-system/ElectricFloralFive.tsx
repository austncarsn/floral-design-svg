interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralFive({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco concentric ring bloom with 12-fold symmetry */}
      
      {/* Three concentric petal ring layers */}
      {[
        { radius: 72, count: 12, size: 12, color: "#D4A574", innerColor: "#8B7355" },
        { radius: 52, count: 8, size: 14, color: "#7A9299", innerColor: "#9B8B7E" },
        { radius: 32, count: 6, size: 11, color: "#C4A582", innerColor: "#A89080" }
      ].map((ring, ringIndex) => (
        <g key={ringIndex}>
          {[...Array(ring.count)].map((_, i) => {
            const angle = (i * (360 / ring.count) * Math.PI) / 180;
            const x = 100 + Math.cos(angle) * ring.radius;
            const y = 100 + Math.sin(angle) * ring.radius;
            
            return (
              <g key={i}>
                <circle cx={x} cy={y} r={ring.size} fill={ring.color} opacity="0.85" />
                <circle cx={x} cy={y} r={ring.size * 0.55} fill="#E8DCC8" />
                <circle cx={x} cy={y} r={ring.size * 0.3} fill={ring.innerColor} opacity="0.8" />
              </g>
            );
          })}
        </g>
      ))}
      
      {/* Perfect center with concentric rings */}
      <circle cx="100" cy="100" r="28" fill="#C4A582" opacity="0.85" />
      <circle cx="100" cy="100" r="20" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="14" fill="#A89080" opacity="0.85" />
      <circle cx="100" cy="100" r="8" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="4" fill="#8FA396" />
    </svg>
  );
}
