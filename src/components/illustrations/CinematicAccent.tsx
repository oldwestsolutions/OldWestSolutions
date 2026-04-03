/** Minimal line illustration — optional decoration under cinematic section */

export default function CinematicAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M0 24h120" stroke="rgba(47,107,255,0.35)" strokeWidth="1" />
      <circle cx="180" cy="24" r="3" fill="rgba(47,107,255,0.5)" />
      <path d="M240 24h120" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
    </svg>
  );
}
