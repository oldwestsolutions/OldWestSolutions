import Link from "next/link";

export default function PortalPage() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center bg-[#080809] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1.5rem,env(safe-area-inset-top))] text-center"
    >
      <h1 className="text-2xl font-semibold tracking-tight text-white">Portal</h1>
      <p className="mt-3 max-w-md text-sm text-white/55">
        Client and operator access will live here. Replace this page with your sign-in
        or dashboard when ready.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-sm font-medium text-accent touch-manipulation hover:text-accent/90"
      >
        ← Back to home
      </Link>
    </main>
  );
}
