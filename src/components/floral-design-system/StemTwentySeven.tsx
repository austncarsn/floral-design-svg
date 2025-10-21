// Ginkgo fan leaf on stem (perfectly symmetrical)
interface StemTwentySevenProps {
  size?: number;
  className?: string;
}

export default function StemTwentySeven({ 
  size = 200, 
  className = "" 
}: StemTwentySevenProps) {
  const stemColor = "#7A8450";
  const leafColor = "#9CAF88";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stem */}
        <rect x="97" y="110" width="6" height="70" fill={stemColor} rx="3" />
        
        {/* Fan-shaped ginkgo leaf - perfectly symmetrical */}
        <path d="M 100 110 Q 70 100 45 65 Q 48 50 60 52 Q 72 60 82 75 Q 90 90 100 110 Z" fill={leafColor} />
        <path d="M 100 110 Q 130 100 155 65 Q 152 50 140 52 Q 128 60 118 75 Q 110 90 100 110 Z" fill={leafColor} />
        
        {/* Center split in leaf */}
        <line x1="100" y1="110" x2="100" y2="55" stroke="white" strokeWidth="4" />
        
        {/* Radiating veins in leaf - symmetrical */}
        <line x1="100" y1="110" x2="75" y2="70" stroke={stemColor} strokeWidth="2" />
        <line x1="100" y1="110" x2="85" y2="75" stroke={stemColor} strokeWidth="2" />
        <line x1="100" y1="110" x2="125" y2="70" stroke={stemColor} strokeWidth="2" />
        <line x1="100" y1="110" x2="115" y2="75" stroke={stemColor} strokeWidth="2" />
      </svg>
    </div>
  );
}
