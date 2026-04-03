import Link from "next/link";

export default function PortalPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#080809] px-6 text-center">
      <h1 className="text-2xl font-semibold tracking-tight text-white">Portal</h1>
      <p className="mt-3 max-w-md text-sm text-white/55">
        Client and operator access will live here. Replace this page with your sign-in
        or dashboard when ready.
      </p>
      <Link
        href="/"
        className="mt-8 text-sm font-medium text-accent hover:text-accent/90"
      >
        ← Back to home
      </Link>
    </div>
  );
}
