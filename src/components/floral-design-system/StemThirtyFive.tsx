// Palm frond style with radiating leaves (perfectly symmetrical)
interface StemThirtyFiveProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemThirtyFive({ 
  size = 200,
  className = "",
  stemColor = "#7A8450",
  leafColor = "#9CAF88"
}: StemThirtyFiveProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main curved stem */}
        <path 
          d="M 100 180 Q 100 100 100 40" 
          stroke={stemColor} 
          strokeWidth="6" 
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Top radiating leaves - 5 on each side */}
        {/* Left side leaves */}
        <ellipse cx="70" cy="50" rx="28" ry="12" fill={leafColor} transform="rotate(-45 70 50)" />
        <ellipse cx="60" cy="70" rx="30" ry="12" fill={leafColor} transform="rotate(-35 60 70)" />
        <ellipse cx="55" cy="90" rx="32" ry="12" fill={leafColor} transform="rotate(-25 55 90)" />
        <ellipse cx="52" cy="110" rx="34" ry="12" fill={leafColor} transform="rotate(-15 52 110)" />
        <ellipse cx="50" cy="130" rx="36" ry="12" fill={leafColor} transform="rotate(-5 50 130)" />
        
        {/* Right side leaves */}
        <ellipse cx="130" cy="50" rx="28" ry="12" fill={leafColor} transform="rotate(45 130 50)" />
        <ellipse cx="140" cy="70" rx="30" ry="12" fill={leafColor} transform="rotate(35 140 70)" />
        <ellipse cx="145" cy="90" rx="32" ry="12" fill={leafColor} transform="rotate(25 145 90)" />
        <ellipse cx="148" cy="110" rx="34" ry="12" fill={leafColor} transform="rotate(15 148 110)" />
        <ellipse cx="150" cy="130" rx="36" ry="12" fill={leafColor} transform="rotate(5 150 130)" />
      </svg>
    </div>
  );
}
