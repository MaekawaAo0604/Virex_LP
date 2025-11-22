import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Prototypes from "./components/Prototypes";
import WhyPoC from "./components/WhyPoC";
import Collaboration from "./components/Collaboration";
import Stance from "./components/Stance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Prototypes />
      <WhyPoC />
      <Collaboration />
      <Stance />
      <Contact />
      <Footer />
    </main>
  );
}
