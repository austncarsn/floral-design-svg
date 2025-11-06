interface Props {
  size?: number;
  className?: string;
}

export default function ElectricStemEight({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco botanical specimen with symmetrical leaves */}
      
      {/* Central stem */}
      <line x1="100" y1="180" x2="100" y2="20" stroke="#8B7355" strokeWidth="7" opacity="0.85" />
      
      {/* Paired leaves at intervals */}
      {[
        { y: 50, color: "#D4A574" },
        { y: 80, color: "#7A9299" },
        { y: 110, color: "#8FA396" },
        { y: 140, color: "#C4A582" }
      ].map((pair, i) => (
        <g key={i}>
          {/* Left leaf */}
          <ellipse
            cx={70}
            cy={pair.y}
            rx="24"
            ry="14"
            fill={pair.color}
            opacity="0.85"
            transform={`rotate(-25 70 ${pair.y})`}
          />
          <ellipse
            cx={70}
            cy={pair.y}
            rx="15"
            ry="8"
            fill="#E8DCC8"
            opacity="0.95"
            transform={`rotate(-25 70 ${pair.y})`}
          />
          <line
            x1="100"
            y1={pair.y}
            x2="70"
            y2={pair.y}
            stroke="#9B8B7E"
            strokeWidth="3"
            opacity="0.7"
          />
          
          {/* Right leaf */}
          <ellipse
            cx={130}
            cy={pair.y}
            rx="24"
            ry="14"
            fill={pair.color}
            opacity="0.85"
            transform={`rotate(25 130 ${pair.y})`}
          />
          <ellipse
            cx={130}
            cy={pair.y}
            rx="15"
            ry="8"
            fill="#E8DCC8"
            opacity="0.95"
            transform={`rotate(25 130 ${pair.y})`}
          />
          <line
            x1="100"
            y1={pair.y}
            x2="130"
            y2={pair.y}
            stroke="#9B8B7E"
            strokeWidth="3"
            opacity="0.7"
          />
        </g>
      ))}
      
      {/* Top bloom */}
      <circle cx="100" cy="20" r="16" fill="#A89080" opacity="0.85" />
      <circle cx="100" cy="20" r="10" fill="#E8DCC8" opacity="0.95" />
      <circle cx="100" cy="20" r="5" fill="#1A1614" opacity="0.4" />
    </svg>
  );
}