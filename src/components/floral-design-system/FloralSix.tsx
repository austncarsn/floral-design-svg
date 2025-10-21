// Black flower with coral semicircle accent (perfectly symmetrical)
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
        {/* Flower head - circle */}
        <circle cx="100" cy="100" r="45" fill="#1A1A1A" />
        
        {/* Semicircle accent on top half */}
        <path d="M 55 100 A 45 45 0 0 1 145 100 Z" fill="#E64A2E" />
        
        {/* Small center circle */}
        <circle cx="100" cy="85" r="12" fill="#F5EFE0" />
      </svg>
    </div>
  );
}
