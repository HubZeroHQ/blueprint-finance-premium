import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function ArrowLink({ href, children, className }: ArrowLinkProps) {
  return (
    <Link href={href} className={cn("arrow-link", className)}>
      <span>{children}</span>
      <span aria-hidden="true" className="arrow-link-icon">
        →
      </span>
    </Link>
  );
}
