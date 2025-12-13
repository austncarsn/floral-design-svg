// Sophisticated four-petal modernist bloom with golden accents
interface FloralSixteenProps {
  size?: number;
  className?: string;
}

export default function FloralSixteen({ 
  size = 200,
  className = ""
}: FloralSixteenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Four mustard petals - cardinal directions */}
        <ellipse cx="100" cy="65" rx="26" ry="38" fill="#D4A855" />
        <ellipse cx="135" cy="100" rx="38" ry="26" fill="#D4A855" />
        <ellipse cx="100" cy="135" rx="26" ry="38" fill="#D4A855" />
        <ellipse cx="65" cy="100" rx="38" ry="26" fill="#D4A855" />
        
        {/* Subtle highlights */}
        <ellipse cx="100" cy="68" rx="17" ry="26" fill="#C9A15C" opacity="0.6" />
        <ellipse cx="132" cy="100" rx="26" ry="17" fill="#C9A15C" opacity="0.6" />
        <ellipse cx="100" cy="132" rx="17" ry="26" fill="#C9A15C" opacity="0.6" />
        <ellipse cx="68" cy="100" rx="26" ry="17" fill="#C9A15C" opacity="0.6" />
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="30" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="22" fill="#3A3A3A" />
        <circle cx="100" cy="100" r="15" fill="#E8DCC8" />
        <circle cx="100" cy="100" r="8" fill="#D4A855" />
        <circle cx="100" cy="100" r="3" fill="#1A1A1A" />
      </svg>
    </div>
  );
}