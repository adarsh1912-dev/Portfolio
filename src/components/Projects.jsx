import { projects, projectNote, sections } from "../data/content.js";
import ProjectShowcase from "./ProjectShowcase.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="shell scroll-mt-24 py-20 md:py-28 lg:py-32"
    >
      <SectionHeader id="work-title" {...sections.work} />

      <p className="mt-6 max-w-2xl border-l-2 border-accent/70 pl-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-ink-muted">
        {projectNote}
      </p>

      <div className="mt-14 space-y-24 md:mt-20 md:space-y-32 lg:space-y-40">
        {projects.map((project) => (
          <Reveal key={project.id}>
            <ProjectShowcase project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
