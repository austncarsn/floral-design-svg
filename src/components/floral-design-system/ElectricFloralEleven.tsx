interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralEleven({ size = 240, className = "" }: Props) {
  const primaryColor = "#C9765A"; // Dusty coral
  const secondaryColor = "#A88DAA"; // Soft lavender
  const accentColor = "#9DB5A0"; // Sage green
  const tertiaryColor = "#D4A573"; // Warm mustard
  const fifthColor = "#7A9B9E"; // Muted teal

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Technical pentagon star - Museum-quality multi-layer */}
      
      {/* Layer 1: Outer glow halo */}
      <circle cx="100" cy="100" r="95" fill={primaryColor} opacity="0.08" />
      <circle cx="100" cy="100" r="87" fill={primaryColor} opacity="0.12" />
      
      {/* Pentagon-based star pattern with multiple layers */}
      {[...Array(5)].map((_, i) => {
        const angle = (i * 72 - 90) * Math.PI / 180;
        const innerAngle = ((i * 72) + 36 - 90) * Math.PI / 180;
        
        const outerRadius = 78;
        const innerRadius = 35;
        
        const x1 = 100 + Math.cos(angle) * outerRadius;
        const y1 = 100 + Math.sin(angle) * outerRadius;
        const x2 = 100 + Math.cos(innerAngle) * innerRadius;
        const y2 = 100 + Math.sin(innerAngle) * innerRadius;
        
        const colors = [primaryColor, secondaryColor, accentColor, tertiaryColor, fifthColor];
        const pointColor = colors[i];
        
        return (
          <g key={i}>
            {/* Layer 2: Shadow for line */}
            <line
              x1="100"
              y1="100"
              x2={x1 + 2}
              y2={y1 + 2}
              stroke="#000E10"
              strokeWidth="9"
              strokeLinecap="round"
              opacity="0.15"
            />
            
            {/* Layer 3: Outer glow for line */}
            <line
              x1="100"
              y1="100"
              x2={x1}
              y2={y1}
              stroke={pointColor}
              strokeWidth="14"
              strokeLinecap="round"
              opacity="0.2"
            />
            
            {/* Layer 4: Main line */}
            <line
              x1="100"
              y1="100"
              x2={x1}
              y2={y1}
              stroke={pointColor}
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.85"
            />
            
            {/* Layer 5: Highlight line */}
            <line
              x1="100"
              y1="100"
              x2={x1}
              y2={y1}
              stroke="#F5F1ED"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.5"
            />
            
            {/* Layer 6: Point ornament with multiple layers */}
            {/* Outer glow */}
            <circle cx={x1} cy={y1} r="16" fill={pointColor} opacity="0.15" />
            {/* Shadow */}
            <circle cx={x1 + 1} cy={y1 + 1} r="11" fill="#000E10" opacity="0.2" />
            {/* Main outer ring */}
            <circle cx={x1} cy={y1} r="11" fill={pointColor} opacity="0.95" />
            {/* Highlight ring */}
            <circle cx={x1 - 1} cy={y1 - 1} r="8" fill="#F5F1ED" opacity="0.3" />
            {/* Middle bright ring */}
            <circle cx={x1} cy={y1} r="6" fill="#F5F1ED" />
            {/* Inner colored dot */}
            <circle cx={x1} cy={y1} r="3" fill={colors[(i + 2) % 5]} opacity="0.9" />
            {/* Final highlight */}
            <circle cx={x1 - 1} cy={y1 - 1} r="1.2" fill="#F5F1ED" />
          </g>
        );
      })}
      
      {/* Layer 7-8: Center medallion with multiple layers */}
      {/* Outer glow */}
      <circle cx="100" cy="100" r="38" fill={secondaryColor} opacity="0.15" />
      {/* Shadow */}
      <circle cx="100" cy="101.5" r="30" fill="#000E10" opacity="0.25" />
      {/* Main outer ring */}
      <circle cx="100" cy="100" r="30" fill={accentColor} opacity="0.95" />
      {/* Highlight ring */}
      <circle cx="100" cy="100" r="26" fill={primaryColor} opacity="0.3" />
      {/* Middle bright ring */}
      <circle cx="100" cy="100" r="21" fill="#F5F1ED" />
      {/* Inner colored ring */}
      <circle cx="100" cy="100" r="14" fill={tertiaryColor} opacity="0.9" />
      {/* Deep center ring */}
      <circle cx="100" cy="100" r="7" fill={fifthColor} />
      {/* Final highlight */}
      <circle cx="98" cy="98" r="3" fill="#F5F1ED" opacity="0.7" />
    </svg>
  );
}