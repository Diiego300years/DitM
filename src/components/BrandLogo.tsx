import Image from "next/image";

type BrandLogoProps = {
  variant?: "dark" | "light";
  compact?: boolean;
  width?: number;
  className?: string;
};

export function BrandLogo({
  variant = "dark",
  compact = false,
  width = compact ? 44 : 156,
  className,
}: BrandLogoProps) {
  const src = compact
    ? "/brand/ditm-mark.svg"
    : variant === "light"
      ? "/brand/ditm-logo-light.svg"
      : "/brand/ditm-logo.svg";

  return (
    <Image
      src={src}
      alt="DitM"
      width={width}
      height={compact ? width : Math.round(width * 0.356)}
      priority
      className={className}
    />
  );
}
