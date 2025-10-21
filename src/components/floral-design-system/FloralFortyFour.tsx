// Mint green scalloped flower (perfectly symmetrical 6-fold)
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
        <circle cx="100" cy="55" r="30" fill="#A8C9B8" />
        <circle cx="143.3" cy="75" r="30" fill="#A8C9B8" />
        <circle cx="143.3" cy="125" r="30" fill="#A8C9B8" />
        <circle cx="100" cy="145" r="30" fill="#A8C9B8" />
        <circle cx="56.7" cy="125" r="30" fill="#A8C9B8" />
        <circle cx="56.7" cy="75" r="30" fill="#A8C9B8" />
        
        {/* Center circle - terracotta */}
        <circle cx="100" cy="100" r="40" fill="#C9604A" />
        
        {/* Inner center - light beige */}
        <circle cx="100" cy="100" r="20" fill="#E8DCC8" />
        
        {/* Center dot - black */}
        <circle cx="100" cy="100" r="8" fill="#1A1A1A" />
      </svg>
    </div>
  );
}
