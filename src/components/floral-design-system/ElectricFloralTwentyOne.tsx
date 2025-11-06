interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTwentyOne({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco interconnected nodes pattern */}
      
      {/* Outer ring of nodes */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 65;
        const y = 100 + Math.sin(angle) * 65;
        
        const colors = ["#D4A574", "#7A9299", "#8FA396", "#C4A582"];
        const color = colors[i % 4];
        
        return (
          <g key={i}>
            {/* Connection to center */}
            <line
              x1="100"
              y1="100"
              x2={x}
              y2={y}
              stroke="#1A1614"
              strokeWidth="2"
              opacity="0.25"
            />
            {/* Node */}
            <circle cx={x} cy={y} r="14" fill={color} opacity="0.85" />
            <circle cx={x} cy={y} r="9" fill="#E8DCC8" opacity="0.95" />
            <circle cx={x} cy={y} r="5" fill="#1A1614" opacity="0.35" />
            <circle cx={x} cy={y} r="2" fill={color} opacity="0.9" />
          </g>
        );
      })}
      
      {/* Connections between adjacent nodes */}
      {[...Array(8)].map((_, i) => {
        const angle1 = (i * 45 * Math.PI) / 180;
        const angle2 = ((i + 1) * 45 * Math.PI) / 180;
        const x1 = 100 + Math.cos(angle1) * 65;
        const y1 = 100 + Math.sin(angle1) * 65;
        const x2 = 100 + Math.cos(angle2) * 65;
        const y2 = 100 + Math.sin(angle2) * 65;
        
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#1A1614"
            strokeWidth="2"
            opacity="0.2"
          />
        );
      })}
      
      {/* Center hub */}
      <circle cx="100" cy="100" r="24" fill="#1A1614" opacity="0.3" />
      <circle cx="100" cy="100" r="18" fill="#A89080" opacity="0.85" />
      <circle cx="100" cy="100" r="11" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="6" fill="#B39C87" opacity="0.85" />
      <circle cx="100" cy="100" r="3" fill="#8B7355" />
    </svg>
  );
}
