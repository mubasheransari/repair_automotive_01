import Image from "next/image";

// Source mark is 755x482px
const ASPECT = 755 / 482;

/**
 * Repair Automotive logo mark (transparent PNG, no background box).
 * Reused in the header and footer.
 */
export default function Logo({
  height = 40,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  const width = Math.round(height * ASPECT);
  return (
    <Image
      src="/logo-mark.png"
      alt="Repair Automotive logo"
      width={width}
      height={height}
      priority
      className={`flex-none object-contain ${className}`}
    />
  );
}
