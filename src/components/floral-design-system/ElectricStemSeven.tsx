interface Props {
  size?: number;
  className?: string;
}

export default function ElectricStemSeven({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco willow branch with cascading leaves */}
      
      {/* Main curved branch */}
      <path
        d="M 80,20 Q 90,60 85,100 Q 80,140 90,175"
        fill="none"
        stroke="#8B7355"
        strokeWidth="6"
        opacity="0.85"
      />
      
      {/* Cascading leaves */}
      {[
        { x: 80, y: 20, angle: -45, color: "#D4A574" },
        { x: 88, y: 45, angle: -30, color: "#7A9299" },
        { x: 87, y: 70, angle: -20, color: "#8FA396" },
        { x: 85, y: 100, angle: 0, color: "#C4A582" },
        { x: 83, y: 125, angle: 15, color: "#A89080" },
        { x: 85, y: 150, angle: 25, color: "#B39C87" },
        { x: 90, y: 175, angle: 35, color: "#9B8B7E" }
      ].map((leaf, i) => (
        <g key={i}>
          <ellipse
            cx={leaf.x}
            cy={leaf.y}
            rx="20"
            ry="10"
            fill={leaf.color}
            opacity="0.85"
            transform={`rotate(${leaf.angle} ${leaf.x} ${leaf.y})`}
          />
          <ellipse
            cx={leaf.x}
            cy={leaf.y}
            rx="12"
            ry="6"
            fill="#E8DCC8"
            opacity="0.9"
            transform={`rotate(${leaf.angle} ${leaf.x} ${leaf.y})`}
          />
          <line
            x1={leaf.x}
            y1={leaf.y}
            x2={leaf.x + Math.cos((leaf.angle * Math.PI) / 180) * 12}
            y2={leaf.y + Math.sin((leaf.angle * Math.PI) / 180) * 12}
            stroke="#1A1614"
            strokeWidth="1.5"
            opacity="0.3"
          />
        </g>
      ))}
      
      {/* Secondary branch */}
      <path
        d="M 85,100 Q 110,110 120,130"
        fill="none"
        stroke="#9B8B7E"
        strokeWidth="4"
        opacity="0.7"
      />
      <ellipse cx="120" cy="130" rx="16" ry="9" fill="#8FA396" opacity="0.85" transform="rotate(35 120 130)" />
      <ellipse cx="120" cy="130" rx="10" ry="5" fill="#E8DCC8" opacity="0.9" transform="rotate(35 120 130)" />
    </svg>
  );
}
