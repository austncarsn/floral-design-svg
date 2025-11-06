interface Props {
  size?: number;
  className?: string;
}

export default function ElectricStemFive({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco curved S-stem with ornamental nodes */}
      
      {/* S-curved stem path */}
      <path
        d="M 100,175 Q 70,130 100,100 Q 130,70 100,25"
        fill="none"
        stroke="#8B7355"
        strokeWidth="7"
        opacity="0.85"
      />
      
      {/* Ornamental nodes along the curve */}
      {[
        { x: 100, y: 25, color: "#D4A574", size: 12 },
        { x: 120, y: 55, color: "#7A9299", size: 10 },
        { x: 100, y: 100, color: "#8FA396", size: 14 },
        { x: 80, y: 145, color: "#C4A582", size: 10 },
        { x: 100, y: 175, color: "#A89080", size: 12 }
      ].map((node, i) => (
        <g key={i}>
          <circle cx={node.x} cy={node.y} r={node.size} fill={node.color} opacity="0.85" />
          <circle cx={node.x} cy={node.y} r={node.size * 0.6} fill="#E8DCC8" opacity="0.95" />
          <circle cx={node.x} cy={node.y} r={node.size * 0.3} fill="#1A1614" opacity="0.35" />
        </g>
      ))}
      
      {/* Side leaves */}
      {[
        { x: 75, y: 65, angle: -30 },
        { x: 125, y: 135, angle: 30 }
      ].map((leaf, i) => (
        <g key={i}>
          <ellipse
            cx={leaf.x}
            cy={leaf.y}
            rx="18"
            ry="12"
            fill="#B39C87"
            opacity="0.8"
            transform={`rotate(${leaf.angle} ${leaf.x} ${leaf.y})`}
          />
          <ellipse
            cx={leaf.x}
            cy={leaf.y}
            rx="11"
            ry="7"
            fill="#E8DCC8"
            opacity="0.9"
            transform={`rotate(${leaf.angle} ${leaf.x} ${leaf.y})`}
          />
        </g>
      ))}
    </svg>
  );
}
