interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralThirtyFour({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Monochrome warm beige layered flower */}
      
      {/* Outer layer - 12 petals */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 - 90) * Math.PI / 180;
        const x = 100 + Math.cos(angle) * 55;
        const y = 100 + Math.sin(angle) * 55;
        
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="18"
            ry="28"
            fill="#C9A690"
            opacity="0.85"
            transform={`rotate(${i * 30} ${x} ${y})`}
          />
        );
      })}
      
      {/* Middle layer - 8 petals */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 - 90) * Math.PI / 180;
        const x = 100 + Math.cos(angle) * 35;
        const y = 100 + Math.sin(angle) * 35;
        
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="14"
            ry="22"
            fill="#E8DCC8"
            opacity="0.95"
            transform={`rotate(${i * 45} ${x} ${y})`}
          />
        );
      })}
      
      {/* Inner layer - 6 petals */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 - 90) * Math.PI / 180;
        const x = 100 + Math.cos(angle) * 20;
        const y = 100 + Math.sin(angle) * 20;
        
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="10"
            ry="16"
            fill="#C9A690"
            opacity="0.9"
            transform={`rotate(${i * 60} ${x} ${y})`}
          />
        );
      })}
      
      {/* Center */}
      <circle cx="100" cy="100" r="16" fill="#1A1614" opacity="0.35" />
      <circle cx="100" cy="100" r="11" fill="#C9A690" opacity="0.9" />
      <circle cx="100" cy="100" r="6" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="3" fill="#C9A690" />
    </svg>
  );
}
