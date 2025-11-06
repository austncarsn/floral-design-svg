interface Props {
  size?: number;
  className?: string;
}

export default function ElectricStemTen({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco bamboo-inspired segmented stem */}
      
      {/* Bamboo segments */}
      {[
        { y: 145, height: 30, color: "#8B7355" },
        { y: 110, height: 35, color: "#9B8B7E" },
        { y: 70, height: 40, color: "#A89080" },
        { y: 25, height: 45, color: "#B39C87" }
      ].map((segment, i) => (
        <g key={i}>
          {/* Segment body */}
          <rect
            x="88"
            y={segment.y - segment.height}
            width="24"
            height={segment.height}
            fill={segment.color}
            opacity="0.85"
            rx="2"
          />
          <rect
            x="92"
            y={segment.y - segment.height + 4}
            width="16"
            height={segment.height - 8}
            fill="#E8DCC8"
            opacity="0.3"
          />
          
          {/* Segment joint/node */}
          <rect
            x="82"
            y={segment.y - 6}
            width="36"
            height="12"
            fill="#1A1614"
            opacity="0.4"
            rx="2"
          />
          <rect
            x="86"
            y={segment.y - 4}
            width="28"
            height="8"
            fill={segment.color}
            opacity="0.9"
            rx="1"
          />
        </g>
      ))}
      
      {/* Side shoots */}
      {[
        { x: 112, y: 100, angle: 35, color: "#7A9299" },
        { x: 88, y: 60, angle: -35, color: "#8FA396" }
      ].map((shoot, i) => (
        <g key={i}>
          <line
            x1="100"
            y1={shoot.y}
            x2={shoot.x + (shoot.angle > 0 ? 25 : -25)}
            y2={shoot.y - 15}
            stroke="#9B8B7E"
            strokeWidth="4"
            opacity="0.75"
          />
          <ellipse
            cx={shoot.x + (shoot.angle > 0 ? 25 : -25)}
            cy={shoot.y - 15}
            rx="14"
            ry="8"
            fill={shoot.color}
            opacity="0.85"
            transform={`rotate(${shoot.angle} ${shoot.x + (shoot.angle > 0 ? 25 : -25)} ${shoot.y - 15})`}
          />
        </g>
      ))}
    </svg>
  );
}
