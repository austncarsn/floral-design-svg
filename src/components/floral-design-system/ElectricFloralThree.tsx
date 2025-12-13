interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralThree({ size = 200, className = "" }: Props) {
  const primaryColor = "#C9765A"; // Dusty coral
  const secondaryColor = "#7A9B9E"; // Muted teal
  const accentColor = "#A88DAA"; // Soft lavender
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
        {/* Refined gradients for starburst */}
        <linearGradient id="petalGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D9967A" stopOpacity="0.95" />
          <stop offset="70%" stopColor={primaryColor} stopOpacity="0.9" />
          <stop offset="100%" stopColor={primaryColor} stopOpacity="0.85" />
        </linearGradient>
        <radialGradient id="centerGrad3" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#8AABAE" stopOpacity="1" />
          <stop offset="70%" stopColor={secondaryColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.85" />
        </radialGradient>
      </defs>
      
      {/* Technical 8-point geometric starburst - Mid-Century Modern */}
      
      {/* 8 symmetrical streamlined petals with 45° spacing */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const innerRadius = 35;
        const midRadius = 58;
        const outerRadius = 78;
        
        // Calculate perfect tapered shape
        const innerX = 100 + Math.cos(angle) * innerRadius;
        const innerY = 100 + Math.sin(angle) * innerRadius;
        const midX = 100 + Math.cos(angle) * midRadius;
        const midY = 100 + Math.sin(angle) * midRadius;
        const tipX = 100 + Math.cos(angle) * outerRadius;
        const tipY = 100 + Math.sin(angle) * outerRadius;
        
        const perpAngle = angle + Math.PI / 2;
        const width1 = 10.5;
        const width2 = 6.5;
        const width3 = 3.2;
        
        return (
          <g key={i}>
            {/* Tapered petal path - refined */}
            <path
              d={`
                M ${innerX + Math.cos(perpAngle) * width1} ${innerY + Math.sin(perpAngle) * width1}
                L ${midX + Math.cos(perpAngle) * width2} ${midY + Math.sin(perpAngle) * width2}
                L ${tipX + Math.cos(perpAngle) * width3} ${tipY + Math.sin(perpAngle) * width3}
                L ${tipX - Math.cos(perpAngle) * width3} ${tipY - Math.sin(perpAngle) * width3}
                L ${midX - Math.cos(perpAngle) * width2} ${midY - Math.sin(perpAngle) * width2}
                L ${innerX - Math.cos(perpAngle) * width1} ${innerY - Math.sin(perpAngle) * width1}
                Z
              `}
              fill="url(#petalGrad3)"
            />
            {/* Shadow accent */}
            <path
              d={`
                M ${innerX + Math.cos(perpAngle) * width1} ${innerY + Math.sin(perpAngle) * width1}
                L ${midX + Math.cos(perpAngle) * width2} ${midY + Math.sin(perpAngle) * width2}
                L ${tipX + Math.cos(perpAngle) * width3} ${tipY + Math.sin(perpAngle) * width3}
                L ${tipX - Math.cos(perpAngle) * width3} ${tipY - Math.sin(perpAngle) * width3}
                L ${midX - Math.cos(perpAngle) * width2} ${midY - Math.sin(perpAngle) * width2}
                L ${innerX - Math.cos(perpAngle) * width1} ${innerY - Math.sin(perpAngle) * width1}
                Z
              `}
              fill={primaryColor}
              opacity="0.2"
              transform={`translate(${Math.cos(angle) * 0.5}, ${Math.sin(angle) * 0.5})`}
            />
            
            {/* Decorative tip - refined */}
            <circle cx={tipX} cy={tipY} r="5.5" fill={secondaryColor} opacity="0.85" />
            <circle cx={tipX} cy={tipY} r="2.2" fill={highlightColor} />
            <circle cx={tipX - 0.8} cy={tipY - 0.8} r="0.8" fill="#8AABAE" opacity="0.5" />
          </g>
        );
      })}
      
      {/* Perfect concentric center - refined */}
      <circle cx="100" cy="100" r="33" fill="url(#centerGrad3)" />
      <circle cx="100" cy="100" r="23" fill={highlightColor} opacity="0.98" />
      <circle cx="100" cy="100" r="15" fill={accentColor} opacity="0.9" />
      <circle cx="100" cy="100" r="8.5" fill={highlightColor} />
      <circle cx="100" cy="100" r="4.2" fill={primaryColor} />
      <circle cx="98.5" cy="98.5" r="1.8" fill="#D9967A" opacity="0.5" />
    </svg>
  );
}