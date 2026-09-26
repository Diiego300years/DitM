import Image from "next/image";

type BrandLogoProps = {
  variant?: "dark" | "light";
  compact?: boolean;
  width?: number;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  variant = "dark",
  compact = false,
  width = compact ? 44 : 160,
  className,
  priority = false,
}: BrandLogoProps) {
  const src = compact
    ? "/brand/ditm-mark.svg?v=2"
    : variant === "light"
      ? "/brand/ditm-logo-light.svg?v=2"
      : "/brand/ditm-logo.svg?v=2";
  return (
    <Image
      src={src}
      alt="DitM"
      width={width}
      height={compact ? width : Math.round((width * 190) / 490)}
      priority={priority}
      className={className}
    />
  );
}
