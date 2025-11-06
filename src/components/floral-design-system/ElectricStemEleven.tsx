interface Props {
  size?: number;
  className?: string;
}

export default function ElectricStemEleven({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco fern frond with geometric pinnae */}
      
      {/* Main rachis (central stem) */}
      <path
        d="M 100,180 Q 95,140 98,100 Q 100,60 95,20"
        fill="none"
        stroke="#8B7355"
        strokeWidth="6"
        opacity="0.85"
      />
      
      {/* Pinnae (leaflets) in pairs */}
      {[
        { y: 35, length: 15, color: "#D4A574" },
        { y: 55, length: 20, color: "#7A9299" },
        { y: 75, length: 24, color: "#8FA396" },
        { y: 95, length: 26, color: "#C4A582" },
        { y: 115, length: 24, color: "#A89080" },
        { y: 135, length: 20, color: "#B39C87" },
        { y: 155, length: 15, color: "#9B8B7E" }
      ].map((pinnae, i) => {
        const stemX = 98 - (i * 0.3); // Slight curve adjustment
        
        return (
          <g key={i}>
            {/* Left pinnae */}
            <ellipse
              cx={stemX - pinnae.length}
              cy={pinnae.y}
              rx={pinnae.length}
              ry="6"
              fill={pinnae.color}
              opacity="0.85"
              transform={`rotate(-20 ${stemX - pinnae.length} ${pinnae.y})`}
            />
            <ellipse
              cx={stemX - pinnae.length}
              cy={pinnae.y}
              rx={pinnae.length * 0.6}
              ry="3"
              fill="#E8DCC8"
              opacity="0.9"
              transform={`rotate(-20 ${stemX - pinnae.length} ${pinnae.y})`}
            />
            
            {/* Right pinnae */}
            <ellipse
              cx={stemX + pinnae.length}
              cy={pinnae.y}
              rx={pinnae.length}
              ry="6"
              fill={pinnae.color}
              opacity="0.85"
              transform={`rotate(20 ${stemX + pinnae.length} ${pinnae.y})`}
            />
            <ellipse
              cx={stemX + pinnae.length}
              cy={pinnae.y}
              rx={pinnae.length * 0.6}
              ry="3"
              fill="#E8DCC8"
              opacity="0.9"
              transform={`rotate(20 ${stemX + pinnae.length} ${pinnae.y})`}
            />
          </g>
        );
      })}
      
      {/* Terminal pinnae */}
      <ellipse cx="95" cy="20" rx="12" ry="18" fill="#D4A574" opacity="0.85" />
      <ellipse cx="95" cy="20" rx="7" ry="11" fill="#E8DCC8" opacity="0.95" />
    </svg>
  );
}
