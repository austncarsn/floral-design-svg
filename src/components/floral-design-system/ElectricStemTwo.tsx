interface Props {
  size?: number;
  className?: string;
}

export default function ElectricStemTwo({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco four-leaf elegant stem */}
      
      {/* Main stem */}
      <line x1="100" y1="170" x2="100" y2="30" stroke="#8B7355" strokeWidth="6" opacity="0.85" />
      
      {/* Four symmetrical leaves */}
      {[
        { y: 50, side: -1, color: "#D4A574" },
        { y: 80, side: 1, color: "#8FA396" },
        { y: 110, side: -1, color: "#C4A582" },
        { y: 140, side: 1, color: "#7A9299" }
      ].map((leaf, i) => {
        const leafX = 100 + (leaf.side * 28);
        
        return (
          <g key={i}>
            {/* Leaf shape */}
            <ellipse
              cx={leafX}
              cy={leaf.y}
              rx="22"
              ry="14"
              fill={leaf.color}
              opacity="0.85"
            />
            {/* Leaf detail */}
            <ellipse
              cx={leafX}
              cy={leaf.y}
              rx="14"
              ry="9"
              fill="#E8DCC8"
              opacity="0.95"
            />
            {/* Vein line */}
            <line
              x1="100"
              y1={leaf.y}
              x2={leafX}
              y2={leaf.y}
              stroke="#9B8B7E"
              strokeWidth="2"
              opacity="0.7"
            />
          </g>
        );
      })}
      
      {/* Stem nodes */}
      {[50, 80, 110, 140].map((y, i) => (
        <circle
          key={i}
          cx="100"
          cy={y}
          r="5"
          fill="#8B7355"
          opacity="0.9"
        />
      ))}
    </svg>
  );
}
