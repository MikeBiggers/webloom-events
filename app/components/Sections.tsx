import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import InstagramFeed from "./InstagramFeed";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function Sections() {
  return (
    <>
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
