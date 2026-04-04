import ImmersiveSiteShell from "@/components/ImmersiveSiteShell";
import ShopCatalog, { type ShopProduct } from "./ShopCatalog";

const products: ShopProduct[] = [
  {
    name: "Pro Mesh Wi‑Fi 6E System",
    price: 329,
    tag: "Best seller",
    cat: "Mesh Wi‑Fi",
    desc: "Whole-home coverage with app setup and OWS provisioning profile.",
  },
  {
    name: "Enterprise Gateway Router",
    price: 449,
    tag: "Pro install",
    cat: "Networking",
    desc: "Dual-WAN, VLANs, and remote handoff to our NOC templates.",
  },
  {
    name: "DOCSIS 3.1 Cable Modem",
    price: 189,
    tag: "",
    cat: "Networking",
    desc: "Certified for major cable ISPs; plug-and-play with our activation.",
  },
  {
    name: "Outdoor LTE Failover",
    price: 599,
    tag: "New",
    cat: "Networking",
    desc: "Automatic failover when primary circuit drops — static IP options.",
  },
  {
    name: "Secure DNS & Filter Appliance",
    price: 279,
    tag: "Security",
    cat: "Security",
    desc: "Family or office policy packs with audit logs for compliance teams.",
  },
  {
    name: "4K Streaming Adapter Kit",
    price: 79,
    tag: "",
    cat: "Business",
    desc: "Lobby and waiting-room kits with managed content playlists.",
  },
  {
    name: "PoE+ Switch 24-port",
    price: 419,
    tag: "Fanless",
    cat: "Networking",
    desc: "Silent fanless option for offices; we label ports to your floor plan.",
  },
  {
    name: "Battery backup UPS 1500VA",
    price: 259,
    tag: "",
    cat: "Networking",
    desc: "Clean shutdown scripts for gateways and ONTs during outages.",
  },
  {
    name: "Managed Wi‑Fi 6 Access Point",
    price: 149,
    tag: "Popular",
    cat: "Networking",
    desc: "Ceiling or wall mount; adopts your OWS RF profile and reports into our dashboard.",
  },
];

export default function ShopPage() {
  return (
    <ImmersiveSiteShell>
      <ShopCatalog products={products} />
    </ImmersiveSiteShell>
  );
}
