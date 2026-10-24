import { about, profile, sections } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="shell scroll-mt-24 py-20 md:py-28 lg:py-32"
    >
      <SectionHeader id="about-title" {...sections.about} />

      <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <Reveal>
            <blockquote className="border-l border-accent pl-5 font-display text-2xl italic leading-[1.35] md:text-[1.75rem]">
              &ldquo;{about.quote}&rdquo;
            </blockquote>
            <dl className="mt-10 border-t border-line">
              <div className="flex items-baseline justify-between gap-4 border-b border-line py-3.5">
                <dt className="mono-label">Based in</dt>
                <dd className="text-sm text-ink-muted">{profile.location}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="mono-label">Studying</dt>
                <dd className="text-right text-sm text-ink-muted">
                  {profile.role}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <Reveal>
            <p className="max-w-2xl font-display text-[1.65rem] leading-[1.3] text-ink md:text-[1.9rem]">
              {about.intro}
            </p>
          </Reveal>
          <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-ink-muted">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.05 + index * 0.05}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <ol className="mt-16 border-t border-line md:mt-20">
        {about.principles.map((principle, index) => (
          <Reveal
            as="li"
            key={principle.title}
            delay={index * 0.05}
            className="grid gap-2 border-b border-line py-6 sm:grid-cols-12 sm:gap-6"
          >
            <span className="mono-label sm:col-span-1">0{index + 1}</span>
            <h3 className="text-[0.95rem] font-medium sm:col-span-4">
              {principle.title}
            </h3>
            <p className="text-[13px] leading-relaxed text-ink-muted sm:col-span-6 sm:col-start-7">
              {principle.body}
            </p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
