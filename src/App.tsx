import { motion, useScroll, useSpring } from "framer-motion";
import { LangProvider } from "./i18n";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Parcours from "./components/Parcours";
import Prestations from "./components/Prestations";
import Teaching from "./components/Teaching";
import Acting from "./components/Acting";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="relative w-full overflow-x-hidden bg-paper">
      <a
        href="#apropos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-[0.72rem] focus:font-semibold focus:tracking-[0.18em] focus:text-paper focus:uppercase"
      >
        Aller au contenu
      </a>

      {/* Scroll progress — gold foil hairline */}
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[65] h-[2px] origin-left bg-gradient-to-r from-gold-deep via-foil to-gold"
        aria-hidden="true"
      />

      <Nav />

      <main>
        <Hero />
        <About />
        <Parcours />
        <Prestations />
        <Teaching />
        <Acting />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Film grain */}
      <div className="grain" aria-hidden="true" />
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}
