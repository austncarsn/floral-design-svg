// Spiral vine with rounded leaves (perfectly symmetrical)
interface StemTwentyTwoProps {
  size?: number;
  className?: string;
}

export default function StemTwentyTwo({ 
  size = 200, 
  className = "" 
}: StemTwentyTwoProps) {
  const stemColor = "#7A8450";
  const leafColor = "#9CAF88";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Graceful spiral stem */}
        <path d="M 100 180 Q 110 140 95 100 Q 80 60 100 20" stroke={stemColor} strokeWidth="5" fill="none" strokeLinecap="round" />
        
        {/* Symmetrical rounded leaves along the spiral */}
        <circle cx="105" cy="160" r="14" fill={leafColor} />
        <circle cx="88" cy="140" r="15" fill={leafColor} />
        <circle cx="103" cy="120" r="16" fill={leafColor} />
        <circle cx="85" cy="100" r="15" fill={leafColor} />
        <circle cx="95" cy="80" r="14" fill={leafColor} />
        <circle cx="88" cy="60" r="13" fill={leafColor} />
        <circle cx="98" cy="40" r="12" fill={leafColor} />
        
        {/* Additional leaves on opposite side for balance */}
        <circle cx="95" cy="150" r="13" fill={leafColor} />
        <circle cx="112" cy="130" r="14" fill={leafColor} />
        <circle cx="93" cy="110" r="13" fill={leafColor} />
        <circle cx="105" cy="90" r="12" fill={leafColor} />
        <circle cx="102" cy="70" r="11" fill={leafColor} />
      </svg>
    </div>
  );
}
