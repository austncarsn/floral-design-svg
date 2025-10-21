// Willow drooping leaves (perfectly symmetrical)
interface StemTwentyOneProps {
  size?: number;
  className?: string;
}

export default function StemTwentyOne({ 
  size = 200, 
  className = "" 
}: StemTwentyOneProps) {
  const stemColor = "#7A8450";
  const leafColor = "#9CAF88";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem */}
        <rect x="97" y="20" width="6" height="90" fill={stemColor} rx="3" />
        
        {/* Drooping branches - perfectly symmetrical curves */}
        <path d="M 100 60 Q 75 80 70 120" stroke={stemColor} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 100 60 Q 125 80 130 120" stroke={stemColor} strokeWidth="4" fill="none" strokeLinecap="round" />
        
        <path d="M 100 80 Q 70 95 60 130" stroke={stemColor} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 100 80 Q 130 95 140 130" stroke={stemColor} strokeWidth="4" fill="none" strokeLinecap="round" />
        
        <path d="M 100 100 Q 65 115 55 150" stroke={stemColor} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 100 100 Q 135 115 145 150" stroke={stemColor} strokeWidth="4" fill="none" strokeLinecap="round" />
        
        {/* Narrow willow leaves - perfectly symmetrical */}
        <ellipse cx="65" cy="130" rx="6" ry="20" fill={leafColor} transform="rotate(-20 65 130)" />
        <ellipse cx="135" cy="130" rx="6" ry="20" fill={leafColor} transform="rotate(20 135 130)" />
        
        <ellipse cx="55" cy="155" rx="6" ry="22" fill={leafColor} transform="rotate(-25 55 155)" />
        <ellipse cx="145" cy="155" rx="6" ry="22" fill={leafColor} transform="rotate(25 145 155)" />
        
        <ellipse cx="58" cy="145" rx="5" ry="18" fill={leafColor} transform="rotate(-15 58 145)" />
        <ellipse cx="142" cy="145" rx="5" ry="18" fill={leafColor} transform="rotate(15 142 145)" />
      </svg>
    </div>
  );
}
