interface LogoProps {
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  onClick,
  size = "md",
}: LogoProps) {
  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-32 w-32",
  };

  const sizeValues = {
    sm: 64,
    md: 96,
    lg: 128,
  };

  const svgSize = sizeValues[size];
  const centerX = 100;
  const centerY = 100;
  const radius = 42;

  const Component = onClick ? "button" : "div";

  return (
    <Component
      {...(onClick && {
        type: "button" as const,
        onClick,
        className:
          "flex items-center transition-opacity hover:opacity-80",
        "aria-label": "Go to gallery",
      })}
      {...(!onClick && {
        className: "flex items-center",
      })}
    >
      <div
        className={sizeClasses[size]}
        style={{ width: svgSize, height: svgSize }}
      >
        <svg
          width={svgSize}
          height={svgSize}
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simple boxed AC logo */}
          <rect
            x="40"
            y="60"
            width="120"
            height="80"
            rx="8"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="3"
          />
          <text
            x="100"
            y="115"
            textAnchor="middle"
            fill="#1a1a1a"
            fontSize="48"
            fontWeight="600"
            fontFamily="Plus Jakarta Sans, sans-serif"
          >
            AC
          </text>
        </svg>
      </div>
    </Component>
  );
}