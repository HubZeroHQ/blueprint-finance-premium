import { cn } from "@/utils/cn";

interface BrandMarkProps {
  className?: string;
  inverted?: boolean;
}

export function BrandMark({ className, inverted = false }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("brand-mark", inverted && "brand-mark-inverted", className)}
    >
      <span />
      <span />
    </span>
  );
}
