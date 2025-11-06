interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTwentyEight({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Monochrome sage green square grid */}
      
      {/* Grid of squares */}
      {[...Array(5)].map((_, row) =>
        [...Array(5)].map((_, col) => {
          const x = 30 + col * 35;
          const y = 30 + row * 35;
          const isCenter = row === 2 && col === 2;
          const size = isCenter ? 30 : 24;
          const offset = isCenter ? -3 : 0;
          
          return (
            <g key={`${row}-${col}`}>
              <rect
                x={x + offset}
                y={y + offset}
                width={size}
                height={size}
                fill="#8FA396"
                opacity={isCenter ? 0.9 : 0.75}
              />
              <rect
                x={x + offset + 4}
                y={y + offset + 4}
                width={size - 8}
                height={size - 8}
                fill={isCenter ? "#E8DCC8" : "#1A1614"}
                opacity={isCenter ? 0.95 : 0.25}
              />
              {isCenter && (
                <>
                  <rect
                    x={x + offset + 9}
                    y={y + offset + 9}
                    width={size - 18}
                    height={size - 18}
                    fill="#8FA396"
                    opacity="0.9"
                  />
                  <rect
                    x={x + offset + 12}
                    y={y + offset + 12}
                    width={size - 24}
                    height={size - 24}
                    fill="#1A1614"
                    opacity="0.5"
                  />
                </>
              )}
            </g>
          );
        })
      )}
    </svg>
  );
}
