interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralThirteen({ size = 240, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco spiral bloom - Museum quality with ethereal halos */}
      
      {/* Outer ethereal glow */}
      <circle cx="120" cy="120" r="105" fill="#D4A574" opacity="0.08" />
      <circle cx="120" cy="120" r="95" fill="#7A9299" opacity="0.08" />
      
      {/* Spiral petals with shadow layers */}
      {[...Array(12)].map((_, i) => {
        const baseAngle = (i * 30 * Math.PI) / 180;
        const spiralOffset = i * 3.6;
        const radius = 54 + spiralOffset;
        const x = 120 + Math.cos(baseAngle) * radius;
        const y = 120 + Math.sin(baseAngle) * radius;
        
        const colors = ["#D4A574", "#7A9299", "#8FA396"];
        const color = colors[i % 3];
        const glowColors = ["#E8C8A8", "#A8C8D4", "#C8D4C8"];
        const glowColor = glowColors[i % 3];
        
        return (
          <g key={i}>
            {/* Outer glow halo */}
            <circle cx={x} cy={y} r="26" fill={glowColor} opacity="0.15" />
            <circle cx={x} cy={y} r="23" fill={glowColor} opacity="0.2" />
            
            {/* Shadow layer */}
            <circle cx={x + 1.5} cy={y + 1.5} r="21" fill="#1A1614" opacity="0.12" />
            
            {/* Main petal */}
            <circle cx={x} cy={y} r="21" fill={color} opacity="0.88" />
            
            {/* Gradient overlay */}
            <circle cx={x} cy={y} r="18" fill="#FFFFFF" opacity="0.15" />
            
            {/* Inner light circle */}
            <circle cx={x} cy={y} r="14" fill="#E8DCC8" opacity="0.95" />
            
            {/* Inner shadow */}
            <circle cx={x} cy={y} r="8" fill="#1A1614" opacity="0.2" />
            
            {/* Center accent */}
            <circle cx={x} cy={y} r="5" fill={color} opacity="0.95" />
            
            {/* Highlight dot */}
            <circle cx={x - 1.5} cy={y - 1.5} r="2" fill="#FFFFFF" opacity="0.6" />
          </g>
        );
      })}
      
      {/* Connecting spiral line with gradient */}
      <path
        d={[...Array(12)].map((_, i) => {
          const baseAngle = (i * 30 * Math.PI) / 180;
          const spiralOffset = i * 3.6;
          const radius = 54 + spiralOffset;
          const x = 120 + Math.cos(baseAngle) * radius;
          const y = 120 + Math.sin(baseAngle) * radius;
          return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
        }).join(' ')}
        fill="none"
        stroke="#1A1614"
        strokeWidth="2.5"
        opacity="0.25"
      />
      
      {/* Secondary glow line */}
      <path
        d={[...Array(12)].map((_, i) => {
          const baseAngle = (i * 30 * Math.PI) / 180;
          const spiralOffset = i * 3.6;
          const radius = 54 + spiralOffset;
          const x = 120 + Math.cos(baseAngle) * radius;
          const y = 120 + Math.sin(baseAngle) * radius;
          return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
        }).join(' ')}
        fill="none"
        stroke="#D4A574"
        strokeWidth="1.5"
        opacity="0.2"
      />
      
      {/* Center anchor with museum quality layers */}
      <circle cx="120" cy="120" r="38" fill="#D4A574" opacity="0.15" />
      <circle cx="120" cy="120" r="35" fill="#C4A582" opacity="0.15" />
      
      {/* Shadow base */}
      <circle cx="121.5" cy="121.5" r="32" fill="#1A1614" opacity="0.15" />
      
      {/* Main center circle */}
      <circle cx="120" cy="120" r="32" fill="#C4A582" opacity="0.88" />
      
      {/* Gradient layer */}
      <circle cx="120" cy="120" r="28" fill="#FFFFFF" opacity="0.12" />
      
      {/* Dark ring */}
      <circle cx="120" cy="120" r="24" fill="#1A1614" opacity="0.25" />
      
      {/* Mid layer */}
      <circle cx="120" cy="120" r="18" fill="#A89080" opacity="0.88" />
      
      {/* Light accent */}
      <circle cx="120" cy="120" r="12" fill="#E8DCC8" opacity="0.95" />
      
      {/* Inner shadow */}
      <circle cx="120" cy="120" r="7" fill="#1A1614" opacity="0.2" />
      
      {/* Core */}
      <circle cx="120" cy="120" r="5" fill="#8B7355" />
      
      {/* Highlight */}
      <circle cx="118" cy="118" r="2" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}
