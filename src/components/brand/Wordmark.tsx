import Link from "next/link";

import { BrandMark } from "@/components/brand/BrandMark";
import { cn } from "@/utils/cn";

interface WordmarkProps {
  className?: string;
  inverted?: boolean;
}

export function Wordmark({ className, inverted = false }: WordmarkProps) {
  return (
    <Link
      href="/"
      aria-label="Aurevia Capital home"
      className={cn("wordmark", inverted && "wordmark-inverted", className)}
    >
      <BrandMark inverted={inverted} />
      <span>Aurevia Capital</span>
    </Link>
  );
}
