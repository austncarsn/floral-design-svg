interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralSixteen({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco interlocking circular motif */}
      
      {/* Four interlocking circles forming gear-like pattern */}
      {[
        { x: 100, y: 50, color: "#D4A574" },
        { x: 150, y: 100, color: "#7A9299" },
        { x: 100, y: 150, color: "#8FA396" },
        { x: 50, y: 100, color: "#C4A582" }
      ].map((circle, i) => (
        <g key={i}>
          {/* Outer ring */}
          <circle cx={circle.x} cy={circle.y} r="36" fill={circle.color} opacity="0.85" />
          {/* Inner dark ring */}
          <circle cx={circle.x} cy={circle.y} r="28" fill="#1A1614" opacity="0.3" />
          {/* Middle fill */}
          <circle cx={circle.x} cy={circle.y} r="22" fill="#E8DCC8" opacity="0.95" />
          {/* Center accent */}
          <circle cx={circle.x} cy={circle.y} r="14" fill={circle.color} opacity="0.8" />
          {/* Core */}
          <circle cx={circle.x} cy={circle.y} r="7" fill="#1A1614" opacity="0.5" />
        </g>
      ))}
      
      {/* Connecting lines forming cross */}
      <line x1="100" y1="50" x2="100" y2="150" stroke="#1A1614" strokeWidth="3" opacity="0.25" />
      <line x1="50" y1="100" x2="150" y2="100" stroke="#1A1614" strokeWidth="3" opacity="0.25" />
      
      {/* Central hub */}
      <circle cx="100" cy="100" r="28" fill="#A89080" opacity="0.85" />
      <circle cx="100" cy="100" r="20" fill="#1A1614" opacity="0.35" />
      <circle cx="100" cy="100" r="14" fill="#B39C87" opacity="0.85" />
      <circle cx="100" cy="100" r="8" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="4" fill="#8B7355" />
    </svg>
  );
}
