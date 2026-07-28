import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

type PageProps = HTMLAttributes<HTMLDivElement>;

export function Page({
  id = "main-content",
  className,
  children,
  ...props
}: PageProps) {
  return (
    <main
      id={id}
      tabIndex={-1}
      className={cn(
        "min-h-[100dvh]",
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
}
