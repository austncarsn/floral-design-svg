import imgFloralDesignSystem from "figma:asset/f0b38bb8a1cc246248670e58a27ac1ad46eb92a0.png";

export default function Frame() {
  return (
    <div 
      className="text-center" 
      style={{ 
        fontFamily: 'Windsor, serif',
        color: '#2A2A2A',
        lineHeight: 1.35
      }}
    >
      <div 
        style={{ 
          fontWeight: 100,
          fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
          letterSpacing: '0.03em',
          marginBottom: 'clamp(0.25rem, 1vw, 0.5rem)'
        }}
      >
        floral design
      </div>
      <div 
        style={{ 
          fontWeight: 100,
          fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
          letterSpacing: '0.12em',
          opacity: 0.85
        }}
      >
        system
      </div>
    </div>
  );
}