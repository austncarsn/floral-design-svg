interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralNine({ size = 240, className = "" }: Props) {
  const primaryColor = "#7A9B9E"; // Muted teal
  const secondaryColor = "#C9765A"; // Dusty coral
  const accentColor = "#A88DAA"; // Soft lavender

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Technical concentric ring burst - Museum-quality multi-layer */}
      
      {/* Layer 1: Outer glow halo */}
      <circle cx="100" cy="100" r="85" fill={primaryColor} opacity="0.08" />
      <circle cx="100" cy="100" r="78" fill={primaryColor} opacity="0.12" />
      
      {/* Layer 2: Shadow layer */}
      <circle cx="100" cy="102" r="70" fill="#000E10" opacity="0.15" />
      
      {/* Layer 3: Outer ring with 16 nodes */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const radius = 68;
        const x = 100 + Math.cos(angle) * radius;
        const y = 100 + Math.sin(angle) * radius;
        const size = i % 2 === 0 ? 7 : 5;
        
        return (
          <g key={i}>
            {/* Shadow for node */}
            <circle cx={x + 1} cy={y + 1} r={size} fill="#000E10" opacity="0.2" />
            {/* Main node with gradient */}
            <circle cx={x} cy={y} r={size} fill={i % 3 === 0 ? primaryColor : i % 3 === 1 ? secondaryColor : accentColor} opacity="0.9" />
            {/* Highlight */}
            <circle cx={x - 1} cy={y - 1} r={size * 0.4} fill="#F5F1ED" opacity="0.6" />
            {/* Center dot */}
            <circle cx={x} cy={y} r={size * 0.25} fill="#F5F1ED" />
          </g>
        );
      })}
      
      {/* Layer 4: Ring connections with gradient strokes */}
      <circle cx="100" cy="100" r="68" fill="none" stroke={primaryColor} strokeWidth="3" opacity="0.5" />
      <circle cx="100" cy="100" r="68" fill="none" stroke="#F5F1ED" strokeWidth="1" opacity="0.3" />
      
      <circle cx="100" cy="100" r="50" fill="none" stroke={secondaryColor} strokeWidth="3.5" opacity="0.6" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="#F5F1ED" strokeWidth="1.2" opacity="0.35" />
      
      <circle cx="100" cy="100" r="35" fill="none" stroke={accentColor} strokeWidth="4" opacity="0.65" />
      <circle cx="100" cy="100" r="35" fill="none" stroke="#F5F1ED" strokeWidth="1.5" opacity="0.4" />
      
      {/* Layer 5: Middle ring with 12 nodes */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const radius = 50;
        const x = 100 + Math.cos(angle) * radius;
        const y = 100 + Math.sin(angle) * radius;
        
        return (
          <g key={`mid-${i}`}>
            {/* Shadow */}
            <circle cx={x + 0.8} cy={y + 0.8} r="6" fill="#000E10" opacity="0.2" />
            {/* Main node */}
            <circle cx={x} cy={y} r="6" fill={i % 2 === 0 ? secondaryColor : accentColor} opacity="0.85" />
            {/* Highlight */}
            <circle cx={x - 0.8} cy={y - 0.8} r="2.5" fill="#F5F1ED" opacity="0.7" />
            {/* Center */}
            <circle cx={x} cy={y} r="1.5" fill="#F5F1ED" />
          </g>
        );
      })}
      
      {/* Layer 6: Inner ring with 8 nodes */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const radius = 35;
        const x = 100 + Math.cos(angle) * radius;
        const y = 100 + Math.sin(angle) * radius;
        
        return (
          <g key={`inner-${i}`}>
            {/* Shadow */}
            <circle cx={x + 0.6} cy={y + 0.6} r="5" fill="#000E10" opacity="0.2" />
            {/* Main node */}
            <circle cx={x} cy={y} r="5" fill={primaryColor} opacity="0.9" />
            {/* Highlight */}
            <circle cx={x - 0.6} cy={y - 0.6} r="2" fill="#F5F1ED" opacity="0.75" />
            {/* Center */}
            <circle cx={x} cy={y} r="1" fill="#F5F1ED" />
          </g>
        );
      })}
      
      {/* Layer 7: Central nucleus with multiple layers */}
      {/* Outer glow */}
      <circle cx="100" cy="100" r="22" fill={secondaryColor} opacity="0.15" />
      {/* Shadow */}
      <circle cx="100" cy="101" r="18" fill="#000E10" opacity="0.25" />
      {/* Main outer ring */}
      <circle cx="100" cy="100" r="18" fill={accentColor} opacity="0.9" />
      {/* Mid ring */}
      <circle cx="100" cy="100" r="12" fill="#F5F1ED" />
      {/* Inner ring with gradient effect */}
      <circle cx="100" cy="100" r="7" fill={primaryColor} opacity="0.95" />
      {/* Highlight on inner ring */}
      <circle cx="98" cy="98" r="3" fill="#F5F1ED" opacity="0.6" />
      {/* Center dot */}
      <circle cx="100" cy="100" r="3" fill={secondaryColor} />
      {/* Final highlight */}
      <circle cx="99" cy="99" r="1.2" fill="#F5F1ED" />
    </svg>
  );
}