interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralFour({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Technical sunburst with radiating spokes - Monochrome */}
      
      {/* 16 alternating length spokes */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const isLong = i % 2 === 0;
        const length = isLong ? 72 : 52;
        const innerRadius = 18;
        const strokeWidth = isLong ? 2.5 : 1.5;
        
        return (
          <g key={i}>
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle) * length}
              y2={100 + Math.sin(angle) * length}
              stroke="#2d2d2d"
              strokeWidth={strokeWidth + 2}
              strokeLinecap="round"
              opacity="0.8"
            />
            {isLong && (
              <>
                <circle
                  cx={100 + Math.cos(angle) * length}
                  cy={100 + Math.sin(angle) * length}
                  r="4"
                  fill="#3a3a3a"
                  opacity="0.85"
                />
                <circle
                  cx={100 + Math.cos(angle) * length}
                  cy={100 + Math.sin(angle) * length}
                  r="2"
                  fill="#EDF2F7"
                />
              </>
            )}
          </g>
        );
      })}
      
      {/* Elegant center medallion */}
      <circle cx="100" cy="100" r="16" fill="#2d2d2d" opacity="0.9" />
      <circle cx="100" cy="100" r="11" fill="#EDF2F7" />
      <circle cx="100" cy="100" r="7" fill="#707070" opacity="0.85" />
      <circle cx="100" cy="100" r="3.5" fill="#000E10" />
    </svg>
  );
}
