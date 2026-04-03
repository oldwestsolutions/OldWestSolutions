import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Solutions from "@/sections/Solutions";
import Products from "@/sections/Products";
import Infrastructure from "@/sections/Infrastructure";
import About from "@/sections/About";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <Products />
        <Infrastructure />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
