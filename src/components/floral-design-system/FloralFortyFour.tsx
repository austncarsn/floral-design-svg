// Sophisticated scalloped hexagon with mint petals and terracotta center
interface FloralFortyFourProps {
  size?: number;
  className?: string;
}

export default function FloralFortyFour({ 
  size = 200, 
  className = "" 
}: FloralFortyFourProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Six scalloped petals - mint green (perfect 60° spacing) */}
        <ellipse cx="100" cy="64" rx="25" ry="23" fill="#9DB5A0" />
        <ellipse cx="131" cy="82" rx="23" ry="25" fill="#9DB5A0" />
        <ellipse cx="131" cy="118" rx="25" ry="23" fill="#9DB5A0" />
        <ellipse cx="100" cy="136" rx="23" ry="25" fill="#9DB5A0" />
        <ellipse cx="69" cy="118" rx="25" ry="23" fill="#9DB5A0" />
        <ellipse cx="69" cy="82" rx="23" ry="25" fill="#9DB5A0" />
        
        {/* Petal highlights */}
        <circle cx="100" cy="64" r="12" fill="#C4D9CE" opacity="0.7" />
        <circle cx="131" cy="82" r="12" fill="#C4D9CE" opacity="0.7" />
        <circle cx="131" cy="118" r="12" fill="#C4D9CE" opacity="0.7" />
        <circle cx="100" cy="136" r="12" fill="#C4D9CE" opacity="0.7" />
        <circle cx="69" cy="118" r="12" fill="#C4D9CE" opacity="0.7" />
        <circle cx="69" cy="82" r="12" fill="#C4D9CE" opacity="0.7" />
        
        {/* Layered center - terracotta */}
        <circle cx="100" cy="100" r="35" fill="#C97A64" />
        <circle cx="100" cy="100" r="26" fill="#E8A594" opacity="0.6" />
        
        {/* Inner center - cream */}
        <circle cx="100" cy="100" r="19" fill="#E8DCC8" />
        
        {/* Center dot */}
        <circle cx="100" cy="100" r="8" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="3" fill="#9DB5A0" />
      </svg>
    </div>
  );
}