interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralThirtySeven({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Monochrome sage green spiral galaxy */}
      
      {/* Spiral arms */}
      {[...Array(5)].map((_, armIndex) => {
        const baseAngle = (armIndex * 72 * Math.PI) / 180;
        const path = [];
        
        for (let i = 0; i <= 12; i++) {
          const t = i / 12;
          const angle = baseAngle + (t * Math.PI * 1.5);
          const radius = 10 + (t * 65);
          const x = 100 + Math.cos(angle) * radius;
          const y = 100 + Math.sin(angle) * radius;
          path.push(i === 0 ? `M ${x},${y}` : `L ${x},${y}`);
        }
        
        return (
          <path
            key={armIndex}
            d={path.join(' ')}
            fill="none"
            stroke="#8FA396"
            strokeWidth="9"
            strokeLinecap="round"
            opacity="0.85"
          />
        );
      })}
      
      {/* Spiral ornaments */}
      {[...Array(5)].map((_, armIndex) => {
        const baseAngle = (armIndex * 72 * Math.PI) / 180;
        const angle = baseAngle + (Math.PI * 1.5);
        const radius = 75;
        const x = 100 + Math.cos(angle) * radius;
        const y = 100 + Math.sin(angle) * radius;
        
        return (
          <g key={armIndex}>
            <circle cx={x} cy={y} r="10" fill="#8FA396" opacity="0.9" />
            <circle cx={x} cy={y} r="5" fill="#E8DCC8" />
          </g>
        );
      })}
      
      {/* Center */}
      <circle cx="100" cy="100" r="24" fill="#1A1614" opacity="0.35" />
      <circle cx="100" cy="100" r="17" fill="#8FA396" opacity="0.85" />
      <circle cx="100" cy="100" r="10" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="5" fill="#8FA396" />
    </svg>
  );
}
