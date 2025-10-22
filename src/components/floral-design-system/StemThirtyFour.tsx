// Eucalyptus-style rounded leaf pairs (perfectly symmetrical)
interface StemThirtyFourProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemThirtyFour({ 
  size = 200,
  className = "",
  stemColor = "#7A8450",
  leafColor = "#A8C9B8"
}: StemThirtyFourProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem */}
        <rect x="97" y="20" width="6" height="160" fill={stemColor} rx="1" />
        
        {/* Top leaf pair - rounded circles */}
        <circle cx="75" cy="55" r="22" fill={leafColor} opacity="0.85" />
        <circle cx="125" cy="55" r="22" fill={leafColor} opacity="0.85" />
        
        {/* Second leaf pair */}
        <circle cx="70" cy="90" r="24" fill={leafColor} opacity="0.85" />
        <circle cx="130" cy="90" r="24" fill={leafColor} opacity="0.85" />
        
        {/* Third leaf pair */}
        <circle cx="68" cy="125" r="26" fill={leafColor} opacity="0.85" />
        <circle cx="132" cy="125" r="26" fill={leafColor} opacity="0.85" />
        
        {/* Bottom leaf pair - largest */}
        <circle cx="65" cy="160" r="28" fill={leafColor} opacity="0.85" />
        <circle cx="135" cy="160" r="28" fill={leafColor} opacity="0.85" />
      </svg>
    </div>
  );
}
