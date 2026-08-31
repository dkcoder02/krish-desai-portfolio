import Image from "next/image";

type AvatarProps = {
  /**
   * Rendered size in CSS pixels. The source is 640px, so it stays sharp at 2x.
   * No `sizes` prop on purpose: with a fixed width/height, next/image emits a
   * small 1x/2x srcSet. Passing `sizes` would switch it to responsive mode and
   * generate the whole ladder up to 3840px for an 84px avatar.
   */
  size?: number;
  /** Set on the above-the-fold instance so it is not lazy-loaded. */
  priority?: boolean;
  /**
   * Empty alt marks the image as decorative. Correct when the name is already
   * announced right next to it, so a screen reader does not say it twice.
   */
  alt?: string;
  className?: string;
};

export function Avatar({ size = 80, priority = false, alt = "", className = "" }: AvatarProps) {
  return (
    <Image
      src="/krish-desai.jpg"
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      quality={90}
      className={`rounded-full border border-border object-cover ${className}`.trim()}
      style={{ width: size, height: size }}
    />
  );
}
