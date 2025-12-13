interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralSix({ size = 200, className = "" }: Props) {
  const primaryColor = "#C9765A"; // Dusty coral
  const secondaryColor = "#9DB5A0"; // Sage green  
  const accentColor = "#A88DAA"; // Soft lavender
  const tertiaryColor = "#D4A573"; // Warm mustard
  const highlightColor = "#E8D5C4"; // Creamy neutral
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="diamondGrad6" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#D9967A" stopOpacity="1" />
          <stop offset="60%" stopColor={primaryColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={primaryColor} stopOpacity="0.85" />
        </radialGradient>
        <radialGradient id="coreGrad6" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#ADC5B0" stopOpacity="1" />
          <stop offset="70%" stopColor={secondaryColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.85" />
        </radialGradient>
        <linearGradient id="diamondAccent6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} stopOpacity="0.8" />
          <stop offset="100%" stopColor={accentColor} stopOpacity="0.6" />
        </linearGradient>
      </defs>
      
      {/* Technical diamond starburst - Exquisite Mid-Century Modern */}
      
      {/* Outer glow halos for each diamond */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const cx = 100;
        const cy = 100;
        const distance = 58;
        
        const tipX = cx + Math.cos(angle) * distance;
        const tipY = cy + Math.sin(angle) * distance;
        
        return (
          <g key={`glow-${i}`}>
            <circle cx={tipX} cy={tipY} r="12" fill={primaryColor} opacity="0.15" />
            <circle cx={tipX} cy={tipY} r="8" fill={primaryColor} opacity="0.25" />
          </g>
        );
      })}
      
      {/* 8 pointed diamonds radiating outward with layers */}
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
            {/* Shadow layer */}
            <path
              d={`M ${p1x},${p1y} L ${p2x},${p2y} L ${p3x},${p3y} L ${p4x},${p4y} Z`}
              fill={primaryColor}
              opacity="0.25"
              transform={`translate(${Math.cos(angle) * 1}, ${Math.sin(angle) * 1})`}
            />
            
            {/* Main diamond with gradient */}
            <path
              d={`M ${p1x},${p1y} L ${p2x},${p2y} L ${p3x},${p3y} L ${p4x},${p4y} Z`}
              fill="url(#diamondGrad6)"
            />
            
            {/* Inner accent layer */}
            <path
              d={`M ${p1x},${p1y} L ${p2x},${p2y} L ${p3x},${p3y} L ${p4x},${p4y} Z`}
              fill="url(#diamondAccent6)"
            />
            
            {/* Highlight edge */}
            <line
              x1={p1x}
              y1={p1y}
              x2={p2x}
              y2={p2y}
              stroke={highlightColor}
              strokeWidth="1.5"
              opacity="0.6"
            />
            
            {/* Decorative tip cluster */}
            <circle cx={tipX} cy={tipY} r="5" fill={secondaryColor} opacity="0.95" />
            <circle cx={tipX} cy={tipY} r="2.8" fill={highlightColor} />
            <circle cx={tipX} cy={tipY} r="1.5" fill={accentColor} />
            <circle cx={tipX - 0.8} cy={tipY - 0.8} r="0.7" fill="#D9967A" opacity="0.6" />
          </g>
        );
      })}
      
      {/* Mid-layer decorative nodes */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const midRadius = 40;
        const x = 100 + Math.cos(angle) * midRadius;
        const y = 100 + Math.sin(angle) * midRadius;
        
        return (
          <g key={`mid-${i}`}>
            <circle cx={x} cy={y} r="4.5" fill={accentColor} opacity="0.85" />
            <circle cx={x} cy={y} r="2" fill={highlightColor} />
          </g>
        );
      })}
      
      {/* Inner connecting web with layers */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const innerRadius = 25;
        
        return (
          <g key={`web-${i}`}>
            {/* Shadow line */}
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle + Math.PI / 4) * innerRadius}
              y2={100 + Math.sin(angle + Math.PI / 4) * innerRadius}
              stroke={secondaryColor}
              strokeWidth="1.5"
              opacity="0.3"
            />
            {/* Main line */}
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle + Math.PI / 4) * innerRadius}
              y2={100 + Math.sin(angle + Math.PI / 4) * innerRadius}
              stroke={tertiaryColor}
              strokeWidth="4"
              opacity="0.6"
            />
            {/* Highlight line */}
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle + Math.PI / 4) * innerRadius}
              y2={100 + Math.sin(angle + Math.PI / 4) * innerRadius}
              stroke={highlightColor}
              strokeWidth="1.5"
              opacity="0.5"
            />
          </g>
        );
      })}
      
      {/* Inner ring nodes */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const innerRadius = 25;
        const x = 100 + Math.cos(angle) * innerRadius;
        const y = 100 + Math.sin(angle) * innerRadius;
        
        return (
          <g key={`inner-${i}`}>
            <circle cx={x} cy={y} r="3.5" fill={tertiaryColor} opacity="0.9" />
            <circle cx={x} cy={y} r="1.5" fill={highlightColor} />
          </g>
        );
      })}
      
      {/* Central core with multiple layers */}
      <circle cx="100" cy="100" r="23" fill="url(#coreGrad6)" />
      <circle cx="100" cy="100" r="22" fill={secondaryColor} opacity="0.3" />
      <circle cx="100" cy="100" r="16" fill={highlightColor} opacity="0.98" />
      <circle cx="100" cy="100" r="15" fill={tertiaryColor} opacity="0.25" />
      <circle cx="100" cy="100" r="10" fill={accentColor} opacity="0.9" />
      <circle cx="100" cy="100" r="9" fill={primaryColor} opacity="0.25" />
      <circle cx="100" cy="100" r="5" fill={tertiaryColor} />
      <circle cx="100" cy="100" r="2.5" fill={primaryColor} />
      <circle cx="98.5" cy="98.5" r="1.5" fill="#D9967A" opacity="0.6" />
    </svg>
  );
}