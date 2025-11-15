interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralNine({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Technical concentric ring burst - Monochrome */}
      
      {/* Outer ring with 16 nodes */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const radius = 68;
        const x = 100 + Math.cos(angle) * radius;
        const y = 100 + Math.sin(angle) * radius;
        const size = i % 2 === 0 ? 7 : 5;
        
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={size} fill="#3a3a3a" opacity="0.85" />
            <circle cx={x} cy={y} r={size * 0.5} fill="#EDF2F7" />
          </g>
        );
      })}
      
      {/* Ring connections */}
      <circle cx="100" cy="100" r="68" fill="none" stroke="#5a5a5a" strokeWidth="3" opacity="0.4" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="#4a4a4a" strokeWidth="3.5" opacity="0.5" />
      <circle cx="100" cy="100" r="35" fill="none" stroke="#3a3a3a" strokeWidth="4" opacity="0.6" />
      
      {/* Middle ring with 12 nodes */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const radius = 50;
        const x = 100 + Math.cos(angle) * radius;
        const y = 100 + Math.sin(angle) * radius;
        
        return (
          <g key={`mid-${i}`}>
            <circle cx={x} cy={y} r="6" fill="#4a4a4a" opacity="0.8" />
            <circle cx={x} cy={y} r="3" fill="#EDF2F7" />
          </g>
        );
      })}
      
      {/* Inner ring with 8 nodes */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const radius = 35;
        const x = 100 + Math.cos(angle) * radius;
        const y = 100 + Math.sin(angle) * radius;
        
        return (
          <g key={`inner-${i}`}>
            <circle cx={x} cy={y} r="5" fill="#5a5a5a" opacity="0.85" />
            <circle cx={x} cy={y} r="2" fill="#EDF2F7" />
          </g>
        );
      })}
      
      {/* Central nucleus */}
      <circle cx="100" cy="100" r="18" fill="#2d2d2d" opacity="0.9" />
      <circle cx="100" cy="100" r="12" fill="#EDF2F7" />
      <circle cx="100" cy="100" r="7" fill="#707070" opacity="0.9" />
      <circle cx="100" cy="100" r="3" fill="#000E10" />
    </svg>
  );
}
