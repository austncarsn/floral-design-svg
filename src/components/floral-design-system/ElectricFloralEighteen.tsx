interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralEighteen({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco flower of life sacred geometry */}
      
      {/* Central circle */}
      <circle cx="100" cy="100" r="32" fill="none" stroke="#D4A574" strokeWidth="3" opacity="0.85" />
      
      {/* Six surrounding circles forming flower of life */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 32;
        const y = 100 + Math.sin(angle) * 32;
        
        const colors = ["#7A9299", "#8FA396", "#C4A582", "#A89080", "#B39C87", "#9B8B7E"];
        
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="32"
            fill="none"
            stroke={colors[i]}
            strokeWidth="3"
            opacity="0.85"
          />
        );
      })}
      
      {/* Intersection ornaments */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 32;
        const y = 100 + Math.sin(angle) * 32;
        
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="8" fill="#E8DCC8" opacity="0.95" />
            <circle cx={x} cy={y} r="4" fill="#1A1614" opacity="0.4" />
          </g>
        );
      })}
      
      {/* Outer petal points */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 64;
        const y = 100 + Math.sin(angle) * 64;
        
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="6"
            fill="#C4A582"
            opacity="0.85"
          />
        );
      })}
      
      {/* Center core */}
      <circle cx="100" cy="100" r="18" fill="#1A1614" opacity="0.25" />
      <circle cx="100" cy="100" r="12" fill="#D4A574" opacity="0.85" />
      <circle cx="100" cy="100" r="6" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="3" fill="#8B7355" />
    </svg>
  );
}
