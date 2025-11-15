interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralSix({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Technical diamond starburst - Monochrome */}
      
      {/* 8 pointed diamonds radiating outward */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const cx = 100;
        const cy = 100;
        const distance = 58;
        const diamondSize = 18;
        
        const tipX = cx + Math.cos(angle) * distance;
        const tipY = cy + Math.sin(angle) * distance;
        
        const perpAngle = angle + Math.PI / 2;
        const sideWidth = diamondSize / 2;
        const lengthBack = diamondSize * 0.8;
        
        // Diamond points
        const p1x = tipX;
        const p1y = tipY;
        const p2x = cx + Math.cos(angle) * (distance - lengthBack) + Math.cos(perpAngle) * sideWidth;
        const p2y = cy + Math.sin(angle) * (distance - lengthBack) + Math.sin(perpAngle) * sideWidth;
        const p3x = cx + Math.cos(angle) * (distance - lengthBack * 1.3);
        const p3y = cy + Math.sin(angle) * (distance - lengthBack * 1.3);
        const p4x = cx + Math.cos(angle) * (distance - lengthBack) - Math.cos(perpAngle) * sideWidth;
        const p4y = cy + Math.sin(angle) * (distance - lengthBack) - Math.sin(perpAngle) * sideWidth;
        
        return (
          <g key={i}>
            <path
              d={`M ${p1x},${p1y} L ${p2x},${p2y} L ${p3x},${p3y} L ${p4x},${p4y} Z`}
              fill="#5a5a5a"
              opacity="0.85"
            />
            <circle cx={tipX} cy={tipY} r="4" fill="#3a3a3a" opacity="0.9" />
            <circle cx={tipX} cy={tipY} r="2" fill="#EDF2F7" />
          </g>
        );
      })}
      
      {/* Inner connecting web */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const innerRadius = 25;
        
        return (
          <line
            key={`web-${i}`}
            x1={100 + Math.cos(angle) * innerRadius}
            y1={100 + Math.sin(angle) * innerRadius}
            x2={100 + Math.cos(angle + Math.PI / 4) * innerRadius}
            y2={100 + Math.sin(angle + Math.PI / 4) * innerRadius}
            stroke="#4a4a4a"
            strokeWidth="3.5"
            opacity="0.5"
          />
        );
      })}
      
      {/* Central core */}
      <circle cx="100" cy="100" r="22" fill="#2d2d2d" opacity="0.9" />
      <circle cx="100" cy="100" r="15" fill="#EDF2F7" />
      <circle cx="100" cy="100" r="9" fill="#707070" opacity="0.85" />
      <circle cx="100" cy="100" r="4" fill="#000E10" />
    </svg>
  );
}
