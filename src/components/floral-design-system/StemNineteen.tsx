// Palm frond style with radiating leaves (perfectly symmetrical)
interface StemNineteenProps {
  size?: number;
  className?: string;
}

export default function StemNineteen({ 
  size = 200, 
  className = "" 
}: StemNineteenProps) {
  const stemColor = "#8A9B7A";
  const leafColor = "#9DB5A0";
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for frond depth */}
          <linearGradient id="frondGrad19" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor={leafColor} stopOpacity="0.7" />
            <stop offset="50%" stopColor={leafColor} stopOpacity="1" />
            <stop offset="100%" stopColor={leafColor} stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {/* Main stem - refined */}
        <rect x="96.5" y="70" width="7" height="113" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="70" width="2" height="113" fill={stemColor} opacity="0.6" />
        
        {/* Palm frond - radiating narrow leaves with highlights (perfectly symmetrical) */}
        {/* Left side fronds */}
        <rect x="40" y="35" width="60" height="7" rx="3.5" fill="url(#frondGrad19)" transform="rotate(-48 100 38)" />
        <rect x="42" y="36" width="25" height="3" rx="1.5" fill={highlightColor} opacity="0.5" transform="rotate(-48 100 38)" />
        
        <rect x="38" y="46" width="62" height="7" rx="3.5" fill="url(#frondGrad19)" transform="rotate(-32 100 49)" />
        <rect x="40" y="47" width="26" height="3" rx="1.5" fill={highlightColor} opacity="0.5" transform="rotate(-32 100 49)" />
        
        <rect x="36" y="57" width="64" height="7" rx="3.5" fill="url(#frondGrad19)" transform="rotate(-16 100 60)" />
        <rect x="38" y="58" width="27" height="3" rx="1.5" fill={highlightColor} opacity="0.5" transform="rotate(-16 100 60)" />
        
        <rect x="35" y="68" width="65" height="7" rx="3.5" fill="url(#frondGrad19)" />
        <rect x="37" y="69" width="28" height="3" rx="1.5" fill={highlightColor} opacity="0.5" />
        
        {/* Right side fronds - mirror symmetry */}
        <rect x="100" y="35" width="60" height="7" rx="3.5" fill="url(#frondGrad19)" transform="rotate(48 100 38)" />
        <rect x="133" y="36" width="25" height="3" rx="1.5" fill={highlightColor} opacity="0.5" transform="rotate(48 100 38)" />
        
        <rect x="100" y="46" width="62" height="7" rx="3.5" fill="url(#frondGrad19)" transform="rotate(32 100 49)" />
        <rect x="134" y="47" width="26" height="3" rx="1.5" fill={highlightColor} opacity="0.5" transform="rotate(32 100 49)" />
        
        <rect x="100" y="57" width="64" height="7" rx="3.5" fill="url(#frondGrad19)" transform="rotate(16 100 60)" />
        <rect x="135" y="58" width="27" height="3" rx="1.5" fill={highlightColor} opacity="0.5" transform="rotate(16 100 60)" />
        
        <rect x="100" y="68" width="65" height="7" rx="3.5" fill="url(#frondGrad19)" />
        <rect x="135" y="69" width="28" height="3" rx="1.5" fill={highlightColor} opacity="0.5" />
      </svg>
    </div>
  );
}