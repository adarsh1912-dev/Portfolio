import { ArrowDown } from "lucide-react";
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

      <Reveal className="mt-10 border-t border-line">
        <div className="border-b border-line">
          {projects.map((project) => (
            <a
              key={project.id}
              href={`#project-${project.id}`}
              className="group relative flex items-baseline justify-between gap-6 border-b border-line py-4 transition-colors duration-200 last:border-b-0 hover:bg-surface/60 sm:px-3"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100"
              />
              <span className="flex min-w-0 items-baseline gap-4 sm:gap-6">
                <span className="w-5 shrink-0 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">
                  {project.index}
                </span>
                <span className="font-display text-[clamp(1.5rem,2.7vw,2.25rem)] leading-none tracking-[-0.025em] text-ink">
                  {project.title}
                </span>
                <span className="hidden shrink-0 text-[12px] text-ink-muted md:block">
                  {project.kind}
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-4">
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint lg:block">
                  {project.stack.slice(0, 3).join(" · ")}
                </span>
                <ArrowDown
                  aria-hidden="true"
                  className="size-4 text-ink-faint transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-ink"
                  strokeWidth={1.5}
                />
              </span>
            </a>
          ))}
        </div>
      </Reveal>

      <p className="mt-4 max-w-2xl text-[12px] leading-relaxed text-ink-muted">
        {projectNote}
      </p>

      <div className="mt-20 space-y-20 md:mt-28 md:space-y-28">
        {projects.map((project) => (
          <Reveal key={project.id}>
            <ProjectShowcase project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
