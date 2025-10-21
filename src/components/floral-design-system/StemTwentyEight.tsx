// Ivy vine with climbing tendrils (perfectly symmetrical)
interface StemTwentyEightProps {
  size?: number;
  className?: string;
}

export default function StemTwentyEight({ 
  size = 200, 
  className = "" 
}: StemTwentyEightProps) {
  const stemColor = "#7A8450";
  const leafColor = "#9CAF88";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gracefully winding vine */}
        <path d="M 90 180 Q 88 140 98 100 Q 108 60 98 20" stroke={stemColor} strokeWidth="5" fill="none" strokeLinecap="round" />
        
        {/* Ivy leaves - five-pointed, perfectly symmetrical pairs */}
        {/* Top pair */}
        <path d="M 95 30 L 88 28 L 85 35 L 88 40 L 93 38 Z" fill={leafColor} />
        <path d="M 100 25 L 98 18 L 103 15 L 108 20 L 105 28 Z" fill={leafColor} />
        
        {/* Upper middle pair */}
        <path d="M 105 60 L 98 58 L 95 65 L 98 70 L 103 68 Z" fill={leafColor} />
        <path d="M 110 55 L 108 48 L 113 45 L 118 50 L 115 58 Z" fill={leafColor} />
        
        {/* Middle pair */}
        <path d="M 95 100 L 88 98 L 85 105 L 88 110 L 93 108 Z" fill={leafColor} />
        <path d="M 100 95 L 98 88 L 103 85 L 108 90 L 105 98 Z" fill={leafColor} />
        
        {/* Lower middle pair */}
        <path d="M 88 140 L 81 138 L 78 145 L 81 150 L 86 148 Z" fill={leafColor} />
        <path d="M 93 135 L 91 128 L 96 125 L 101 130 L 98 138 Z" fill={leafColor} />
        
        {/* Curling tendrils - perfectly symmetrical */}
        <path d="M 105 75 Q 118 72 122 80 Q 124 86 120 90" stroke={stemColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 92 120 Q 79 123 75 131 Q 73 137 77 141" stroke={stemColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}
