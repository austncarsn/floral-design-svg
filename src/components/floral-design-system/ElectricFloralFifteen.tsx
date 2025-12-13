interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralFifteen({ size = 240, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco cascading vertical pattern - Museum quality */}
      
      {/* Ethereal background glow */}
      <circle cx="120" cy="120" r="105" fill="#D4A574" opacity="0.05" />
      <circle cx="120" cy="120" r="95" fill="#7A9299" opacity="0.05" />
      
      {/* Vertical cascade lines with enhanced depth */}
      {[...Array(9)].map((_, i) => {
        const x = 42 + (i * 22.2);
        const colors = ["#D4A574", "#7A9299", "#8FA396"];
        const color = colors[i % 3];
        const glowColors = ["#E8C8A8", "#A8C8D4", "#C8D4C8"];
        const glowColor = glowColors[i % 3];
        
        return (
          <g key={i}>
            {/* Glow line underneath */}
            <line
              x1={x}
              y1="24"
              x2={x}
              y2="216"
              stroke={glowColor}
              strokeWidth="8"
              opacity="0.15"
            />
            
            {/* Shadow line */}
            <line
              x1={x + 0.8}
              y1="24"
              x2={x + 0.8}
              y2="216"
              stroke="#1A1614"
              strokeWidth="5"
              opacity="0.08"
            />
            
            {/* Main vertical line */}
            <line
              x1={x}
              y1="24"
              x2={x}
              y2="216"
              stroke={color}
              strokeWidth="4.8"
              opacity="0.8"
            />
            
            {/* Decorative nodes along line with layers */}
            {[36, 72, 108, 144, 180, 204].map((y, j) => (
              <g key={j}>
                {/* Outer glow */}
                <circle cx={x} cy={y} r="8.5" fill={glowColor} opacity="0.2" />
                
                {/* Shadow */}
                <circle cx={x + 0.6} cy={y + 0.6} r="6.5" fill="#1A1614" opacity="0.12" />
                
                {/* Main node */}
                <circle cx={x} cy={y} r="6.5" fill={color} opacity="0.88" />
                
                {/* Gradient layer */}
                <circle cx={x} cy={y} r="4.5" fill="#FFFFFF" opacity="0.2" />
                
                {/* Highlight */}
                <circle cx={x - 0.8} cy={y - 0.8} r="1.5" fill="#FFFFFF" opacity="0.6" />
              </g>
            ))}
          </g>
        );
      })}
      
      {/* Horizontal connecting elements with museum layers */}
      {[54, 90, 126, 162, 198].map((y, i) => (
        <g key={i}>
          {/* Glow line */}
          <line
            x1="42"
            y1={y}
            x2="198"
            y2={y}
            stroke="#C4A582"
            strokeWidth="4"
            opacity="0.1"
          />
          
          {/* Shadow line */}
          <line
            x1="42"
            y1={y + 0.6}
            x2="198"
            y2={y + 0.6}
            stroke="#1A1614"
            strokeWidth="2.5"
            opacity="0.08"
          />
          
          {/* Main line */}
          <line
            x1="42"
            y1={y}
            x2="198"
            y2={y}
            stroke="#1A1614"
            strokeWidth="2.5"
            opacity="0.25"
          />
          
          {/* Center node with layers */}
          {/* Outer glow */}
          <circle cx="120" cy={y} r="13" fill="#D4C8A8" opacity="0.15" />
          
          {/* Shadow */}
          <circle cx="120.8" cy={y + 0.8} r="10" fill="#1A1614" opacity="0.12" />
          
          {/* Main circle */}
          <circle cx="120" cy={y} r="10" fill="#C4A582" opacity="0.88" />
          
          {/* Gradient overlay */}
          <circle cx="120" cy={y} r="7.5" fill="#FFFFFF" opacity="0.15" />
          
          {/* Inner light */}
          <circle cx="120" cy={y} r="5" fill="#E8DCC8" opacity="0.95" />
          
          {/* Highlight */}
          <circle cx="119" cy={y - 1} r="1.2" fill="#FFFFFF" opacity="0.6" />
        </g>
      ))}
      
      {/* Center focal point with exquisite layers */}
      {/* Outer glow halos */}
      <circle cx="120" cy="120" r="35" fill="#A89080" opacity="0.1" />
      <circle cx="120" cy="120" r="32" fill="#A89080" opacity="0.15" />
      
      {/* Shadow base */}
      <circle cx="121.5" cy="121.5" r="27" fill="#1A1614" opacity="0.15" />
      
      {/* Dark ring */}
      <circle cx="120" cy="120" r="27" fill="#1A1614" opacity="0.3" />
      
      {/* Gradient layer */}
      <circle cx="120" cy="120" r="23" fill="#FFFFFF" opacity="0.12" />
      
      {/* Mid layer */}
      <circle cx="120" cy="120" r="19" fill="#A89080" opacity="0.88" />
      
      {/* Shadow ring */}
      <circle cx="120" cy="120" r="15" fill="#1A1614" opacity="0.15" />
      
      {/* Inner light */}
      <circle cx="120" cy="120" r="12" fill="#E8DCC8" opacity="0.95" />
      
      {/* Inner shadow */}
      <circle cx="120" cy="120" r="7" fill="#1A1614" opacity="0.2" />
      
      {/* Core */}
      <circle cx="120" cy="120" r="6" fill="#8B7355" />
      
      {/* Highlight */}
      <circle cx="118.5" cy="118.5" r="2" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}
