// Import can be removed if you no longer use FloralThirtyTwo elsewhere
// import FloralThirtyTwo from "./floral-design-system/FloralThirtyTwo";

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

  // Pastel floral palette tuned to the nav pink and warm paper background
  const colors = [
    "#FDE6F0", // nav pastel pink
    "#F8CFDC", // blush rose
    "#F5B4C9", // soft rose
    "#F3DDC7", // warm sand
    "#F6E8D9", // champagne
    "#E3D8F4", // soft lavender
    "#D5C2EB", // lilac
    "#D4E5E9", // mist blue gray
    "#CDDDCF", // sage gray
    "#B89684", // soft cocoa anchor
  ];

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
          {/* 10 petals in pastel ring */}
          {Array.from({ length: 10 }, (_, i) => i * 36).map(
            (angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const cx = centerX + Math.cos(rad) * radius;
              const cy = centerY + Math.sin(rad) * radius;
              return (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="22"
                  fill={colors[i]}
                />
              );
            },
          )}

          {/* Center: matches paper and primary text tokens */}
          <circle cx="100" cy="100" r="26" fill="#F6E8D9" />
          <circle cx="100" cy="100" r="14" fill="#1A1817" />
        </svg>
      </div>
    </Component>
  );
}