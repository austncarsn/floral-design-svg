// Cream flower with teal center - geometric 4 petals (perfectly symmetrical)
interface FloralFourProps {
  size?: number;
  className?: string;
}

export default function FloralFour({ 
  size = 200,
  className = ""
}: FloralFourProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 4 petal clover - cardinal directions */}
        <circle cx="100" cy="60" r="32" fill="#F5EFE0" />
        <circle cx="140" cy="100" r="32" fill="#F5EFE0" />
        <circle cx="100" cy="140" r="32" fill="#F5EFE0" />
        <circle cx="60" cy="100" r="32" fill="#F5EFE0" />
        
        {/* Center diamond shape */}
        <path d="M 100 80 L 120 100 L 100 120 L 80 100 Z" fill="#4A7C8C" />
      </svg>
    </div>
  );
}
