interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralOne({ size = 200, className = "" }: Props) {
  const primaryColor = "#7A9B9E"; // Muted teal
  const secondaryColor = "#D4A573"; // Warm mustard
  const accentColor = "#C9765A"; // Dusty coral
  const tertiaryColor = "#A88DAA"; // Soft lavender
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
        {/* Refined gradients for mid-century aesthetic */}
        <radialGradient id="centerGrad1" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#8AABAE" stopOpacity="1" />
          <stop offset="60%" stopColor={primaryColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={primaryColor} stopOpacity="0.85" />
        </radialGradient>
        <radialGradient id="terminalGrad1" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#E0BF9A" stopOpacity="1" />
          <stop offset="70%" stopColor={secondaryColor} stopOpacity="1" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.9" />
        </radialGradient>
        <linearGradient id="rayGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={primaryColor} stopOpacity="0.6" />
          <stop offset="100%" stopColor={primaryColor} stopOpacity="0.95" />
        </linearGradient>
      </defs>
      
      {/* Technical atomic starburst - Exquisite Mid-Century Modern */}
      
      {/* Outer glow layer */}
      <circle cx="100" cy="100" r="85" fill={primaryColor} opacity="0.08" />
      <circle cx="100" cy="100" r="75" fill={primaryColor} opacity="0.12" />
      
      {/* Dual-layer rays with perfect 30° spacing */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const innerRadius = 28;
        const midRadius = 55;
        const outerRadius = 78;
        
        return (
          <g key={i}>
            {/* Outer glow for ray */}
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle) * outerRadius}
              y2={100 + Math.sin(angle) * outerRadius}
              stroke={primaryColor}
              strokeWidth="12"
              strokeLinecap="round"
              opacity="0.15"
            />
            
            {/* Main ray - refined */}
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle) * outerRadius}
              y2={100 + Math.sin(angle) * outerRadius}
              stroke="url(#rayGrad1)"
              strokeWidth="8"
              strokeLinecap="round"
            />
            
            {/* Inner highlight */}
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle) * outerRadius}
              y2={100 + Math.sin(angle) * outerRadius}
              stroke={highlightColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.5"
            />
            
            {/* Shadow accent */}
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle) * outerRadius}
              y2={100 + Math.sin(angle) * outerRadius}
              stroke={primaryColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.3"
              transform={`translate(${Math.cos(angle) * 0.8}, ${Math.sin(angle) * 0.8})`}
            />
            
            {/* Secondary thin ray - refined */}
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle) * midRadius}
              y2={100 + Math.sin(angle) * midRadius}
              stroke={accentColor}
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.7"
            />
            
            {/* Tertiary accent ray */}
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle) * (midRadius - 8)}
              y2={100 + Math.sin(angle) * (midRadius - 8)}
              stroke={tertiaryColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.5"
            />
          </g>
        );
      })}
      
      {/* Mid-ring decorative nodes */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 65;
        const y = 100 + Math.sin(angle) * 65;
        
        return (
          <g key={`mid-${i}`}>
            <circle cx={x} cy={y} r="3.5" fill={tertiaryColor} opacity="0.8" />
            <circle cx={x} cy={y} r="1.5" fill={highlightColor} />
          </g>
        );
      })}
      
      {/* Technical circular terminals with refined depth */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 78;
        const y = 100 + Math.sin(angle) * 78;
        
        return (
          <g key={i}>
            {/* Outer glow */}
            <circle cx={x} cy={y} r="13" fill={secondaryColor} opacity="0.2" />
            <circle cx={x} cy={y} r="11" fill="url(#terminalGrad1)" />
            {/* Shadow layer */}
            <circle cx={x + 0.5} cy={y + 0.5} r="11" fill={secondaryColor} opacity="0.25" />
            <circle cx={x} cy={y} r="6.5" fill={highlightColor} opacity="0.98" />
            <circle cx={x} cy={y} r="5.5" fill={tertiaryColor} opacity="0.3" />
            <circle cx={x} cy={y} r="3.5" fill={accentColor} />
            <circle cx={x} cy={y} r="2" fill={highlightColor} opacity="0.7" />
            <circle cx={x - 1} cy={y - 1} r="1.3" fill="#E0BF9A" opacity="0.7" />
          </g>
        );
      })}
      
      {/* Concentric center with refined gradients and layers */}
      <circle cx="100" cy="100" r="30" fill={primaryColor} opacity="0.2" />
      <circle cx="100" cy="100" r="27" fill="url(#centerGrad1)" />
      <circle cx="100" cy="100" r="26" fill={primaryColor} opacity="0.3" />
      <circle cx="100" cy="100" r="20" fill={highlightColor} opacity="0.98" />
      <circle cx="100" cy="100" r="19" fill={secondaryColor} opacity="0.25" />
      <circle cx="100" cy="100" r="14" fill={secondaryColor} opacity="0.95" />
      <circle cx="100" cy="100" r="13" fill={tertiaryColor} opacity="0.3" />
      <circle cx="100" cy="100" r="9" fill={highlightColor} opacity="0.9" />
      <circle cx="100" cy="100" r="6" fill={accentColor} />
      <circle cx="100" cy="100" r="3" fill={secondaryColor} />
      <circle cx="98" cy="98" r="2" fill="#E0BF9A" opacity="0.6" />
    </svg>
  );
}