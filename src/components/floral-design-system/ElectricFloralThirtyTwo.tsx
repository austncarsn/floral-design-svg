interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralThirtyTwo({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Monochrome warm grey diamond lattice */}
      
      {/* Diamond grid pattern */}
      {[-1, 0, 1].map((row) =>
        [-1, 0, 1].map((col) => {
          const x = 100 + col * 50;
          const y = 100 + row * 50;
          const isCenter = row === 0 && col === 0;
          const size = isCenter ? 40 : 28;
          
          return (
            <g key={`${row}-${col}`}>
              {/* Diamond shape (rotated square) */}
              <path
                d={`M ${x},${y - size / 2} L ${x + size / 2},${y} L ${x},${y + size / 2} L ${x - size / 2},${y} Z`}
                fill="#9B8B7E"
                opacity="0.85"
              />
              <path
                d={`M ${x},${y - size / 3} L ${x + size / 3},${y} L ${x},${y + size / 3} L ${x - size / 3},${y} Z`}
                fill={isCenter ? "#E8DCC8" : "#1A1614"}
                opacity={isCenter ? 0.95 : 0.25}
              />
              {isCenter && (
                <>
                  <path
                    d={`M ${x},${y - 10} L ${x + 10},${y} L ${x},${y + 10} L ${x - 10},${y} Z`}
                    fill="#9B8B7E"
                    opacity="0.9"
                  />
                  <circle cx={x} cy={y} r="4" fill="#1A1614" opacity="0.5" />
                </>
              )}
            </g>
          );
        })
      )}
    </svg>
  );
}
