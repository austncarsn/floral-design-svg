interface Props {
  size?: number;
  className?: string;
}

export default function ElectricStemSix({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco zigzag stem with alternating blooms */}
      
      {/* Zigzag stem path */}
      <path
        d="M 80,175 L 100,140 L 80,105 L 100,70 L 80,35 L 100,20"
        fill="none"
        stroke="#9B8B7E"
        strokeWidth="6"
        opacity="0.8"
      />
      <path
        d="M 120,175 L 100,140 L 120,105 L 100,70 L 120,35 L 100,20"
        fill="none"
        stroke="#9B8B7E"
        strokeWidth="6"
        opacity="0.8"
      />
      
      {/* Blooms at zigzag points */}
      {[
        { x: 100, y: 20, color: "#D4A574", size: 13 },
        { x: 80, y: 35, color: "#7A9299", size: 11 },
        { x: 120, y: 35, color: "#8FA396", size: 11 },
        { x: 100, y: 70, color: "#C4A582", size: 12 },
        { x: 80, y: 105, color: "#A89080", size: 10 },
        { x: 120, y: 105, color: "#B39C87", size: 10 },
        { x: 100, y: 140, color: "#D4A574", size: 11 },
        { x: 80, y: 175, color: "#7A9299", size: 9 },
        { x: 120, y: 175, color: "#8FA396", size: 9 }
      ].map((bloom, i) => (
        <g key={i}>
          <circle cx={bloom.x} cy={bloom.y} r={bloom.size} fill={bloom.color} opacity="0.85" />
          <circle cx={bloom.x} cy={bloom.y} r={bloom.size * 0.6} fill="#E8DCC8" opacity="0.95" />
          <circle cx={bloom.x} cy={bloom.y} r={bloom.size * 0.3} fill="#1A1614" opacity="0.35" />
        </g>
      ))}
    </svg>
  );
}
