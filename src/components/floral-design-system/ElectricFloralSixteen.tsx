interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralSixteen({ size = 240, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco interlocking circular motif - Museum quality */}
      
      {/* Ethereal background glow */}
      <circle cx="120" cy="120" r="115" fill="#D4A574" opacity="0.05" />
      <circle cx="120" cy="120" r="105" fill="#7A9299" opacity="0.05" />
      
      {/* Four interlocking circles with exquisite layers */}
      {[
        { x: 120, y: 60, color: "#D4A574", glowColor: "#E8C8A8" },
        { x: 180, y: 120, color: "#7A9299", glowColor: "#A8C8D4" },
        { x: 120, y: 180, color: "#8FA396", glowColor: "#C8D4C8" },
        { x: 60, y: 120, color: "#C4A582", glowColor: "#D4C8A8" }
      ].map((circle, i) => (
        <g key={i}>
          {/* Outer glow halos */}
          <circle cx={circle.x} cy={circle.y} r="52" fill={circle.glowColor} opacity="0.12" />
          <circle cx={circle.x} cy={circle.y} r="48" fill={circle.glowColor} opacity="0.15" />
          
          {/* Shadow layer */}
          <circle cx={circle.x + 1.5} cy={circle.y + 1.5} r="43" fill="#1A1614" opacity="0.12" />
          
          {/* Outer ring */}
          <circle cx={circle.x} cy={circle.y} r="43" fill={circle.color} opacity="0.88" />
          
          {/* Gradient overlay */}
          <circle cx={circle.x} cy={circle.y} r="39" fill="#FFFFFF" opacity="0.12" />
          
          {/* Inner dark ring with shadow */}
          <circle cx={circle.x} cy={circle.y} r="34" fill="#1A1614" opacity="0.25" />
          
          {/* Middle fill with gradient */}
          <circle cx={circle.x} cy={circle.y} r="26" fill="#E8DCC8" opacity="0.95" />
          
          {/* Center accent with shadow */}
          <circle cx={circle.x + 0.8} cy={circle.y + 0.8} r="17" fill="#1A1614" opacity="0.1" />
          <circle cx={circle.x} cy={circle.y} r="17" fill={circle.color} opacity="0.85" />
          
          {/* Gradient layer */}
          <circle cx={circle.x} cy={circle.y} r="14" fill="#FFFFFF" opacity="0.15" />
          
          {/* Core with depth */}
          <circle cx={circle.x} cy={circle.y} r="8.5" fill="#1A1614" opacity="0.4" />
          
          {/* Highlight */}
          <circle cx={circle.x - 1.5} cy={circle.y - 1.5} r="2.5" fill="#FFFFFF" opacity="0.6" />
        </g>
      ))}
      
      {/* Connecting lines forming cross with depth */}
      {/* Vertical line */}
      <line x1="120" y1="60" x2="120" y2="180" stroke="#C4A582" strokeWidth="6" opacity="0.08" />
      <line x1="121" y1="60" x2="121" y2="180" stroke="#1A1614" strokeWidth="3.5" opacity="0.08" />
      <line x1="120" y1="60" x2="120" y2="180" stroke="#1A1614" strokeWidth="3.5" opacity="0.25" />
      
      {/* Horizontal line */}
      <line x1="60" y1="120" x2="180" y2="120" stroke="#C4A582" strokeWidth="6" opacity="0.08" />
      <line x1="60" y1="121" x2="180" y2="121" stroke="#1A1614" strokeWidth="3.5" opacity="0.08" />
      <line x1="60" y1="120" x2="180" y2="120" stroke="#1A1614" strokeWidth="3.5" opacity="0.25" />
      
      {/* Central hub with museum quality layers */}
      {/* Outer glow halos */}
      <circle cx="120" cy="120" r="42" fill="#A89080" opacity="0.1" />
      <circle cx="120" cy="120" r="38" fill="#A89080" opacity="0.15" />
      
      {/* Shadow base */}
      <circle cx="121.5" cy="121.5" r="34" fill="#1A1614" opacity="0.15" />
      
      {/* Main outer circle */}
      <circle cx="120" cy="120" r="34" fill="#A89080" opacity="0.88" />
      
      {/* Gradient layer */}
      <circle cx="120" cy="120" r="30" fill="#FFFFFF" opacity="0.12" />
      
      {/* Dark ring */}
      <circle cx="120" cy="120" r="24" fill="#1A1614" opacity="0.35" />
      
      {/* Mid gradient */}
      <circle cx="120" cy="120" r="20" fill="#FFFFFF" opacity="0.1" />
      
      {/* Secondary color */}
      <circle cx="120" cy="120" r="17" fill="#B39C87" opacity="0.88" />
      
      {/* Shadow ring */}
      <circle cx="120" cy="120" r="12" fill="#1A1614" opacity="0.2" />
      
      {/* Inner light */}
      <circle cx="120" cy="120" r="9.5" fill="#E8DCC8" opacity="0.95" />
      
      {/* Core */}
      <circle cx="120" cy="120" r="5" fill="#8B7355" />
      
      {/* Highlight */}
      <circle cx="118.5" cy="118.5" r="2" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}
