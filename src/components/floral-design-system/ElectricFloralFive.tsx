interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralFive({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Technical orbital pattern - Monochrome */}
      
      {/* Orbital rings */}
      {[55, 42, 28].map((radius, i) => {
        return (
          <circle
            key={i}
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="#4a4a4a"
            strokeWidth={i === 0 ? "4" : i === 1 ? "4.5" : "4"}
            opacity={i === 0 ? 0.7 : i === 1 ? 0.8 : 0.6}
          />
        );
      })}
      
      {/* 12 atomic nodes on outer orbit */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 55;
        const y = 100 + Math.sin(angle) * 55;
        
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="6" fill="#3a3a3a" opacity="0.85" />
            <circle cx={x} cy={y} r="3" fill="#EDF2F7" />
          </g>
        );
      })}
      
      {/* 8 nodes on middle orbit */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 42;
        const y = 100 + Math.sin(angle) * 42;
        
        return (
          <g key={`mid-${i}`}>
            <circle cx={x} cy={y} r="5" fill="#4a4a4a" opacity="0.8" />
            <circle cx={x} cy={y} r="2" fill="#EDF2F7" />
          </g>
        );
      })}
      
      {/* Center nucleus */}
      <circle cx="100" cy="100" r="20" fill="#2d2d2d" opacity="0.9" />
      <circle cx="100" cy="100" r="14" fill="#EDF2F7" />
      <circle cx="100" cy="100" r="9" fill="#707070" opacity="0.85" />
      <circle cx="100" cy="100" r="4.5" fill="#000E10" />
    </svg>
  );
}
