interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralFour({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco geometric grid flower with 4-fold rotational symmetry */}
      
      {/* Four perfectly rotated square petal modules */}
      {[0, 45, 90, 135].map((rotation, i) => {
        const colors = ["#D4A574", "#7A9299", "#C4A582", "#8FA396"];
        const inverseColors = ["#A89080", "#B39C87", "#8B7355", "#9B8B7E"];
        
        return (
          <g key={i} transform={`rotate(${rotation} 100 100)`}>
            {/* Outer square petal */}
            <rect
              x="76"
              y="26"
              width="48"
              height="48"
              fill={colors[i]}
              opacity="0.85"
            />
            {/* Inner frame */}
            <rect
              x="82"
              y="32"
              width="36"
              height="36"
              fill="#E8DCC8"
              opacity="0.95"
            />
            {/* Middle square */}
            <rect
              x="88"
              y="38"
              width="24"
              height="24"
              fill={inverseColors[i]}
              opacity="0.8"
            />
            {/* Inner accent */}
            <rect
              x="94"
              y="44"
              width="12"
              height="12"
              fill="#E8DCC8"
            />
            {/* Core pixel */}
            <rect
              x="98"
              y="48"
              width="4"
              height="4"
              fill={colors[i]}
            />
          </g>
        );
      })}
      
      {/* Perfect center diamond (rotated square) */}
      <path
        d="M 100 72 L 118 90 L 100 108 L 82 90 Z"
        fill="#A89080"
        opacity="0.85"
      />
      <path
        d="M 100 78 L 112 90 L 100 102 L 88 90 Z"
        fill="#E8DCC8"
      />
      <path
        d="M 100 82 L 108 90 L 100 98 L 92 90 Z"
        fill="#8FA396"
        opacity="0.8"
      />
      <circle cx="100" cy="90" r="6" fill="#E8DCC8" />
      <circle cx="100" cy="90" r="3" fill="#8B7355" />
    </svg>
  );
}
