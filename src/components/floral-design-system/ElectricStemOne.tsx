interface Props {
  size?: number;
  className?: string;
}

export default function ElectricStemOne({ size = 200, className = "" }: Props) {
  // Perfect vertical Art Deco stem with symmetrically alternating branches
  const nodes = [
    { y: 40, branch: null, color: "#D4A574", size: 9 },
    { y: 70, branch: { x: 70, y: 55, angle: -45 }, color: "#7A9299", size: 10 },
    { y: 100, branch: { x: 130, y: 85, angle: 45 }, color: "#8FA396", size: 10 },
    { y: 130, branch: { x: 72, y: 115, angle: -45 }, color: "#C4A582", size: 10 },
    { y: 160, branch: { x: 128, y: 145, angle: 45 }, color: "#A89080", size: 10 },
    { y: 180, branch: null, color: "#B39C87", size: 9 },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco stylized stem */}
      
      {/* Main vertical stem */}
      <line 
        x1="100" 
        y1="180" 
        x2="100" 
        y2="40" 
        stroke="#8B7355" 
        strokeWidth="5"
        opacity="0.85"
      />
      
      {/* Symmetrically alternating branch elements */}
      {nodes.map((node, i) => {
        if (!node.branch) return null;
        
        return (
          <g key={i}>
            {/* Branch line */}
            <line
              x1="100"
              y1={node.y}
              x2={node.branch.x}
              y2={node.branch.y}
              stroke={node.color}
              strokeWidth="4"
              opacity="0.8"
            />
            
            {/* Branch endpoint ornament */}
            <circle
              cx={node.branch.x}
              cy={node.branch.y}
              r={node.size}
              fill={node.color}
              opacity="0.85"
            />
            <circle
              cx={node.branch.x}
              cy={node.branch.y}
              r={node.size * 0.4}
              fill="#E8DCC8"
            />
            <circle
              cx={node.branch.x}
              cy={node.branch.y}
              r={node.size * 0.2}
              fill="#9B8B7E"
            />
          </g>
        );
      })}
      
      {/* Main stem ornamental nodes */}
      {nodes.map((node, i) => (
        <g key={`node-${i}`}>
          <circle
            cx="100"
            cy={node.y}
            r={node.size}
            fill={node.color}
            opacity="0.85"
          />
          <circle
            cx="100"
            cy={node.y}
            r={node.size * 0.5}
            fill="#E8DCC8"
          />
          <circle
            cx="100"
            cy={node.y}
            r={node.size * 0.25}
            fill="#8B7355"
          />
        </g>
      ))}
    </svg>
  );
}
