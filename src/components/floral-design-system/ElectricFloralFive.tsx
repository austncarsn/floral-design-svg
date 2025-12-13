interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralFive({ size = 200, className = "" }: Props) {
  const primaryColor = "#7A9B9E"; // Muted teal
  const secondaryColor = "#A88DAA"; // Soft lavender  
  const accentColor = "#D4A573"; // Warm mustard
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
        <radialGradient id="nucleus5" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#8AABAE" stopOpacity="1" />
          <stop offset="70%" stopColor={primaryColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={primaryColor} stopOpacity="0.85" />
        </radialGradient>
        <radialGradient id="nodeGrad5" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#B89DBA" stopOpacity="1" />
          <stop offset="70%" stopColor={secondaryColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.85" />
        </radialGradient>
      </defs>
      
      {/* Technical orbital pattern - Mid-Century Modern */}
      
      {/* Orbital rings - refined */}
      {[55, 42, 28].map((radius, i) => {
        return (
          <circle
            key={i}
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={i === 1 ? secondaryColor : primaryColor}
            strokeWidth={i === 0 ? "4.5" : i === 1 ? "5" : "4.5"}
            opacity={i === 0 ? 0.75 : i === 1 ? 0.85 : 0.65}
          />
        );
      })}
      
      {/* 12 atomic nodes on outer orbit - refined */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 55;
        const y = 100 + Math.sin(angle) * 55;
        
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="6.5" fill="url(#nodeGrad5)" />
            <circle cx={x} cy={y} r="3.2" fill={highlightColor} />
            <circle cx={x - 0.8} cy={y - 0.8} r="1" fill="#B89DBA" opacity="0.5" />
          </g>
        );
      })}
      
      {/* 8 nodes on middle orbit - refined */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 42;
        const y = 100 + Math.sin(angle) * 42;
        
        return (
          <g key={`mid-${i}`}>
            <circle cx={x} cy={y} r="5.5" fill={accentColor} opacity="0.85" />
            <circle cx={x} cy={y} r="2.2" fill={highlightColor} />
          </g>
        );
      })}
      
      {/* Center nucleus - refined */}
      <circle cx="100" cy="100" r="21" fill="url(#nucleus5)" />
      <circle cx="100" cy="100" r="15" fill={highlightColor} opacity="0.98" />
      <circle cx="100" cy="100" r="9.5" fill={secondaryColor} opacity="0.9" />
      <circle cx="100" cy="100" r="5" fill={accentColor} />
      <circle cx="98.5" cy="98.5" r="2" fill="#E0BF9A" opacity="0.5" />
    </svg>
  );
}