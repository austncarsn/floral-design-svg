// Moss-covered stem with small buds (perfectly symmetrical)
interface StemTwentyProps {
  size?: number;
  className?: string;
}

export default function StemTwenty({ 
  size = 200, 
  className = "" 
}: StemTwentyProps) {
  const stemColor = "#7A8450";
  const mossColor = "#9CAF88";
  const budColor = "#D4A62A";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main thick stem */}
        <rect x="90" y="20" width="20" height="160" fill={stemColor} rx="5" />
        
        {/* Moss patches - symmetrical pairs along stem */}
        <circle cx="85" cy="50" r="9" fill={mossColor} />
        <circle cx="115" cy="50" r="9" fill={mossColor} />
        
        <circle cx="82" cy="80" r="10" fill={mossColor} />
        <circle cx="118" cy="80" r="10" fill={mossColor} />
        
        <circle cx="84" cy="110" r="8" fill={mossColor} />
        <circle cx="116" cy="110" r="8" fill={mossColor} />
        
        <circle cx="86" cy="140" r="9" fill={mossColor} />
        <circle cx="114" cy="140" r="9" fill={mossColor} />
        
        <circle cx="88" cy="165" r="7" fill={mossColor} />
        <circle cx="112" cy="165" r="7" fill={mossColor} />
        
        {/* Three buds at top - symmetrical */}
        <circle cx="85" cy="25" r="7" fill={budColor} />
        <circle cx="100" cy="20" r="8" fill={budColor} />
        <circle cx="115" cy="25" r="7" fill={budColor} />
      </svg>
    </div>
  );
}
