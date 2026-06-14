import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import InstagramFeed from "./InstagramFeed";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import ScrollReveal from "./ScrollReveal";

export default function Sections() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <InstagramFeed />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
