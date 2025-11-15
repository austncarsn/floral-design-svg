interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTwo({ size = 200, className = "" }: Props) {
  // Perfect hexagon vertices calculation
  const getHexagonPoints = (cx: number, cy: number, radius: number) => {
    return [...Array(6)].map((_, i) => {
      const angle = (i * 60 - 30) * Math.PI / 180; // Start at top
      return {
        x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius
      };
    });
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Technical hexagonal bloom - Monochrome */}
      
      {/* Outer hexagon petals with perfect 60° spacing */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 - 30) * Math.PI / 180;
        const x = 100 + Math.cos(angle) * 62;
        const y = 100 + Math.sin(angle) * 62;
        
        return (
          <g key={i}>
            {/* Outer petal */}
            <circle cx={x} cy={y} r="28" fill="#4a4a4a" opacity="0.85" />
            {/* Inner circle */}
            <circle cx={x} cy={y} r="20" fill="#EDF2F7" opacity="0.95" />
            {/* Detail ring */}
            <circle cx={x} cy={y} r="14" fill="#707070" opacity="0.7" />
            {/* Center dot */}
            <circle cx={x} cy={y} r="6" fill="#EDF2F7" />
            <circle cx={x} cy={y} r="3" fill="#000E10" />
          </g>
        );
      })}
      
      {/* Perfect center hexagon */}
      {(() => {
        const points = getHexagonPoints(100, 100, 38);
        const pathD = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')} Z`;
        
        return (
          <>
            <path d={pathD} fill="#4a4a4a" opacity="0.85" />
            <path d={pathD} fill="none" stroke="#2d2d2d" strokeWidth="5" opacity="0.6" />
          </>
        );
      })()}
      
      {/* Inner hexagon */}
      {(() => {
        const points = getHexagonPoints(100, 100, 22);
        const pathD = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')} Z`;
        
        return <path d={pathD} fill="#EDF2F7" />;
      })()}
      
      {/* Center core */}
      <circle cx="100" cy="100" r="14" fill="#707070" opacity="0.9" />
      <circle cx="100" cy="100" r="7" fill="#000E10" />
    </svg>
  );
}
