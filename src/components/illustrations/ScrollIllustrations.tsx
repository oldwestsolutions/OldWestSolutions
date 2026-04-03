/** Curated minimal illustrations — luxury / Nordic enterprise aesthetic */

export function ArchitectureFrame({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect x="24" y="32" width="352" height="176" rx="4" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <path d="M24 88h352" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <path d="M24 144h352" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <rect x="48" y="48" width="64" height="32" rx="2" fill="rgba(47,107,255,0.12)" stroke="rgba(47,107,255,0.25)" strokeWidth="1" />
      <rect x="128" y="104" width="96" height="24" rx="2" fill="rgba(255,255,255,0.04)" />
      <rect x="240" y="104" width="112" height="24" rx="2" fill="rgba(255,255,255,0.04)" />
      <circle cx="200" cy="188" r="4" fill="#2F6BFF" opacity="0.9" />
      <path d="M200 188v-48M160 140h80" stroke="rgba(47,107,255,0.35)" strokeWidth="1" />
    </svg>
  );
}

export function LayeredStack({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect x="40" y="120" width="280" height="48" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <rect x="56" y="72" width="248" height="44" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="72" y="28" width="216" height="40" rx="6" fill="rgba(47,107,255,0.08)" stroke="rgba(47,107,255,0.22)" strokeWidth="1" />
      <path d="M88 48h120M88 56h80" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
