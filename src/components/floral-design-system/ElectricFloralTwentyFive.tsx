interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTwentyFive({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco orbital bloom */}
      
      {/* Orbital rings at various angles */}
      {[
        { rotation: 0, color: "#D4A574" },
        { rotation: 60, color: "#7A9299" },
        { rotation: 120, color: "#8FA396" }
      ].map((orbit, i) => (
        <g key={i}>
          <ellipse
            cx="100"
            cy="100"
            rx="70"
            ry="25"
            fill="none"
            stroke={orbit.color}
            strokeWidth="3"
            opacity="0.75"
            transform={`rotate(${orbit.rotation} 100 100)`}
          />
          {/* Orbital nodes */}
          {[0, 90, 180, 270].map((angle, j) => {
            const rad = ((angle + orbit.rotation) * Math.PI) / 180;
            const a = 70;
            const b = 25;
            const x = 100 + (a * Math.cos(rad) * Math.cos((orbit.rotation * Math.PI) / 180)) - (b * Math.sin(rad) * Math.sin((orbit.rotation * Math.PI) / 180));
            const y = 100 + (a * Math.cos(rad) * Math.sin((orbit.rotation * Math.PI) / 180)) + (b * Math.sin(rad) * Math.cos((orbit.rotation * Math.PI) / 180));
            
            return (
              <circle
                key={j}
                cx={x}
                cy={y}
                r="6"
                fill={orbit.color}
                opacity="0.85"
              />
            );
          })}
        </g>
      ))}
      
      {/* Center nucleus */}
      <circle cx="100" cy="100" r="26" fill="#1A1614" opacity="0.3" />
      <circle cx="100" cy="100" r="20" fill="#C4A582" opacity="0.85" />
      <circle cx="100" cy="100" r="13" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="7" fill="#A89080" opacity="0.85" />
      <circle cx="100" cy="100" r="3" fill="#8B7355" />
    </svg>
  );
}
