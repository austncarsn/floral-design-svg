interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralSeven({ size = 200, className = "" }: Props) {
  // Art Deco triangular coordinates with perfect 120° symmetry
  const triangles = [
    { rotation: 0, color: "#D4A574", accentColor: "#7A9299" },
    { rotation: 120, color: "#8FA396", accentColor: "#A89080" },
    { rotation: 240, color: "#C4A582", accentColor: "#B39C87" }
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
      {/* 1930s Art Deco 3-fold rotational symmetry triangular bloom */}
      
      {/* Three perfect equilateral triangles */}
      {triangles.map((tri, i) => (
        <g key={i} transform={`rotate(${tri.rotation} 100 100)`}>
          {/* Outer triangle petal */}
          <path
            d="M 100 32 L 132 82 L 68 82 Z"
            fill={tri.color}
            opacity="0.85"
          />
          {/* Inner frame */}
          <path
            d="M 100 42 L 124 76 L 76 76 Z"
            fill="#E8DCC8"
          />
          {/* Accent triangle */}
          <path
            d="M 100 50 L 116 72 L 84 72 Z"
            fill={tri.accentColor}
            opacity="0.8"
          />
          {/* Small center triangle */}
          <path
            d="M 100 56 L 110 68 L 90 68 Z"
            fill="#E8DCC8"
          />
        </g>
      ))}
      
      {/* Perfect center nexus */}
      <circle cx="100" cy="100" r="22" fill="#A89080" opacity="0.85" />
      <circle cx="100" cy="100" r="15" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="10" fill="#8FA396" opacity="0.8" />
      <circle cx="100" cy="100" r="5" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="2.5" fill="#8B7355" />
    </svg>
  );
}
