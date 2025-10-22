// Double helix intertwined stems (perfectly symmetrical)
interface StemThirtyNineProps {
  size?: number;
  className?: string;
  stemColor1?: string;
  stemColor2?: string;
  leafColor?: string;
}

export default function StemThirtyNine({ 
  size = 200,
  className = "",
  stemColor1 = "#7A8450",
  stemColor2 = "#9CAF88",
  leafColor = "#A8C9B8"
}: StemThirtyNineProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left spiral stem */}
        <path 
          d="M 80 180 Q 60 140, 80 100 Q 100 60, 80 20" 
          stroke={stemColor1} 
          strokeWidth="6" 
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Right spiral stem */}
        <path 
          d="M 120 180 Q 140 140, 120 100 Q 100 60, 120 20" 
          stroke={stemColor2} 
          strokeWidth="6" 
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Leaves at intersection points - alternating */}
        <ellipse cx="75" cy="150" rx="16" ry="22" fill={leafColor} transform="rotate(-30 75 150)" />
        <ellipse cx="125" cy="150" rx="16" ry="22" fill={leafColor} transform="rotate(30 125 150)" />
        
        <ellipse cx="75" cy="100" rx="18" ry="24" fill={leafColor} transform="rotate(-25 75 100)" />
        <ellipse cx="125" cy="100" rx="18" ry="24" fill={leafColor} transform="rotate(25 125 100)" />
        
        <ellipse cx="75" cy="50" rx="16" ry="22" fill={leafColor} transform="rotate(-30 75 50)" />
        <ellipse cx="125" cy="50" rx="16" ry="22" fill={leafColor} transform="rotate(30 125 50)" />
      </svg>
    </div>
  );
}
