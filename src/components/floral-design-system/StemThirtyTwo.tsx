// Birch branch with catkins (perfectly symmetrical)
interface StemThirtyTwoProps {
  size?: number;
  className?: string;
}

export default function StemThirtyTwo({ 
  size = 200, 
  className = "" 
}: StemThirtyTwoProps) {
  const stemColor = "#8A9B7A";
  const leafColor = "#9DB5A0";
  const highlightColor = "#C4D9C5";
  const catkinColor = "#D4A573";
  const catkinHighlight = "#E8C9A0";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for catkins */}
          <linearGradient id="catkinGrad32" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={catkinHighlight} stopOpacity="1" />
            <stop offset="50%" stopColor={catkinColor} stopOpacity="1" />
            <stop offset="100%" stopColor={catkinColor} stopOpacity="0.85" />
          </linearGradient>
        </defs>
        
        {/* Main branch - refined curve */}
        <path d="M 78 178 L 88 138 L 98 98 L 102 58 L 108 28" stroke={stemColor} strokeWidth="6.5" fill="none" strokeLinecap="round" />
        <path d="M 78 178 L 88 138 L 98 98 L 102 58 L 108 28" stroke={stemColor} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3" transform="translate(0.5, 0.5)" />
        
        {/* Side branches - refined symmetrical pairs */}
        <path d="M 98 98 L 70 93" stroke={stemColor} strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <path d="M 102 98 L 130 93" stroke={stemColor} strokeWidth="4.5" fill="none" strokeLinecap="round" />
        
        <path d="M 88 138 L 63 136" stroke={stemColor} strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <path d="M 90 138 L 119 136" stroke={stemColor} strokeWidth="4.5" fill="none" strokeLinecap="round" />
        
        <path d="M 102 58 L 76 56" stroke={stemColor} strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <path d="M 104 58 L 130 56" stroke={stemColor} strokeWidth="4.5" fill="none" strokeLinecap="round" />
        
        {/* Hanging catkins - refined with gradients */}
        <ellipse cx="70" cy="103" rx="6" ry="21" fill="url(#catkinGrad32)" />
        <ellipse cx="72" cy="98" rx="2" ry="8" fill={catkinHighlight} opacity="0.7" />
        
        <ellipse cx="130" cy="103" rx="6" ry="21" fill="url(#catkinGrad32)" />
        <ellipse cx="128" cy="98" rx="2" ry="8" fill={catkinHighlight} opacity="0.7" />
        
        <ellipse cx="63" cy="146" rx="6" ry="21" fill="url(#catkinGrad32)" />
        <ellipse cx="65" cy="141" rx="2" ry="8" fill={catkinHighlight} opacity="0.7" />
        
        <ellipse cx="119" cy="146" rx="6" ry="21" fill="url(#catkinGrad32)" />
        <ellipse cx="117" cy="141" rx="2" ry="8" fill={catkinHighlight} opacity="0.7" />
        
        <ellipse cx="76" cy="66" rx="6" ry="21" fill="url(#catkinGrad32)" />
        <ellipse cx="78" cy="61" rx="2" ry="8" fill={catkinHighlight} opacity="0.7" />
        
        <ellipse cx="130" cy="66" rx="6" ry="21" fill="url(#catkinGrad32)" />
        <ellipse cx="128" cy="61" rx="2" ry="8" fill={catkinHighlight} opacity="0.7" />
        
        {/* Small serrated leaves - refined with highlights */}
        <path d="M 83 83 L 74 80 L 76 88 L 71 86 L 78 94 Z" fill={leafColor} />
        <path d="M 83 83 L 77 81 L 78 86 L 76 85 L 80 90 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 112 83 L 121 80 L 119 88 L 124 86 L 117 94 Z" fill={leafColor} />
        <path d="M 112 83 L 118 81 L 117 86 L 119 85 L 115 90 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 90 123 L 81 120 L 83 128 L 78 126 L 85 134 Z" fill={leafColor} />
        <path d="M 90 123 L 84 121 L 85 126 L 83 125 L 87 130 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 96 123 L 105 120 L 103 128 L 108 126 L 101 134 Z" fill={leafColor} />
        <path d="M 96 123 L 102 121 L 101 126 L 103 125 L 99 130 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 104 43 L 95 40 L 97 48 L 92 46 L 99 54 Z" fill={leafColor} />
        <path d="M 104 43 L 98 41 L 99 46 L 97 45 L 101 50 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 108 43 L 117 40 L 115 48 L 120 46 L 113 54 Z" fill={leafColor} />
        <path d="M 108 43 L 114 41 L 113 46 L 115 45 L 111 50 Z" fill={highlightColor} opacity="0.6" />
      </svg>
    </div>
  );
}