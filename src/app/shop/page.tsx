import MarketingPageShell from "@/components/MarketingPageShell";

export default function ShopPage() {
  return (
    <MarketingPageShell eyebrow="Resources" title="Shop">
      <p>
        Order routers, modems, mesh systems, and other network hardware through
        Old West Solutions — matched to your plan, square footage, and security
        needs. We can bundle gear with installation so everything arrives
        configured for your account.
      </p>
      <p>
        For custom quotes, business bundles, or items not listed in a future
        catalog, use{" "}
        <a href="/contact" className="text-accent underline-offset-2 hover:underline">
          Contact
        </a>{" "}
        or call{" "}
        <a href="tel:+19453824660" className="text-accent underline-offset-2 hover:underline">
          (945) 382-4660
        </a>
        . A live checkout can replace this page when you are ready to connect a
        store.
      </p>
    </MarketingPageShell>
  );
}
