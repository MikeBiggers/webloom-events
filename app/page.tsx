import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import InstagramFeed from "./components/InstagramFeed";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
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
    </>
  );
}
