interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralFourteen({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco geometric mandala */}
      
      {/* Outer ring of 12 petals */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const radius = 68;
        const x = 100 + Math.cos(angle) * radius;
        const y = 100 + Math.sin(angle) * radius;
        
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="16" fill="#D4A574" opacity="0.85" />
            <circle cx={x} cy={y} r="10" fill="#E8DCC8" opacity="0.95" />
            <circle cx={x} cy={y} r="5" fill="#1A1614" opacity="0.4" />
          </g>
        );
      })}
      
      {/* Middle ring of 8 petals */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const radius = 45;
        const x = 100 + Math.cos(angle) * radius;
        const y = 100 + Math.sin(angle) * radius;
        
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="13" fill="#7A9299" opacity="0.85" />
            <circle cx={x} cy={y} r="8" fill="#E8DCC8" opacity="0.95" />
            <circle cx={x} cy={y} r="4" fill="#8FA396" opacity="0.8" />
          </g>
        );
      })}
      
      {/* Inner ring of 6 petals */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const radius = 28;
        const x = 100 + Math.cos(angle) * radius;
        const y = 100 + Math.sin(angle) * radius;
        
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="7"
            fill="#C4A582"
            opacity="0.85"
          />
        );
      })}
      
      {/* Center medallion */}
      <circle cx="100" cy="100" r="18" fill="#1A1614" opacity="0.35" />
      <circle cx="100" cy="100" r="12" fill="#A89080" opacity="0.85" />
      <circle cx="100" cy="100" r="6" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="3" fill="#8B7355" />
    </svg>
  );
}
