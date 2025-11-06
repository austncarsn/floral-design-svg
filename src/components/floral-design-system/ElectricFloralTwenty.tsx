interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTwenty({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco radial beam projector */}
      
      {/* 20 radial beams */}
      {[...Array(20)].map((_, i) => {
        const angle = (i * 18 * Math.PI) / 180;
        const innerRadius = 30;
        const outerRadius = i % 2 === 0 ? 80 : 70;
        
        const colors = ["#D4A574", "#7A9299", "#8FA396", "#C4A582"];
        const color = colors[i % 4];
        
        return (
          <g key={i}>
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle) * outerRadius}
              y2={100 + Math.sin(angle) * outerRadius}
              stroke={color}
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.8"
            />
            {i % 2 === 0 && (
              <circle
                cx={100 + Math.cos(angle) * outerRadius}
                cy={100 + Math.sin(angle) * outerRadius}
                r="6"
                fill={color}
                opacity="0.85"
              />
            )}
          </g>
        );
      })}
      
      {/* Inner decorative ring */}
      <circle cx="100" cy="100" r="38" fill="none" stroke="#1A1614" strokeWidth="2" opacity="0.25" />
      
      {/* Center hub */}
      <circle cx="100" cy="100" r="26" fill="#1A1614" opacity="0.3" />
      <circle cx="100" cy="100" r="20" fill="#A89080" opacity="0.85" />
      <circle cx="100" cy="100" r="13" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="7" fill="#B39C87" opacity="0.85" />
      <circle cx="100" cy="100" r="3" fill="#8B7355" />
    </svg>
  );
}
