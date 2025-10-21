// Golden yellow starburst with rings (perfectly symmetrical)
interface FloralFiftyProps {
  size?: number;
  className?: string;
}

export default function FloralFifty({ 
  size = 200, 
  className = "" 
}: FloralFiftyProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(100, 100)">
          {/* 16-pointed outer star - golden yellow */}
          <path d="M 0 -70 L 8 -25 L -8 -25 Z" fill="#F2A818" />
          <path d="M 0 -70 L 8 -25 L -8 -25 Z" fill="#F2A818" transform="rotate(22.5)" />
          <path d="M 0 -70 L 8 -25 L -8 -25 Z" fill="#F2A818" transform="rotate(45)" />
          <path d="M 0 -70 L 8 -25 L -8 -25 Z" fill="#F2A818" transform="rotate(67.5)" />
          <path d="M 0 -70 L 8 -25 L -8 -25 Z" fill="#F2A818" transform="rotate(90)" />
          <path d="M 0 -70 L 8 -25 L -8 -25 Z" fill="#F2A818" transform="rotate(112.5)" />
          <path d="M 0 -70 L 8 -25 L -8 -25 Z" fill="#F2A818" transform="rotate(135)" />
          <path d="M 0 -70 L 8 -25 L -8 -25 Z" fill="#F2A818" transform="rotate(157.5)" />
          <path d="M 0 -70 L 8 -25 L -8 -25 Z" fill="#F2A818" transform="rotate(180)" />
          <path d="M 0 -70 L 8 -25 L -8 -25 Z" fill="#F2A818" transform="rotate(202.5)" />
          <path d="M 0 -70 L 8 -25 L -8 -25 Z" fill="#F2A818" transform="rotate(225)" />
          <path d="M 0 -70 L 8 -25 L -8 -25 Z" fill="#F2A818" transform="rotate(247.5)" />
          <path d="M 0 -70 L 8 -25 L -8 -25 Z" fill="#F2A818" transform="rotate(270)" />
          <path d="M 0 -70 L 8 -25 L -8 -25 Z" fill="#F2A818" transform="rotate(292.5)" />
          <path d="M 0 -70 L 8 -25 L -8 -25 Z" fill="#F2A818" transform="rotate(315)" />
          <path d="M 0 -70 L 8 -25 L -8 -25 Z" fill="#F2A818" transform="rotate(337.5)" />
          
          {/* Middle ring - deep teal */}
          <circle cx="0" cy="0" r="45" fill="#2F5B6B" />
          
          {/* Inner ring - dusty rose */}
          <circle cx="0" cy="0" r="30" fill="#C9858D" />
          
          {/* Center - cream */}
          <circle cx="0" cy="0" r="15" fill="#F5EFE0" />
          
          {/* Center dot - black */}
          <circle cx="0" cy="0" r="6" fill="#1A1A1A" />
        </g>
      </svg>
    </div>
  );
}
