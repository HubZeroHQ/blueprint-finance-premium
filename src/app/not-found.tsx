import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main id="main-content" className="lifecycle-page" tabIndex={-1}>
      <div>
        <p className="eyebrow">Page not found</p>
        <h1>The path ends here.</h1>
        <p>
          The page may have moved, or the address may be incomplete. Return to
          the firm overview or explore our advisory services.
        </p>
        <div>
          <Link className="button" href="/">
            Return home
          </Link>
          <Link className="text-link" href="/services">
            Explore services
          </Link>
        </div>
      </div>
    </main>
  );
}
