import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import InstagramFeed from "./InstagramFeed";
import About from "./About";
import Founders from "./Founders";
import Faq from "./Faq";
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
        <Founders />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
