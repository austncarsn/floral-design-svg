interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTwelve({ size = 240, className = "" }: Props) {
  const primaryColor = "#D4A573"; // Warm mustard
  const secondaryColor = "#7A9B9E"; // Muted teal
  const accentColor = "#C9765A"; // Dusty coral
  const tertiaryColor = "#9DB5A0"; // Sage green

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Art Deco octagonal layered mandala - Museum-quality multi-layer */}
      
      {/* Layer 1: Outer glow halo */}
      <circle cx="100" cy="100" r="98" fill={primaryColor} opacity="0.08" />
      <circle cx="100" cy="100" r="90" fill={primaryColor} opacity="0.12" />
      
      {/* Layer 2: Shadow for outer octagon */}
      <path
        d={[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const radius = 82;
          const x = 100 + Math.cos(angle) * radius + 2;
          const y = 100 + Math.sin(angle) * radius + 2;
          return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
        }).join(' ') + ' Z'}
        fill="#000E10"
        opacity="0.15"
      />
      
      {/* Layer 3: Outer octagon ring with glow */}
      <path
        d={[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const radius = 85;
          const x = 100 + Math.cos(angle) * radius;
          const y = 100 + Math.sin(angle) * radius;
          return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
        }).join(' ') + ' Z'}
        fill={primaryColor}
        opacity="0.15"
      />
      <path
        d={[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const radius = 82;
          const x = 100 + Math.cos(angle) * radius;
          const y = 100 + Math.sin(angle) * radius;
          return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
        }).join(' ') + ' Z'}
        fill={primaryColor}
        opacity="0.95"
        stroke="#F5F1ED"
        strokeWidth="2"
        strokeOpacity="0.3"
      />
      
      {/* Layer 4: Middle octagon with gradient effect */}
      <path
        d={[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const radius = 62;
          const x = 100 + Math.cos(angle) * radius;
          const y = 100 + Math.sin(angle) * radius;
          return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
        }).join(' ') + ' Z'}
        fill={secondaryColor}
        opacity="0.85"
        stroke="#F5F1ED"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />
      
      {/* Layer 5: Inner octagon */}
      <path
        d={[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const radius = 45;
          const x = 100 + Math.cos(angle) * radius;
          const y = 100 + Math.sin(angle) * radius;
          return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
        }).join(' ') + ' Z'}
        fill={accentColor}
        opacity="0.9"
        stroke="#F5F1ED"
        strokeWidth="1.2"
        strokeOpacity="0.5"
      />
      
      {/* Layer 6: Corner ornaments with multiple layers */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const radius = 82;
        const x = 100 + Math.cos(angle) * radius;
        const y = 100 + Math.sin(angle) * radius;
        const colors = [primaryColor, secondaryColor, accentColor, tertiaryColor];
        const ornamentColor = colors[i % 4];
        
        return (
          <g key={i}>
            {/* Glow */}
            <circle cx={x} cy={y} r="14" fill={ornamentColor} opacity="0.15" />
            {/* Shadow */}
            <circle cx={x + 0.8} cy={y + 0.8} r="10" fill="#000E10" opacity="0.2" />
            {/* Main outer */}
            <circle cx={x} cy={y} r="10" fill={ornamentColor} opacity="0.95" />
            {/* Highlight ring */}
            <circle cx={x - 0.5} cy={y - 0.5} r="7" fill="#F5F1ED" opacity="0.3" />
            {/* Middle bright */}
            <circle cx={x} cy={y} r="5" fill="#F5F1ED" />
            {/* Inner colored */}
            <circle cx={x} cy={y} r="2" fill={colors[(i + 1) % 4]} opacity="0.9" />
            {/* Highlight */}
            <circle cx={x - 0.6} cy={y - 0.6} r="0.8" fill="#F5F1ED" />
          </g>
        );
      })}
      
      {/* Layer 7-8: Center medallion with multiple layers */}
      {/* Outer glow */}
      <circle cx="100" cy="100" r="40" fill={tertiaryColor} opacity="0.15" />
      {/* Shadow */}
      <circle cx="100" cy="101.5" r="32" fill="#000E10" opacity="0.25" />
      {/* Outer ring */}
      <circle cx="100" cy="100" r="32" fill={secondaryColor} opacity="0.3" />
      {/* Main ring */}
      <circle cx="100" cy="100" r="24" fill={primaryColor} opacity="0.95" />
      {/* Highlight ring */}
      <circle cx="100" cy="100" r="20" fill={accentColor} opacity="0.3" />
      {/* Middle bright ring */}
      <circle cx="100" cy="100" r="16" fill="#F5F1ED" />
      {/* Inner colored ring */}
      <circle cx="100" cy="100" r="10" fill={tertiaryColor} opacity="0.9" />
      {/* Deep center */}
      <circle cx="100" cy="100" r="5" fill={secondaryColor} />
      {/* Final highlight */}
      <circle cx="98" cy="98" r="2.5" fill="#F5F1ED" opacity="0.8" />
    </svg>
  );
}