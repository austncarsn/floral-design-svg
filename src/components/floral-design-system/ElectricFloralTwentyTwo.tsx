interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTwentyTwo({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco radar sweep pattern */}
      
      {/* Concentric circles */}
      {[78, 62, 46, 30].map((radius, i) => {
        const colors = ["#D4A574", "#7A9299", "#8FA396", "#C4A582"];
        
        return (
          <circle
            key={i}
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={colors[i]}
            strokeWidth="3"
            opacity="0.75"
          />
        );
      })}
      
      {/* Radial division lines */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        
        return (
          <line
            key={i}
            x1="100"
            y1="100"
            x2={100 + Math.cos(angle) * 78}
            y2={100 + Math.sin(angle) * 78}
            stroke="#1A1614"
            strokeWidth="2"
            opacity="0.2"
          />
        );
      })}
      
      {/* Sweep arc indicator */}
      <path
        d={`M 100 100 L ${100 + Math.cos(-Math.PI / 2) * 78} ${100 + Math.sin(-Math.PI / 2) * 78} A 78 78 0 0 1 ${100 + Math.cos(-Math.PI / 6) * 78} ${100 + Math.sin(-Math.PI / 6) * 78} Z`}
        fill="#8FA396"
        opacity="0.4"
      />
      
      {/* Corner position markers */}
      {[...Array(4)].map((_, i) => {
        const angle = (i * 90 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 78;
        const y = 100 + Math.sin(angle) * 78;
        
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="7"
            fill="#C4A582"
            opacity="0.85"
          />
        );
      })}
      
      {/* Center hub */}
      <circle cx="100" cy="100" r="20" fill="#1A1614" opacity="0.35" />
      <circle cx="100" cy="100" r="14" fill="#A89080" opacity="0.85" />
      <circle cx="100" cy="100" r="8" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="4" fill="#8B7355" />
    </svg>
  );
}
