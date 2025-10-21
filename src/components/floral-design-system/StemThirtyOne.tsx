// Maple leaf on stem (perfectly symmetrical)
interface StemThirtyOneProps {
  size?: number;
  className?: string;
}

export default function StemThirtyOne({ 
  size = 200, 
  className = "" 
}: StemThirtyOneProps) {
  const stemColor = "#7A8450";
  const leafColor = "#C9604A"; // Terracotta for autumn maple
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stem */}
        <rect x="97" y="125" width="6" height="55" fill={stemColor} rx="3" />
        
        {/* Classic five-pointed maple leaf - perfectly symmetrical */}
        <path d="M 100 125
                 L 96 105
                 L 82 108
                 L 72 88
                 L 78 78
                 L 66 70
                 L 72 58
                 L 84 64
                 L 92 48
                 L 98 30
                 L 100 25
                 L 102 30
                 L 108 48
                 L 116 64
                 L 128 58
                 L 134 70
                 L 122 78
                 L 128 88
                 L 118 108
                 L 104 105
                 Z"
              fill={leafColor} />
        
        {/* Veins radiating from center - perfectly symmetrical */}
        <line x1="100" y1="125" x2="100" y2="30" stroke={stemColor} strokeWidth="3" />
        <line x1="100" y1="95" x2="76" y2="84" stroke={stemColor} strokeWidth="2.5" />
        <line x1="100" y1="95" x2="124" y2="84" stroke={stemColor} strokeWidth="2.5" />
        <line x1="100" y1="70" x2="88" y2="56" stroke={stemColor} strokeWidth="2.2" />
        <line x1="100" y1="70" x2="112" y2="56" stroke={stemColor} strokeWidth="2.2" />
      </svg>
    </div>
  );
}
