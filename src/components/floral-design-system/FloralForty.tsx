// Olive green pentagon with terracotta dots (perfectly symmetrical)
interface FloralFortyProps {
  size?: number;
  className?: string;
}

export default function FloralForty({ 
  size = 200, 
  className = "" 
}: FloralFortyProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer pentagon - olive green (mathematically precise) */}
        <path d="M 100 30 L 161.8 85.9 L 138.1 154.9 L 61.9 154.9 L 38.2 85.9 Z" fill="#7A8450" />
        
        {/* Inner pentagon - light beige */}
        <path d="M 100 60 L 142.4 99.5 L 125.3 145.5 L 74.7 145.5 L 57.6 99.5 Z" fill="#E8DCC8" />
        
        {/* Five terracotta dots at vertices */}
        <circle cx="100" cy="30" r="10" fill="#C9604A" />
        <circle cx="161.8" cy="85.9" r="10" fill="#C9604A" />
        <circle cx="138.1" cy="154.9" r="10" fill="#C9604A" />
        <circle cx="61.9" cy="154.9" r="10" fill="#C9604A" />
        <circle cx="38.2" cy="85.9" r="10" fill="#C9604A" />
        
        {/* Center pentagon - deep teal */}
        <path d="M 100 85 L 117.1 100 L 109.4 120 L 90.6 120 L 82.9 100 Z" fill="#2F5B6B" />
      </svg>
    </div>
  );
}
