import Image from "next/image";

// Source mark is 755x482px
const ASPECT = 755 / 482;

/**
 * Repair Automotive logo mark (transparent PNG, no background box).
 * Reused in the header and footer.
 *
 * variant "dark" (default) = black R / red A, for light backgrounds
 * variant "light" = white R / red A, for dark backgrounds (e.g. the footer)
 */
export default function Logo({
  height = 40,
  className = "",
  variant = "dark",
}: {
  height?: number;
  className?: string;
  variant?: "dark" | "light";
}) {
  const width = Math.round(height * ASPECT);
  return (
    <Image
      src={variant === "light" ? "/logo-mark-light.png" : "/logo-mark.png"}
      alt="Repair Automotive logo"
      width={width}
      height={height}
      priority
      className={`flex-none object-contain ${className}`}
    />
  );
}
