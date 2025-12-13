export default function NovemberOne() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sophisticated ceramic pot with depth */}
      <rect x="135" y="275" width="130" height="110" fill="#5A8A8A" rx="4"/>
      <rect x="140" y="280" width="120" height="100" fill="#6B8A9B" stroke="#5A8A8A" strokeWidth="3"/>
      <rect x="145" y="285" width="110" height="22" fill="#8AA6B5" opacity="0.6"/>
      
      {/* Decorative pot band */}
      <rect x="140" y="350" width="120" height="8" fill="#5A8A8A" opacity="0.8"/>
      
      {/* Geometric leaves - layered with golden ratio sizing */}
      <g opacity="0.95">
        {/* Back leaf */}
        <rect x="155" y="195" width="45" height="85" fill="#8A9B7A" stroke="#7A9B8E" strokeWidth="2.5" rx="2"/>
        <rect x="160" y="200" width="35" height="20" fill="#9DB5A0" opacity="0.5"/>
      </g>
      
      <g opacity="1">
        {/* Middle leaf */}
        <rect x="200" y="185" width="42" height="95" fill="#7A9B8E" stroke="#8A9B7A" strokeWidth="2.5" rx="2"/>
        <rect x="205" y="190" width="32" height="22" fill="#9DB5A0" opacity="0.5"/>
      </g>
      
      <g opacity="0.95">
        {/* Front leaf */}
        <rect x="180" y="175" width="40" height="105" fill="#9DB5A0" stroke="#7A9B8E" strokeWidth="2.5" rx="2"/>
        <rect x="185" y="180" width="30" height="24" fill="#E8DCC8" opacity="0.4"/>
      </g>
      
      {/* Geometric stems with subtle curves */}
      <rect x="195" y="240" width="10" height="40" fill="#5A8A8A" rx="1"/>
      <rect x="175" y="250" width="10" height="30" fill="#6B8A9B" rx="1"/>
      <rect x="215" y="245" width="10" height="35" fill="#8AA6B5" rx="1"/>
      
      {/* Groovy geometric flowers - retro perfection */}
      <g>
        {/* Flower 1 - Mustard bloom */}
        <rect x="167" y="145" width="36" height="36" fill="#D4A855" stroke="#C9A15C" strokeWidth="2.5" rx="2"/>
        <rect x="173" y="151" width="24" height="24" fill="#C9A15C" opacity="0.6"/>
        <circle cx="185" cy="163" r="7" fill="#E8DCC8"/>
        <circle cx="185" cy="163" r="3" fill="#D4A855"/>
      </g>
      
      <g>
        {/* Flower 2 - Mauve blossom */}
        <rect x="207" y="132" width="40" height="40" fill="#C4ADB8" stroke="#B5A0B8" strokeWidth="2.5" rx="2"/>
        <rect x="213" y="138" width="28" height="28" fill="#B5A0B8" opacity="0.6"/>
        <circle cx="227" cy="152" r="8" fill="#E8DCC8"/>
        <circle cx="227" cy="152" r="4" fill="#C4ADB8"/>
      </g>
    </svg>
  );
}