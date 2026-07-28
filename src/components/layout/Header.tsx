"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Wordmark } from "@/components/brand/Wordmark";
import { navigation } from "@/config/navigation";
import { isActivePath } from "@/utils/navigation";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
        }
      }}
    >
      <div className="site-header-inner">
        <Wordmark />
        <nav className="desktop-navigation" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={
                isActivePath(pathname, item.href) ? "page" : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button-compact header-cta" href="/contact">
          Start a conversation
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span />
          <span />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label="Mobile navigation"
        data-open={open}
      >
        <div>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={
                isActivePath(pathname, item.href) ? "page" : undefined
              }
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="button"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Start a conversation
          </Link>
        </div>
      </nav>
    </header>
  );
}
