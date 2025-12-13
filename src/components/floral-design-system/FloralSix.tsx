// Elegant yin-yang inspired bloom with sophisticated balance
interface FloralSixProps {
  size?: number;
  className?: string;
}

export default function FloralSix({ 
  size = 200,
  className = ""
}: FloralSixProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main flower head - black base */}
        <circle cx="100" cy="100" r="45" fill="#1A1A1A" />
        
        {/* Sophisticated coral arc - refined curve */}
        <path d="M 55 100 A 45 45 0 0 1 145 100 Z" fill="#D4866F" />
        
        {/* Secondary accent curve for depth */}
        <path d="M 64 100 A 36 36 0 0 1 136 100 Z" fill="#C97A64" opacity="0.6" />
        
        {/* Upper center detail */}
        <circle cx="100" cy="80" r="13" fill="#E8DCC8" />
        <circle cx="100" cy="80" r="7" fill="#D4866F" />
        
        {/* Lower balance point */}
        <circle cx="100" cy="114" r="9" fill="#E8DCC8" opacity="0.8" />
        <circle cx="100" cy="114" r="4" fill="#1A1A1A" />
      </svg>
    </div>
  );
}