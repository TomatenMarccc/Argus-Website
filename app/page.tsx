import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ScrollSequence from "@/components/ScrollSequence";
import Modules from "@/components/Modules";
import Applications from "@/components/Applications";
import Specs from "@/components/Specs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full">
      <Nav />
      <Hero />
      <ScrollSequence />
      <Modules />
      <Applications />
      <Specs />
      <Contact />
      <Footer />
    </main>
  );
}
