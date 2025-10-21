// Pine needle cluster stem (perfectly symmetrical)
interface StemTwentyFourProps {
  size?: number;
  className?: string;
}

export default function StemTwentyFour({ 
  size = 200, 
  className = "" 
}: StemTwentyFourProps) {
  const stemColor = "#7A8450";
  const needleColor = "#9CAF88";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem */}
        <rect x="97" y="70" width="6" height="110" fill={stemColor} rx="3" />
        
        {/* Top cluster - radiating needles (perfectly symmetrical) */}
        <line x1="100" y1="50" x2="80" y2="30" stroke={needleColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="100" y1="50" x2="90" y2="28" stroke={needleColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="100" y1="50" x2="100" y2="25" stroke={needleColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="100" y1="50" x2="110" y2="28" stroke={needleColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="100" y1="50" x2="120" y2="30" stroke={needleColor} strokeWidth="3" strokeLinecap="round" />
        
        {/* Middle cluster */}
        <line x1="100" y1="100" x2="75" y2="85" stroke={needleColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="100" y1="100" x2="85" y2="82" stroke={needleColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="100" y1="100" x2="95" y2="80" stroke={needleColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="100" y1="100" x2="105" y2="80" stroke={needleColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="100" y1="100" x2="115" y2="82" stroke={needleColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="100" y1="100" x2="125" y2="85" stroke={needleColor} strokeWidth="3" strokeLinecap="round" />
        
        {/* Bottom cluster */}
        <line x1="100" y1="150" x2="72" y2="138" stroke={needleColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="100" y1="150" x2="82" y2="135" stroke={needleColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="100" y1="150" x2="92" y2="132" stroke={needleColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="100" y1="150" x2="108" y2="132" stroke={needleColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="100" y1="150" x2="118" y2="135" stroke={needleColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="100" y1="150" x2="128" y2="138" stroke={needleColor} strokeWidth="3" strokeLinecap="round" />
        
        {/* Cluster connection points */}
        <circle cx="100" cy="50" r="6" fill={stemColor} />
        <circle cx="100" cy="100" r="6" fill={stemColor} />
        <circle cx="100" cy="150" r="6" fill={stemColor} />
      </svg>
    </div>
  );
}
