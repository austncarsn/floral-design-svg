interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralNineteen({ size = 240, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco fractal crystalline structure - Museum quality */}
      
      {/* Ethereal background glow */}
      <circle cx="120" cy="120" r="115" fill="#D4A574" opacity="0.05" />
      <circle cx="120" cy="120" r="105" fill="#7A9299" opacity="0.05" />
      <circle cx="120" cy="120" r="95" fill="#8FA396" opacity="0.05" />
      
      {/* Large outer triangles with exquisite layers */}
      {[0, 120, 240].map((rotation, i) => {
        const colors = ["#D4A574", "#7A9299", "#8FA396"];
        const glowColors = ["#E8C8A8", "#A8C8D4", "#C8D4C8"];
        
        return (
          <g key={i} transform={`rotate(${rotation} 120 120)`}>
            {/* Outer glow layer */}
            <path
              d="M 120 34 L 194 170 L 46 170 Z"
              fill={glowColors[i]}
              opacity="0.15"
            />
            
            {/* Secondary glow */}
            <path
              d="M 120 36 L 191 168 L 49 168 Z"
              fill={glowColors[i]}
              opacity="0.2"
            />
            
            {/* Shadow layer */}
            <path
              d="M 121.5 35.5 L 195.5 171.5 L 47.5 171.5 Z"
              fill="#1A1614"
              opacity="0.08"
            />
            
            {/* Main triangle */}
            <path
              d="M 120 34 L 194 170 L 46 170 Z"
              fill={colors[i]}
              opacity="0.88"
            />
            
            {/* Gradient overlay */}
            <path
              d="M 120 42 L 186 165 L 54 165 Z"
              fill="#FFFFFF"
              opacity="0.12"
            />
            
            {/* Inner triangle with shadow */}
            <path
              d="M 120.8 66.8 L 168.8 144.8 L 72.8 144.8 Z"
              fill="#1A1614"
              opacity="0.08"
            />
            
            <path
              d="M 120 66 L 168 144 L 72 144 Z"
              fill="#1A1614"
              opacity="0.25"
            />
            
            {/* Gradient in inner triangle */}
            <path
              d="M 120 72 L 162 138 L 78 138 Z"
              fill="#FFFFFF"
              opacity="0.1"
            />
            
            {/* Smallest triangle with layers */}
            <path
              d="M 120.6 84.6 L 150.6 126.6 L 90.6 126.6 Z"
              fill="#1A1614"
              opacity="0.08"
            />
            
            <path
              d="M 120 84 L 150 126 L 90 126 Z"
              fill="#E8DCC8"
              opacity="0.95"
            />
            
            {/* Highlight in smallest triangle */}
            <path
              d="M 120 90 L 144 120 L 96 120 Z"
              fill="#FFFFFF"
              opacity="0.2"
            />
          </g>
        );
      })}
      
      {/* Corner accents with exquisite depth */}
      {[0, 120, 240].map((rotation, i) => {
        const angle = (rotation * Math.PI) / 180;
        const x = 120 + Math.cos(angle - Math.PI / 2) * 86;
        const y = 120 + Math.sin(angle - Math.PI / 2) * 86;
        
        return (
          <g key={i}>
            {/* Outer glow */}
            <circle cx={x} cy={y} r="16" fill="#D4C8A8" opacity="0.15" />
            <circle cx={x} cy={y} r="14" fill="#D4C8A8" opacity="0.2" />
            
            {/* Shadow */}
            <circle cx={x + 0.8} cy={y + 0.8} r="12" fill="#1A1614" opacity="0.12" />
            
            {/* Main circle */}
            <circle cx={x} cy={y} r="12" fill="#C4A582" opacity="0.88" />
            
            {/* Gradient layer */}
            <circle cx={x} cy={y} r="9" fill="#FFFFFF" opacity="0.15" />
            
            {/* Inner light */}
            <circle cx={x} cy={y} r="6" fill="#E8DCC8" opacity="0.95" />
            
            {/* Highlight */}
            <circle cx={x - 1} cy={y - 1} r="1.8" fill="#FFFFFF" opacity="0.6" />
          </g>
        );
      })}
      
      {/* Center medallion with museum quality layers */}
      {/* Outer glow halos */}
      <circle cx="120" cy="120" r="40" fill="#A89080" opacity="0.1" />
      <circle cx="120" cy="120" r="36" fill="#A89080" opacity="0.15" />
      
      {/* Shadow base */}
      <circle cx="121.5" cy="121.5" r="31" fill="#1A1614" opacity="0.15" />
      
      {/* Dark outer ring */}
      <circle cx="120" cy="120" r="31" fill="#1A1614" opacity="0.3" />
      
      {/* Gradient layer */}
      <circle cx="120" cy="120" r="27" fill="#FFFFFF" opacity="0.12" />
      
      {/* Mid layer */}
      <circle cx="120" cy="120" r="24" fill="#A89080" opacity="0.88" />
      
      {/* Shadow ring */}
      <circle cx="120" cy="120" r="19" fill="#1A1614" opacity="0.15" />
      
      {/* Light circle */}
      <circle cx="120" cy="120" r="15.5" fill="#E8DCC8" opacity="0.95" />
      
      {/* Inner shadow */}
      <circle cx="120" cy="120" r="10" fill="#1A1614" opacity="0.15" />
      
      {/* Secondary color */}
      <circle cx="120" cy="120" r="8.5" fill="#B39C87" opacity="0.88" />
      
      {/* Core */}
      <circle cx="120" cy="120" r="3.5" fill="#8B7355" />
      
      {/* Highlight */}
      <circle cx="118.5" cy="118.5" r="1.5" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}
