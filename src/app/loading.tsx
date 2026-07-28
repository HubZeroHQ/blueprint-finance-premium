export default function Loading() {
  return (
    <main
      id="main-content"
      className="loading-page"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div>
        <span />
        <span />
        <span />
      </div>
      <p className="sr-only">Loading page</p>
    </main>
  );
}
