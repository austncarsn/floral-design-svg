interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTwentyFour({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco cubic projection */}
      
      {/* Outer cube */}
      <path
        d="M 50 70 L 100 40 L 150 70 L 150 130 L 100 160 L 50 130 Z"
        fill="#D4A574"
        opacity="0.85"
      />
      
      {/* Inner cube layer */}
      <path
        d="M 70 82 L 100 62 L 130 82 L 130 118 L 100 138 L 70 118 Z"
        fill="#1A1614"
        opacity="0.25"
      />
      
      {/* Center cube */}
      <path
        d="M 85 91 L 100 81 L 115 91 L 115 109 L 100 119 L 85 109 Z"
        fill="#7A9299"
        opacity="0.85"
      />
      
      {/* Connecting edges */}
      <line x1="100" y1="40" x2="100" y2="160" stroke="#1A1614" strokeWidth="2" opacity="0.3" />
      <line x1="50" y1="70" x2="150" y2="130" stroke="#1A1614" strokeWidth="2" opacity="0.3" />
      <line x1="150" y1="70" x2="50" y2="130" stroke="#1A1614" strokeWidth="2" opacity="0.3" />
      
      {/* Corner ornaments */}
      {[
        { x: 100, y: 40 },
        { x: 150, y: 70 },
        { x: 150, y: 130 },
        { x: 100, y: 160 },
        { x: 50, y: 130 },
        { x: 50, y: 70 }
      ].map((point, i) => (
        <g key={i}>
          <circle cx={point.x} cy={point.y} r="8" fill="#C4A582" opacity="0.85" />
          <circle cx={point.x} cy={point.y} r="4" fill="#E8DCC8" />
        </g>
      ))}
      
      {/* Center medallion */}
      <circle cx="100" cy="100" r="18" fill="#1A1614" opacity="0.35" />
      <circle cx="100" cy="100" r="12" fill="#8FA396" opacity="0.85" />
      <circle cx="100" cy="100" r="6" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="3" fill="#8B7355" />
    </svg>
  );
}
