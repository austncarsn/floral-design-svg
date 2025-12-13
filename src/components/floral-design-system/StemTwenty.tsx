// Moss-covered stem with small buds (perfectly symmetrical)
interface StemTwentyProps {
  size?: number;
  className?: string;
}

export default function StemTwenty({ 
  size = 200, 
  className = "" 
}: StemTwentyProps) {
  const stemColor = "#8A9B7A";
  const mossColor = "#9DB5A0";
  const mossHighlight = "#C4D9C5";
  const budColor = "#D4A573";
  const budHighlight = "#E8C9A0";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradients for organic texture */}
          <linearGradient id="stemGrad20" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor={stemColor} stopOpacity="0.85" />
            <stop offset="50%" stopColor={stemColor} stopOpacity="1" />
            <stop offset="100%" stopColor={stemColor} stopOpacity="0.85" />
          </linearGradient>
          <radialGradient id="mossGrad20" cx="35%" cy="35%">
            <stop offset="0%" stopColor={mossHighlight} stopOpacity="0.9" />
            <stop offset="60%" stopColor={mossColor} stopOpacity="1" />
            <stop offset="100%" stopColor={mossColor} stopOpacity="0.8" />
          </radialGradient>
          <radialGradient id="budGrad20" cx="40%" cy="35%">
            <stop offset="0%" stopColor={budHighlight} stopOpacity="1" />
            <stop offset="70%" stopColor={budColor} stopOpacity="1" />
            <stop offset="100%" stopColor={budColor} stopOpacity="0.85" />
          </radialGradient>
        </defs>
        
        {/* Main thick stem - refined with gradient */}
        <rect x="88" y="22" width="24" height="161" fill="url(#stemGrad20)" rx="6" />
        <rect x="92" y="22" width="4" height="161" fill={stemColor} opacity="0.5" />
        
        {/* Moss patches - symmetrical pairs with refined highlights */}
        <circle cx="83" cy="48" r="10" fill="url(#mossGrad20)" />
        <circle cx="86" cy="46" r="3.5" fill={mossHighlight} opacity="0.7" />
        
        <circle cx="117" cy="48" r="10" fill="url(#mossGrad20)" />
        <circle cx="114" cy="46" r="3.5" fill={mossHighlight} opacity="0.7" />
        
        <circle cx="80" cy="78" r="11" fill="url(#mossGrad20)" />
        <circle cx="83" cy="76" r="4" fill={mossHighlight} opacity="0.7" />
        
        <circle cx="120" cy="78" r="11" fill="url(#mossGrad20)" />
        <circle cx="117" cy="76" r="4" fill={mossHighlight} opacity="0.7" />
        
        <circle cx="82" cy="108" r="9" fill="url(#mossGrad20)" />
        <circle cx="85" cy="106" r="3" fill={mossHighlight} opacity="0.7" />
        
        <circle cx="118" cy="108" r="9" fill="url(#mossGrad20)" />
        <circle cx="115" cy="106" r="3" fill={mossHighlight} opacity="0.7" />
        
        <circle cx="84" cy="138" r="10" fill="url(#mossGrad20)" />
        <circle cx="87" cy="136" r="3.5" fill={mossHighlight} opacity="0.7" />
        
        <circle cx="116" cy="138" r="10" fill="url(#mossGrad20)" />
        <circle cx="113" cy="136" r="3.5" fill={mossHighlight} opacity="0.7" />
        
        <circle cx="86" cy="163" r="8" fill="url(#mossGrad20)" />
        <circle cx="88" cy="161" r="2.5" fill={mossHighlight} opacity="0.7" />
        
        <circle cx="114" cy="163" r="8" fill="url(#mossGrad20)" />
        <circle cx="112" cy="161" r="2.5" fill={mossHighlight} opacity="0.7" />
        
        {/* Three buds at top - symmetrical with refined highlights */}
        <circle cx="83" cy="27" r="8" fill="url(#budGrad20)" />
        <circle cx="86" cy="25" r="2.5" fill={budHighlight} opacity="0.8" />
        
        <circle cx="100" cy="22" r="9" fill="url(#budGrad20)" />
        <circle cx="103" cy="20" r="3" fill={budHighlight} opacity="0.8" />
        
        <circle cx="117" cy="27" r="8" fill="url(#budGrad20)" />
        <circle cx="114" cy="25" r="2.5" fill={budHighlight} opacity="0.8" />
      </svg>
    </div>
  );
}