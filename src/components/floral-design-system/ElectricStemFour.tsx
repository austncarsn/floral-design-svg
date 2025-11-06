interface Props {
  size?: number;
  className?: string;
}

export default function ElectricStemFour({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco triple stem with graduated blooms */}
      
      {/* Three parallel stems */}
      {[70, 100, 130].map((x, stemIndex) => {
        const colors = ["#D4A574", "#7A9299", "#8FA396"];
        const color = colors[stemIndex];
        const heights = [140, 160, 150];
        const height = heights[stemIndex];
        
        return (
          <g key={stemIndex}>
            {/* Stem */}
            <line
              x1={x}
              y1="175"
              x2={x}
              y2={175 - height}
              stroke="#9B8B7E"
              strokeWidth="5"
              opacity="0.75"
            />
            {/* Top bloom */}
            <circle cx={x} cy={175 - height} r="14" fill={color} opacity="0.85" />
            <circle cx={x} cy={175 - height} r="9" fill="#E8DCC8" opacity="0.95" />
            <circle cx={x} cy={175 - height} r="5" fill="#1A1614" opacity="0.35" />
            {/* Mid bloom */}
            <circle cx={x} cy={175 - height * 0.6} r="11" fill={color} opacity="0.8" />
            <circle cx={x} cy={175 - height * 0.6} r="6" fill="#E8DCC8" opacity="0.9" />
            {/* Lower bloom */}
            <circle cx={x} cy={175 - height * 0.3} r="8" fill={color} opacity="0.75" />
            <circle cx={x} cy={175 - height * 0.3} r="4" fill="#E8DCC8" opacity="0.85" />
          </g>
        );
      })}
    </svg>
  );
}
