interface Props {
  size?: number;
  className?: string;
}

export default function ElectricStemThree({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco branching stem with elegant leaves */}
      
      {/* Main stem */}
      <line x1="100" y1="175" x2="100" y2="25" stroke="#8B7355" strokeWidth="6" opacity="0.85" />
      
      {/* Symmetrical branches */}
      {[
        { y: 55, angle: -40, side: -1, color: "#D4A574" },
        { y: 85, angle: 40, side: 1, color: "#7A9299" },
        { y: 115, angle: -35, side: -1, color: "#8FA396" },
        { y: 145, angle: 35, side: 1, color: "#C4A582" }
      ].map((branch, i) => {
        const branchLength = 35;
        const rad = (branch.angle * Math.PI) / 180;
        const endX = 100 + Math.cos(rad) * branchLength * branch.side;
        const endY = branch.y + Math.sin(Math.abs(rad)) * branchLength;
        
        return (
          <g key={i}>
            {/* Branch line */}
            <line
              x1="100"
              y1={branch.y}
              x2={endX}
              y2={endY}
              stroke="#9B8B7E"
              strokeWidth="4"
              opacity="0.75"
            />
            {/* Leaf */}
            <ellipse
              cx={endX}
              cy={endY}
              rx="16"
              ry="10"
              fill={branch.color}
              opacity="0.85"
              transform={`rotate(${branch.angle * branch.side} ${endX} ${endY})`}
            />
            <ellipse
              cx={endX}
              cy={endY}
              rx="10"
              ry="6"
              fill="#E8DCC8"
              opacity="0.95"
              transform={`rotate(${branch.angle * branch.side} ${endX} ${endY})`}
            />
          </g>
        );
      })}
      
      {/* Stem nodes */}
      {[35, 55, 85, 115, 145, 165].map((y, i) => (
        <circle
          key={i}
          cx="100"
          cy={y}
          r="6"
          fill="#1A1614"
          opacity="0.4"
        />
      ))}
    </svg>
  );
}
