// Ivy vine with climbing tendrils (perfectly symmetrical)
interface StemTwentyEightProps {
  size?: number;
  className?: string;
}

export default function StemTwentyEight({ 
  size = 200, 
  className = "" 
}: StemTwentyEightProps) {
  const stemColor = "#8A9B7A";
  const leafColor = "#9DB5A0";
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gracefully winding vine - refined S-curve */}
        <path d="M 88 178 Q 86 138 98 98 Q 110 58 98 22" stroke={stemColor} strokeWidth="5.5" fill="none" strokeLinecap="round" />
        <path d="M 88 178 Q 86 138 98 98 Q 110 58 98 22" stroke={stemColor} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" transform="translate(0.5, 0.5)" />
        
        {/* Ivy leaves - five-pointed, refined with highlights */}
        {/* Top pair */}
        <path d="M 93 28 L 86 26 L 83 33 L 86 38 L 91 36 Z" fill={leafColor} />
        <path d="M 93 28 L 88 27 L 87 32 L 89 35 L 92 34 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 100 23 L 98 16 L 103 13 L 108 18 L 105 26 Z" fill={leafColor} />
        <path d="M 100 23 L 99 18 L 102 16 L 105 20 L 103 24 Z" fill={highlightColor} opacity="0.6" />
        
        {/* Upper middle pair */}
        <path d="M 107 58 L 100 56 L 97 63 L 100 68 L 105 66 Z" fill={leafColor} />
        <path d="M 107 58 L 102 57 L 101 62 L 103 65 L 106 64 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 112 53 L 110 46 L 115 43 L 120 48 L 117 56 Z" fill={leafColor} />
        <path d="M 112 53 L 111 48 L 114 46 L 117 50 L 115 54 Z" fill={highlightColor} opacity="0.6" />
        
        {/* Middle pair */}
        <path d="M 93 98 L 86 96 L 83 103 L 86 108 L 91 106 Z" fill={leafColor} />
        <path d="M 93 98 L 88 97 L 87 102 L 89 105 L 92 104 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 100 93 L 98 86 L 103 83 L 108 88 L 105 96 Z" fill={leafColor} />
        <path d="M 100 93 L 99 88 L 102 86 L 105 90 L 103 94 Z" fill={highlightColor} opacity="0.6" />
        
        {/* Lower middle pair */}
        <path d="M 86 138 L 79 136 L 76 143 L 79 148 L 84 146 Z" fill={leafColor} />
        <path d="M 86 138 L 81 137 L 80 142 L 82 145 L 85 144 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 91 133 L 89 126 L 94 123 L 99 128 L 96 136 Z" fill={leafColor} />
        <path d="M 91 133 L 90 128 L 93 126 L 96 130 L 94 134 Z" fill={highlightColor} opacity="0.6" />
        
        {/* Curling tendrils - refined curves with shadows */}
        <path d="M 107 73 Q 120 70 124 78 Q 126 84 122 88" stroke={stemColor} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 107 73 Q 120 70 124 78 Q 126 84 122 88" stroke={stemColor} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.3" transform="translate(0.5, 0.5)" />
        
        <path d="M 90 118 Q 77 121 73 129 Q 71 135 75 139" stroke={stemColor} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 90 118 Q 77 121 73 129 Q 71 135 75 139" stroke={stemColor} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.3" transform="translate(0.5, 0.5)" />
      </svg>
    </div>
  );
}