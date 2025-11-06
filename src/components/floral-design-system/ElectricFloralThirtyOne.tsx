interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralThirtyOne({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Monochrome wheat/sand circular mandala */}
      
      {/* Outer ring of petals */}
      {[...Array(10)].map((_, i) => {
        const angle = (i * 36 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 60;
        const y = 100 + Math.sin(angle) * 60;
        
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="20" fill="#B39C87" opacity="0.85" />
            <circle cx={x} cy={y} r="13" fill="#E8DCC8" opacity="0.95" />
            <circle cx={x} cy={y} r="7" fill="#1A1614" opacity="0.25" />
            <circle cx={x} cy={y} r="4" fill="#B39C87" opacity="0.9" />
          </g>
        );
      })}
      
      {/* Connecting ring */}
      <circle cx="100" cy="100" r="60" fill="none" stroke="#1A1614" strokeWidth="2" opacity="0.2" />
      
      {/* Center */}
      <circle cx="100" cy="100" r="32" fill="#B39C87" opacity="0.85" />
      <circle cx="100" cy="100" r="22" fill="#1A1614" opacity="0.35" />
      <circle cx="100" cy="100" r="15" fill="#B39C87" opacity="0.9" />
      <circle cx="100" cy="100" r="8" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="4" fill="#B39C87" />
    </svg>
  );
}
