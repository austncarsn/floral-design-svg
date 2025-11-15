interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralOne({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Technical atomic starburst - Monochrome */}
      
      {/* Dual-layer rays with perfect 30° spacing */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const innerRadius = 28;
        const midRadius = 55;
        const outerRadius = 78;
        
        return (
          <g key={i}>
            {/* Main ray */}
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle) * outerRadius}
              y2={100 + Math.sin(angle) * outerRadius}
              stroke="#2d2d2d"
              strokeWidth="7"
              strokeLinecap="round"
              opacity="0.85"
            />
            
            {/* Secondary thin ray */}
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle) * midRadius}
              y2={100 + Math.sin(angle) * midRadius}
              stroke="#707070"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.5"
            />
          </g>
        );
      })}
      
      {/* Technical circular terminals at ray endpoints */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 78;
        const y = 100 + Math.sin(angle) * 78;
        
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="9" fill="#2d2d2d" opacity="0.9" />
            <circle cx={x} cy={y} r="5" fill="#EDF2F7" />
            <circle cx={x} cy={y} r="2.5" fill="#2d2d2d" />
          </g>
        );
      })}
      
      {/* Concentric center with perfect symmetry */}
      <circle cx="100" cy="100" r="24" fill="#2d2d2d" opacity="0.9" />
      <circle cx="100" cy="100" r="16" fill="#EDF2F7" />
      <circle cx="100" cy="100" r="10" fill="#707070" opacity="0.85" />
      <circle cx="100" cy="100" r="5" fill="#000E10" />
    </svg>
  );
}
