interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralEight({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Technical triangular atomic burst - Monochrome */}
      
      {/* 6 elongated triangular petals */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const innerRadius = 28;
        const outerRadius = 70;
        
        const tipX = 100 + Math.cos(angle) * outerRadius;
        const tipY = 100 + Math.sin(angle) * outerRadius;
        
        const baseAngle1 = angle - (Math.PI / 12);
        const baseAngle2 = angle + (Math.PI / 12);
        
        const base1X = 100 + Math.cos(baseAngle1) * innerRadius;
        const base1Y = 100 + Math.sin(baseAngle1) * innerRadius;
        const base2X = 100 + Math.cos(baseAngle2) * innerRadius;
        const base2Y = 100 + Math.sin(baseAngle2) * innerRadius;
        
        return (
          <g key={i}>
            {/* Main triangle */}
            <path
              d={`M ${tipX},${tipY} L ${base1X},${base1Y} L ${base2X},${base2Y} Z`}
              fill="#5a5a5a"
              opacity="0.8"
            />
            {/* Inner accent triangle */}
            <path
              d={`M ${100 + Math.cos(angle) * (outerRadius * 0.6)},${100 + Math.sin(angle) * (outerRadius * 0.6)} 
                  L ${100 + Math.cos(baseAngle1) * (innerRadius * 1.3)},${100 + Math.sin(baseAngle1) * (innerRadius * 1.3)} 
                  L ${100 + Math.cos(baseAngle2) * (innerRadius * 1.3)},${100 + Math.sin(baseAngle2) * (innerRadius * 1.3)} Z`}
              fill="#EDF2F7"
              opacity="0.7"
            />
            {/* Tip ornament */}
            <circle cx={tipX} cy={tipY} r="5" fill="#3a3a3a" opacity="0.9" />
            <circle cx={tipX} cy={tipY} r="2.5" fill="#EDF2F7" />
          </g>
        );
      })}
      
      {/* Elegant hexagonal center */}
      {(() => {
        const hexPoints = [...Array(6)].map((_, i) => {
          const angle = (i * 60 - 30) * Math.PI / 180;
          return {
            x: 100 + Math.cos(angle) * 24,
            y: 100 + Math.sin(angle) * 24
          };
        });
        const pathD = `M ${hexPoints.map(p => `${p.x},${p.y}`).join(' L ')} Z`;
        
        return (
          <>
            <path d={pathD} fill="#3a3a3a" opacity="0.9" />
            <path d={pathD} fill="none" stroke="#2d2d2d" strokeWidth="4" opacity="0.6" />
          </>
        );
      })()}
      
      <circle cx="100" cy="100" r="12" fill="#EDF2F7" />
      <circle cx="100" cy="100" r="6" fill="#000E10" />
    </svg>
  );
}
