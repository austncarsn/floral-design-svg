// Dusty rose and cream striped modern flower (perfectly symmetrical)
interface FloralNineteenProps {
  size?: number;
  className?: string;
}

export default function FloralNineteen({ 
  size = 200,
  className = ""
}: FloralNineteenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer circle */}
        <circle cx="100" cy="100" r="48" fill="#C9858D" />
        
        {/* 4 radiating cream segments at 90-degree intervals */}
        <path d="M 100 100 L 100 52 A 48 48 0 0 1 134 66 Z" fill="#F5EFE0" />
        <path d="M 100 100 L 134 134 A 48 48 0 0 1 100 148 Z" fill="#F5EFE0" />
        <path d="M 100 100 L 66 134 A 48 48 0 0 1 52 100 Z" fill="#F5EFE0" />
        <path d="M 100 100 L 66 66 A 48 48 0 0 1 100 52 Z" fill="#F5EFE0" />
        
        {/* Center */}
        <circle cx="100" cy="100" r="18" fill="#2D2D2D" />
      </svg>
    </div>
  );
}
