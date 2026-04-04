import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  children: ReactNode;
};

/** Same outer chrome as the homepage — full-width main for immersive sections. */
export default function ImmersiveSiteShell({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#080809] px-2.5 pb-2.5 pt-2.5 sm:px-4 sm:pb-4 sm:pt-4 md:px-5 md:pb-5 md:pt-5">
      <div className="relative mx-auto max-w-[1400px] overflow-x-clip rounded-[1.75rem] border border-white/[0.07] bg-[#111113] shadow-shell sm:rounded-[2rem]">
        <Navbar />
        <main id="main-content" className="bg-[#111113]">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
