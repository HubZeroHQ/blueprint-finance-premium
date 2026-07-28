"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main-content" className="lifecycle-page" tabIndex={-1}>
      <div role="alert">
        <p className="eyebrow">Unable to load</p>
        <h1>Something interrupted the page.</h1>
        <p>
          Your information has not been submitted. Try loading this page again,
          or return to the homepage.
        </p>
        <button className="button" type="button" onClick={reset}>
          Try again
        </button>
      </div>
    </main>
  );
}
