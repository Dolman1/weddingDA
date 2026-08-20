export function Flourish({ className = "" }) {
  return (
    <svg
      viewBox="0 0 280 28"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 14h86"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M108 14c10-12 22-12 32 0 10 12 22 12 32 0"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <circle cx="140" cy="14" r="2.4" fill="currentColor" />
      <path
        d="M186 14h86"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
