import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Packages from "./Packages";
import InstagramFeed from "./InstagramFeed";
import About from "./About";
import Founders from "./Founders";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import ScrollReveal from "./ScrollReveal";
import Bees from "./Bees";

export default function Sections() {
  return (
    <>
      <ScrollReveal />
      <Bees />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Packages />
        <InstagramFeed />
        <About />
        <Founders />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
