interface Props {
  size?: number;
  className?: string;
}

export default function ElectricStemThirteen({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco cattail/bulrush stems */}
      
      {/* Three cattail stems */}
      {[
        { x: 75, height: 155, headY: 25, color: "#8B7355", bulrushColor: "#9B8B7E" },
        { x: 100, height: 170, headY: 15, color: "#8B7355", bulrushColor: "#A89080" },
        { x: 125, height: 145, headY: 35, color: "#8B7355", bulrushColor: "#B39C87" }
      ].map((stem, i) => (
        <g key={i}>
          {/* Stem */}
          <line
            x1={stem.x}
            y1="180"
            y2={stem.headY + 40}
            x2={stem.x}
            stroke={stem.color}
            strokeWidth="5"
            opacity="0.85"
          />
          
          {/* Bulrush head (cigar-shaped) */}
          <ellipse
            cx={stem.x}
            cy={stem.headY + 15}
            rx="8"
            ry="28"
            fill={stem.bulrushColor}
            opacity="0.85"
          />
          <ellipse
            cx={stem.x}
            cy={stem.headY + 15}
            rx="5"
            ry="20"
            fill="#1A1614"
            opacity="0.25"
          />
          
          {/* Seed head wispy top */}
          <ellipse
            cx={stem.x}
            cy={stem.headY}
            rx="6"
            ry="8"
            fill="#C4A582"
            opacity="0.6"
          />
          {[...Array(5)].map((_, j) => {
            const offsetX = (j - 2) * 3;
            return (
              <line
                key={j}
                x1={stem.x + offsetX}
                y1={stem.headY - 8}
                x2={stem.x + offsetX}
                y2={stem.headY - 18}
                stroke="#C4A582"
                strokeWidth="1.5"
                opacity="0.5"
              />
            );
          })}
          
          {/* Leaves at base */}
          <path
            d={`M ${stem.x} 180 Q ${stem.x - 20} 150 ${stem.x - 25} 120`}
            fill="none"
            stroke="#7A9299"
            strokeWidth="4"
            opacity="0.75"
          />
          <path
            d={`M ${stem.x} 180 Q ${stem.x + 20} 155 ${stem.x + 22} 130`}
            fill="none"
            stroke="#8FA396"
            strokeWidth="4"
            opacity="0.75"
          />
        </g>
      ))}
    </svg>
  );
}
