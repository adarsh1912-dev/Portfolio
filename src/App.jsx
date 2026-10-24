import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import Skills from "./components/Skills.jsx";

export default function App() {
  return (
    <div className="page-frame grain relative min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-accent focus:px-4 focus:py-3 focus:font-mono focus:text-[11px] focus:uppercase focus:tracking-[0.16em] focus:text-accent-ink"
      >
        Skip to content
      </a>

      <div className="relative z-10">
        <SiteHeader />
        <main id="main" className="scroll-mt-24">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
